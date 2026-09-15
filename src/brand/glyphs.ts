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
 *
 * `weight` escala el trazo base: el léxico analítico dibuja con tres grosores
 * —perímetro, estructura interna y relación inferida— y los expresa como
 * fracción del trazo del campo, para que sigan saliendo de `strokeFor`.
 * `signal` marca el punto que lleva el color: en cada glifo del léxico hay uno
 * solo, la posición tomada.
 */
export type Shape =
  | { kind: 'ellipse'; rx: number; ry: number; rotate?: number }
  | {
      kind: 'circle'
      r: number
      cx?: number
      cy?: number
      solid?: boolean
      dash?: string
      weight?: number
      signal?: boolean
    }
  | { kind: 'line'; x1: number; y1: number; x2: number; y2: number; dash?: string; weight?: number }
  | { kind: 'path'; d: string; weight?: number }

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
    use: 'El logo: barra, pie, favicon, avatar y vista previa del enlace. Firma en aperturas y portadas.',
    shapes: [
      { kind: 'ellipse', rx: FIELD, ry: 1.8, rotate: -52 },
      { kind: 'ellipse', rx: FIELD, ry: 5.2 },
      { kind: 'ellipse', rx: FIELD, ry: 8.6, rotate: 52 },
    ],
  },

  anomalia: {
    label: 'Anomalía · marca de uso',
    use: 'Sello, botones e íconos de uso dentro de las páginas, bajo 32 px.',
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

/* --- Léxico analítico ----------------------------------------------------- */

/** Grosores del léxico («Gramática»), como fracción del perímetro de 0,42. */
export const INNER = 0.83 // 0,35 · estructura interna
export const RING = 0.71 // 0,30 · anillo interior
export const INFERRED = 0.57 // 0,24 · relación inferida, siempre punteada

/** Punteado de la relación inferida y pulso del campo provisorio. */
export const DOTTED = '1.3 1.5'
export const PULSE = '2 3'

export type LexiconName =
  | 'senal'
  | 'cadena'
  | 'umbral'
  | 'convergencia'
  | 'bifurcacion'
  | 'trayectoria'
  | 'escenario'
  | 'implicancia'
  | 'decision'
  | 'experimento'
  | 'ajuste'

/**
 * Los once glifos del léxico analítico del dossier de marca (agosto 2026).
 *
 * No son logo —el logo es el toro—: son el vocabulario con que se dibuja el
 * método. Cada uno dice qué le pasa al campo. Se declaran en el orden de la
 * cadena anticipatoria, así que `LEXICON_NAMES` es la cadena misma.
 *
 * Quedan fuera de `GLYPHS` a propósito: el kit de imprenta exporta las marcas,
 * no el vocabulario.
 */
export const LEXICON: Record<LexiconName, Glyph> = {
  senal: {
    label: 'Señal',
    use: 'Algo aparece fuera del centro del campo y todavía no tiene nombre.',
    shapes: [
      { kind: 'circle', r: FIELD },
      { kind: 'circle', r: 1.9, cx: 4.6, cy: -6.2, solid: true, signal: true },
    ],
  },

  cadena: {
    label: 'Cadena',
    use: 'Varias señales que se enlazan y dejan de ser hechos sueltos.',
    shapes: [
      { kind: 'circle', r: 4.6, cx: -8.4, weight: INNER },
      { kind: 'circle', r: 4.6, weight: INNER },
      { kind: 'circle', r: 4.6, cx: 8.4, weight: INNER },
      { kind: 'circle', r: 1.3, cx: -8.4, solid: true },
      { kind: 'circle', r: 1.3, solid: true },
      { kind: 'circle', r: 1.3, cx: 8.4, solid: true, signal: true },
      { kind: 'line', x1: -7.1, y1: 0, x2: -1.3, y2: 0, dash: DOTTED, weight: INFERRED },
      { kind: 'line', x1: 1.3, y1: 0, x2: 7.1, y2: 0, dash: DOTTED, weight: INFERRED },
    ],
  },

  umbral: {
    label: 'Umbral',
    use: 'La línea que, al cruzarse, cambia el estatuto de lo que se observa.',
    shapes: [
      { kind: 'circle', r: FIELD },
      { kind: 'line', x1: -15.4, y1: 0, x2: 15.4, y2: 0, weight: INNER },
      { kind: 'circle', r: 1.3, cx: -4.4, cy: -5.6, solid: true },
      { kind: 'circle', r: 1.3, cx: 1.6, cy: -2.4, solid: true },
      { kind: 'circle', r: 1.9, cx: 6.4, cy: 4.2, solid: true, signal: true },
    ],
  },

  convergencia: {
    label: 'Convergencia',
    use: 'Tres campos distintos apuntando al mismo punto: ahí se activa la alerta.',
    shapes: [
      { kind: 'circle', r: 4.2, cx: -8.6, cy: -7.4, weight: INNER },
      { kind: 'circle', r: 4.2, cx: 8.6, cy: -7.4, weight: INNER },
      { kind: 'circle', r: 3, cy: -11.2, weight: INNER },
      { kind: 'line', x1: -7.4, y1: -4.2, x2: -1.4, y2: 6.6, dash: DOTTED, weight: INFERRED },
      { kind: 'line', x1: 7.4, y1: -4.2, x2: 1.4, y2: 6.6, dash: DOTTED, weight: INFERRED },
      { kind: 'line', x1: 0, y1: -8, x2: 0, y2: 6.2, dash: DOTTED, weight: INFERRED },
      { kind: 'circle', r: 1.9, cy: 8.4, solid: true, signal: true },
    ],
  },

  bifurcacion: {
    label: 'Bifurcación',
    use: 'El punto donde el curso se abre y deja de haber un solo futuro.',
    shapes: [
      { kind: 'circle', r: FIELD },
      { kind: 'line', x1: -11.6, y1: 0, x2: -1.6, y2: 0, dash: DOTTED, weight: INFERRED },
      { kind: 'line', x1: 0, y1: 0, x2: 9.8, y2: -7.2, dash: DOTTED, weight: INFERRED },
      { kind: 'line', x1: 0, y1: 0, x2: 9.8, y2: 7.2, dash: DOTTED, weight: INFERRED },
      { kind: 'circle', r: 1.5, solid: true, signal: true },
      { kind: 'circle', r: 1.3, cx: 10.6, cy: -7.8, solid: true },
      { kind: 'circle', r: 1.3, cx: 10.6, cy: 7.8, solid: true },
    ],
  },

  trayectoria: {
    label: 'Trayectoria',
    use: 'El recorrido de una señal que crece: no es un estado, es un movimiento.',
    shapes: [
      { kind: 'circle', r: FIELD },
      { kind: 'line', x1: -9.6, y1: 7.2, x2: 9.4, y2: -6.4, dash: DOTTED, weight: INFERRED },
      { kind: 'circle', r: 1.3, cx: -9.6, cy: 7.2, solid: true },
      { kind: 'circle', r: 1.5, cx: -0.1, cy: 0.4, solid: true },
      { kind: 'circle', r: 1.9, cx: 9.4, cy: -6.4, solid: true, signal: true },
    ],
  },

  escenario: {
    label: 'Escenario',
    use: 'Uno de los cursos posibles, dibujado como sector del campo, no como pronóstico.',
    shapes: [
      { kind: 'circle', r: FIELD },
      { kind: 'path', d: 'M-11.8 3.8 A12.4 12.4 0 0 1 -3.6 -11.8', weight: INNER },
      { kind: 'path', d: 'M-8.4 2.7 A8.8 8.8 0 0 1 -2.6 -8.4', weight: INNER },
      { kind: 'path', d: 'M-4.8 1.5 A5 5 0 0 1 -1.5 -4.8', weight: INNER },
      { kind: 'circle', r: 1.5, cx: -9.6, cy: -7.8, solid: true, signal: true },
    ],
  },

  implicancia: {
    label: 'Implicancia',
    use: 'El mundo de segundo orden que produce la decisión: el campo desplazado.',
    shapes: [
      { kind: 'circle', r: 9.6, cx: -3.2, cy: -2.4, weight: INNER },
      { kind: 'circle', r: 9.6, cx: 4.4, cy: 4.2, dash: PULSE, weight: INNER },
      { kind: 'circle', r: 1.9, cx: 0.4, cy: -7.4, solid: true, signal: true },
      { kind: 'circle', r: 1.3, cx: 8, cy: -0.8, solid: true },
    ],
  },

  decision: {
    label: 'Decisión',
    use: 'De todas las salidas abiertas, una queda en trazo pleno: se elige y se sostiene.',
    shapes: [
      { kind: 'circle', r: FIELD },
      { kind: 'line', x1: -12.4, y1: 0, x2: 12.4, y2: 0, weight: INNER },
      { kind: 'line', x1: 0, y1: 0, x2: 8.6, y2: -8.6, dash: DOTTED, weight: INFERRED },
      { kind: 'circle', r: 1.9, solid: true, signal: true },
      { kind: 'circle', r: 1.3, cx: 11.4, cy: -6.9, solid: true },
    ],
  },

  experimento: {
    label: 'Experimento',
    use: 'Una prueba acotada dentro de un campo provisorio: dos extremos y una apuesta.',
    shapes: [
      { kind: 'circle', r: FIELD, dash: PULSE },
      { kind: 'line', x1: -6.4, y1: 6.4, x2: 6.4, y2: -6.4, weight: INNER },
      { kind: 'circle', r: 1.5, cx: -6.4, cy: 6.4, solid: true },
      { kind: 'circle', r: 1.5, cx: 6.4, cy: -6.4, solid: true, signal: true },
    ],
  },

  ajuste: {
    label: 'Aprendizaje y ajuste',
    use: 'El campo se estrecha —lo que era horizonte ahora es borde— y el punto se mueve.',
    shapes: [
      { kind: 'circle', r: FIELD, dash: PULSE },
      { kind: 'circle', r: 8.8, weight: RING },
      { kind: 'circle', r: 1.5, cx: 3.3, cy: -4.4, solid: true, signal: true },
      { kind: 'circle', r: 1.3, cx: -6.2, cy: 6.2, solid: true },
    ],
  },
}

/** La cadena anticipatoria, en orden. */
export const LEXICON_NAMES = Object.keys(LEXICON) as LexiconName[]

/** Cualquier glifo dibujable: una marca o una palabra del léxico. */
export type AnyGlyphName = GlyphName | LexiconName

export function glyphOf(name: AnyGlyphName): Glyph {
  return name in GLYPHS ? GLYPHS[name as GlyphName] : LEXICON[name as LexiconName]
}

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
export function shapeToSvg(shape: Shape, stroke = 1): string {
  const sw = 'weight' in shape && shape.weight ? ` stroke-width="${round(stroke * shape.weight)}"` : ''
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
      return `<circle r="${shape.r}"${cx}${cy}${solid}${dash}${sw}/>`
    }
    case 'line': {
      const dash = shape.dash ? ` stroke-dasharray="${shape.dash}"` : ''
      return `<line x1="${shape.x1}" y1="${shape.y1}" x2="${shape.x2}" y2="${shape.y2}"${dash}${sw}/>`
    }
    case 'path':
      return `<path d="${shape.d}"${sw}/>`
  }
}

/** El interior del `<svg>` de un glifo, ya agrupado con su trazo. */
export function glyphBody(name: GlyphName, stroke: number): string {
  const shapes = GLYPHS[name].shapes.map((shape) => shapeToSvg(shape, stroke)).join('')
  return `<g fill="none" stroke="currentColor" stroke-width="${stroke}">${shapes}</g>`
}

/** El `viewBox` del campo, idéntico para los cinco glifos. */
export const VIEW_BOX = `${-BOX / 2} ${-BOX / 2} ${BOX} ${BOX}`
