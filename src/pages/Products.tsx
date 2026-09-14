import { ExploreButton } from '../components/ExploreButton'
import { Lines } from '../components/Lines'
import { Rich } from '../components/Rich'
import { SectionLabel } from '../components/SectionLabel'
import { Trama } from '../components/Trama'
import { useSite } from '../site-context'

/**
 * El catálogo cerrado. Reemplaza a la antigua página de servicios, cuyos
 * "cuatro tramos" eran uno de los cinco listados que el sistema comercial
 * consolidó en éste.
 *
 * Las velocidades van marcadas a propósito y no se aplanan: los
 * productos-caja producen análisis, los productos-capacidad instalan
 * capacidad y los de acceso a la Máquina dejan la memoria y la vigilancia
 * operando dentro de la organización. Colgarle a un grupo la promesa de otro
 * sería prometer lo que no hace.
 *
 * El bloque de estado va inmediatamente después de las fichas porque los
 * productos de la Máquina están en piloto, y eso tiene que leerse junto a
 * ellos y no en letra chica.
 */
export function Products() {
  const { t } = useSite()
  const c = t.products

  return (
    <>
      <section className="hero invert hero-trama">
        <Trama variant="escalera" />
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
        </div>
      </section>

      {/* LA ESCALERA */}
      <section className="escalera" id="escalera">
        <div className="wrap">
          <SectionLabel label={c.ladderLabel} />
          <p className="tintro">{c.ladderIntro}</p>
          <div className="pasos">
            {c.ladder.map((step) => (
              <div className="paso" key={step.n}>
                <span className="pnum mono">{step.n}</span>
                <div className="pttl">{step.name}</div>
                <p className="pdesc">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAS FICHAS */}
      <section className="tramos" id="productos">
        <div className="wrap">
          <SectionLabel label={c.productsLabel} />

          {c.speeds.map((speed) => (
            <div className="grupo" key={speed.key}>
              <div className="grupo-head">
                <h2 className="gname">{speed.name}</h2>
                <p className="gnote">{speed.note}</p>
              </div>

              {speed.products.map((p) => (
                <article className="tramo" key={p.n}>
                  <div className="tramo-meta">
                    <span className="rnum mono">{p.n}</span>
                    <h3 className="rname">{p.name}</h3>
                  </div>
                  <div className="tramo-body">
                    <p className="rdef">{p.def}</p>
                    <p className="rdesc">{p.text}</p>
                    <dl className="ficha mono">
                      <dt>{c.triggerLabel}</dt>
                      <dd>{p.trigger}</dd>
                      <dt>{c.deliverableLabel}</dt>
                      <dd>{p.deliverable}</dd>
                      <dt>{c.durationLabel}</dt>
                      <dd>{p.duration}</dd>
                      <dt>{c.stepLabel}</dt>
                      <dd>{p.step}</dd>
                    </dl>
                    {p.demo && <ExploreButton note={t.common.atalaya.productNote} />}
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ESTADO DE LA MÁQUINA · en piloto, no como servicio maduro */}
      <section className="horizonte" id="horizonte">
        <div className="wrap">
          <SectionLabel label={c.horizon.label} />
          <div className="hz">
            <div className="hz-tag mono">{c.horizon.tag}</div>
            <h2 className="hz-name">{c.horizon.name}</h2>
            <p className="hz-text">{c.horizon.text}</p>
            <p className="hz-state mono">
              <span className="crl">{c.horizon.stateLabel}</span> {c.horizon.state}
            </p>
          </div>
        </div>
      </section>

      {/* CÓMO SE CONTRATA */}
      <section className="contratacion" id="contratacion">
        <div className="wrap">
          <SectionLabel label={c.contracting.label} />
          <h2>{c.contracting.h2}</h2>
          <p className="tintro">{c.contracting.intro}</p>
          <div className="reglas">
            {c.contracting.items.map((item) => (
              <div className="regla" key={item.title}>
                <div className="rname">{item.title}</div>
                <p className="rdesc">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="nota mono">{c.contracting.priceNote}</p>

          {/* La condición de neutralidad vive acá y no en el Home: es parte de
              lo que se firma, y quien la necesita la busca junto al resto de
              las reglas de contratación. */}
          <div className="caja">
            <div className="tag mono">{c.neutrality.tag}</div>
            <p>{c.neutrality.text}</p>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES · respuestas directas, también en el JSON-LD */}
      <section className="contratacion faq" id="preguntas">
        <div className="wrap">
          <SectionLabel label={c.faq.label} />
          <h2>{c.faq.h2}</h2>
          <div className="reglas">
            {c.faq.items.map((item) => (
              <div className="regla" key={item.q}>
                <h3 className="rname">{item.q}</h3>
                <p className="rdesc">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
