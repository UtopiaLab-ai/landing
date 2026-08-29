/**
 * Forma del contenido del sitio. Cada locale debe implementar `Content`
 * completo, así que TypeScript avisa si una traducción queda a medias.
 */

/** Fragmento de texto enriquecido: string plano o `{ b }` para <b>. */
export type Frag = string | { b: string }
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
    products: string
    cases: string
    team: string
  }
  home: string
  book: string
  bookShort: string
  switchLang: string
  footer: {
    location: string
    emailLabel: string
  }
}

/* --- Home ------------------------------------------------------------------
   Nueve bloques, en el orden del buyer journey del TCBF: hero (trigger),
   prueba, situación reconocible, catálogo, para quién, casos, equipo,
   objeciones y cierre. */

export interface HomeContent {
  meta: Meta

  hero: {
    kicker: string
    titleLines: readonly string[]
    sub: string
    microcopy: string
    /** Rótulo de cada cuadro de la secuencia; sigue la escalera de compromiso. */
    frames: readonly [string, string, string]
  }

  /** Franja de credenciales bajo el hero. E6 de la Evidence Stack del TCBF. */
  proof: {
    label: string
    items: readonly { name: string; text: string }[]
  }

  /**
   * Las cinco situaciones de la lámina A2 de la NMU: el cliente se reconoce en
   * la primera columna. Reemplaza al bloque abstracto de síntomas.
   */
  situations: {
    h2: string
    sub: string
    label: SectionLabel
    heads: readonly [situation: string, doing: string, installed: string]
    rows: readonly { situation: string; doing: string; installed: string }[]
    close: string
  }

  /**
   * El catálogo en la home: los ocho productos agrupados por velocidad, con
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
    horizon: { tag: string; text: string }
    cta: string
  }

  audience: {
    h2: string
    sub: string
    label: SectionLabel
    /** Los dos verticales con demanda observada en el radar. */
    strong: {
      tag: string
      tracks: readonly {
        n: string
        title: string
        text: string
        entryLabel: string
        entry: string
        anchorLabel: string
        anchor: string
      }[]
    }
    /** Los cuatro restantes: apuesta de posicionamiento, no demanda probada. */
    others: {
      tag: string
      items: readonly { name: string; text: string }[]
    }
    /** Condición de activación del vertical político, no recomendación. */
    neutrality: { tag: string; text: string }
  }

  cases: {
    h2: string
    sub: string
    cards: readonly { n: string; title: string; proof: string }[]
    cta: string
  }

  team: {
    h2: string
    sub: string
    label: SectionLabel
    members: readonly { name: string; role: string; text: string }[]
    cta: string
  }

  /** Las tres preguntas de la lámina A4 de la NMU. */
  objections: {
    h2: string
    label: SectionLabel
    items: readonly { id: string; q: string; a: string }[]
  }

  closing: { h2: string; body: string; cta: string }
}

/* --- Productos -------------------------------------------------------------
   El catálogo cerrado: escalera de compromiso, ocho productos vendibles con
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

  /** No es producto: se nombra como horizonte del acuerdo. */
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
}

/* --- Casos -----------------------------------------------------------------
   Anatomía del case study del TCBF §9, recortada a los cinco campos que se
   pueden sostener con evidencia: contexto, problema, intervención, resultado
   y prueba. Los campos opcionales faltan donde todavía no hay dato. */

export interface CasesContent {
  meta: Meta
  kicker: string
  titleLines: readonly string[]
  sub: string
  lead: RichText

  templateLabel: SectionLabel
  templateIntro: string
  templateSteps: readonly { n: string; title: string; text: string }[]

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
