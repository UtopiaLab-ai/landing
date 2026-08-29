/* ==========================================================================
   Sistema de marca — geometría.

   Fuente única de verdad del manual de marca v1 (agosto 2026). La consumen dos
   cosas: `Glyph.tsx`, que la dibuja en el sitio, y `scripts/build-brand-assets.ts`,
   que la exporta a SVG, PNG y PDF. Una sola definición: si un glifo cambia acá,
   cambia en la web y en la imprenta a la vez.

   Módulo deliberadamente sin imports — el generador corre en Node crudo con
   `--experimental-strip-types`, que no resuelve dependencias.
   ========================================================================== */

/** Radio del campo. Todos los glifos comparten este perímetro exacto. */
export const FIELD = 12.4

/** Caja del glifo: el campo vive centrado en −16 −16 32 32. */
export const BOX = 32

/** Margen libre en los cuatro lados: medio radio. */
export const CLEARANCE = 6.2

/** Bajo este tamaño ningún glifo es legible; usar la anomalía. */
export const MIN_PX = 16

/** Radios internos permitidos por el manual. Ni uno más. */
export const RINGS = [8.8, 5.0] as const

export const PALETTE = {
  tinta: '#0F0F0F',
  papel: '#F2F0EC',
  naranja: '#EF4A0F',
  azul: '#0B57A4',
  rosa: '#F79AC0',
  ambar: '#FBBE0B',
  agua: '#4FC3C0',
  bosque: '#2E6B45',
} as const

export type ColorName = keyof typeof PALETTE

/* --- Formas --------------------------------------------------------------- */

/**
 * Una primitiva del sistema. El conjunto está cerrado a propósito: el manual
 * define los glifos como «una operación por glifo» sobre un campo circular, y
 * cualquier primitiva extra abre la puerta a dibujar fuera de la marca.
 */
export type Shape =
  | { kind: 'ellipse'; rx: number; ry: number; rotate?: number }
  | { kind: 'circle'; r: number; cx?: number; cy?: number; solid?: boolean; dash?: string }
  | { kind: 'line'; x1: number; y1: number; x2: number; y2: number }
  | { kind: 'path'; d: string }

export type GlyphName = 'toro' | 'anomalia' | 'observatorio' | 'nmu' | 'hipotesis'

export interface Glyph {
  /** Nombre propio, tal como lo nombra el manual. */
  readonly label: string
  /** Dónde corresponde usarlo. */
  readonly use: string
  readonly shapes: readonly Shape[]
}

/**
 * Los cinco glifos del registro monocromo (§03 del manual).
 *
 * Toro y anomalía son las dos marcas; los otros tres nombran dispositivos y
 * secciones sin salir del sistema. El vértice inferior de la tríada, 6.2, es
 * el mismo valor del resguardo: el triángulo equilátero inscrito en el campo.
 */
export const GLYPHS: Record<GlyphName, Glyph> = {
  toro: {
    label: 'Toro · marca matriz',
    use: 'Firma en aperturas, portadas, hero y pie. Piezas grandes.',
    shapes: [
      { kind: 'ellipse', rx: FIELD, ry: 1.8, rotate: -52 },
      { kind: 'ellipse', rx: FIELD, ry: 5.2 },
      { kind: 'ellipse', rx: FIELD, ry: 8.6, rotate: 52 },
    ],
  },

  anomalia: {
    label: 'Anomalía · marca de uso',
    use: 'Favicon, avatar, sello, botones y toda pieza bajo 32 px.',
    shapes: [
      { kind: 'circle', r: FIELD },
      { kind: 'circle', r: 1.9, cx: 4.6, cy: -6.2, solid: true },
    ],
  },

  observatorio: {
    label: 'Observatorio · pulso con núcleo',
    use: 'Estados de vigilancia. Nombra el registro del contexto.',
    shapes: [
      { kind: 'circle', r: FIELD, dash: '2 3' },
      { kind: 'circle', r: 1.5, solid: true },
    ],
  },

  nmu: {
    label: 'NMU · tríada inscrita',
    use: 'Los tres nodos del ciclo. Nombra la apertura de escenarios.',
    shapes: [
      { kind: 'circle', r: FIELD },
      { kind: 'path', d: 'M0 -12.4 L10.74 6.2 L-10.74 6.2 Z' },
      { kind: 'circle', r: 1.3, cy: -12.4, solid: true },
      { kind: 'circle', r: 1.3, cx: 10.74, cy: 6.2, solid: true },
      { kind: 'circle', r: 1.3, cx: -10.74, cy: 6.2, solid: true },
    ],
  },

  hipotesis: {
    label: 'Hipótesis · secante',
    use: 'El corte del campo. Nombra el umbral y la bifurcación.',
    shapes: [
      { kind: 'circle', r: FIELD },
      { kind: 'line', x1: -10.3, y1: -6.9, x2: 10.3, y2: 6.9 },
    ],
  },
}

export const GLYPH_NAMES = Object.keys(GLYPHS) as GlyphName[]

/* --- Trazo ---------------------------------------------------------------- */

/**
 * Tabla de escala y peso del manual (§06), en pares [tamaño px, trazo].
 *
 * No es lineal: mantiene el trazo renderizado cerca de un pelo constante entre
 * 16 y 72 px, y lo engrosa recién en pieza grande. Ordenada ascendente porque
 * `strokeFor` la recorre así.
 */
const WEIGHT_TABLE: readonly (readonly [number, number])[] = [
  [16, 2.4], // favicon y avatar
  [21, 1.5],
  [42, 0.7], // lockup, membrete, firma
  [72, 0.45], // fichas, portadillas, slides
  [224, 0.3], // portada, mural, apertura
]

/** Trazo mínimo para grabado y sello seco: bajo esto la tinta no cierra. */
export const ENGRAVING_MIN_STROKE = 0.45

/**
 * Trazo que le corresponde a un glifo dibujado a `px` de alto.
 *
 * Interpola entre los puntos de la tabla en escala logarítmica —el ojo lee el
 * tamaño tipográfico así, no linealmente— y satura fuera del rango. En los
 * cinco tamaños tabulados devuelve el valor exacto del manual.
 */
export function strokeFor(px: number): number {
  const first = WEIGHT_TABLE[0]
  const last = WEIGHT_TABLE[WEIGHT_TABLE.length - 1]
  if (px <= first[0]) return first[1]
  if (px >= last[0]) return last[1]

  for (let i = 1; i < WEIGHT_TABLE.length; i++) {
    const [hiPx, hiSw] = WEIGHT_TABLE[i]
    if (px > hiPx) continue
    const [loPx, loSw] = WEIGHT_TABLE[i - 1]
    const t = (Math.log(px) - Math.log(loPx)) / (Math.log(hiPx) - Math.log(loPx))
    return round(loSw + t * (hiSw - loSw))
  }

  return last[1]
}

function round(n: number): number {
  return Math.round(n * 1000) / 1000
}

/* --- Serialización a SVG -------------------------------------------------- */

/**
 * Una forma como etiqueta SVG suelta.
 *
 * Los rellenos van en `currentColor` para que un mismo archivo sirva en tinta,
 * papel y naranja sin duplicarse; el generador de assets fija el color en el
 * `<g>` contenedor.
 */
export function shapeToSvg(shape: Shape): string {
  switch (shape.kind) {
    case 'ellipse': {
      const rot = shape.rotate ? ` transform="rotate(${shape.rotate})"` : ''
      return `<ellipse rx="${shape.rx}" ry="${shape.ry}"${rot}/>`
    }
    case 'circle': {
      const cx = shape.cx ? ` cx="${shape.cx}"` : ''
      const cy = shape.cy ? ` cy="${shape.cy}"` : ''
      const solid = shape.solid ? ' fill="currentColor" stroke="none"' : ''
      const dash = shape.dash ? ` stroke-dasharray="${shape.dash}"` : ''
      return `<circle r="${shape.r}"${cx}${cy}${solid}${dash}/>`
    }
    case 'line':
      return `<line x1="${shape.x1}" y1="${shape.y1}" x2="${shape.x2}" y2="${shape.y2}"/>`
    case 'path':
      return `<path d="${shape.d}"/>`
  }
}

/** El interior del `<svg>` de un glifo, ya agrupado con su trazo. */
export function glyphBody(name: GlyphName, stroke: number): string {
  const shapes = GLYPHS[name].shapes.map(shapeToSvg).join('')
  return `<g fill="none" stroke="currentColor" stroke-width="${stroke}">${shapes}</g>`
}

/** El `viewBox` del campo, idéntico para los cinco glifos. */
export const VIEW_BOX = `${-BOX / 2} ${-BOX / 2} ${BOX} ${BOX}`
