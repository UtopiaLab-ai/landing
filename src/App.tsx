import { useEffect } from 'react'
import type { ComponentType } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import type { Locale } from './i18n'
import { CONTENT, DEFAULT_LOCALE } from './i18n'
import { Cases } from './pages/Cases'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Products } from './pages/Products'
import { Team } from './pages/Team'
import type { PageKey } from './routes'
import { ALL_ROUTES, LEGACY_REDIRECTS, pathFor } from './routes'
import { SiteContext } from './site-context'
import { useDocumentMeta } from './useDocumentMeta'

const PAGES: Record<PageKey, ComponentType> = {
  home: Home,
  products: Products,
  cases: Cases,
  team: Team,
}

/** Idioma inicial para `/`: inglés si el navegador lo pide, español si no. */
function detectLocale(): Locale {
  const preferred = typeof navigator === 'undefined' ? '' : navigator.language
  return preferred.toLowerCase().startsWith('en') ? 'en' : DEFAULT_LOCALE
}

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function SiteFrame({ locale, page }: { locale: Locale; page: PageKey }) {
  const t = CONTENT[locale]
  const Page = PAGES[page]

  useDocumentMeta(locale, page, t[page].meta)

  return (
    <SiteContext.Provider value={{ locale, page, t }}>
      <div className={`site page-${page}`}>
        <Header />
        <Page />
        <Footer />
      </div>
    </SiteContext.Provider>
  )
}

/** Las rutas sin router, para poder montarlas en cualquier Router. */
export function AppRoutes() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Navigate to={pathFor(detectLocale(), 'home')} replace />} />
        {ALL_ROUTES.map(({ locale, page, path }) => (
          <Route key={path} path={path} element={<SiteFrame locale={locale} page={page} />} />
        ))}
        {/* Estructura anterior: se redirige para no romper enlaces publicados. */}
        {Object.entries(LEGACY_REDIRECTS).map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        {/* Una URL que no existe es un 404, no la home: así la ve también el
            servidor, que entrega el mismo componente prerenderizado. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
