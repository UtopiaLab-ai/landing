import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { App } from './App'
import './styles.css'

const root = document.getElementById('root')
if (!root) throw new Error('No se encontró #root')

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// En producción cada página llega prerenderizada: React se engancha al HTML
// que ya está en vez de borrarlo y volver a dibujarlo. En desarrollo el
// `#root` llega vacío y se monta desde cero.
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
