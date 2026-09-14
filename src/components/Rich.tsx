import { Fragment } from 'react'
import type { RichText } from '../i18n/types'

/** Renderiza un RichText: strings planos, `{ b }` como <b> y `{ a, href }` como
    enlace externo en pestaña nueva. */
export function Rich({ text }: { text: RichText }) {
  return (
    <>
      {text.map((frag, i) =>
        typeof frag === 'string' ? (
          <Fragment key={i}>{frag}</Fragment>
        ) : 'href' in frag ? (
          <a key={i} href={frag.href} target="_blank" rel="noopener noreferrer">
            {frag.a}
          </a>
        ) : (
          <b key={i}>{frag.b}</b>
        ),
      )}
    </>
  )
}
