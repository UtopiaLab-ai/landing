import { Lines } from '../components/Lines'
import { Rich } from '../components/Rich'
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
 * El esquema del núcleo va arriba, apenas dicho qué es un caso, y las tres
 * etapas del método cierran abajo: primero el dibujo, después el caso que lo
 * recorre y al final el método que lo produjo.
 */
export function Cases() {
  const { t } = useSite()
  const c = t.cases

  return (
    <>
      <section className="hero invert">
        <div className="wrap">
          <div className="kicker mono">{c.kicker}</div>
          <h1>
            <Lines lines={c.titleLines} />
          </h1>
          <p className="sub">{c.sub}</p>
        </div>
      </section>

      <section className="intro">
        <div className="wrap">
          <p className="lead">
            <Rich text={c.lead} />
          </p>

          {/* El esquema va a ancho completo y con figcaption porque el dibujo
              no se explica solo, y con carga diferida por estar bajo el
              pliegue. */}
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

      {/* PLANTILLA */}
      <section className="plantilla" id="plantilla">
        <div className="wrap">
          <SectionLabel label={c.templateLabel} />
          <p className="tintro">{c.templateIntro}</p>
          <div className="pasos">
            {c.templateSteps.map((step) => (
              <div className="paso" key={step.n}>
                <span className="pnum mono">{step.n}</span>
                <div className="pttl">{step.title}</div>
                <p className="pdesc">{step.text}</p>
              </div>
            ))}
          </div>
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
            {c.method.steps.map((step) => (
              <li className="etapa" key={step.n}>
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
        </div>
      </section>
    </>
  )
}
