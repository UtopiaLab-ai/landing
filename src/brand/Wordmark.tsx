import { BRAND, BRAND_TLD } from '../config'
import { Glyph } from './Glyph'
import type { GlyphName } from './glyphs'

/**
 * El lockup: glifo más nombre.
 *
 * §08 del manual, variante elegida: el punto que separa nombre y dominio es el
 * mismo punto de la anomalía, y es el único acento de color permitido dentro
 * del wordmark. Por eso no se escribe como carácter «.» sino como un elemento
 * propio, que el CSS dibuja en `--sol`.
 *
 * Kerning cerrado y el dominio en un peso menor: el nombre manda, el dominio
 * acompaña.
 *
 * Toro en barra y pie —es la marca matriz, la que firma—; la anomalía queda
 * para pestaña, avatar y todo lo que baje de 32 px.
 */
export function Wordmark({
  size = 40,
  glyph = 'toro',
  className,
}: {
  /** Alto del glifo en px. El nombre se dimensiona en CSS. */
  size?: number
  glyph?: GlyphName
  className?: string
}) {
  return (
    <span className={className ? `wordmark ${className}` : 'wordmark'}>
      <Glyph name={glyph} size={size} className="wordmark-glyph" />
      <span className="wordmark-name">
        {BRAND}
        <i className="wordmark-dot" aria-hidden="true" />
        <span className="wordmark-tld">{BRAND_TLD}</span>
      </span>
    </span>
  )
}
