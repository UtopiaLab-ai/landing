/**
 * El hero: el cuadro fijo de la marca junto al titular.
 *
 * Antes esto era un recorrido —180vh de scroll pegajoso que iban encendiendo
 * un rótulo de tres pasos, señal → decisión → capacidad—. El rótulo se sacó y
 * con él la única razón del recorrido: sin nada que avanzar, quedaban dos
 * pantallas de scroll sobre un hero que no cambiaba. Ahora es una pantalla y
 * ya. Se conserva el par `.hero-seq` / `.hero-stage` porque de ahí cuelga todo
 * el responsive del hero.
 *
 * El titular y el CTA están visibles desde el primer scroll —quien llega a
 * evaluar un proveedor no debería tener que bajar tres pantallas para saber
 * qué se ofrece—.
 */
export function HeroSequence({ children }: { children: React.ReactNode }) {
  return (
    <div className="hero-seq">
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
      </div>
    </div>
  )
}
