import type { LexiconName } from '../brand/glyphs'

/**
 * Forma del contenido del sitio. Cada locale debe implementar `Content`
 * completo, así que TypeScript avisa si una traducción queda a medias.
 */

/**
 * Fragmento de texto enriquecido: string plano, `{ b }` para <b> o `{ a, href }`
 * para un enlace externo. El enlace va dentro del texto y no en un campo
 * aparte porque lo que se enlaza es la frase que hace la afirmación, no una
 * lista de fuentes al pie.
 */
export type Frag = string | { b: string } | { a: string; href: string }
export type RichText = readonly Frag[]

export interface Meta {
  title: string
  description: string
}

/** Los dos extremos de la barra `.section-label`. */
export type SectionLabel = readonly [left: string, right: string]

export interface Common {
  langName: string
  nav: {
    home: string
    products: string
    cases: string
    team: string
  }
  book: string
  bookShort: string
  switchLang: string
  footer: {
    location: string
    emailLabel: string
  }
}

/* --- Home ------------------------------------------------------------------
   Siete bloques, en el orden del buyer journey: hero (trigger), situación
   reconocible, catálogo, qué se gana, casos, equipo y cierre. El método se
   cuenta entero en /casos, junto al caso que lo prueba. */

export interface HomeContent {
  meta: Meta

  hero: {
    kicker: string
    titleLines: readonly string[]
    sub: string
    microcopy: string
  }

  /**
   * Las ocho situaciones: el cliente se reconoce en la cita, y las otras dos
   * columnas separan qué traba la decisión de qué se propone hacer. La cita va
   * primero porque nadie compra un producto que no sabe a qué problema suyo
   * corresponde.
   */
  situations: {
    h2: string
    sub: string
    label: SectionLabel
    heads: readonly [situation: string, problem: string, proposal: string]
    rows: readonly { situation: string; problem: string; proposal: string }[]
    close: string
  }

  /**
   * El catálogo en la home: los diez productos agrupados por velocidad, con
   * definición de una línea y duración. Las fichas completas van en /productos.
   */
  catalog: {
    h2: string
    sub: string
    label: SectionLabel
    speeds: readonly {
      key: string
      name: string
      note: string
      products: readonly { name: string; text: string; duration: string }[]
    }[]
    cta: string
  }

  /** Qué gana la organización, con la evidencia que lo respalda y sus límites. */
  value: {
    kicker: string
    h2: string
    sub: string
    label: SectionLabel
    items: readonly { title: string; text: string }[]
    /** Cada afirmación enlaza a su fuente primaria, en el texto y al pie. */
    evidence: { text: RichText; sources: RichText }
  }

  cases: {
    h2: string
    cards: readonly { n: string; title: string; proof: string }[]
    cta: string
  }

  team: {
    h2: string
    sub: string
    label: SectionLabel
    members: readonly {
      name: string
      role: string
      text: string
      /** Perfil público. Ausente donde la persona no publica uno. */
      profile?: string
    }[]
    cta: string
  }

  closing: { h2: string; body: string; cta: string }
}

/* --- Productos -------------------------------------------------------------
   El catálogo cerrado: escalera de compromiso, diez productos vendibles con
   ficha completa, la Máquina como horizonte y cómo se contrata. */

export interface ProductsContent {
  meta: Meta
  kicker: string
  titleLines: readonly string[]
  sub: string
  lead: RichText

  ladderLabel: SectionLabel
  ladderIntro: string
  ladder: readonly { n: string; name: string; text: string }[]

  productsLabel: SectionLabel
  definitionLabel: string
  triggerLabel: string
  deliverableLabel: string
  durationLabel: string
  stepLabel: string

  /** Agrupados por velocidad: caja, capacidad e individual. */
  speeds: readonly {
    key: string
    name: string
    note: string
    products: readonly {
      n: string
      name: string
      def: string
      text: string
      trigger: string
      deliverable: string
      duration: string
      step: string
    }[]
  }[]

  /** El estado declarado de la Máquina, sobre la que corren los productos de
      acceso: en piloto, no como servicio maduro. */
  horizon: {
    label: SectionLabel
    tag: string
    name: string
    text: string
    stateLabel: string
    state: string
  }

  contracting: {
    label: SectionLabel
    h2: string
    intro: string
    items: readonly { title: string; text: string }[]
    priceNote: string
  }

  /** Condición de activación del vertical político. Vive acá porque es parte
      de lo que se firma, no de lo que se ofrece. */
  neutrality: { tag: string; text: string }
}

/* --- Casos -----------------------------------------------------------------
   Anatomía del case study del TCBF §9, recortada a los cinco campos que se
   pueden sostener con evidencia: contexto, problema, intervención, resultado
   y prueba. Los campos opcionales faltan donde todavía no hay dato.

   El esquema del núcleo y las tres etapas del método viven acá y no en la
   home: el dibujo y el caso son la misma cosa vista dos veces, y separarlos
   obligaba a explicar el esquema dos veces. El esquema cierra la página, ya
   dichas las etapas que nombra. */

export interface CasesContent {
  meta: Meta
  kicker: string
  titleLines: readonly string[]
  sub: string

  /** El esquema del núcleo, cerrando la página bajo las tres etapas. */
  figureAlt: string
  figureCaption: string

  casesLabel: SectionLabel
  contextLabel: string
  problemLabel: string
  workLabel: string
  resultLabel: string
  proofLabel: string

  cases: readonly {
    n: string
    title: string
    subtitle: string
    context: string
    problem: string
    work: string
    result: string
    /** Verificable por un tercero. Ausente donde no hay uno publicable. */
    proof?: string
    /** Estado, para los casos que aún no completan la plantilla. */
    status?: string
  }[]

  note: string

  /**
   * El núcleo del método, en tres etapas que nombran puntos del esquema: la
   * señal, la bifurcación y la ventana en que la decisión todavía incide.
   * Cierra la página: primero el caso, después el método que lo produjo.
   */
  method: {
    kicker: string
    h2: string
    sub: string
    label: SectionLabel
    steps: readonly { n: string; title: string; text: string; marker: string }[]
    markerLabel: string
    close: string
    /**
     * La cadena anticipatoria completa, en los once glifos del léxico. Los
     * nombres van por glifo y no en lista para que no pueda faltar ni
     * desordenarse ninguno: el orden lo fija `LEXICON_NAMES`.
     */
    chain: {
      label: SectionLabel
      intro: string
      stages: Record<LexiconName, string>
      legend: { observation: string; alert: string; decision: string }
      returnNote: string
    }
  }
}

/* --- Equipo ----------------------------------------------------------------
   Resource quality del TCBF: quién sabe y quién ejecuta, con credenciales
   verificables en vez de descripciones. */

export interface TeamContent {
  meta: Meta
  kicker: string
  titleLines: readonly string[]
  sub: string
  lead: RichText

  membersLabel: SectionLabel
  credentialsLabel: string
  members: readonly {
    n: string
    name: string
    role: string
    text: string
    credentials: readonly string[]
    /** Perfil público. Ausente donde la persona no publica uno. */
    profile?: string
  }[]

  /** Capacidad declarada: cuántos encargos sostiene el Lab a la vez. */
  capacity: { tag: string; text: string }
}

export interface Content {
  common: Common
  home: HomeContent
  products: ProductsContent
  cases: CasesContent
  team: TeamContent
}
