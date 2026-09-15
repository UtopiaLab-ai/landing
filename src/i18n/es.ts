import type { Content } from './types'

export const es: Content = {
  common: {
    langName: 'Español',
    nav: {
      home: 'Inicio',
      products: 'Productos',
      cases: 'Casos',
      team: 'Equipo',
    },
    book: 'Agendar una hora de diagnóstico',
    bookShort: 'Agendar',
    atalaya: {
      label: 'Explorar Atalaya',
      productNote:
        'Así se ve un observatorio en operación: el tablero demo de Atalaya, con los datos del caso Ley Lafkenche.',
      caseNote:
        'El caso completo —tesis, evidencia, señales y convergencias— en el tablero demo de Atalaya.',
    },
    switchLang: 'Cambiar idioma',
    about:
      'utopialab.ai es un laboratorio de prospectiva estratégica con base en Santiago de Chile. Ayuda a empresas, organismos públicos y personas a leer su entorno, detectar lo decisivo y tomar decisiones a tiempo bajo incertidumbre.',
    notFound: {
      title: 'Página no encontrada',
      text: 'Esta dirección no existe o cambió de lugar.',
      cta: 'Ir al inicio',
    },
    footer: {
      location: 'Santiago de Chile',
      emailLabel: 'Escribir',
    },
  },

  home: {
    meta: {
      title: 'utopialab.ai · Prospectiva estratégica para decidir bajo incertidumbre',
      description:
        'Prospectiva estratégica aplicada para empresas y organismos públicos con exposición regulatoria y territorial. Diez productos, desde un brief en 48 horas hasta capacidad instalada y acceso a la Máquina. Santiago de Chile.',
    },

    hero: {
      kicker: 'utopialab.ai · Prospectiva estratégica',
      titleLines: ['El futuro', 'no se automatiza:', 'se decide'],
      sub: 'Trabajamos con empresas y organismos públicos cuyo entorno regulatorio y territorial cambia más rápido que sus decisiones. El problema no es falta de información: es que nadie tiene el encargo de mirar ese entorno con método y decir cuándo obliga a revisar una decisión ya tomada. Eso es lo que instalamos, desde un brief en 48 horas hasta la capacidad operando en tu equipo.',
      microcopy:
        'Sin costo y sin cotización previa. Una hora sobre una decisión que ya tienes pendiente.',
    },

    situations: {
      h2: '¿Te reconoces en alguna de estas frases?',
      sub: 'No vendemos método. Vendemos salir de una situación que ya sabes describir.',
      label: ['Tres situaciones', '01 — 03'],
      heads: ['Tu situación', 'El problema', 'Lo que proponemos'],
      rows: [
        {
          situation: '«Adoptamos IA o entramos en un cambio de ciclo y no sabemos qué pasará con nuestra forma de trabajar.»',
          problem: 'La tecnología avanza más rápido que la capacidad de la organización para decidir qué transformar, qué resguardar y quién responde por cada cambio.',
          proposal: 'Convertir el cambio en una trayectoria con prioridades, resguardos y responsables, y dejar al equipo capaz de revisarla sin nosotros.',
        },
        {
          situation: '«Nadie mira el entorno de forma sistemática y siempre reaccionamos tarde.»',
          problem: 'La información existe, pero llega cuando ya es noticia: tarde para posicionarse y sin distinguir qué señal importa.',
          proposal: 'Vigilar el perímetro que importa y entregar lo relevante antes del momento de decidir, con fuentes y nivel de confianza.',
        },
        {
          situation: '«Sabemos que nuestro mercado va a cambiar, pero no hacia dónde ni por dónde nos va a llegar la competencia.»',
          problem: 'Se mira a los competidores de hoy y a la demanda que ya existe, mientras el cambio llega desde fuera del sector.',
          proposal: 'Leer señales débiles y disrupciones externas para identificar el nicho emergente y la ventana para entrar antes que el resto.',
        },
      ],
      close:
        'En la reunión trabajamos una sola de estas filas: la que acabas de describir con tus palabras.',
    },

    difference: {
      kicker: 'Qué hacemos distinto',
      h2: 'Del ruido a la decisión',
      sub: 'No producimos más información: convertimos la que ya existe en decisiones a tiempo.',
      label: ['El núcleo del método', '01 — 04'],
      steps: [
        {
          n: '01',
          title: 'Situar la señal',
          text: 'Separamos lo que está cambiando de lo que es solo ruido.',
        },
        {
          n: '02',
          title: 'Fijar el umbral',
          text: 'Acordamos de antemano qué tendría que pasar para revisar una decisión, y activamos la alerta cuando se cruza.',
        },
        {
          n: '03',
          title: 'Visualizar la bifurcación',
          text: 'Abrimos las alternativas que el curso habitual todavía no deja ver.',
        },
        {
          n: '04',
          title: 'Decidir en la ventana',
          text: 'Actuamos mientras la decisión todavía puede cambiar el resultado.',
        },
      ],
      close: 'La IA nos ayuda a leer más y más rápido. La decisión sigue siendo de tu equipo.',
    },

    catalog: {
      h2: 'Productos',
      sub: 'Soluciones y entregables',
      label: ['El catálogo', '01 — 10'],
      speeds: [
        {
          key: 'caja',
          name: 'Producen análisis',
          note: 'Entregan una lectura que no tenías. No prometen instalar nada.',
          products: [
            {
              name: 'Brief de coyuntura',
              text: 'Análisis acotado sobre una sola decisión urgente. La puerta de entrada.',
              duration: '48 h – 3 semanas',
            },
            {
              name: 'Observatorio de Señales',
              text: 'Vigila el perímetro que defines y entrega una minuta de una plana y un dashboard antes del momento de decidir.',
              duration: 'Suscripción',
            },
            {
              name: 'Estudio de Futuros',
              text: 'Escenarios, condiciones de factibilidad y una decisión trazable para un desafío de largo plazo.',
              duration: '4 – 10 semanas',
            },
            {
              name: 'Nichos de Futuro',
              text: 'Detección de mercados que todavía no existen, con la ventana para entrar antes que el resto.',
              duration: '3 – 5 semanas',
            },
          ],
        },
        {
          key: 'capacidad',
          name: 'Instalan capacidad',
          note: 'Los únicos tres a los que les corresponde esa promesa. Terminan con tu equipo operando sin nosotros.',
          products: [
            {
              name: 'Laboratorio de Futuro',
              text: 'Proceso deliberativo que transforma deseos incompatibles en una posición común accionable.',
              duration: '8 – 12 semanas',
            },
            {
              name: 'Formación en Futuros',
              text: 'Transferencia del método para que el equipo lo use sin el Lab en la sala.',
              duration: '1 – 3 meses',
            },
            {
              name: 'Capacidad instalada',
              text: 'Protocolos, formación y gobernanza humano–IA en dos o más equipos, hasta que operan solos.',
              duration: '3 – 6 meses',
            },
          ],
        },
        {
          key: 'individual',
          name: 'Comprador individual',
          note: 'El mismo método a escala de una persona, no de una organización.',
          products: [
            {
              name: 'Arquitectura de Trayectoria',
              text: 'Prospectiva sobre el horizonte propio de un ejecutivo o profesional senior.',
              duration: '3 – 6 semanas',
            },
          ],
        },
        {
          key: 'maquina',
          name: 'Acceso a la Máquina',
          note: 'La memoria y la vigilancia del Lab operando dentro de tu organización. Están en prototipo: se abren por piloto.',
          products: [
            {
              name: 'Asistente de Futuros',
              text: 'Chatbot con las decisiones, la información y el contexto de tu organización, para crear escenarios y proyectar.',
              duration: 'Acceso continuo',
            },
            {
              name: 'Bot de noticias',
              text: 'Cada integrante define su perímetro y recibe lo que aparece en él, sin tener que ir a buscarlo.',
              duration: 'Suscripción',
            },
          ],
        },
      ],
      cta: 'Ver las fichas completas →',
    },

    value: {
      kicker: 'Qué gana tu organización',
      h2: 'Anticipar no es un ejercicio abstracto: mejora la calidad, la velocidad y el efecto de las decisiones',
      sub: 'El valor está en actuar con más opciones abiertas, menos sorpresas y criterios compartidos para invertir, coordinar y crecer.',
      label: ['Qué se gana', '01 — 03'],
      items: [
        {
          title: 'Mejor rendimiento',
          text: 'Decisiones más claras, trazables y ejecutables; menos retrabajo, bloqueos y recursos destinados a corregir tarde.',
        },
        {
          title: 'Crecimiento con menor exposición',
          text: 'Capacidad para detectar oportunidades y riesgos emergentes antes de que se vuelvan urgencias o costos inevitables.',
        },
        {
          title: 'Capacidad que permanece',
          text: 'Un lenguaje común, alertas y criterios que quedan instalados en el equipo para revisar y ajustar el rumbo.',
        },
      ],
      evidence: {
        text: [
          'En el estudio longitudinal de ',
          { a: 'Rohrbeck y Kum', href: 'https://doi.org/10.1016/j.techfore.2017.12.013' },
          ', las empresas con alta preparación de futuro registraron 33% más rentabilidad y 200% más crecimiento de capitalización bursátil que el promedio; ',
          {
            a: 'McKinsey',
            href: 'https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/decision-making-in-the-age-of-urgency',
          },
          ' asocia decisiones rápidas y de alta calidad con mejores retornos. ',
          {
            a: 'La CEPAL',
            href: 'https://www.cepal.org/es/publicaciones/40623-planificacion-prospectiva-la-construccion-futuro-america-latina-caribe-textos',
          },
          ' constata que los gobiernos de América Latina y el Caribe han sido poco proclives a incorporar perspectivas de largo plazo, y que anticipar riesgos y oportunidades exige ese horizonte; ',
          { a: 'la OCDE', href: 'https://doi.org/10.1787/1d78c791-en' },
          ' vincula la prospectiva con políticas más resilientes. Son asociaciones, no promesas: el resultado depende de la calidad de la decisión y de su ejecución.',
        ],
        sources: [
          { a: 'Rohrbeck & Kum (2018)', href: 'https://doi.org/10.1016/j.techfore.2017.12.013' },
          ' · ',
          {
            a: 'McKinsey (2019)',
            href: 'https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/decision-making-in-the-age-of-urgency',
          },
          ' · ',
          {
            a: 'CEPAL (2016)',
            href: 'https://www.cepal.org/es/publicaciones/40623-planificacion-prospectiva-la-construccion-futuro-america-latina-caribe-textos',
          },
          ' · ',
          { a: 'OCDE (2023)', href: 'https://doi.org/10.1787/1d78c791-en' },
        ],
      },
    },

    cases: {
      h2: 'Casos',
      cards: [
        {
          n: '01',
          title: 'Ley Lafkenche',
          proof: 'Entregado a la abogacía del Alto Comisionado de DD.HH. de la ONU',
        },
      ],
      cta: 'Ver el caso completo →',
    },

    team: {
      h2: 'Equipo',
      sub:
        'Equipo multidisciplinario, con amplia experiencia técnica, en asesoría de alto nivel, incidencia y tecnología: una sinergia poco común, potenciada además por las capacidades que ofrece la IA.',
      label: ['Equipo', '01 — 05'],
      members: [
        {
          name: 'Isabel Serra',
          role: 'Dirección de producto',
          text: 'Urbanista. Dirigió el Centro de Estudios Ciudad y Territorio del MINVU y fue académica e investigadora de la Universidad Diego Portales durante diez años. Autora del Sistema Utopía.',
          profile: 'https://www.linkedin.com/in/isabel-serra-1574509/',
        },
        {
          name: 'Genaro Cuadros',
          role: 'Dirección de proyectos',
          text: 'Arquitecto y urbanista. Director de la Secretaría de Planificación de Recoleta; consultor de CEPAL–ONU y del BID en desarrollo urbano y territorial.',
          profile: 'https://www.linkedin.com/in/genaro-cuadros-ib%C3%A1%C3%B1ez-46b02842/',
        },
        {
          name: 'Ariel López',
          role: 'Miembro del equipo',
          text: 'Ingeniero en transporte y urbanista. Consultor internacional de la CEPAL y el PNUD, asesor del Consejo Nacional de Desarrollo Territorial y perito judicial en tránsito.',
          profile: 'https://www.linkedin.com/in/arielopez',
        },
        {
          name: 'Willy Maikowski',
          role: 'Miembro del equipo',
          text: 'Ingeniero de software. Engineering Manager en Buk, antes en el Centro Tecnológico Ucampus de la Universidad de Chile. Construyó con Ariel el monitor en tiempo real de los buses de Santiago.',
          profile: 'https://www.linkedin.com/in/willymaikowski',
        },
        {
          name: 'Dolores Reyes Guarda',
          role: 'Miembro del equipo',
          text: 'Arquitecta, con experiencia en asesoría de políticas públicas de vivienda, urbanismo y obras públicas.',
          profile: 'https://www.linkedin.com/in/dolores-reyes-guarda-46513049',
        },
      ],
      cta: 'Ver las credenciales completas →',
    },

    closing: {
      h2: '¿Quieres ver las señales en el ruido?',
      body: 'No es una presentación de servicios. En una hora identificamos qué información falta, qué posibilidades conviene abrir y cuál es tu próxima decisión. Si después de eso no hay encargo, igual te llevas eso.',
      cta: 'Agenda una hora',
    },
  },

  products: {
    meta: {
      title: 'Productos · utopialab.ai',
      description:
        'El catálogo completo: diez productos en cuatro escalones de compromiso, con definición, entregable, duración y la situación que gatilla cada uno.',
    },
    kicker: 'El catálogo',
    titleLines: ['Productos'],
    sub: 'Soluciones y entregables',
    lead: [
      'Cada uno con su entregable y su duración declarados. ',
      { b: 'Se entra por donde el problema lo pida' },
      ', no por donde empieza la lista.',
    ],

    ladderLabel: ['La escalera de compromiso', '01 — 04'],
    ladderIntro:
      'Los productos se ordenan por profundidad, no por tipo. Ningún escalón obliga al siguiente: se puede parar en cualquiera.',
    ladder: [
      {
        n: '01',
        name: 'Diagnóstico',
        text: 'Una decisión pendiente. La puerta de entrada, y lo único que se puede comprar sin conocernos.',
      },
      {
        n: '02',
        name: 'Proyecto',
        text: 'Un desafío concreto, con el proceso completo de principio a fin.',
      },
      {
        n: '03',
        name: 'Capacidad',
        text: 'Equipos suyos ejecutando el protocolo sin nosotros en la sala.',
      },
      {
        n: '04',
        name: 'Recurrente',
        text: 'Acceso continuo a la Máquina: el observatorio, el bot de noticias y un asistente con la memoria de decisiones de la organización.',
      },
    ],

    productsLabel: ['Las fichas', '01 — 10'],
    definitionLabel: 'Qué es',
    triggerLabel: 'Situación que lo gatilla',
    deliverableLabel: 'Entregable',
    durationLabel: 'Duración',
    stepLabel: 'Escalón',

    speeds: [
      {
        key: 'caja',
        name: 'Productos que producen análisis',
        note: 'Entregan una lectura que la organización no tenía. No se les cuelga la promesa de instalar capacidad: no es lo que hacen.',
        products: [
          {
            n: '01',
            name: 'Brief de coyuntura',
            def: 'Análisis estratégico acotado, entregado en días, ante una decisión urgente o una señal crítica.',
            text: 'Entra sobre una sola decisión pendiente. Reformula el problema —separa qué parte es evidencia y qué parte es encuadre— y devuelve un mapa de alternativas que estaban fuera del campo de visión. No resuelve la decisión: cambia la pregunta con la que se decide. Es el producto que abre la conversación con cualquier organización, y el único que se puede comprar sin conocer todavía al Lab.',
            trigger: '«Tenemos que decidir y no sabemos qué escenarios mirar.»',
            deliverable: 'Reformulación del problema + mapa de alternativas',
            duration: '48 h – 3 semanas',
            step: 'Diagnóstico',
          },
          {
            n: '02',
            name: 'Observatorio de Señales',
            demo: true,
            def: 'Vigilancia sostenida sobre el perímetro de una discusión que le importa a la organización —tramitación, prensa, actores, contraparte—, con una minuta de una plana y un dashboard entregados antes del momento de decidir.',
            text: 'La mayoría de las organizaciones no tiene un problema de análisis: tiene un problema de llegar a tiempo. El Observatorio vigila un perímetro definido por el cliente, no un barrido general, y antes de cada momento de decisión entrega qué cambió, qué actor se movió, qué ventana se abre o se cierra y qué tan sólida es la evidencia. La forma importa: una minuta de una plana, escrita, con fuentes y nivel de confianza declarado, que se puede leer entre reuniones y llevar a una mesa; y un dashboard para seguir el perímetro entre una minuta y la siguiente.',
            trigger: '«Nadie mira el entorno de forma sistemática y siempre reaccionamos tarde.»',
            deliverable: 'Minuta de una plana + dashboard + alertas fuera de ciclo',
            duration: 'Suscripción mensual',
            step: 'Continuo',
          },
          {
            n: '03',
            name: 'Estudio de Futuros',
            def: 'Proceso de prospectiva organizacional, sectorial o territorial que produce escenarios, condiciones de factibilidad y una decisión trazable.',
            text: 'Para un desafío concreto de largo plazo, hace pasar el objeto de análisis por escenarios múltiples, convierte cada «no es viable» en condiciones con responsables, y deja la decisión registrada —qué se sabía, qué se supuso, cuándo hay que revisarla— de modo que el equipo pueda reconstruirla meses después. En su versión territorial responde qué va a pasar en un territorio en los próximos diez años: uso de suelo, riesgo regulatorio, conflictos latentes.',
            trigger:
              '«Todo lo interesante nos lo descartan como no viable» · «Nadie recuerda por qué decidimos aquello ni cuándo revisarlo.»',
            deliverable: 'Escenarios + condiciones con responsables + ficha de decisión',
            duration: '4 – 10 semanas',
            step: 'Proyecto',
          },
          {
            n: '04',
            name: 'Nichos de Futuro',
            def: 'Detección y validación de mercados que todavía no existen —o recién se están formando— para posicionarse antes que el resto.',
            text: 'No es benchmarking, que lee a los competidores actuales, ni estudio de mercado, que lee la demanda existente: lee el presente en busca de posibilidades latentes —señales débiles, brechas no atendidas, disrupciones que llegan desde fuera del sector— y devuelve el nicho emergente, las condiciones para que se consolide, la ventana para entrar y desde dónde llegaría la competencia.',
            trigger:
              '«Sabemos que nuestro mercado va a cambiar, pero no hacia dónde ni por dónde nos va a llegar la competencia.»',
            deliverable: 'Mapa de nichos emergentes + condiciones + ventana de entrada',
            duration: '3 – 5 semanas, o seguimiento trimestral',
            step: 'Proyecto',
          },
        ],
      },
      {
        key: 'capacidad',
        name: 'Productos que instalan capacidad',
        note: 'La segunda velocidad. Son los tres —y solo los tres— a los que les corresponde la promesa de dejar capacidad instalada.',
        products: [
          {
            n: '05',
            name: 'Laboratorio de Futuro',
            def: 'Proceso deliberativo con el equipo del cliente que transforma deseos incompatibles en una posición común accionable.',
            text: 'Cuando cada área quiere algo distinto y la organización termina en un consenso que no convence a nadie, el Laboratorio hace explícitos los deseos incompatibles en vez de borrarlos, y construye desde ahí una posición que el equipo puede sostener y ejecutar. Lo que queda en disputa se registra, no se esconde. Es el formato del piloto de doce semanas y el punto donde el Lab empieza a instalar capacidad, no solo a entregar análisis.',
            trigger: '«Cada área quiere algo distinto y terminamos en un consenso que no convence a nadie.»',
            deliverable: 'Posición común empaquetada + protocolo de deliberación',
            duration: '8 – 12 semanas',
            step: 'Proyecto',
          },
          {
            n: '06',
            name: 'Formación en Futuros',
            def: 'Programa que instala en los equipos del cliente la capacidad de anticipar, leer sistemas y deliberar bajo incertidumbre.',
            text: 'No es un curso de innovación ni un taller de liderazgo: es la transferencia del método para que el equipo lo use sin el Lab en la sala. Entrena lectura de sistemas complejos, trabajo con incertidumbre, pensamiento de escenarios y deliberación estratégica, y deja instalada una rutina de revisión. Cada ciclo vuelve al mismo método pero más lejos: la mano del Lab baja mientras la del equipo sube.',
            trigger: '«Adoptamos IA o entramos en un cambio de ciclo y no sabemos qué pasará con nuestra forma de trabajar.»',
            deliverable: 'Programa + caso real del equipo + rutina de revisión',
            duration: '1 – 3 meses',
            step: 'Capacidad',
          },
          {
            n: '07',
            name: 'Capacidad instalada',
            def: 'Instalación completa del protocolo en dos o más equipos del cliente, con gobernanza humano–IA, hasta que operan sin el Lab.',
            text: 'El escalón donde el cliente deja de comprar entregables y pasa a tener la capacidad como propia. El Lab instala los protocolos, forma a los equipos, monta la rutina de revisión y define la gobernanza entre lo que decide el humano y lo que asiste la IA. Es la promesa real detrás de «instalamos capacidad» y el único producto que la cumple sin metáfora.',
            trigger:
              'Cliente que ya pasó por un Estudio o un Laboratorio y quiere internalizar el método en vez de seguir contratándolo.',
            deliverable: 'Protocolos + formación + gobernanza humano–IA',
            duration: '3 – 6 meses',
            step: 'Capacidad',
          },
        ],
      },
      {
        key: 'individual',
        name: 'Comprador individual',
        note: 'Sale del catálogo organizacional porque quien firma es una persona, no una institución.',
        products: [
          {
            n: '08',
            name: 'Arquitectura de Trayectoria',
            def: 'Prospectiva estratégica para una persona —ejecutivo, directivo, profesional senior— sobre su propio horizonte.',
            text: 'El mismo método aplicado a una trayectoria individual en vez de una organización: lee el entorno sectorial de la persona, construye escenarios de su trayectoria y mapea las capacidades que cada uno exige. Dónde está hoy, qué le exige cada camino posible y qué tendría que construir para tomarlo.',
            trigger:
              'Profesional senior en un punto de inflexión de carrera que necesita leer su entorno a diez años.',
            deliverable: 'Escenarios de trayectoria + mapa de capacidades',
            duration: '3 – 6 semanas',
            step: 'Individual',
          },
        ],
      },
      {
        key: 'maquina',
        name: 'Acceso a la Máquina',
        note: 'La cuarta velocidad: la Máquina Utópica operando dentro de la organización, con su memoria y su vigilancia. Están en prototipo y se abren por piloto.',
        products: [
          {
            n: '09',
            name: 'Asistente de Futuros',
            def: 'Chatbot con las decisiones, la información y el contexto de la organización incorporados, para consultar lo decidido, crear escenarios y proyectar sus efectos.',
            text: 'Lo que el equipo aprendió al decidir suele irse con las personas. El Asistente guarda qué se decidió, con qué información y bajo qué supuesto, y avisa cuando ese supuesto deja de serlo. Sobre esa memoria se le puede preguntar qué se sabía en su momento, pedirle escenarios alternativos o proyectar qué cambia si se mueve una variable. Se consulta desde Telegram y corre con modelo abierto, en una instancia propia de la organización: sus deliberaciones no viven en el servidor del Lab ni en el de una empresa de IA, y si el encargo termina, la instancia y la memoria se quedan con ella. La IA propone; el equipo compromete.',
            trigger: '«Cada vez que alguien se va, perdemos por qué decidimos lo que decidimos.»',
            deliverable: 'Instancia propia + memoria de decisiones + escenarios a pedido',
            duration: 'Acceso continuo',
            step: 'Recurrente',
          },
          {
            n: '10',
            name: 'Bot de noticias',
            def: 'Bot que entrega a cada integrante del equipo lo que aparece en el perímetro que definió, sin que tenga que ir a buscarlo.',
            text: 'Hasta cinco personas definen sus propios términos de búsqueda —prensa, tramitación, actores, contraparte— y reciben lo que aparece en su perímetro apenas aparece. No reemplaza la minuta del Observatorio: es la capa diaria, la que evita enterarse por la prensa. Lo que el bot detecta alimenta la minuta y la memoria del Asistente.',
            trigger: '«Cada uno se entera de lo suyo por su lado, y casi siempre tarde.»',
            deliverable: 'Bot con perímetro por persona, hasta cinco integrantes',
            duration: 'Suscripción mensual',
            step: 'Recurrente',
          },
        ],
      },
    ],

    horizon: {
      label: ['Estado de la Máquina', 'Condición de honestidad'],
      tag: 'En piloto',
      name: 'Acceso a la Máquina',
      text: 'El Asistente de Futuros y el Bot de noticias corren sobre la Máquina Utópica, que está en prototipo. Se abren por piloto, con un número acotado de organizaciones y con alcance y límites por escrito. Lo decimos así porque venderlos como un servicio maduro sería prometer lo que todavía se está validando.',
      stateLabel: 'Estado',
      state: 'Prototipo · acceso por piloto',
    },

    contracting: {
      label: ['Cómo se contrata', '01 — 04'],
      h2: 'Cómo se contrata',
      intro:
        'Lo que un área de compras, un directorio o una unidad de licitaciones necesita saber antes de poder avanzar.',
      items: [
        {
          title: 'Empieza por una hora, no por una propuesta',
          text: 'La conversación de diagnóstico es sin costo y sin cotización previa. Recién después de ella se define alcance y valor, porque antes de eso ninguno de los dos sabe qué se está comprando.',
        },
        {
          title: 'Alcance y entregable por escrito',
          text: 'Cada encargo declara qué está dentro, qué está fuera, quién lo ejecuta y en qué plazo. Los entregables de este catálogo son los que se firman: no se prometen otros en la reunión.',
        },
        {
          title: 'Se puede detener en cualquier escalón',
          text: 'Ningún producto obliga al siguiente. El Brief no compromete un Estudio, y el Estudio no compromete un Laboratorio.',
        },
        {
          title: 'Compra pública y licitación',
          text: 'Trabajamos con municipios y servicios por la vía formal que corresponda. Para bases y requisitos administrativos, escríbenos antes del cierre: el ciclo presupuestario municipal corre entre agosto y octubre.',
        },
      ],
      priceNote:
        'Los valores dependen del alcance, del número de equipos y de las antenas que haya que instalar. Se definen después de la hora de diagnóstico, y los encargos mayores se estructuran en tramos para caber en presupuesto corriente.',
    },

    neutrality: {
      tag: 'Condición de neutralidad',
      text: 'No atendemos, sobre la misma materia regulatoria o territorial y dentro de la misma ventana, a un partido y a un cliente privado o público cuyos intereses en esa materia estén en conflicto. Cada encargo declara su perímetro por escrito. Sin ese perímetro, el encargo no se toma.',
    },

    faq: {
      label: ['Preguntas frecuentes', '01 — 06'],
      h2: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Qué es utopialab.ai?',
          a: 'Un laboratorio de prospectiva estratégica con base en Santiago de Chile. Ayuda a empresas, organismos públicos y personas a leer su entorno, detectar lo decisivo y tomar decisiones a tiempo bajo incertidumbre.',
        },
        {
          q: '¿Qué es la prospectiva estratégica?',
          a: 'Es leer el entorno con método para anticipar cambios y decidir a tiempo. No consiste en predecir un escenario: consiste en situar la señal, fijar el umbral que obliga a revisar una decisión, visualizar las alternativas y actuar mientras la decisión todavía puede cambiar el resultado.',
        },
        {
          q: '¿En qué se diferencia de una consultoría tradicional?',
          a: 'Cada encargo declara por escrito su entregable, su duración y qué queda fuera antes de empezar, y se puede detener en cualquier escalón. No producimos más información: convertimos la que ya existe en decisiones a tiempo, y los productos de capacidad terminan con el equipo del cliente operando sin nosotros.',
        },
        {
          q: '¿Con quién trabajan?',
          a: 'Con empresas y organismos públicos cuyo entorno regulatorio o territorial cambia más rápido que sus decisiones —incluidos municipios, por la vía de compra pública que corresponda— y con profesionales senior que necesitan leer su propio horizonte.',
        },
        {
          q: '¿Cómo se empieza y cuánto cuesta?',
          a: 'Con una hora de diagnóstico sin costo y sin cotización previa, sobre una decisión que ya está pendiente. Los valores se definen después, según el alcance y el número de equipos, y los encargos mayores se estructuran en tramos.',
        },
        {
          q: '¿Usan inteligencia artificial?',
          a: 'Sí, como apoyo para leer más información y más rápido. Las decisiones relevantes conservan deliberación y criterio humano: la IA propone y el equipo decide. Los productos de acceso a la Máquina, que funcionan con IA, están en prototipo y se abren por piloto.',
        },
      ],
    },
  },

  cases: {
    meta: {
      title: 'Casos · utopialab.ai',
      description:
        'Dónde se ha ejecutado el método: el caso de la Ley Lafkenche, con contexto, problema, intervención, resultado y prueba, y las cuatro etapas del núcleo del método.',
    },
    kicker: 'El método en obra',
    titleLines: ['Casos'],
    sub: 'Procesos abiertos, no monumentos terminados.',

    figureAlt:
      'Esquema del núcleo del método: la señal emerge del ruido, cruza un umbral difuso, se bifurca en un cono de futuros y abre una ventana de decisión que se cierra en el punto de no retorno.',
    figureCaption:
      'El esquema del núcleo: dónde estaba la señal, cuándo se bifurcó y qué tan abierta seguía la ventana. Cada caso es este mismo dibujo en obra.',

    casesLabel: ['El caso', '01 — 01'],
    contextLabel: 'Contexto',
    problemLabel: 'Problema',
    workLabel: 'Intervención',
    resultLabel: 'Resultado',
    proofLabel: 'Prueba',

    cases: [
      {
        n: '01',
        title: 'Ley Lafkenche',
        demo: true,
        subtitle: 'Derechos, territorio y borde costero',
        context:
          'El conflicto entre el borde costero, los derechos de los pueblos originarios y la actividad productiva, en pleno trámite y con actores que no compartían diagnóstico.',
        problem:
          'Cada actor leía el conflicto desde su propio marco jurídico y territorial. No existía un análisis del sistema completo que permitiera discutir el mismo objeto.',
        work: 'Análisis sistémico del conflicto: entramado normativo, mapa de actores y las trayectorias que cada alternativa abría o cerraba.',
        result:
          'Un producto analítico entregado y utilizado en el trámite real, no un informe archivado.',
        proof:
          'Entregado a la abogacía del Alto Comisionado de Derechos Humanos de las Naciones Unidas.',
      },
    ],

    note: 'Hay encargos en curso que todavía no se pueden publicar: los casos con cliente vivo se documentan cuando el cliente lo autoriza, no antes.',

    method: {
      kicker: 'Cómo trabajamos',
      h2: 'Leemos la señal, abrimos posibilidades y decidimos a tiempo',
      sub: 'Las cuatro etapas corresponden a un punto preciso del esquema: detectar el cambio, fijar el umbral que obliga a revisar, reconocer la bifurcación y actuar dentro de la ventana en que la decisión todavía puede modificar el resultado.',
      label: ['El núcleo del método', '01 — 04'],
      markerLabel: 'En el esquema',
      steps: [
        {
          n: '01',
          title: 'Situar la señal',
          text: 'Leemos el territorio, las reglas y los actores para distinguir un cambio relevante del ruido.',
          marker: 'señal',
        },
        {
          n: '02',
          title: 'Fijar el umbral',
          text: 'Acordamos de antemano qué tendría que pasar para revisar una decisión, y convertimos esa condición en una alerta que avisa cuando se cruza.',
          marker: 'umbral difuso',
        },
        {
          n: '03',
          title: 'Visualizar la bifurcación',
          text: 'Hacemos comparables alternativas, tensiones y futuros que el curso habitual todavía no permite ver.',
          marker: 'bifurcación',
        },
        {
          n: '04',
          title: 'Decidir en la ventana',
          text: 'Definimos criterios, responsables, alertas y condiciones para actuar o revisar antes del punto de no retorno.',
          marker: 'ventana de decisión',
        },
      ],
      close:
        'Anticipar no es predecir el escenario: es decidir mientras la decisión todavía incide. Pasado el punto de no retorno queda gestionar el efecto, no elegirlo.',
      chain: {
        label: ['La cadena completa', '01 — 11'],
        intro:
          'Las cuatro etapas son cuatro eslabones de una cadena más larga. Cada glifo dice qué le pasa al campo: en turquesa lo que se observa, en naranja lo que cruza a alerta y en azul lo que se decide.',
        stages: {
          senal: 'Señal',
          cadena: 'Cadena',
          umbral: 'Umbral',
          convergencia: 'Convergencia',
          bifurcacion: 'Bifurcación',
          trayectoria: 'Trayectoria',
          escenario: 'Escenario',
          implicancia: 'Implicancia',
          decision: 'Decisión',
          experimento: 'Experimento',
          ajuste: 'Aprendizaje y ajuste',
        },
        legend: { observation: 'Observación', alert: 'Alerta', decision: 'Decisión' },
        returnNote: 'El ciclo no se cierra: el ajuste devuelve al campo y abre una nueva observación.',
      },
    },
  },

  team: {
    meta: {
      title: 'Equipo · utopialab.ai',
      description:
        'Quién ejecuta los encargos: Isabel Serra (Centro de Estudios Ciudad y Territorio del MINVU, Sistema Utopía), Genaro Cuadros (SECPLA Recoleta, CEPAL–ONU, BID), Ariel López (CEPAL, PNUD), Willy Maikowski (Buk) y Dolores Reyes Guarda (arquitecta, políticas de vivienda y urbanismo). Credenciales verificables.',
    },
    kicker: 'Equipo',
    titleLines: ['Experiencia'],
    sub: 'Incidencia, toma de decisiones, innovación y tecnología.',
    lead: [
      'Equipo multidisciplinario, con amplia experiencia técnica, en asesoría de alto nivel, incidencia y tecnología: ',
      { b: 'una sinergia poco común' },
      ', potenciada además por las capacidades que ofrece la IA.',
    ],

    membersLabel: ['El equipo', '01 — 05'],
    credentialsLabel: 'Trayectoria',
    members: [
      {
        n: '01',
        name: 'Isabel Serra Benítez',
        role: 'Dirección de producto',
        text: 'Urbanista e investigadora, con quince años en la intersección entre proyecto, pensamiento crítico y estudios de futuros —diez de ellos como académica e investigadora de la Universidad Diego Portales—. Autora del Sistema Utopía, el marco metodológico que ordena el trabajo del Lab. Conduce el diseño de los encargos: alcance, entregables y relación con las contrapartes.',
        credentials: [
          'Jefa del Centro de Estudios Ciudad y Territorio, MINVU (2024–2025): 26 profesionales en cinco equipos',
          'Académica e investigadora, Universidad Diego Portales (2012–2022)',
          'Dirección de once proyectos de investigación con CEPAL, GIZ, U. de St. Gallen y Columbia University',
          'Doctora (c) en Estudios Americanos, IDEA–USACH',
          'Magíster en Gestión y Políticas Públicas, Universidad de Chile — Premio Eugenio Lahera',
          'Arquitecta, Pontificia Universidad Católica de Chile',
        ],
        profile: 'https://www.linkedin.com/in/isabel-serra-1574509/',
      },
      {
        n: '02',
        name: 'Genaro Cuadros Ibáñez',
        role: 'Dirección de proyectos',
        text: 'Arquitecto y urbanista con trayectoria en política pública urbana y territorial en Chile, en los distintos lugares donde se decide: gobierno, municipios, academia, cooperación y sector privado. Dirige la ejecución de los proyectos y la relación con el sector público.',
        credentials: [
          'Director de la Secretaría de Planificación (SECPLA), Municipalidad de Recoleta (2025–2026)',
          'Consultor de la CEPAL–ONU en movilidad y desarrollo urbano (2021–2023)',
          'Consultor externo del BID para el Programa de Barrios Comerciales de SERCOTEC (2023–2024)',
          'Director del Laboratorio Ciudad y Territorio, Universidad Diego Portales (2011–2020)',
          'Miembro de la Comisión Presidencial Pro Movilidad Urbana (2016–2017)',
          'Coordinador de Barrios Críticos, programa Quiero Mi Barrio, MINVU (2005–2008)',
          'Máster en Ciencias Aplicadas mención Urbanismo y Desarrollo Territorial, UCLouvain — con distinción',
        ],
        profile: 'https://www.linkedin.com/in/genaro-cuadros-ib%C3%A1%C3%B1ez-46b02842/',
      },
      {
        n: '03',
        name: 'Ariel López López',
        role: 'Miembro del equipo',
        text: 'Ingeniero en transporte y urbanista. Trabaja la movilidad como lo que es —quién puede llegar a dónde, en cuánto tiempo y a qué costo— y no como un problema de infraestructura que se resuelve construyendo. Esa lectura es la que aporta a los encargos territoriales: un sistema de transporte revela la estructura de oportunidades de una ciudad antes que cualquier indicador agregado.',
        credentials: [
          'Consultor internacional de la CEPAL y el PNUD',
          'Asesor del Consejo Nacional de Desarrollo Territorial (CNDT)',
          'Perito judicial en tránsito, Cortes de Apelaciones de Santiago, Valparaíso y Rancagua',
          'Gerente de Estudios y Proyectos, W Ingeniería',
          'Profesor de Ingeniería en Transporte, UTEM y Universidad Andrés Bello',
          'Doctorando en Territorio, Espacio y Sociedad, FAU — Universidad de Chile',
          'Magíster en Urbanismo, Universidad de Chile',
          'Ingeniero en Transporte y Tránsito, UTEM',
        ],
        profile: 'https://www.linkedin.com/in/arielopez',
      },
      {
        n: '04',
        name: 'Willy Maikowski Correa',
        role: 'Miembro del equipo',
        text: 'Ingeniero de software, con la trayectoria puesta en sistemas que operan todos los días y no en demostraciones. Engineering Manager en Buk y antes en el Centro Tecnológico Ucampus de la Universidad de Chile, donde el software de gestión académica lo usan miles de personas a diario. Con Ariel construyó el monitor en tiempo real de los buses de Santiago sobre los datos GPS de Red Movilidad: exactamente el problema del Observatorio —convertir un flujo crudo en algo que alguien pueda mirar y decidir—, resuelto con datos públicos y sin encargo de nadie.',
        credentials: [
          'Engineering Manager en Buk',
          'Centro Tecnológico Ucampus, Universidad de Chile',
          'Monitor en tiempo real de los buses de Santiago (velocidades.seguimos.cl), con Ariel López',
          'Profesor guía de memorias en Ingeniería Civil en Computación, FCFM — Universidad de Chile',
        ],
        profile: 'https://www.linkedin.com/in/willymaikowski',
      },
      {
        n: '05',
        name: 'Dolores Reyes Guarda',
        role: 'Miembro del equipo',
        text: 'Arquitecta, con experiencia en asesoría de políticas públicas de vivienda, urbanismo y obras públicas.',
        credentials: [],
        profile: 'https://www.linkedin.com/in/dolores-reyes-guarda-46513049',
      },
    ],

    capacity: {
      tag: 'Capacidad declarada',
      text: 'Con las horas disponibles hoy, el Lab sostiene dos proyectos estratégicos en paralelo y cuatro suscripciones al Observatorio. Lo decimos porque un tercer proyecto simultáneo rompe la calidad, y preferimos decirlo antes que después.',
    },
  },
}
