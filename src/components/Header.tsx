import { useEffect, useState } from 'react'
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
 *
 * Inicio va explícito y no solo bajo la marca: el logo como única vuelta atrás
 * es una convención que hay que conocer, y desde una interior no hay ninguna
 * otra manera de volver a la home.
 *
 * Completa solo arriba de todo. Apenas se hace scroll queda compacta —la marca
 * y el CTA, nada más—: mientras se lee, la barra entera tapa contenido y lo
 * único que tiene que seguir a mano es la acción. Al volver arriba reaparecen
 * la navegación y el idioma.
 */
const NAV_PAGES = ['home', 'products', 'cases', 'team'] as const

/** Px de scroll desde los que la barra pasa a compacta. */
const COMPACT_AFTER = 8

/**
 * Si la página ya se movió. React descarta el `setState` cuando el valor no
 * cambia, así que el listener no re-renderiza en cada evento de scroll.
 */
function useScrolled(threshold: number) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > threshold)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [threshold])

  return scrolled
}

export function Header() {
  const { locale, page, t } = useSite()
  const home = pathFor(locale, 'home')
  const compact = useScrolled(COMPACT_AFTER)

  return (
    <header className={compact ? 'is-compact' : undefined}>
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
