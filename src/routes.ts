import type { Locale } from './i18n'
import { LOCALES } from './i18n'

export const PAGE_KEYS = ['home', 'products', 'cases', 'team'] as const

export type PageKey = (typeof PAGE_KEYS)[number]

/**
 * Slug por idioma. `home` usa slug vacío: la home de cada idioma vive en
 * `/es` y `/en`.
 */
export const SLUGS: Record<Locale, Record<PageKey, string>> = {
  es: {
    home: '',
    products: 'productos',
    cases: 'casos',
    team: 'equipo',
  },
  en: {
    home: '',
    products: 'products',
    cases: 'cases',
    team: 'team',
  },
}

export function pathFor(locale: Locale, page: PageKey): string {
  const slug = SLUGS[locale][page]
  return slug ? `/${locale}/${slug}` : `/${locale}`
}

/** Todas las combinaciones idioma × página, para generar las rutas. */
export const ALL_ROUTES = LOCALES.flatMap((locale) =>
  PAGE_KEYS.map((page) => ({ locale, page, path: pathFor(locale, page) })),
)

/** Ancla del catálogo dentro de la home, para el enlace del hero al bloque. */
export const CATALOG_ANCHOR: Record<Locale, string> = { es: 'catalogo', en: 'catalog' }

/**
 * Rutas de estructuras anteriores que ya no existen. Se conservan como
 * redirecciones para no romper enlaces publicados; el equivalente en el
 * servidor está en `public/_redirects`.
 *
 * Sistema y Pensamiento se eliminaron: eran registro académico y de marca
 * dentro de un sitio comercial. Sistema apunta al catálogo, que es donde el
 * método se explica ahora en lenguaje de cliente; Pensamiento, a la home.
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  '/es/que-es': pathFor('es', 'products'),
  '/en/what-it-is': pathFor('en', 'products'),
  '/es/intervenciones': pathFor('es', 'cases'),
  '/en/interventions': pathFor('en', 'cases'),
  '/es/dispositivos': pathFor('es', 'products'),
  '/en/devices': pathFor('en', 'products'),
  '/es/servicios': pathFor('es', 'products'),
  '/en/services': pathFor('en', 'products'),
  '/es/sistema': pathFor('es', 'products'),
  '/en/system': pathFor('en', 'products'),
  '/es/pensamiento': pathFor('es', 'home'),
  '/en/thinking': pathFor('en', 'home'),
}
