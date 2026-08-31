import { useEffect, useRef, useState } from 'react'

/**
 * El hero es el cuadro fijo de la marca junto al titular. El recorrido de la
 * tesis —ruido, método, señal— lo marca el scroll sobre el rótulo, no un
 * cambio de imagen.
 *
 * El titular y el CTA están visibles desde el primer scroll —quien llega a
 * evaluar un proveedor no debería tener que bajar tres pantallas para saber
 * qué se ofrece—.
 */
export function HeroSequence({
  frames,
  children,
}: {
  frames: readonly [string, string, string]
  children: React.ReactNode
}) {
  const stage = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      // Sin movimiento: no hay recorrido, el rótulo se queda en el final.
      setActive(2)
      return
    }

    let raf = 0
    const onScroll = () => {
      raf ||= requestAnimationFrame(() => {
        raf = 0
        const el = stage.current
        if (!el) return
        const { top, height } = el.getBoundingClientRect()
        const travel = height - window.innerHeight
        const p = travel > 0 ? Math.min(Math.max(-top / travel, 0), 1) : 0

        // El recorrido reparte los tres rótulos: 0→1 y 1→2.
        setActive(Math.round(p * 2))
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="hero-seq" ref={stage}>
      <div className="hero-stage">
        <div className="hero-content wrap">
          <div className="hero-copy">{children}</div>

          {/* La imagen va a su tamaño, junto al texto y no debajo: la fuente
              son 1086×1448 y a pantalla completa se ampliaba hasta verse
              blanda. Es decorativa —el titular ya dice lo que hay que leer—,
              así que va con `alt` vacío bajo un figure oculto al lector. */}
          <figure className="hero-figure" aria-hidden="true">
            <img
              className="hero-img"
              src="/image/utopialab-white.png"
              alt=""
              width={1086}
              height={1448}
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        </div>

        <div className="hero-track mono" aria-hidden="true">
          {frames.map((label, i) => (
            <span className={`htick ${i === active ? 'on' : ''}`} key={label}>
              <i />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
