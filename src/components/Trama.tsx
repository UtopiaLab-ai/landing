import { Glyph } from '../brand/Glyph'
import { BOX, DOTTED, FIELD, INFERRED, INNER, PULSE, RING, RINGS, strokeFor } from '../brand/glyphs'

/**
 * El fondo de las portadillas interiores: una composición por página, hecha
 * con los usos del campo que el dossier de marca propone para portadas.
 *
 * - `senal` (Casos): la trama «campo de puntos + señal» (8a). Los casos son
 *   donde una señal apareció y se leyó a tiempo.
 * - `escalera` (Productos): «el campo crece con el compromiso» (Fig. M3). Un
 *   campo por escalón del catálogo, parados sobre la misma línea, que ganan
 *   tamaño y estructura —pulso, campo firme, un anillo, dos anillos— unidos
 *   por la trayectoria de su punto.
 * - `constelacion` (Equipo): «muchos campos, un mapa» (8f). Campos de distinto
 *   tamaño cuyas relaciones convergen en uno: trayectorias distintas
 *   trabajando sobre el mismo punto.
 *
 * El manual deja usar trama y sangrado solo en portadillas, y estas lo son.
 * Nada se dibuja a ojo: radio 12,4, anillos permitidos, trazo de `strokeFor`
 * según el tamaño de cada campo, puntos de 1,3 / 1,5 / 1,9 según estatuto y
 * punteado para la relación inferida. Un solo color por pieza y siempre en el
 * punto: naranja en Casos, ámbar en Productos, turquesa en Equipo.
 */
export type TramaVariant = 'senal' | 'escalera' | 'constelacion'

export function Trama({ variant }: { variant: TramaVariant }) {
  return (
    <div className={`trama trama-${variant}`} aria-hidden="true">
      {variant === 'senal' && (
        <Glyph name="senal" size={360} accent="var(--sol)" className="trama-campo" />
      )}
      {variant === 'escalera' && <Composition {...ESCALERA} />}
      {variant === 'constelacion' && <Composition {...CONSTELACION} />}
    </div>
  )
}

/** Un campo de la composición, en px nominales del `viewBox`. */
interface Field {
  cx: number
  cy: number
  /** Alto de la caja del glifo, como `size` en `Glyph`: fija el trazo por la tabla. */
  size: number
  /** Campo en pulso: provisorio. */
  pulse?: boolean
  /** Anillos internos, solo de los que permite el manual. */
  rings?: readonly number[]
  /** El punto, en unidades del campo. El radio es su estatuto. */
  point: { x: number; y: number; r: 1.3 | 1.5 | 1.9 }
}

interface CompositionSpec {
  width: number
  height: number
  fields: readonly Field[]
  /** Índice del campo cuyo punto lleva el color. */
  accentOn: number
  accent: string
  /** Relaciones inferidas entre puntos, como pares de índices. */
  links: readonly (readonly [number, number])[]
  /** Línea de apoyo común, tangente a los campos por abajo. */
  baseline?: number
}

const ESCALERA_BASELINE = 460

/** Un campo apoyado sobre la línea de la escalera. */
function onBaseline(cx: number, size: number, rest: Omit<Field, 'cx' | 'cy' | 'size'>): Field {
  return { cx, cy: round(ESCALERA_BASELINE - FIELD * (size / BOX)), size, ...rest }
}

const ESCALERA: CompositionSpec = {
  width: 900,
  height: 540,
  baseline: ESCALERA_BASELINE,
  fields: [
    onBaseline(90, 150, { pulse: true, point: { x: 4.6, y: -6.2, r: 1.3 } }),
    onBaseline(268, 215, { point: { x: 4.6, y: -6.2, r: 1.5 } }),
    onBaseline(506, 305, { rings: [RINGS[0]], point: { x: 3.3, y: -4.4, r: 1.5 } }),
    onBaseline(826, 430, { rings: RINGS, point: { x: 1.9, y: -2.5, r: 1.9 } }),
  ],
  accentOn: 3,
  accent: 'var(--ambar)',
  links: [
    [0, 1],
    [1, 2],
    [2, 3],
  ],
}

const CONSTELACION: CompositionSpec = {
  width: 900,
  height: 600,
  fields: [
    { cx: 204, cy: 180, size: 263, point: { x: 4.4, y: -6.6, r: 1.5 } },
    { cx: 516, cy: 348, size: 403, point: { x: 4.8, y: -6.7, r: 1.9 } },
    { cx: 732, cy: 144, size: 155, pulse: true, point: { x: 0, y: 0, r: 1.5 } },
    { cx: 156, cy: 456, size: 108, point: { x: 4.6, y: -6.2, r: 1.3 } },
  ],
  accentOn: 1,
  accent: 'var(--agua)',
  links: [
    [0, 1],
    [2, 1],
  ],
}

function Composition({ width, height, fields, accentOn, accent, links, baseline }: CompositionSpec) {
  const scaleOf = (field: Field) => field.size / BOX
  const strokeOf = (field: Field) => strokeFor(field.size) * scaleOf(field)
  const pointOf = (field: Field) => ({
    x: round(field.cx + field.point.x * scaleOf(field)),
    y: round(field.cy + field.point.y * scaleOf(field)),
  })
  const smallest = fields.reduce((a, b) => (a.size <= b.size ? a : b))

  return (
    <svg
      className="trama-dibujo"
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      stroke="currentColor"
      focusable="false"
    >
      {baseline !== undefined && (
        <line x1={0} y1={baseline} x2={width} y2={baseline} strokeWidth={round(strokeOf(smallest) * INNER)} />
      )}

      {/* La relación se dibuja con el trazo y el punteado del campo menor de
          los dos: el inferido nunca pesa más que lo que une. */}
      {links.map(([a, b]) => {
        const from = pointOf(fields[a])
        const to = pointOf(fields[b])
        const thinner = fields[a].size <= fields[b].size ? fields[a] : fields[b]
        return (
          <line
            key={`${a}-${b}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            strokeWidth={round(strokeOf(thinner) * INFERRED)}
            strokeDasharray={scaleDash(DOTTED, scaleOf(thinner))}
          />
        )
      })}

      {fields.map((field, i) => {
        const k = scaleOf(field)
        const stroke = strokeOf(field)
        const point = pointOf(field)
        return (
          <g key={i}>
            <circle
              cx={field.cx}
              cy={field.cy}
              r={round(FIELD * k)}
              strokeWidth={round(stroke)}
              strokeDasharray={field.pulse ? scaleDash(PULSE, k) : undefined}
            />
            {field.rings?.map((r) => (
              <circle key={r} cx={field.cx} cy={field.cy} r={round(r * k)} strokeWidth={round(stroke * RING)} />
            ))}
            <circle
              cx={point.x}
              cy={point.y}
              r={round(field.point.r * k)}
              fill="currentColor"
              stroke="none"
              style={i === accentOn ? { fill: accent } : undefined}
            />
          </g>
        )
      })}
    </svg>
  )
}

/** Un punteado del glifo llevado a la escala del campo. */
function scaleDash(dash: string, k: number): string {
  return dash
    .split(' ')
    .map((n) => round(Number(n) * k))
    .join(' ')
}

function round(n: number): number {
  return Math.round(n * 100) / 100
}
