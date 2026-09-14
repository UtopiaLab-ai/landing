import { Fragment } from 'react'
import { VIEW_BOX, glyphOf, strokeFor, type AnyGlyphName, type Shape } from './glyphs'

/**
 * Un glifo del sistema de marca: una de las cinco marcas o una de las once
 * palabras del léxico analítico.
 *
 * El trazo no se pasa a mano: sale de `strokeFor(size)`, la tabla de escala y
 * peso del manual. Así un glifo a 16 px y otro a 224 px se ven del mismo grosor
 * óptico sin que nadie tenga que acordarse de la tabla. Las formas con `weight`
 * —los grosores internos del léxico— se derivan de ese mismo trazo.
 *
 * El color viene de `currentColor`, heredado del contexto: el mismo componente
 * sirve sobre papel y sobre tinta. `accent` es la única excepción y pinta el
 * punto de señal. En el léxico va solo al punto marcado `signal` —la regla del
 * manual es que el trazo queda en tinta y el color vive en la posición
 * tomada—; en las marcas, que no marcan ninguno, a todos los puntos plenos.
 *
 * El acento entra por `style` y no por el atributo `fill` para que acepte
 * `var(--…)`, que un atributo de presentación SVG no resuelve.
 */
export function Glyph({
  name,
  size,
  accent,
  className,
  title,
}: {
  name: AnyGlyphName
  /** Alto en px. Determina el trazo. Bajo 16 px el manual pide la anomalía. */
  size: number
  /** Color del punto de señal. Sin esto, el punto va en `currentColor`. */
  accent?: string
  className?: string
  /** Sin título el glifo es decorativo y se oculta a lectores de pantalla. */
  title?: string
}) {
  const stroke = strokeFor(size)
  const { shapes } = glyphOf(name)
  const marksSignal = shapes.some((shape) => shape.kind === 'circle' && shape.signal)

  return (
    <svg
      className={className}
      viewBox={VIEW_BOX}
      width={size}
      height={size}
      fill="none"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title && <title>{title}</title>}
      <g fill="none" stroke="currentColor" strokeWidth={stroke}>
        {shapes.map((shape, i) => (
          <Fragment key={i}>{renderShape(shape, stroke, accent, marksSignal)}</Fragment>
        ))}
      </g>
    </svg>
  )
}

function renderShape(
  shape: Shape,
  stroke: number,
  accent: string | undefined,
  marksSignal: boolean,
): React.ReactElement {
  switch (shape.kind) {
    case 'ellipse':
      return (
        <ellipse
          rx={shape.rx}
          ry={shape.ry}
          transform={shape.rotate ? `rotate(${shape.rotate})` : undefined}
        />
      )
    case 'circle': {
      const accented = shape.solid && accent && (!marksSignal || shape.signal)
      return (
        <circle
          r={shape.r}
          cx={shape.cx}
          cy={shape.cy}
          fill={shape.solid ? 'currentColor' : undefined}
          stroke={shape.solid ? 'none' : undefined}
          strokeWidth={weighted(shape.weight, stroke)}
          strokeDasharray={shape.dash}
          style={accented ? { fill: accent } : undefined}
        />
      )
    }
    case 'line':
      return (
        <line
          x1={shape.x1}
          y1={shape.y1}
          x2={shape.x2}
          y2={shape.y2}
          strokeWidth={weighted(shape.weight, stroke)}
          strokeDasharray={shape.dash}
        />
      )
    case 'path':
      return <path d={shape.d} strokeWidth={weighted(shape.weight, stroke)} />
  }
}

/** El trazo de una forma con grosor propio, redondeado como el de la tabla. */
function weighted(weight: number | undefined, stroke: number): number | undefined {
  return weight ? Math.round(stroke * weight * 1000) / 1000 : undefined
}
