import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Glyph } from '../brand/Glyph'
import type { GlyphName } from '../brand/glyphs'
import { BookButton } from '../components/BookButton'
import { HeroSequence } from '../components/HeroSequence'
import { Lines } from '../components/Lines'
import { Rich } from '../components/Rich'
import { SectionLabel } from '../components/SectionLabel'
import { CATALOG_ANCHOR, pathFor } from '../routes'
import type { Locale } from '../i18n'
import { useSite } from '../site-context'

/**
 * Home en siete bloques: hero, situación reconocible, catálogo, qué se gana,
 * casos, equipo y cierre.
 *
 * El orden no es narrativo sino comercial: las situaciones van antes que el
 * catálogo porque nadie compra un producto que no sabe a qué problema suyo
 * corresponde, y las credenciales quedaron para la página de Equipo, donde se
 * pueden dar con la trayectoria completa en vez de como una franja de logos.
 *
 * El método completo —las tres etapas y el esquema del núcleo— vive en
 * /casos: el dibujo y el caso son la misma cosa vista dos veces, y contarlos
 * separados obligaba a explicar el esquema en dos páginas.
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

/**
 * Logos de las instituciones citadas en la evidencia, en el orden en que
 * aparecen en el texto. Cada uno enlaza a la misma fuente que su frase.
 *
 * Van acá y no en `i18n/` por la misma razón que los glifos: qué logo se
 * muestra es una decisión de marca. Lo único que cambia por idioma es la
 * versión de la CEPAL, que publica su logo en español y en inglés (ECLAC).
 * Rohrbeck y Kum no tienen logo: son autores de un artículo académico, no una
 * institución.
 *
 * `w` y `h` son las proporciones del viewBox de cada SVG, para reservar el
 * espacio antes de que cargue la imagen.
 */
const SOURCE_LOGOS: Record<
  Locale,
  readonly { name: string; src: string; href: string; w: number; h: number; height: number }[]
> = (() => {
  const mckinsey = {
    src: '/image/fuentes/mckinsey.svg',
    href: 'https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/decision-making-in-the-age-of-urgency',
    w: 38.883,
    h: 12,
    height: 34,
  }
  const cepalHref =
    'https://www.cepal.org/es/publicaciones/40623-planificacion-prospectiva-la-construccion-futuro-america-latina-caribe-textos'
  const ocde = {
    src: '/image/fuentes/ocde.svg',
    href: 'https://doi.org/10.1787/1d78c791-en',
    w: 629,
    h: 199,
    height: 30,
  }
  return {
    es: [
      { name: 'McKinsey & Company', ...mckinsey },
      { name: 'CEPAL', src: '/image/fuentes/cepal.svg', href: cepalHref, w: 442.5, h: 542, height: 72 },
      { name: 'OCDE', ...ocde },
    ],
    en: [
      { name: 'McKinsey & Company', ...mckinsey },
      { name: 'ECLAC', src: '/image/fuentes/eclac.svg', href: cepalHref, w: 362, h: 473.3, height: 72 },
      { name: 'OECD', ...ocde },
    ],
  }
})()

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

      {/* 02 · SITUACIÓN RECONOCIBLE */}
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

      {/* 03 · EL CATÁLOGO */}
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

      {/* 04 · QUÉ SE GANA · con la evidencia y sus límites declarados */}
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
          <div className="caja caja-fuentes">
            <div>
              <p>
                <Rich text={c.value.evidence.text} />
              </p>
              <p className="fuentes mono">
                <Rich text={c.value.evidence.sources} />
              </p>
            </div>
            <ul className="logos-fuentes">
              {SOURCE_LOGOS[locale].map((logo) => (
                <li key={logo.name}>
                  <a href={logo.href} target="_blank" rel="noopener noreferrer">
                    {/* La altura va como variable y no fija en CSS: cada logo
                        tiene la suya, y en móvil se escalan todas juntas. */}
                    <img
                      src={logo.src}
                      alt={logo.name}
                      width={Math.round((logo.height * logo.w) / logo.h)}
                      height={logo.height}
                      style={{ '--h': `${logo.height}px` } as CSSProperties}
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 05 · CASOS */}
      <section className="casos-home" id="casos">
        <div className="wrap">
          <h2>{c.cases.h2}</h2>
          {/* Con un caso publicado la grilla de tres columnas dejaría la
              tarjeta ocupando un tercio del ancho y dos huecos al lado. La
              clase lo declara acá y no en el CSS porque depende del contenido,
              que cambia cuando se publica el siguiente caso. */}
          <div className={c.cases.cards.length === 1 ? 'tarjetas una' : 'tarjetas'}>
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

      {/* 06 · EQUIPO */}
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
                {m.profile && (
                  <a
                    className="perfil mono"
                    href={m.profile}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                )}
              </div>
            ))}
          </div>
          <Link className="puente-link mono" to={teamPath}>
            {c.team.cta}
          </Link>
        </div>
      </section>

      {/* 07 · CIERRE */}
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
