import { Link } from 'react-router-dom'
import { Wordmark } from '../brand/Wordmark'
import { pathFor } from '../routes'
import { useSite } from '../site-context'
import { BookButton } from './BookButton'
import { LangSwitch } from './LangSwitch'
import { NavIcon } from './NavIcon'

/**
 * Barra flotante: la marca a la izquierda, la navegación en una píldora al
 * centro y el idioma a la derecha. Flota sobre el contenido en vez de empujarlo,
 * para que el hero ocupe la pantalla completa.
 *
 * Tres puertas y el CTA. Quien llega a evaluar un proveedor necesita saber qué
 * se vende, dónde se ha ejecutado y quién lo hace — nada más en la barra.
 *
 * Inicio va explícito y no solo bajo la marca: el logo como única vuelta atrás
 * es una convención que hay que conocer, y desde una interior no hay ninguna
 * otra manera de volver a la home.
 *
 * En pantallas chicas la navegación baja a una barra inferior fija, de una sola
 * fila y con íconos, como la de una app; la marca y el idioma se quedan arriba
 * y se van con el scroll.
 */
const NAV_PAGES = ['home', 'products', 'cases', 'team'] as const

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
            <NavIcon name={key} />
            <span className="nav-label">{t.common.nav[key]}</span>
          </Link>
        ))}
        <BookButton className="nav-cta" label={t.common.bookShort} />
      </nav>

      <LangSwitch />
    </header>
  )
}
