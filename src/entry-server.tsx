import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes } from './App'

/**
 * Entrada del prerender. `vite build --ssr` la compila a `dist-ssr/` y
 * `scripts/prerender.mjs` la usa para escribir el HTML de cada URL: así
 * buscadores y LLM que no ejecutan JavaScript leen la página completa.
 *
 * Renderiza las mismas `AppRoutes` que el navegador, dentro de un
 * `StaticRouter`. Una ruta inexistente cae en el 404 igual que en el cliente.
 */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  )
}

export { ALL_ROUTES } from './routes'
export { headTags, llmsTxt, notFoundHead, robotsTxt, sitemapXml } from './seo'
