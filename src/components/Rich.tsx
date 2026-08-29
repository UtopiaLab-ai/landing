import { Fragment } from 'react'
import type { RichText } from '../i18n/types'

/** Renderiza un RichText: strings planos y `{ b }` como <b>. */
export function Rich({ text }: { text: RichText }) {
  return (
    <>
      {text.map((frag, i) =>
        typeof frag === 'string' ? (
          <Fragment key={i}>{frag}</Fragment>
        ) : (
          <b key={i}>{frag.b}</b>
        ),
      )}
    </>
  )
}
