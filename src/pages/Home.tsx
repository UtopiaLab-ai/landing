import type { CSSProperties } from 'react'
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
 * Home en nueve bloques, en el orden del buyer journey: hero, prueba,
 * situación reconocible, catálogo, para quién, casos, equipo, objeciones y
 * cierre.
 *
 * El orden no es narrativo sino comercial: la prueba va arriba porque quien
 * evalúa un proveedor decide la credibilidad antes de leer la oferta, y las
 * situaciones van antes que el catálogo porque nadie compra un producto que
 * no sabe a qué problema suyo corresponde.
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
      {/* 01 · HERO · el paisaje en movimiento, señal → decisión → capacidad */}
      <HeroSequence frames={c.hero.frames}>
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
                <p className="sit-d">{row.doing}</p>
                <p className="sit-i">{row.installed}</p>
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

      {/* 05 · PARA QUIÉN · los seis compradores son un mazo: cada carta queda
          fija mientras la siguiente la tapa, así se lee un comprador a la vez.

          Van los seis en una sola baraja porque el h2 promete «seis
          compradores» y la sección los partía en dos bloques con forma
          distinta —dos carriles anchos y cuatro tarjetas chicas—, que se leía
          como dos listas y no como un catálogo de seis. El grupo del que viene
          cada carta no se pierde: va como rótulo arriba, junto al número.

          El orden es el de venta —primero los dos con demanda observada,
          después los cuatro que son apuesta— y es el que dice el propio
          rótulo de sección, «Señal fuerte primero».

          El apilado es CSS puro; acá solo se pasa el índice de la carta, que
          es lo que escalona su tope. */}
      <section className="publicos" id="publicos">
        <div className="wrap">
          <h2>{c.audience.h2}</h2>
          <p className="asub">{c.audience.sub}</p>
          <SectionLabel label={c.audience.label} />

          <div className="aud-stack">
            {c.audience.strong.tracks.map((track, i) => (
              <article
                className="aud-card"
                key={track.n}
                style={{ '--i': i } as CSSProperties}
              >
                <div className="aud-top">
                  <span className="aud-n mono">{track.n}</span>
                  <span className="aud-kind mono">{c.audience.strong.tag}</span>
                </div>

                <div className="aud-ttl">{track.title}</div>

                <div className="aud-body">
                  <p className="aud-desc">{track.text}</p>
                  <div className="aud-refs">
                    <p className="cref mono">
                      <span className="crl">{track.entryLabel}</span> {track.entry}
                    </p>
                    <p className="cref mono">
                      <span className="crl">{track.anchorLabel}</span> {track.anchor}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            {/* La numeración sigue corrida desde los carriles: es un mazo de
                seis, no cuatro cartas aparte. */}
            {c.audience.others.items.map((item, i) => {
              const n = c.audience.strong.tracks.length + i
              return (
                <article
                  className="aud-card aud-card-weak"
                  key={item.name}
                  style={{ '--i': n } as CSSProperties}
                >
                  <div className="aud-top">
                    <span className="aud-n mono">{String(n + 1).padStart(2, '0')}</span>
                    <span className="aud-kind mono">{c.audience.others.tag}</span>
                  </div>

                  <div className="aud-ttl">{item.name}</div>

                  <div className="aud-body">
                    <p className="aud-desc">{item.text}</p>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="caja">
            <div className="tag mono">{c.audience.neutrality.tag}</div>
            <p>{c.audience.neutrality.text}</p>
          </div>
        </div>
      </section>

      {/* 06 · CASOS */}
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
        </div>
      </section>

      {/* 07 · EQUIPO */}
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

      {/* 08 · OBJECIONES */}
      <section className="objeciones">
        <div className="wrap">
          <h2>{c.objections.h2}</h2>
          <SectionLabel label={c.objections.label} />
          <div className="faq">
            {c.objections.items.map((item) => (
              <div className="pregunta" key={item.id} id={item.id}>
                <div className="q">{item.q}</div>
                <p className="a">{item.a}</p>
              </div>
            ))}
          </div>
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
