/**
 * Prerender: convierte la SPA en HTML real por URL.
 *
 * Sin esto cada dirección del sitio devolvía el mismo `index.html` con un
 * `<div id="root">` vacío, y los bots que no ejecutan JavaScript —la mayoría de
 * los de IA— no leían nada. Corre después de `vite build` y
 * `vite build --ssr`, y escribe en `dist/`:
 *
 * - `<ruta>/index.html` para cada página e idioma, con el contenido renderizado
 *   y su `<head>` propio (título, canonical, hreflang, Open Graph, JSON-LD).
 * - `404.html`, que el servidor entrega con estado 404.
 * - `sitemap.xml`, `robots.txt`, `llms.txt` y `llms-full.txt`.
 *
 * Al final comprueba que `vercel.json` tenga una regla para cada ruta: una
 * página nueva sin su regla respondería 404 en producción, y es mejor que el
 * build falle a enterarse por un enlace roto.
 */
import { execSync } from 'node:child_process'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = join(root, 'dist')
const server = await import(new URL('../dist-ssr/entry-server.js', import.meta.url).href)

/** Fecha del último cambio de contenido; si no hay git, la del build. */
function lastModified() {
  try {
    const iso = execSync('git log -1 --format=%cI -- src public index.html', {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
    if (iso) return iso.slice(0, 10)
  } catch {
    // Sin historial disponible: se usa la fecha del build.
  }
  return new Date().toISOString().slice(0, 10)
}

const template = await readFile(join(dist, 'index.html'), 'utf8')
if (!template.includes('<!--app-head-->') || !template.includes('<div id="root"></div>')) {
  throw new Error('index.html no tiene los marcadores <!--app-head--> y <div id="root"></div>')
}

/** El template sin los meta genéricos: cada página escribe los suyos. */
const base = template
  .replace(/<title>[\s\S]*?<\/title>\s*/, '')
  .replace(/<meta name="description"[^>]*>\s*/, '')
  .replace(/<meta (?:property|name)="(?:og|twitter):[^"]*"[^>]*>\s*/g, '')

function page({ lang, head, html }) {
  return base
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace('<!--app-head-->', head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
}

async function write(relative, content) {
  const file = join(dist, relative)
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, content)
}

/**
 * Texto legible de una página renderizada, para `llms-full.txt`: títulos como
 * encabezados markdown, listas como viñetas, sin cabecera, pie ni SVG.
 */
function toText(html) {
  const start = html.indexOf('</header>')
  const end = html.lastIndexOf('<footer')
  let s = html.slice(start === -1 ? 0 : start + 9, end === -1 ? html.length : end)
  s = s
    .replace(/<svg[\s\S]*?<\/svg>/g, '')
    .replace(/<img[^>]*>/g, '')
    .replace(/<h1[^>]*>/g, '\n\n# ')
    .replace(/<h2[^>]*>/g, '\n\n## ')
    .replace(/<h3[^>]*>/g, '\n\n### ')
    .replace(/<li[^>]*>/g, '\n- ')
    .replace(/<dt[^>]*>/g, '\n- ')
    .replace(/<\/dt>/g, ': ')
    // Los rótulos de sección son dos `span` seguidos («Las fichas» y «01 — 10»):
    // sin separador quedarían pegados en el texto plano.
    .replace(/<\/span>/g, ' ')
    .replace(/<(?:p|div|section|ol|ul|dl|figure|figcaption|br)[^>]*>/g, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
  return s
    .split('\n')
    .map((line) => line.replace(/[ \t]+/g, ' ').trim())
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

const lastmod = lastModified()
const fullText = []

for (const { locale, page: key, path } of server.ALL_ROUTES) {
  const html = server.render(path)
  await write(join(path, 'index.html'), page({ lang: locale, head: server.headTags(locale, key, lastmod), html }))
  fullText.push(`\n\n---\n\nURL: ${server.SITE_URL}${path}\n\n${toText(html)}`)
}

await write('404.html', page({ lang: 'es', head: server.notFoundHead(), html: server.render('/404') }))
await write('sitemap.xml', server.sitemapXml(lastmod))
await write('robots.txt', server.robotsTxt())
await write('llms.txt', server.llmsTxt())
await write(
  'llms-full.txt',
  `# utopialab.ai — texto completo / full text\n\nActualizado / Updated: ${lastmod}${fullText.join('')}\n`,
)

const vercel = JSON.parse(await readFile(join(root, 'vercel.json'), 'utf8'))
const rewritten = new Set((vercel.rewrites ?? []).map((rule) => rule.source))
const missing = server.ALL_ROUTES.map((r) => r.path).filter((path) => !rewritten.has(path))
if (missing.length) {
  throw new Error(`vercel.json no tiene rewrite para: ${missing.join(', ')}`)
}

console.log(`prerender: ${server.ALL_ROUTES.length} páginas + 404, sitemap, robots, llms · ${lastmod}`)
