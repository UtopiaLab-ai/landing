import { Link } from 'react-router-dom'
import { Wordmark } from '../brand/Wordmark'
import { CONTENT, LOCALES } from '../i18n'
import { pathFor } from '../routes'

/**
 * La página 404. Antes cualquier URL inexistente redirigía a la home con JS y
 * respondía 200, que Google cuenta como «soft 404». Ahora el build la
 * prerenderiza como `404.html` y el servidor la entrega con estado 404.
 *
 * Es bilingüe porque una dirección que no existe no dice en qué idioma venía
 * quien llegó: se ofrecen los dos inicios. Un solo `h1`, el del idioma por
 * defecto.
 *
 * Va dentro de `.site`, igual que las demás páginas: sin ese marco el texto en
 * tinta queda sobre el fondo negro del `body` y no se ve.
 */
export function NotFound() {
  return (
    <div className="site">
      <main className="notfound">
        <Link className="brand" to={pathFor('es', 'home')}>
          <Wordmark size={40} />
        </Link>
        {LOCALES.map((code, i) => {
          const nf = CONTENT[code].common.notFound
          const Heading = i === 0 ? 'h1' : 'h2'
          return (
            <section className="nf-block" lang={code} key={code}>
              <Heading>{nf.title}</Heading>
              <p>{nf.text}</p>
              <Link className="puente-link mono" to={pathFor(code, 'home')}>
                {nf.cta} →
              </Link>
            </section>
          )
        })}
      </main>
    </div>
  )
}
