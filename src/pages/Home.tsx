import { Link } from 'react-router-dom'
import { Glyph } from '../brand/Glyph'
import type { GlyphName } from '../brand/glyphs'
import { BookButton } from '../components/BookButton'
import { HeroSequence } from '../components/HeroSequence'
import { Lines } from '../components/Lines'
import { SectionLabel } from '../components/SectionLabel'
import { CATALOG_ANCHOR, pathFor } from '../routes'
import { useSite } from '../site-context'

/**
 * Home en ocho bloques: hero, prueba, situación reconocible, catálogo, cómo
 * trabajamos, qué se gana, casos, equipo y cierre.
 *
 * El orden no es narrativo sino comercial: la prueba va arriba porque quien
 * evalúa un proveedor decide la credibilidad antes de leer la oferta, y las
 * situaciones van antes que el catálogo porque nadie compra un producto que
 * no sabe a qué problema suyo corresponde.
 *
 * El método y lo que se gana van después del catálogo y no antes: primero se
 * ve qué se compra, después cómo se hace y qué deja. El esquema del núcleo
 * cierra los casos, que son ese mismo esquema en obra.
 */

/**
 * Un glifo por velocidad del catálogo, en el orden en que se declaran.
 *
 * Va por posición y no por un campo en `i18n/`: cuál glifo nombra qué grupo es
 * una decisión de la marca, no de la traducción, y no debe poder divergir
 * entre español e inglés.
 *
 * La anomalía nombra los productos-caja —la señal que aparece antes que
 * nadie—, la triada los productos-capacidad —las tres cosas que quedan
 * instaladas— y la secante el comprador individual, que corta transversal al
 * catálogo organizacional.
 */
const SPEED_GLYPHS: readonly GlyphName[] = ['anomalia', 'nmu', 'hipotesis']

export function Home() {
  const { locale, t } = useSite()
  const c = t.home
  const casesPath = pathFor(locale, 'cases')
  const productsPath = pathFor(locale, 'products')
  const teamPath = pathFor(locale, 'team')

  return (
    <>
      {/* 01 · HERO */}
      <HeroSequence>
        <div className="hero-left">
          <div className="kicker mono">{c.hero.kicker}</div>
          <h1>
            <Lines lines={c.hero.titleLines} />
          </h1>
        </div>
        <div className="hero-right">
          <p className="claim">{c.hero.sub}</p>
          <BookButton />
          <p className="microcopy mono">{c.hero.microcopy}</p>
        </div>
      </HeroSequence>

      {/* 02 · PRUEBA · las credenciales antes que la oferta */}
      <section className="prueba">
        <div className="wrap">
          <div className="prueba-label mono">{c.proof.label}</div>
          <ul className="prueba-list">
            {c.proof.items.map((item) => (
              <li className="pruebai" key={item.name}>
                <span className="pin">{item.name}</span>
                <span className="pit">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 03 · SITUACIÓN RECONOCIBLE */}
      <section className="situaciones" id="situaciones">
        <div className="wrap">
          <h2>{c.situations.h2}</h2>
          <p className="ssub">{c.situations.sub}</p>
          <SectionLabel label={c.situations.label} />

          <div className="sit-head mono" aria-hidden="true">
            {c.situations.heads.map((head) => (
              <span key={head}>{head}</span>
            ))}
          </div>
          <div className="sit-list">
            {c.situations.rows.map((row) => (
              <div className="sitrow" key={row.situation}>
                <p className="sit-q">{row.situation}</p>
                <p className="sit-d">{row.problem}</p>
                <p className="sit-i">{row.proposal}</p>
              </div>
            ))}
          </div>

          <p className="sclose">{c.situations.close}</p>
        </div>
      </section>

      {/* 04 · EL CATÁLOGO */}
      <section className="catalogo invert" id={CATALOG_ANCHOR[locale]}>
        <div className="wrap">
          <h2>{c.catalog.h2}</h2>
          <p className="csub">{c.catalog.sub}</p>
          <SectionLabel label={c.catalog.label} />

          {c.catalog.speeds.map((speed, i) => (
            <div className="velocidad" key={speed.key}>
              <div className="vel-head">
                <Glyph name={SPEED_GLYPHS[i]} size={42} className="vel-glyph" />
                <div>
                  <div className="vel-name">{speed.name}</div>
                  <p className="vel-note">{speed.note}</p>
                </div>
              </div>
              <ul className="prod-list">
                {speed.products.map((p) => (
                  <li className="prod" key={p.name}>
                    <Link className="prod-name" to={productsPath}>
                      {p.name}
                    </Link>
                    <p className="prod-text">{p.text}</p>
                    <span className="prod-dur mono">{p.duration}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}


          <Link className="puente-link mono" to={productsPath}>
            {c.catalog.cta}
          </Link>
        </div>
      </section>

      {/* 05 · CÓMO TRABAJAMOS · las tres etapas del núcleo */}
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

      {/* 06 · QUÉ SE GANA · con la evidencia y sus límites declarados */}
      <section className="valor" id="valor">
        <div className="wrap">
          <div className="kicker mono">{c.value.kicker}</div>
          <h2>{c.value.h2}</h2>
          <p className="vsub">{c.value.sub}</p>
          <SectionLabel label={c.value.label} />

          <div className="ganancias">
            {c.value.items.map((item) => (
              <div className="ganancia" key={item.title}>
                <h3 className="gttl">{item.title}</h3>
                <p className="gtxt">{item.text}</p>
              </div>
            ))}
          </div>

          {/* La evidencia va con su límite pegado —«son asociaciones, no
              promesas»— y las fuentes citadas. Sin eso, las cifras leen como
              una promesa de resultado que el Lab no puede firmar. */}
          <div className="caja">
            <p>{c.value.evidence.text}</p>
            <p className="fuentes mono">{c.value.evidence.sources}</p>
          </div>
        </div>
      </section>

      {/* 07 · CASOS */}
      <section className="casos-home" id="casos">
        <div className="wrap">
          <h2>{c.cases.h2}</h2>
          <p className="csub">{c.cases.sub}</p>
          <div className="tarjetas">
            {c.cases.cards.map((card) => (
              <Link className="tarjeta" key={card.n} to={casesPath}>
                <span className="tnum mono">{card.n}</span>
                <div className="tttl">{card.title}</div>
                <p className="tproof">{card.proof}</p>
                <span className="tarrow mono">→</span>
              </Link>
            ))}
          </div>
          <Link className="puente-link mono" to={casesPath}>
            {c.cases.cta}
          </Link>

          {/* El esquema del núcleo cierra los casos: son el mismo diagrama en
              obra. Va a ancho completo y con figcaption porque el dibujo no se
              explica solo, y con loading diferido por estar bajo el pliegue. */}
          <figure className="esquema">
            <img
              src="/image/nucleo-metodo.svg"
              alt={c.cases.figureAlt}
              width={1640}
              height={980}
              loading="lazy"
              decoding="async"
            />
            <figcaption>{c.cases.figureCaption}</figcaption>
          </figure>
        </div>
      </section>

      {/* 08 · EQUIPO */}
      <section className="equipo" id="equipo">
        <div className="wrap">
          <h2>{c.team.h2}</h2>
          <p className="qsub">{c.team.sub}</p>
          <SectionLabel label={c.team.label} />
          <div className="personas">
            {c.team.members.map((m) => (
              <div className="persona" key={m.name}>
                <div className="qname">{m.name}</div>
                <div className="qrole mono">{m.role}</div>
                <p className="qdesc">{m.text}</p>
              </div>
            ))}
          </div>
          <Link className="puente-link mono" to={teamPath}>
            {c.team.cta}
          </Link>
        </div>
      </section>

      {/* 09 · CIERRE */}
      <section className="cierre">
        <div className="wrap">
          <h2>{c.closing.h2}</h2>
          <p>{c.closing.body}</p>
          <div className="cta-row">
            <BookButton label={c.closing.cta} />
          </div>
        </div>
      </section>
    </>
  )
}
