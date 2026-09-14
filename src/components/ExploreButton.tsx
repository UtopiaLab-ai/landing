import { Glyph } from '../brand/Glyph'
import { ATALAYA_URL } from '../config'
import { useSite } from '../site-context'

/**
 * Enlace al tablero demo de Atalaya, con la línea que dice qué se va a ver.
 *
 * Misma píldora que el CTA pero en tinta: el naranja queda reservado a
 * agendar, que es la única conversión del sitio. Lleva la anomalía porque el
 * manual la pide en botones y en todo lo que baja de 32 px.
 *
 * Abre en otra pestaña: el tablero es otra aplicación, con su propia
 * navegación, y quien lo explora no debería perder la ficha que estaba
 * leyendo.
 */
export function ExploreButton({ note }: { note: string }) {
  const { t } = useSite()

  return (
    <div className="explorar">
      <a className="book book-tinta mono" href={ATALAYA_URL} target="_blank" rel="noopener noreferrer">
        <Glyph name="anomalia" size={16} />
        {t.common.atalaya.label}
        <span className="book-badge" aria-hidden="true">
          ↗
        </span>
      </a>
      <p className="explorar-nota">{note}</p>
    </div>
  )
}
