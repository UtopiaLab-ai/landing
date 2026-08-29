import { Link } from 'react-router-dom'
import { Wordmark } from '../brand/Wordmark'
import { pathFor } from '../routes'
import { useSite } from '../site-context'
import { BookButton } from './BookButton'
import { LangSwitch } from './LangSwitch'

/**
 * Barra flotante: la marca a la izquierda, la navegación en una píldora al
 * centro y el idioma a la derecha. Flota sobre el contenido en vez de empujarlo,
 * para que el hero ocupe la pantalla completa.
 *
 * Tres puertas y el CTA. Quien llega a evaluar un proveedor necesita saber qué
 * se vende, dónde se ha ejecutado y quién lo hace — nada más en la barra.
 */
const NAV_PAGES = ['products', 'cases', 'team'] as const

export function Header() {
  const { locale, page, t } = useSite()
  const home = pathFor(locale, 'home')

  return (
    <header>
      <Link className="brand" to={home}>
        <Wordmark size={40} />
      </Link>

      <nav className="nav mono">
        {NAV_PAGES.map((key) => (
          <Link
            key={key}
            to={pathFor(locale, key)}
            aria-current={page === key ? 'page' : undefined}
          >
            {t.common.nav[key]}
          </Link>
        ))}
        <BookButton className="nav-cta" label={t.common.bookShort} badge={false} />
      </nav>

      <LangSwitch />
    </header>
  )
}
