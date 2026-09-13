import { Lines } from '../components/Lines'
import { Rich } from '../components/Rich'
import { SectionLabel } from '../components/SectionLabel'
import { useSite } from '../site-context'

/**
 * Resource quality: quién sabe y quién ejecuta.
 *
 * Las credenciales van como lista de hechos verificables y no como prosa. Un
 * comprador que evalúa a un proveedor no lee un perfil: busca si hay
 * experiencia comparable a su problema, y necesita poder comprobarla.
 */
export function Team() {
  const { t } = useSite()
  const c = t.team

  return (
    <>
      <section className="hero invert">
        <div className="wrap">
          <div className="kicker mono">{c.kicker}</div>
          <h1>
            <Lines lines={c.titleLines} />
          </h1>
          <p className="sub">{c.sub}</p>
        </div>
      </section>

      <section className="intro">
        <div className="wrap">
          <p className="lead">
            <Rich text={c.lead} />
          </p>
        </div>
      </section>

      <section className="fichas-equipo" id="equipo">
        <div className="wrap">
          <SectionLabel label={c.membersLabel} />
          {c.members.map((m) => (
            <article className="tramo" key={m.name}>
              <div className="tramo-meta">
                <span className="rnum mono">{m.n}</span>
                <h2 className="rname">{m.name}</h2>
                <span className="rrole mono">{m.role}</span>
              </div>
              <div className="tramo-body">
                <p className="rdesc">{m.text}</p>
                <div className="cred">
                  <div className="cred-label mono">{c.credentialsLabel}</div>
                  <ul className="cred-list">
                    {m.credentials.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
                {/* Perfil público, solo donde la persona publica uno. No es
                    una credencial: va fuera de la lista, que son hechos
                    verificables y no enlaces. */}
                {m.profile && (
                  <a
                    className="perfil mono"
                    href={m.profile}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                )}
              </div>
            </article>
          ))}

          <div className="caja">
            <div className="tag mono">{c.capacity.tag}</div>
            <p>{c.capacity.text}</p>
          </div>
        </div>
      </section>
    </>
  )
}
