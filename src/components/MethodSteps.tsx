import type { CSSProperties } from 'react'
import { Glyph } from '../brand/Glyph'
import type { LexiconName } from '../brand/glyphs'

/**
 * Código de color del léxico (dossier de marca, «Léxico aplicado»): turquesa
 * observación, naranja alerta, azul decisión. El trazo queda siempre en tinta y
 * el color vive solo en el punto de señal; sin color la pieza se sigue leyendo,
 * porque el tamaño del punto ya dice el estatuto.
 */
export const TONE = {
  observation: 'var(--agua)',
  alert: 'var(--sol)',
  decision: 'var(--arco)',
} as const

/**
 * El glifo y el color de cada etapa del núcleo, por posición. Van acá y no en
 * `i18n/`: son decisiones de marca y no pueden divergir entre idiomas.
 *
 * Los colores son los de la cadena completa: el umbral es lo que cruza a
 * alerta, y la bifurcación no tiene estatuto de alerta propio, así que su punto
 * va en tinta. Así el naranja marca un solo momento: cuando hay que revisar.
 */
const STEP_MARKS: readonly { glyph: LexiconName; tone: string }[] = [
  { glyph: 'senal', tone: TONE.observation },
  { glyph: 'umbral', tone: TONE.alert },
  { glyph: 'bifurcacion', tone: 'currentColor' },
  { glyph: 'decision', tone: TONE.decision },
]

/**
 * Las cuatro etapas del núcleo. Las usan la home —«Qué hacemos distinto», una
 * línea por etapa— y /casos, que las desarrolla y las ancla al esquema. Es un
 * solo componente para que las dos páginas no puedan dibujar ni nombrar el
 * método de dos maneras.
 *
 * `markerLabel` es opcional porque solo /casos muestra el esquema al que remite
 * el marcador; en la home no hay dibujo que señalar.
 */
export function MethodSteps({
  steps,
  markerLabel,
}: {
  steps: readonly { n: string; title: string; text: string; marker?: string }[]
  markerLabel?: string
}) {
  return (
    <ol className="etapas">
      {steps.map((step, i) => {
        const mark = STEP_MARKS[i]
        return (
          <li className="etapa" key={step.n} style={{ '--tone': mark.tone } as CSSProperties}>
            <Glyph name={mark.glyph} size={56} accent="var(--tone)" className="eglyph" />
            <span className="enum mono">{step.n}</span>
            <h3 className="ettl">{step.title}</h3>
            <p className="etxt">{step.text}</p>
            {markerLabel && step.marker && (
              <p className="emark mono">
                <span className="crl">{markerLabel}</span> {step.marker}
              </p>
            )}
          </li>
        )
      })}
    </ol>
  )
}
