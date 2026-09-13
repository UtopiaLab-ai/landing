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
    switchLang: 'Cambiar idioma',
    footer: {
      location: 'Santiago de Chile',
      emailLabel: 'Escribir',
    },
  },

  home: {
    meta: {
      title: 'utopialab.ai · Prospectiva estratégica para decidir bajo incertidumbre',
      description:
        'Prospectiva estratégica aplicada para empresas y organismos públicos con exposición regulatoria y territorial. Ocho productos, desde un brief en 48 horas hasta capacidad instalada. Santiago de Chile.',
    },

    hero: {
      kicker: 'utopialab.ai · Prospectiva estratégica',
      titleLines: ['Las reglas', 'cambian cada año.', 'Las decisiones', 'duran veinte.'],
      sub: 'Trabajamos con empresas y organismos públicos cuyo entorno regulatorio y territorial cambia más rápido que sus decisiones. El problema no es falta de información: es que nadie tiene el encargo de mirar ese entorno con método y decir cuándo obliga a revisar una decisión ya tomada. Eso es lo que instalamos, desde un brief en 48 horas hasta la capacidad operando en su equipo.',
      microcopy:
        'Sin costo y sin cotización previa. Una hora sobre una decisión que ya tiene pendiente.',
      frames: ['Señal', 'Decisión', 'Capacidad'],
    },

    proof: {
      label: 'Dónde se ha ejecutado este método',
      items: [
        { name: 'MINVU', text: 'Primera Unidad de Prospectiva del ministerio' },
        { name: 'CEPAL · ONU', text: 'Consultoría en movilidad y desarrollo urbano' },
        { name: 'ONU Derechos Humanos', text: 'Análisis territorial para la abogacía del Alto Comisionado' },
        { name: 'BID · SERCOTEC', text: 'Programa de Barrios Comerciales' },
        { name: 'Municipalidad de Recoleta', text: 'Dirección de la Secretaría de Planificación' },
      ],
    },

    situations: {
      h2: '¿Se reconoce en alguna de estas frases?',
      sub: 'No vendemos método. Vendemos salir de una situación que usted ya sabe describir.',
      label: ['Cinco situaciones', '01 — 05'],
      heads: ['Su situación', 'Qué hacemos', 'Qué queda instalado'],
      rows: [
        {
          situation: '«Tenemos que decidir y no sabemos qué escenarios mirar.»',
          doing: 'Reformulamos el problema y ampliamos el conjunto de alternativas antes de comparar.',
          installed: 'Un menú de opciones más ancho, con criterios explícitos.',
        },
        {
          situation: '«Todo lo interesante nos lo descartan como no viable.»',
          doing: 'Convertimos cada «no viable» en condiciones, dependencias y responsables.',
          installed: 'Una agenda de condiciones habilitantes en vez de un veredicto.',
        },
        {
          situation: '«Cada área quiere algo distinto y terminamos en un consenso que no convence a nadie.»',
          doing: 'Hacemos explícitos los deseos incompatibles y clasificamos la tensión antes de decidir.',
          installed: 'Una decisión que reconoce el desacuerdo en vez de taparlo.',
        },
        {
          situation: '«Nos enteramos tarde de lo que nos afecta.»',
          doing: 'Instalamos el subciclo de observación con umbrales y responsables de alerta.',
          installed: 'Un tablero con señales, umbrales y quién mira qué.',
        },
        {
          situation: '«Decidimos, pero nadie recuerda por qué.»',
          doing: 'Registramos qué era dato, qué supuesto y qué condición obligaría a revisar.',
          installed: 'Fichas de procedencia que permiten responder meses después.',
        },
      ],
      close:
        'En la reunión trabajamos una sola de estas filas: la que usted acaba de describir con sus palabras.',
    },

    catalog: {
      h2: 'Ocho productos, cuatro escalones',
      sub: 'Ordenados por profundidad, no por tipo. Se entra por donde el problema lo pida y se sube solo si sirve.',
      label: ['El catálogo', '01 — 08'],
      speeds: [
        {
          key: 'caja',
          name: 'Producen análisis',
          note: 'Entregan una lectura que usted no tenía. No prometen instalar nada.',
          products: [
            {
              name: 'Brief de coyuntura',
              text: 'Análisis acotado sobre una sola decisión urgente. La puerta de entrada.',
              duration: '48 h – 3 semanas',
            },
            {
              name: 'Observatorio de Señales',
              text: 'Suscripción mensual que convierte el ruido del entorno en señales con interpretación.',
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
          note: 'Los únicos tres a los que les corresponde esa promesa. Terminan con su equipo operando sin nosotros.',
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
      ],
      horizon: {
        tag: 'Horizonte, no producto',
        text: 'El acceso recurrente al software, la memoria de decisiones versionada y el observatorio permanente existen como prototipo. Mientras no funcionen de forma validable no se ofrecen: se nombran como horizonte del acuerdo.',
      },
      cta: 'Ver las fichas completas →',
    },

    audience: {
      h2: 'El mismo catálogo, seis compradores',
      sub: 'No cambian los productos: cambian la entrada, el argumento y quién firma.',
      label: ['Para quién', 'Señal fuerte primero'],
      strong: {
        tag: 'Demanda observada',
        tracks: [
          {
            n: '01',
            title: 'Empresas con exposición regulatoria y territorial',
            text: 'Minería, energía, agroindustria, construcción e inversión patrimonial: decisiones a diez o veinte años en un entorno cuyas reglas cambian cada año. Anticipación como gestión de riesgo sistémico, no como reporte de sostenibilidad.',
            entryLabel: 'Entrada típica',
            entry: 'Brief de coyuntura · sala de directorio',
            anchorLabel: 'Producto ancla',
            anchor: 'Estudio de Futuros',
          },
          {
            n: '02',
            title: 'Sector público y gobiernos locales',
            text: 'Municipios y servicios que deciden bajo presión, con información asimétrica y ciclo presupuestario fijo. La capacidad de anticipar está hoy donde hay presupuesto para comprarla, y eso reparte el largo plazo de forma desigual entre territorios. Quien no la tiene instalada llega tarde a la decisión que importa.',
            entryLabel: 'Entrada típica',
            entry: 'Inteligencia territorial · evaluación de instrumentos',
            anchorLabel: 'Producto ancla',
            anchor: 'Estudio territorial + Laboratorio',
          },
        ],
      },
      others: {
        tag: 'Apuesta de posicionamiento, sin demanda probada todavía',
        items: [
          {
            name: 'Cooperación internacional',
            text: 'Procesos de futuros con legitimidad multi-actor. Ciclos largos, presupuesto por proyecto.',
          },
          {
            name: 'Universidades',
            text: 'Credencial metodológica y planificación bajo caída de matrícula. Ventana octubre–diciembre.',
          },
          {
            name: 'Fundaciones y fondos de impacto',
            text: 'Rigor para sostener la tesis de impacto, con observatorio temático como entrada.',
          },
          {
            name: 'Partidos políticos',
            text: 'Anticipar el escenario y construir posición, no encuestar el presente. Ventana electoral.',
          },
        ],
      },
      neutrality: {
        tag: 'Condición de neutralidad',
        text: 'No atendemos, sobre la misma materia regulatoria o territorial y dentro de la misma ventana, a un partido y a un cliente privado o público cuyos intereses en esa materia estén en conflicto. Cada encargo declara su perímetro por escrito. Sin ese perímetro, el encargo no se toma.',
      },
    },

    cases: {
      h2: 'Dónde se ha ejecutado',
      sub: 'Procesos abiertos, no monumentos terminados. Cada uno con lo que se puede verificar y lo que todavía no.',
      cards: [
        {
          n: '01',
          title: 'Ley Lafkenche',
          proof: 'Entregado a la abogacía del Alto Comisionado de DD.HH. de la ONU',
        },
        {
          n: '02',
          title: 'Consejo Municipal de Futuros',
          proof: 'Instrumento operando en el gobierno local',
        },
        {
          n: '03',
          title: 'Unidad de Prospectiva MINVU',
          proof: 'Primera unidad de su tipo en el ministerio',
        },
        {
          n: '04',
          title: 'Mesa del Transantiago',
          proof: 'Posición común entre organizaciones distintas',
        },
      ],
      cta: 'Ver los casos completos →',
    },

    team: {
      h2: 'Equipo',
      sub: 'Un equipo chico: lo ejecutan las mismas personas que lo diseñan. Sin juniors facturados como seniors.',
      label: ['Equipo', '01 — 02'],
      members: [
        {
          name: 'Isabel Serra',
          role: 'Dirección de producto',
          text: 'Urbanista. Dirigió el Centro de Estudios Ciudad y Territorio del MINVU y fue académica e investigadora de la Universidad Diego Portales durante diez años. Autora del Sistema Utopía.',
        },
        {
          name: 'Genaro Cuadros',
          role: 'Dirección de proyectos',
          text: 'Arquitecto y urbanista. Director de la Secretaría de Planificación de Recoleta; consultor de CEPAL–ONU y del BID en desarrollo urbano y territorial.',
        },
      ],
      cta: 'Ver las credenciales completas →',
    },

    objections: {
      h2: 'Las tres preguntas que siempre aparecen',
      label: ['Objeciones', '01 — 03'],
      items: [
        {
          id: 'ia',
          q: '¿Esto no lo hace ChatGPT?',
          a: 'Un asistente genérico está optimizado para darle una respuesta limpia. Nuestro proceso está diseñado para no hacerlo cuando hay desacuerdo real: preserva la contradicción, etiqueta qué es dato y qué es supuesto, y no recomienda una única opción sin mostrar las descartadas. Usamos modelos existentes como herramienta; la deliberación queda humana.',
        },
        {
          id: 'planificacion',
          q: '¿En qué se diferencia de la planificación estratégica que ya hacemos?',
          a: 'La planificación parte de objetivos ya formulados. Nosotros empezamos una etapa antes —auditamos quién formuló el problema y qué opciones quedaron fuera— y terminamos una etapa después, registrando qué condición obligaría a revisar la decisión.',
        },
        {
          id: 'nombre',
          q: '¿Por qué le llaman utopía?',
          a: 'Porque obliga a declarar qué futuro se considera mejor y para quién, en vez de esconder ese juicio detrás de proyecciones. No es idealismo: es la disciplina de no dejar el criterio implícito. No prometemos una sociedad perfecta, ni un futuro único preferible, ni un plan cerrado.',
        },
      ],
    },

    closing: {
      h2: 'Una hora sobre una decisión real',
      body: 'No es una presentación de servicios. Traiga una decisión que ya tenga pendiente y salga con el problema reformulado y las alternativas que no estaban sobre la mesa. Si después de eso no hay encargo, igual se lleva eso.',
      cta: 'Agendar la conversación',
    },
  },

  products: {
    meta: {
      title: 'Productos · utopialab.ai',
      description:
        'El catálogo completo: ocho productos en cuatro escalones de compromiso, con definición, entregable, duración y la situación que gatilla cada uno.',
    },
    kicker: 'El catálogo',
    titleLines: ['Ocho', 'productos'],
    sub: 'Lo único que se firma.',
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
        text: 'Acceso continuo al observatorio y a la memoria de decisiones.',
      },
    ],

    productsLabel: ['Las fichas', '01 — 08'],
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
            def: 'Suscripción mensual que convierte el ruido del entorno en señales críticas con lectura estratégica, calibrada por sector.',
            text: 'La mayoría de las organizaciones se entera de los cambios de su entorno cuando ya son noticia — es decir, cuando ya es tarde para posicionarse. El Observatorio entrega cada mes las señales que importan para ese cliente específico, con interpretación y no solo con titulares: qué está cambiando, por qué le importa a su decisión y qué conviene vigilar. Es la relación de menor compromiso que instala presencia continua.',
            trigger: '«Nadie mira el entorno de forma sistemática y siempre reaccionamos tarde.»',
            deliverable: 'Radar mensual + interpretación + alertas fuera de ciclo',
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
    ],

    horizon: {
      label: ['Lo que todavía no existe', 'Condición de honestidad'],
      tag: 'No disponible',
      name: 'Acceso a la Máquina',
      text: 'Acceso recurrente al software, la memoria de decisiones versionada y el observatorio permanente. Es el horizonte de la escalera y está en prototipo. Mientras no funcione de forma validable se nombra como horizonte del acuerdo, nunca como producto disponible: prometerlo sería vender lo que todavía no existe.',
      stateLabel: 'Estado',
      state: 'Prototipo · no comercializable',
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
          text: 'Trabajamos con municipios y servicios por la vía formal que corresponda. Para bases y requisitos administrativos, escríbanos antes del cierre: el ciclo presupuestario municipal corre entre agosto y octubre.',
        },
      ],
      priceNote:
        'Los valores dependen del alcance, del número de equipos y de las antenas que haya que instalar. Se definen después de la hora de diagnóstico, y los encargos mayores se estructuran en tramos para caber en presupuesto corriente.',
    },
  },

  cases: {
    meta: {
      title: 'Casos · utopialab.ai',
      description:
        'Dónde se ha ejecutado el método: Ley Lafkenche, Consejo Municipal de Futuros, Unidad de Prospectiva del MINVU y Mesa del Transantiago. Contexto, problema, intervención, resultado y prueba.',
    },
    kicker: 'El método en obra',
    titleLines: ['Dónde se ha', 'ejecutado'],
    sub: 'Procesos abiertos, no monumentos terminados.',
    lead: [
      'Cada caso se cuenta igual y sin excepciones: ',
      { b: 'qué se puede verificar' },
      ' y qué todavía no.',
    ],

    templateLabel: ['Cómo se cuenta cada caso', '01 — 05'],
    templateIntro:
      'La misma plantilla para todos. Donde falta un campo, falta porque no hay dato publicable — no se rellena.',
    templateSteps: [
      { n: '01', title: 'Contexto', text: 'Quién decidía y en qué marco.' },
      { n: '02', title: 'Problema', text: 'Qué estaba bloqueado o en riesgo.' },
      { n: '03', title: 'Intervención', text: 'Qué hizo el Lab, concretamente.' },
      { n: '04', title: 'Resultado', text: 'Qué quedó instalado o entregado.' },
      { n: '05', title: 'Prueba', text: 'Qué tercero lo puede confirmar.' },
    ],

    casesLabel: ['Los casos', '01 — 04'],
    contextLabel: 'Contexto',
    problemLabel: 'Problema',
    workLabel: 'Intervención',
    resultLabel: 'Resultado',
    proofLabel: 'Prueba',

    cases: [
      {
        n: '01',
        title: 'Ley Lafkenche',
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
      {
        n: '02',
        title: 'Consejo Municipal de Futuros',
        subtitle: 'Prospectiva en gobierno local',
        context:
          'Un gobierno local que decide a veinticinco años con dispositivos que duran un período de alcaldía.',
        problem:
          'La capacidad de anticipar se iba con las personas que la portaban. Cada ciclo redescubría el largo plazo y lo volvía a perder.',
        work: 'Instalación del dispositivo: qué señales mirar, con qué frecuencia revisarlas y quién queda a cargo cuando el equipo cambia.',
        result:
          'El instrumento quedó operando en el municipio, con reglas de traspaso escritas en su diseño.',
        proof: 'Instrumento instalado y operando en el gobierno local.',
      },
      {
        n: '03',
        title: 'Unidad de Prospectiva del MINVU',
        subtitle: 'Capacidad anticipatoria en el aparato público',
        context:
          'El Centro de Estudios Ciudad y Territorio del Ministerio de Vivienda y Urbanismo, entre febrero de 2024 y octubre de 2025.',
        problem:
          'El ministerio producía conocimiento sobre políticas urbanas y habitacionales, pero no tenía ninguna unidad encargada de anticipar escenarios de largo plazo.',
        work: 'Diseño y creación de la primera Unidad de Prospectiva institucional del ministerio: estudios de escenarios, análisis de tendencias sociotécnicas, territoriales y climáticas, y formación interna en pensamiento de futuros.',
        result:
          'Unidad constituida dentro de un centro de 26 profesionales en cinco equipos, con la función anticipatoria incorporada a la gestión.',
        proof: 'Primera unidad de su tipo en el MINVU. Dirigida por Isabel Serra.',
      },
      {
        n: '04',
        title: 'Mesa del Transantiago',
        subtitle: 'Coordinación multiactor',
        context:
          'Múltiples organizaciones con señales dispersas sobre el mismo sistema de transporte, desde el Laboratorio de Desarrollo Urbano.',
        problem:
          'Organizaciones distintas trabajando el mismo tema sin lograr firmar una posición común.',
        work: 'Consolidación de las señales dispersas en una sola posición, sostenible por actores con intereses distintos.',
        result: 'Una posición común entre organizaciones que no comparten mandato.',
        status: 'Documentación en curso',
      },
    ],

    note: 'Hay encargos en curso que todavía no se pueden publicar: los casos con cliente vivo se documentan cuando el cliente lo autoriza, no antes.',
  },

  team: {
    meta: {
      title: 'Equipo · utopialab.ai',
      description:
        'Quién ejecuta los encargos: Isabel Serra (Centro de Estudios Ciudad y Territorio del MINVU, Sistema Utopía) y Genaro Cuadros (SECPLA Recoleta, CEPAL–ONU, BID). Credenciales verificables.',
    },
    kicker: 'Equipo',
    titleLines: ['Las mismas', 'personas'],
    sub: 'Quien diseña el encargo es quien lo ejecuta.',
    lead: [
      'Un equipo chico y sin pirámide: ',
      { b: 'no hay juniors facturados como seniors' },
      ' ni un socio que aparece solo en la reunión de venta.',
    ],

    membersLabel: ['El equipo', '01 — 02'],
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
      },
    ],

    capacity: {
      tag: 'Capacidad declarada',
      text: 'Con las horas disponibles hoy, el Lab sostiene dos proyectos estratégicos en paralelo y cuatro suscripciones al Observatorio. Lo decimos porque un tercer proyecto simultáneo rompe la calidad, y preferimos decirlo antes que después.',
    },
  },
}
