import { Fragment } from 'react'
import { GLYPHS, VIEW_BOX, strokeFor, type GlyphName, type Shape } from './glyphs'

/**
 * Un glifo del sistema de marca.
 *
 * El trazo no se pasa a mano: sale de `strokeFor(size)`, la tabla de escala y
 * peso del manual. Así un glifo a 16 px y otro a 224 px se ven del mismo grosor
 * óptico sin que nadie tenga que acordarse de la tabla.
 *
 * El color viene de `currentColor`, heredado del contexto: el mismo componente
 * sirve sobre papel y sobre tinta. `accent` es la única excepción —el punto de
 * señal en naranja, el único acento de color que el manual permite en el
 * lockup—.
 */
export function Glyph({
  name,
  size,
  accent,
  className,
  title,
}: {
  name: GlyphName
  /** Alto en px. Determina el trazo. Bajo 16 px el manual pide la anomalía. */
  size: number
  /** Color del punto pleno. Sin esto, el punto va en `currentColor`. */
  accent?: string
  className?: string
  /** Sin título el glifo es decorativo y se oculta a lectores de pantalla. */
  title?: string
}) {
  const stroke = strokeFor(size)

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
        {GLYPHS[name].shapes.map((shape, i) => (
          <Fragment key={i}>{renderShape(shape, accent)}</Fragment>
        ))}
      </g>
    </svg>
  )
}

function renderShape(shape: Shape, accent?: string): React.ReactElement {
  switch (shape.kind) {
    case 'ellipse':
      return (
        <ellipse
          rx={shape.rx}
          ry={shape.ry}
          transform={shape.rotate ? `rotate(${shape.rotate})` : undefined}
        />
      )
    case 'circle':
      return (
        <circle
          r={shape.r}
          cx={shape.cx}
          cy={shape.cy}
          fill={shape.solid ? (accent ?? 'currentColor') : undefined}
          stroke={shape.solid ? 'none' : undefined}
          strokeDasharray={shape.dash}
        />
      )
    case 'line':
      return <line x1={shape.x1} y1={shape.y1} x2={shape.x2} y2={shape.y2} />
    case 'path':
      return <path d={shape.d} />
  }
}
