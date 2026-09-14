import { Link } from 'react-router-dom'
import { Wordmark } from '../brand/Wordmark'
import { CONTACT_EMAIL, COPYRIGHT_YEAR, SITE_DOMAIN } from '../config'
import { pathFor } from '../routes'
import { useSite } from '../site-context'
import { BookButton } from './BookButton'

/**
 * El pie repite las tres puertas y publica el correo.
 *
 * El correo no es redundante con la agenda: una municipalidad que prepara
 * bases de licitación necesita un canal escrito, y no va a reservar una hora
 * en un calendario para mandar una consulta administrativa.
 */
const FOOT_PAGES = ['products', 'cases', 'team'] as const

export function Footer() {
  const { locale, page, t } = useSite()

  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-mark">
            <Wordmark size={72} />
          </div>
          <div className="foot-nav mono">
            {FOOT_PAGES.map((key) => (
              <Link
                key={key}
                to={pathFor(locale, key)}
                aria-current={page === key ? 'page' : undefined}
              >
                {t.common.nav[key]}
              </Link>
            ))}
            <a href={`mailto:${CONTACT_EMAIL}`}>{t.common.footer.emailLabel}</a>
          </div>
        </div>

        {/* La frase que define la entidad, literal: es lo que buscadores y LLM
            necesitan leer para saber qué es utopialab.ai. Va en el pie para
            estar en todas las páginas sin competir con el titular. */}
        <p className="foot-about">{t.common.about}</p>

        {/* En la home el bloque de cierre ya lleva el CTA: no se repite aquí. */}
        {page !== 'home' && <BookButton tone="papel" className="foot-book" />}

        <div className="foot-rule" />
        <div className="foot-bot mono">
          <span>
            {SITE_DOMAIN} © {COPYRIGHT_YEAR}
          </span>
          <span>
            {t.common.footer.location} · <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
