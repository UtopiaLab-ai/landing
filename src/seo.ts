import { BOOKING_URL, CONTACT_EMAIL, SITE_DOMAIN, SITE_URL } from './config'
import { CONTENT, LOCALES } from './i18n'
import type { Locale } from './i18n'
import { ALL_ROUTES, PAGE_KEYS, pathFor } from './routes'
import type { PageKey } from './routes'

/**
 * Lo que leen buscadores y LLM antes de ejecutar JavaScript: el `<head>` de
 * cada página, el JSON-LD, el sitemap, robots.txt y llms.txt.
 *
 * Todo sale del mismo contenido de `i18n/` que dibuja la página, así que no
 * puede desincronizarse: si cambia un título o una ficha, cambia también lo que
 * leen los bots en el próximo build. Lo usa `scripts/prerender.mjs`; el
 * navegador no carga este módulo.
 */

const OG_LOCALE: Record<Locale, string> = { es: 'es_CL', en: 'en_US' }
const ORG_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`

/** El nombre visible es el dominio; así lo escriben también terceros y documentos. */
const ALTERNATE_NAMES = ['UtopiaLab', 'Utopia Lab']

/** Temas que el equipo acredita en /equipo. No se agregan temas sin respaldo. */
const KNOWS_ABOUT: Record<Locale, string[]> = {
  es: [
    'Inteligencia anticipatoria',
    'Prospectiva estratégica',
    'Análisis de escenarios',
    'Vigilancia de señales',
    'Planificación urbana y territorial',
    'Políticas públicas',
    'Movilidad y transporte',
    'Gobernanza humano–IA',
  ],
  en: [
    'Anticipatory intelligence',
    'Strategic foresight',
    'Scenario analysis',
    'Signal monitoring',
    'Urban and territorial planning',
    'Public policy',
    'Mobility and transport',
    'Human–AI governance',
  ],
}

const abs = (path: string) => SITE_URL + path

function attr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function slug(name: string): string {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/** Cada integrante como `Person`, con el mismo `@id` en todas las páginas. */
function people(locale: Locale, withDescription: boolean) {
  return CONTENT[locale].team.members.map((m) => ({
    '@type': 'Person',
    '@id': `${SITE_URL}/#${slug(m.name)}`,
    name: m.name,
    jobTitle: m.role,
    ...(withDescription ? { description: m.text } : {}),
    worksFor: { '@id': ORG_ID },
    ...(m.profile ? { sameAs: [m.profile] } : {}),
  }))
}

function organization(locale: Locale, page: PageKey) {
  const t = CONTENT[locale]
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORG_ID,
    name: SITE_DOMAIN,
    alternateName: ALTERNATE_NAMES,
    url: SITE_URL,
    logo: abs('/apple-touch-icon.png'),
    image: abs('/og.png'),
    description: t.common.about,
    email: CONTACT_EMAIL,
    address: { '@type': 'PostalAddress', addressLocality: 'Santiago', addressCountry: 'CL' },
    areaServed: locale === 'es' ? ['Chile', 'América Latina'] : ['Chile', 'Latin America'],
    knowsAbout: KNOWS_ABOUT[locale],
    contactPoint: {
      '@type': 'ContactPoint',
      email: CONTACT_EMAIL,
      url: BOOKING_URL,
      contactType: locale === 'es' ? 'Agendar una hora de diagnóstico' : 'Book a diagnostic hour',
      availableLanguage: ['es', 'en'],
    },
    member: t.team.members.map((m) => ({ '@id': `${SITE_URL}/#${slug(m.name)}` })),
    // El catálogo solo en /productos: es la página que lo publica completo.
    ...(page === 'products'
      ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: t.products.kicker,
            itemListElement: t.products.speeds.map((speed) => ({
              '@type': 'OfferCatalog',
              name: speed.name,
              itemListElement: speed.products.map((p) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: p.name,
                  description: p.def,
                  provider: { '@id': ORG_ID },
                },
              })),
            })),
          },
        }
      : {}),
  }
}

function jsonLd(locale: Locale, page: PageKey, lastmod: string) {
  const t = CONTENT[locale]
  const url = abs(pathFor(locale, page))
  const home = abs(pathFor(locale, 'home'))

  const crumbs = [{ name: t.common.nav.home, item: home }]
  if (page !== 'home') crumbs.push({ name: t.common.nav[page], item: url })

  const graph: object[] = [
    organization(locale, page),
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: SITE_URL,
      name: SITE_DOMAIN,
      inLanguage: [...LOCALES],
      publisher: { '@id': ORG_ID },
    },
    {
      '@type': page === 'team' ? ['WebPage', 'AboutPage'] : 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: t[page].meta.title,
      description: t[page].meta.description,
      inLanguage: locale,
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': ORG_ID },
      dateModified: lastmod,
      breadcrumb: { '@id': `${url}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.item,
      })),
    },
    ...people(locale, page === 'team'),
  ]

  if (page === 'products') {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      isPartOf: { '@id': `${url}#webpage` },
      inLanguage: locale,
      mainEntity: t.products.faq.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

/** `<script>` de JSON-LD: `<` escapado para que ningún texto cierre la etiqueta. */
function ldScript(data: object): string {
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`
}

/**
 * El `<head>` de una página: título, descripción, canonical, hreflang, Open
 * Graph y Twitter con URL absolutas, y el JSON-LD.
 */
export function headTags(locale: Locale, page: PageKey, lastmod: string): string {
  const meta = CONTENT[locale][page].meta
  const url = abs(pathFor(locale, page))
  const image = abs('/og.png')

  return [
    `<title>${attr(meta.title)}</title>`,
    `<meta name="description" content="${attr(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    ...LOCALES.map((code) => `<link rel="alternate" hreflang="${code}" href="${abs(pathFor(code, page))}" />`),
    `<link rel="alternate" hreflang="x-default" href="${abs(pathFor('es', page))}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_DOMAIN}" />`,
    `<meta property="og:title" content="${attr(meta.title)}" />`,
    `<meta property="og:description" content="${attr(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:locale" content="${OG_LOCALE[locale]}" />`,
    ...LOCALES.filter((code) => code !== locale).map(
      (code) => `<meta property="og:locale:alternate" content="${OG_LOCALE[code]}" />`,
    ),
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${attr(meta.title)}" />`,
    `<meta name="twitter:description" content="${attr(meta.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    ldScript(jsonLd(locale, page, lastmod)),
  ].join('\n  ')
}

/** El `<head>` del 404: sin canonical ni JSON-LD, y fuera del índice. */
export function notFoundHead(): string {
  const title = `${CONTENT.es.common.notFound.title} · ${SITE_DOMAIN}`
  return [`<title>${attr(title)}</title>`, `<meta name="robots" content="noindex" />`].join('\n  ')
}

/** Sitemap con las alternativas de idioma de cada URL declaradas. */
export function sitemapXml(lastmod: string): string {
  const urls = ALL_ROUTES.map(({ page, path }) => {
    const alternates = [
      ...LOCALES.map(
        (code) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${abs(pathFor(code, page))}" />`,
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(pathFor('es', page))}" />`,
    ].join('\n')
    return `  <url>\n    <loc>${abs(path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n  </url>`
  })
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n')
}

/**
 * robots.txt. Hoy no se bloquea ningún bot, que es lo mismo que pasaba sin el
 * archivo. La política para bots de entrenamiento de IA (GPTBot, ClaudeBot,
 * Google-Extended, CCBot) está pendiente de decisión; los de búsqueda tienen
 * que seguir permitidos para que el sitio aparezca en respuestas generativas.
 */
export function robotsTxt(): string {
  return ['User-agent: *', 'Allow: /', '', `Sitemap: ${abs('/sitemap.xml')}`, ''].join('\n')
}

/**
 * llms.txt: índice en markdown para LLM, según la convención propuesta en
 * llmstxt.org. Una línea por página en cada idioma y el enlace al texto
 * completo, que genera el prerender a partir del HTML ya renderizado.
 */
export function llmsTxt(): string {
  const lines = [`# ${SITE_DOMAIN}`, '', `> ${CONTENT.es.common.about}`, '', CONTENT.en.common.about, '']
  for (const locale of LOCALES) {
    const t = CONTENT[locale]
    lines.push(locale === 'es' ? '## Páginas en español' : '## Pages in English', '')
    for (const page of PAGE_KEYS) {
      lines.push(`- [${t[page].meta.title}](${abs(pathFor(locale, page))}): ${t[page].meta.description}`)
    }
    lines.push('')
  }
  lines.push(
    '## Contacto / Contact',
    '',
    `- Correo / Email: ${CONTACT_EMAIL}`,
    `- Agendar una hora de diagnóstico / Book a diagnostic hour: ${BOOKING_URL}`,
    '- Ubicación / Location: Santiago de Chile',
    '',
    '## Optional',
    '',
    `- [Texto completo del sitio / Full site text](${abs('/llms-full.txt')})`,
    '',
  )
  return lines.join('\n')
}
