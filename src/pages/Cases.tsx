import type { CSSProperties } from 'react'
import { Glyph } from '../brand/Glyph'
import { LEXICON_NAMES, type LexiconName } from '../brand/glyphs'
import { Lines } from '../components/Lines'
import { SectionLabel } from '../components/SectionLabel'
import { useSite } from '../site-context'

/**
 * Los casos en la anatomía del case study: contexto, problema, intervención,
 * resultado y prueba.
 *
 * `proof` es opcional a propósito. Un caso sin tercero que lo confirme se
 * publica igual, pero con el campo ausente y su estado a la vista: rellenarlo
 * con una frase de relleno sería convertir la prueba en claim, que es
 * exactamente lo que esta página existe para evitar.
 *
 * El esquema del núcleo cierra la página, debajo de las tres etapas del
 * método: el dibujo nombra los mismos tres puntos —señal, bifurcación,
 * ventana—, así que leerlo antes de las etapas obligaba a explicarlo dos
 * veces. Primero el caso, después el método y al final el dibujo que lo
 * resume.
 */
/**
 * Código de color del léxico (dossier de marca, «Léxico aplicado»): turquesa
 * observación, naranja alerta, azul decisión. El trazo queda siempre en tinta y
 * el color vive solo en el punto de señal; sin color la pieza se sigue leyendo,
 * porque el tamaño del punto ya dice el estatuto.
 */
const TONE = {
  observation: 'var(--agua)',
  alert: 'var(--sol)',
  decision: 'var(--arco)',
} as const

/**
 * El glifo y el color de cada etapa del método, por posición. Van acá y no en
 * `i18n/`: son decisiones de marca y no pueden divergir entre idiomas.
 */
const STEP_MARKS: readonly { glyph: LexiconName; tone: string }[] = [
  { glyph: 'senal', tone: TONE.observation },
  { glyph: 'bifurcacion', tone: TONE.alert },
  { glyph: 'decision', tone: TONE.decision },
]

/**
 * El color de cada eslabón de la cadena. Los que no aparecen van con el punto
 * en tinta: etapa sin estatuto de alerta asignado.
 */
const CHAIN_TONES: Partial<Record<LexiconName, string>> = {
  senal: TONE.observation,
  umbral: TONE.alert,
  convergencia: TONE.alert,
  decision: TONE.decision,
  ajuste: TONE.observation,
}

export function Cases() {
  const { t } = useSite()
  const c = t.cases

  return (
    <>
      <section className="hero invert hero-trama">
        {/* Trama «campo de puntos + señal» del dossier (8a). La portadilla es
            uno de los pocos lugares donde el manual deja usar la trama. */}
        <div className="trama" aria-hidden="true">
          <Glyph name="senal" size={360} accent="var(--sol)" className="trama-campo" />
        </div>
        <div className="wrap">
          <div className="kicker mono">{c.kicker}</div>
          <h1>
            <Lines lines={c.titleLines} />
          </h1>
          <p className="sub">{c.sub}</p>
        </div>
      </section>

      {/* LOS CASOS */}
      <section className="casos" id="casos">
        <div className="wrap">
          <SectionLabel label={c.casesLabel} />
          <div className="caso-list">
            {c.cases.map((caso) => (
              <div className="caso" key={caso.n}>
                <div className="caso-meta">
                  <span className="op">{caso.n}</span>
                  <span className="dim">{caso.subtitle}</span>
                  {caso.status && <span className="estado">{caso.status}</span>}
                </div>
                <div className="caso-body">
                  <h3 className="ttl">{caso.title}</h3>
                  <dl className="anat">
                    <dt className="mono">{c.contextLabel}</dt>
                    <dd>{caso.context}</dd>
                    <dt className="mono">{c.problemLabel}</dt>
                    <dd>{caso.problem}</dd>
                    <dt className="mono">{c.workLabel}</dt>
                    <dd>{caso.work}</dd>
                    <dt className="mono">{c.resultLabel}</dt>
                    <dd>{caso.result}</dd>
                  </dl>
                  {caso.proof && (
                    <p className="probado">
                      <span className="pl mono">{c.proofLabel}</span> {caso.proof}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="nota mono">{c.note}</p>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS · las tres etapas del núcleo */}
      <section className="metodo" id="metodo">
        <div className="wrap">
          <div className="kicker mono">{c.method.kicker}</div>
          <h2>{c.method.h2}</h2>
          <p className="msub">{c.method.sub}</p>
          <SectionLabel label={c.method.label} />

          <ol className="etapas">
            {c.method.steps.map((step, i) => (
              <li
                className="etapa"
                key={step.n}
                style={{ '--tone': STEP_MARKS[i].tone } as CSSProperties}
              >
                <Glyph name={STEP_MARKS[i].glyph} size={56} accent="var(--tone)" className="eglyph" />
                <span className="enum mono">{step.n}</span>
                <h3 className="ettl">{step.title}</h3>
                <p className="etxt">{step.text}</p>
                <p className="emark mono">
                  <span className="crl">{c.method.markerLabel}</span> {step.marker}
                </p>
              </li>
            ))}
          </ol>

          <p className="mclose">{c.method.close}</p>

          {/* La cadena completa del léxico: once glifos, uno por operación.
              Las tres etapas de arriba son tres de sus eslabones. */}
          <div className="cadena">
            <SectionLabel label={c.method.chain.label} />
            <p className="cintro">{c.method.chain.intro}</p>
            <ol className="eslabones">
              {LEXICON_NAMES.map((name) => (
                <li className="eslabon" key={name}>
                  <Glyph name={name} size={56} accent={CHAIN_TONES[name]} />
                  <span className="mono">{c.method.chain.stages[name]}</span>
                </li>
              ))}
            </ol>
            <div className="cadena-pie mono">
              <ul className="leyenda">
                {(['observation', 'alert', 'decision'] as const).map((key) => (
                  <li key={key}>
                    <Glyph name="senal" size={21} accent={TONE[key]} />
                    {c.method.chain.legend[key]}
                  </li>
                ))}
              </ul>
              <span>{c.method.chain.returnNote}</span>
            </div>
          </div>

          {/* El esquema va a ancho completo y con figcaption porque el dibujo
              no se explica solo, y con carga diferida por estar al final de
              la página. */}
          <figure className="esquema">
            <img
              src="/image/nucleo-metodo.svg"
              alt={c.figureAlt}
              width={1640}
              height={980}
              loading="lazy"
              decoding="async"
            />
            <figcaption>{c.figureCaption}</figcaption>
          </figure>
        </div>
      </section>
    </>
  )
}
