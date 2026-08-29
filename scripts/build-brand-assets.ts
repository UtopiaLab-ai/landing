/* ==========================================================================
   Generador del kit de marca.

       npm run brand

   Lee la geometría de `src/brand/glyphs.ts` —la misma que dibuja el sitio— y
   escribe `brand/` con lo que pide cada oficio: SVG para quien diseña o borda,
   PNG grande para print-on-demand, PDF vectorial para serigrafía y grabado.
   También los iconos de `public/`.

   Todo lo que hay en `brand/` y los iconos de `public/` son artefactos: se
   borran y se regeneran. La única fuente es `src/brand/glyphs.ts`.

   Requiere Python con cairosvg (`pip install cairosvg`) para PNG y PDF. Sin él
   los SVG se generan igual y el resto se anuncia como omitido.
   ========================================================================== */

import { execFileSync } from 'node:child_process'
import { mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import {
  BOX,
  CLEARANCE,
  ENGRAVING_MIN_STROKE,
  FIELD,
  GLYPHS,
  GLYPH_NAMES,
  PALETTE,
  VIEW_BOX,
  glyphBody,
  strokeFor,
  type ColorName,
  type GlyphName,
} from '../src/brand/glyphs.ts'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const BRAND_DIR = join(ROOT, 'brand')
const PUBLIC_DIR = join(ROOT, 'public')

/** Nombre de la marca en el lockup. Espejo de BRAND en src/config.ts. */
const BRAND_NAME = 'Utopía Lab'

/** Tracking del wordmark, en em. El manual cierra el kerning del nombre. */
const WORDMARK_TRACKING = -0.028

/** Alto tipográfico del nombre en la unidad del campo, dentro del lockup. */
const WORDMARK_SIZE = 13

/** Los tres colores en que se entrega cada glifo. */
const EXPORT_COLORS = ['tinta', 'papel', 'naranja'] as const satisfies readonly ColorName[]

const PNG_SIZES = [256, 512, 1024, 2048] as const

/* --- Composición de SVG --------------------------------------------------- */

/** Un SVG con su proporción, para que el rasterizado no lo deforme. */
interface Art {
  svg: string
  w: number
  h: number
}

/**
 * El nombre de la marca ya dibujado, con la baseline en y = 0.
 *
 * `top` y `bottom` son las cotas reales de tinta —el acento de la í y el
 * descendente de la p—, no las métricas nominales: son las que evitan que el
 * lockup vertical corte la palabra.
 */
interface Wordmark {
  d: string
  width: number
  capHeight: number
  top: number
  bottom: number
}

/**
 * El wordmark convertido a curvas por `wordmark-path.py`.
 *
 * Se dibuja en vez de dejarlo como texto vivo porque un kit de marca no puede
 * suponer que la imprenta tenga Helvetica —que además es propietaria y no se
 * puede empaquetar—. Una sola llamada: el resultado sirve para los seis lockups.
 */
function loadWordmark(): Wordmark {
  const out = execFileSync(
    'python3',
    [
      join(ROOT, 'scripts', 'wordmark-path.py'),
      BRAND_NAME,
      String(WORDMARK_SIZE),
      String(WORDMARK_TRACKING),
    ],
    { encoding: 'utf8' },
  )
  return JSON.parse(out) as Wordmark
}

/**
 * Un glifo suelto, cuadrado y transparente.
 *
 * `sizePx` no fija el tamaño del archivo —el SVG escala— sino el trazo: es el
 * tamaño al que se piensa usar la pieza, y de ahí sale el peso según la tabla
 * del manual.
 */
function glyphSvg(name: GlyphName, color: ColorName, sizePx: number, minStroke = 0): string {
  const stroke = Math.max(strokeFor(sizePx), minStroke)
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${VIEW_BOX}" width="${sizePx}" height="${sizePx}">`,
    `<title>${GLYPHS[name].label}</title>`,
    `<g color="${PALETTE[color]}">${glyphBody(name, stroke)}</g>`,
    `</svg>`,
  ].join('')
}

/**
 * El lockup horizontal: glifo a la izquierda, nombre alineado a su centro
 * óptico. Las medidas van en la unidad del campo (radio 12,4) para que el
 * resguardo del manual se mantenga al escalar.
 */
function lockupHorizontalSvg(color: ColorName, mark: Wordmark): Art {
  const stroke = strokeFor(42) // el manual tabula el lockup a 42 px
  const gap = 9 // supera el resguardo de 6,2 que pide el manual
  const w = round(32 + gap + mark.width)
  const h = 32
  // El nombre se centra por altura de mayúscula, no por caja tipográfica: es
  // lo que hace que el glifo y la palabra se lean a la misma altura.
  const baseline = round(16 + mark.capHeight / 2)

  return {
    w,
    h,
    svg: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w * 8}" height="${h * 8}">`,
      `<title>${BRAND_NAME} · lockup horizontal</title>`,
      `<g color="${PALETTE[color]}">`,
      `<g transform="translate(16 16)">${glyphBody('toro', stroke)}</g>`,
      `<path transform="translate(${32 + gap} ${baseline})" d="${mark.d}" fill="${PALETTE[color]}"/>`,
      `</g></svg>`,
    ].join(''),
  }
}

/** El lockup vertical: glifo arriba, nombre centrado debajo. */
function lockupVerticalSvg(color: ColorName, mark: Wordmark): Art {
  const stroke = strokeFor(42)
  const scale = 0.62 // el nombre baja de cuerpo para no competir con el glifo
  const gap = 7

  // La palabra a esta escala es más ancha que el campo, así que ella fija el
  // ancho de la caja y el glifo se centra sobre ella.
  const textWidth = mark.width * scale
  const w = round(Math.max(32, textWidth))
  const baseline = round(32 + gap + -mark.top * scale)
  const h = round(baseline + mark.bottom * scale)

  return {
    w,
    h,
    svg: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w * 8}" height="${round(h * 8)}">`,
      `<title>${BRAND_NAME} · lockup vertical</title>`,
      `<g color="${PALETTE[color]}">`,
      `<g transform="translate(${w / 2} 16)">${glyphBody('toro', stroke)}</g>`,
      `<path transform="translate(${round((w - textWidth) / 2)} ${baseline}) scale(${scale})" d="${mark.d}" fill="${PALETTE[color]}"/>`,
      `</g></svg>`,
    ].join(''),
  }
}

function round(n: number): number {
  return Math.round(n * 100) / 100
}

/**
 * Cuánto encoge el glifo dentro de una placa para dejar el resguardo del
 * manual: medio radio libre en los cuatro lados. El campo pasa a ocupar dos
 * tercios de la placa en vez de llenarla.
 */
const PLATE_SCALE = BOX / (2 * FIELD + 2 * CLEARANCE)

/** Un glifo centrado sobre fondo pleno, con el resguardo ya aplicado. */
function plateSvg(
  name: GlyphName,
  ink: ColorName,
  bg: ColorName,
  width: number,
  height: number,
): string {
  const side = Math.min(width, height) * PLATE_SCALE
  const stroke = strokeFor(side)
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">`,
    `<rect width="${width}" height="${height}" fill="${PALETTE[bg]}"/>`,
    `<g color="${PALETTE[ink]}" transform="translate(${width / 2} ${height / 2}) scale(${round(side / BOX)})">`,
    glyphBody(name, stroke),
    `</g></svg>`,
  ].join('')
}

/**
 * La imagen de compartir: el lockup horizontal, en papel sobre tinta.
 *
 * Lleva el lockup y no el glifo solo porque en un enlace de WhatsApp o LinkedIn
 * la miniatura tiene que decir de quién es sin depender del título de al lado.
 */
function ogSvg(mark: Wordmark): string {
  const w = 1200
  const h = 630
  const lockup = lockupHorizontalSvg('papel', mark)
  const scale = round((w * 0.52) / lockup.w)

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">`,
    `<rect width="${w}" height="${h}" fill="${PALETTE.tinta}"/>`,
    `<g transform="translate(${round((w - lockup.w * scale) / 2)} ${round((h - lockup.h * scale) / 2)}) scale(${scale})">`,
    lockup.svg.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, ''),
    `</g></svg>`,
  ].join('')
}

/* --- Rasterizado ---------------------------------------------------------- */

let cairoAvailable = true

/**
 * Convierte SVG a PNG o PDF con cairosvg.
 *
 * Se hace en un solo proceso Python por llamada en vez de importar una librería
 * de Node: cairosvg produce PDF vectorial de verdad —no una imagen incrustada—,
 * que es lo que la imprenta necesita.
 */
function render(
  svg: string,
  out: string,
  format: 'png' | 'pdf',
  width?: number,
  height?: number,
): void {
  if (!cairoAvailable) return
  mkdirSync(dirname(out), { recursive: true })

  const script =
    format === 'png'
      ? `import sys, cairosvg; cairosvg.svg2png(bytestring=sys.stdin.buffer.read(), write_to=sys.argv[1], output_width=${width}, output_height=${height ?? width})`
      : `import sys, cairosvg; cairosvg.svg2pdf(bytestring=sys.stdin.buffer.read(), write_to=sys.argv[1])`

  try {
    execFileSync('python3', ['-c', script, out], { input: svg, stdio: ['pipe', 'ignore', 'pipe'] })
  } catch (error) {
    const detail = error instanceof Error && 'stderr' in error ? String(error.stderr) : String(error)

    // Falta la librería: no tiene sentido intentar las ~100 piezas restantes.
    // Cualquier otro fallo es de una pieza puntual y no debe pasar en silencio.
    if (detail.includes('ModuleNotFoundError')) {
      cairoAvailable = false
      console.warn(`\n  ⚠ cairosvg no disponible — se omiten PNG y PDF.`)
      console.warn(`    Instalar con: python3 -m pip install cairosvg\n`)
      return
    }

    throw new Error(`No se pudo generar ${out}:\n${detail}`)
  }
}

function write(path: string, contents: string): void {
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, contents)
}

/* --- Construcción --------------------------------------------------------- */

function buildGlyphKit(): number {
  let count = 0

  for (const name of GLYPH_NAMES) {
    for (const color of EXPORT_COLORS) {
      // SVG maestro: se dibuja al peso de pieza grande, que es como se usa un
      // vector —quien lo abra lo va a escalar—.
      write(join(BRAND_DIR, 'svg', `${name}-${color}.svg`), glyphSvg(name, color, 224))
      count++

      for (const size of PNG_SIZES) {
        render(glyphSvg(name, color, size), join(BRAND_DIR, 'png', `${name}-${color}-${size}.png`), 'png', size)
        count++
      }

      // El PDF sube el trazo al mínimo de grabado: bajo 0,45 el láser y el
      // sello seco no cierran la línea.
      render(
        glyphSvg(name, color, 224, ENGRAVING_MIN_STROKE),
        join(BRAND_DIR, 'pdf', `${name}-${color}.pdf`),
        'pdf',
      )
      count++
    }
  }

  return count
}

function buildLockups(mark: Wordmark): number {
  let count = 0

  for (const color of EXPORT_COLORS) {
    const variants = {
      horizontal: lockupHorizontalSvg(color, mark),
      vertical: lockupVerticalSvg(color, mark),
    }

    for (const [orientation, art] of Object.entries(variants)) {
      const name = `lockup-${orientation}-${color}`
      const width = 1024
      write(join(BRAND_DIR, 'svg', `${name}.svg`), art.svg)
      render(
        art.svg,
        join(BRAND_DIR, 'png', `${name}-${width}.png`),
        'png',
        width,
        Math.round((width * art.h) / art.w),
      )
      render(art.svg, join(BRAND_DIR, 'pdf', `${name}.pdf`), 'pdf')
      count += 3
    }
  }

  return count
}

/**
 * Los iconos que consume `index.html`.
 *
 * Todos con la anomalía: el manual la reserva para pestaña, avatar y sello
 * porque es la única de las dos marcas que aguanta 16 px sin cerrarse.
 */
function buildSiteIcons(mark: Wordmark): number {
  const favicon = (px: number): string => plateSvg('anomalia', 'papel', 'tinta', px, px)

  // El .ico lleva las tres resoluciones que pide el manual en un solo archivo.
  const icoSizes = [16, 32, 48]
  const temps = icoSizes.map((px) => {
    const out = join(PUBLIC_DIR, `.favicon-${px}.png`)
    render(favicon(px), out, 'png', px)
    return out
  })

  if (cairoAvailable) {
    try {
      execFileSync('convert', [...temps, join(PUBLIC_DIR, 'favicon.ico')], { stdio: 'pipe' })
    } catch {
      console.warn('  ⚠ ImageMagick (`convert`) no disponible — sin favicon.ico')
    }
    temps.forEach((t) => rmSync(t, { force: true }))
  }

  // Apple exige PNG opaco de 180 px, sin transparencia ni esquinas redondeadas.
  render(favicon(180), join(PUBLIC_DIR, 'apple-touch-icon.png'), 'png', 180)

  // Avatar cuadrado para redes, y la OG image en su proporción canónica.
  write(join(BRAND_DIR, 'svg', 'avatar.svg'), favicon(1024))
  render(favicon(1024), join(BRAND_DIR, 'png', 'avatar-1024.png'), 'png', 1024)

  const og = ogSvg(mark)
  write(join(BRAND_DIR, 'svg', 'og.svg'), og)
  render(og, join(PUBLIC_DIR, 'og.png'), 'png', 1200, 630)

  return 6
}

function buildReadme(): void {
  const glyphRows = GLYPH_NAMES.map((name) => {
    const g = GLYPHS[name]
    return `| \`${name}\` | ${g.label} | ${g.use} |`
  }).join('\n')

  const paletteRows = Object.entries(PALETTE)
    .map(([name, hex]) => `| \`${name}\` | \`${hex}\` |`)
    .join('\n')

  write(
    join(BRAND_DIR, 'README.md'),
    `# Kit de marca · ${BRAND_NAME}

**Archivos generados. No editar a mano.** La geometría vive en
[\`src/brand/glyphs.ts\`](../src/brand/glyphs.ts); esta carpeta se reconstruye con:

\`\`\`bash
npm run brand
\`\`\`

Todo sale del manual de marca v1 (agosto 2026).

## Qué glifo usar

${glyphRows}

Las dos marcas son el **toro** y la **anomalía**. Los otros tres nombran
dispositivos y secciones: no son logos alternativos.

## Qué formato pedir

| Carpeta | Para qué |
| --- | --- |
| \`svg/\` | Diseño, bordado, corte, web. Escala sin pérdida — es el maestro. |
| \`png/\` | Print-on-demand, redes, presentaciones. Fondo transparente, 256 a 2048 px. |
| \`pdf/\` | Serigrafía, grabado láser, sello seco. Vectorial, trazo mínimo ${ENGRAVING_MIN_STROKE}. |

Cada glifo viene en tres colores: \`tinta\`, \`papel\` y \`naranja\`.
Para cualquier otro color, abrir el SVG y cambiar el atributo \`color\` del \`<g>\` —
todo el dibujo hereda de ahí.

## Reglas que no se negocian

- **Resguardo:** medio radio (6,2 en la caja de 32) libre en los cuatro lados.
- **Tamaño mínimo:** 16 px de alto. Bajo 32 px, siempre la anomalía.
- **Trazo:** no se elige a ojo. Sale de \`strokeFor(px)\`: 224 px → 0,30 · 72 px → 0,45 ·
  42 px → 0,70 · 16 px → 2,40.
- **Nunca:** engrosar el trazo fuera de la tabla, deformar la caja, usar más de un
  color por glifo, agregar elipses al toro, ni degradados.

## Paleta

${paletteRows}

Un color dominante por pieza; el resto, acentos. Monocromo por defecto en todo lo
que se defiende (tesis, papers, fichas); el color entra en lo que circula (sitio,
redes, merchandising).
`,
  )
}

/* --- Entrada -------------------------------------------------------------- */

console.log('Generando el kit de marca…')
rmSync(BRAND_DIR, { recursive: true, force: true })

const wordmark = loadWordmark()
const glyphs = buildGlyphKit()
const lockups = buildLockups(wordmark)
const icons = buildSiteIcons(wordmark)
buildReadme()

console.log(`  brand/svg · brand/png · brand/pdf   ${glyphs + lockups} piezas`)
console.log(`  public/   favicon, apple-touch-icon, og.png   ${icons} piezas`)
console.log(cairoAvailable ? 'Listo.' : 'Listo, solo SVG (falta cairosvg).')
