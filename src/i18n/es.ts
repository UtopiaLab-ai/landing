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
      titleLines: ['Decidir', 'cuando el futuro', 'todavía', 'está abierto.'],
      sub: 'Trabajamos con empresas y organismos públicos cuyo entorno regulatorio y territorial cambia más rápido que sus decisiones. El problema no es falta de información: es que nadie tiene el encargo de mirar ese entorno con método y decir cuándo obliga a revisar una decisión ya tomada. Eso es lo que instalamos, desde un brief en 48 horas hasta la capacidad operando en tu equipo.',
      microcopy:
        'Sin costo y sin cotización previa. Una hora sobre una decisión que ya tienes pendiente.',
    },

    proof: {
      label: 'Dónde se ha ejecutado este método',
      items: [
        { name: 'MINVU', text: 'Diseño de la primera Unidad de Prospectiva del ministerio' },
        { name: 'CEPAL · ONU', text: 'Consultoría en movilidad y desarrollo urbano' },
        { name: 'ONU Derechos Humanos', text: 'Análisis territorial para la abogacía del Alto Comisionado' },
        { name: 'BID · SERCOTEC', text: 'Programa de Barrios Comerciales' },
        { name: 'Municipalidad de Recoleta', text: 'Dirección de la Secretaría de Planificación' },
      ],
    },

    situations: {
      h2: '¿Te reconoces en alguna de estas frases?',
      sub: 'No vendemos método. Vendemos salir de una situación que ya sabes describir.',
      label: ['Ocho situaciones', '01 — 08'],
      heads: ['Tu situación', 'El problema', 'Lo que proponemos'],
      rows: [
        {
          situation: '«Tenemos que decidir, pero no sabemos qué posibilidades considerar.»',
          problem: 'La pregunta inicial está demasiado cerrada y las alternativas siguen siendo las mismas.',
          proposal: 'Reformular la decisión, explorar futuros posibles y ampliar las alternativas antes de elegir.',
        },
        {
          situation: '«El problema es tan complejo que no sabemos por dónde empezar.»',
          problem: 'Intervienen demasiadas variables, actores y cambios simultáneos; todo parece importante y no se logra identificar qué decisión ordenar primero.',
          proposal: 'Delimitar el problema, visualizar el sistema, identificar dependencias y construir una primera decisión que permita avanzar.',
        },
        {
          situation: '«Todo lo interesante nos lo descartan como no viable.»',
          problem: 'El límite se formula como un veredicto y no como una condición que podría transformarse.',
          proposal: 'Identificar dependencias, responsables y condiciones habilitantes para abrir opciones reales.',
        },
        {
          situation: '«Cada área ve una parte, pero nadie logra ver el conjunto.»',
          problem: 'Diagnósticos, intereses y datos quedan fragmentados; las conexiones entre decisiones no se hacen visibles hasta que aparecen bloqueos o contradicciones.',
          proposal: 'Integrar perspectivas, hacer visibles las interdependencias y construir una visión compartida que permita coordinar la acción.',
        },
        {
          situation: '«Vemos que viene un cambio, pero no dónde conviene actuar.»',
          problem: 'Todas las tendencias parecen igualmente importantes y no se reconocen oportunidades pertinentes.',
          proposal: 'Evaluar relevancia, potencial y condiciones de acción para enfocar el esfuerzo donde puede generar valor.',
        },
        {
          situation: '«Tenemos una estrategia, pero no sabemos cuándo ni cómo revisarla.»',
          problem: 'El plan queda fijo mientras cambian las condiciones que le dieron sentido.',
          proposal: 'Traducir la visión en secuencias, prioridades, umbrales y decisiones de ajuste.',
        },
        {
          situation: '«La IA puede transformar nuestro trabajo, pero no sabemos cómo incorporarla sin perder lo que importa.»',
          problem: 'La capacidad técnica avanza más rápido que la capacidad de la organización para decidir qué transformar, qué resguardar y qué responsabilidades redefinir.',
          proposal: 'Convertir el potencial tecnológico en una trayectoria de transformación con prioridades, criterios, resguardos, responsables y revisión.',
        },
        {
          situation: '«El trabajo termina y volvemos a depender de una o dos personas.»',
          problem: 'La capacidad para anticipar y decidir no queda instalada en la organización.',
          proposal: 'Dejar lenguaje, herramientas, rutinas y responsabilidades que el equipo pueda sostener.',
        },
      ],
      close:
        'En la reunión trabajamos una sola de estas filas: la que acabas de describir con tus palabras.',
    },

    catalog: {
      h2: 'Ocho formas de intervención',
      sub: 'Tenemos metodología propia para problemas de decisión en contextos latinoamericanos de incertidumbre, policrisis y desconfianza institucional. No aplicamos recetas: cada encargo se ajusta al territorio, la organización, los actores y el momento de decisión. Se entra por donde el problema lo pida y se sube solo si sirve.',
      label: ['El catálogo', '01 — 08'],
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
      ],
      cta: 'Ver las fichas completas →',
    },

    method: {
      kicker: 'Cómo trabajamos',
      h2: 'Leemos la señal, abrimos posibilidades y decidimos a tiempo.',
      sub: 'Las tres etapas corresponden a un punto preciso del esquema: detectar el cambio, reconocer la bifurcación y actuar dentro de la ventana en que la decisión todavía puede modificar el resultado.',
      label: ['El núcleo del método', '01 — 03'],
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
          title: 'Visualizar la bifurcación',
          text: 'Hacemos comparables alternativas, tensiones y futuros que el curso habitual todavía no permite ver.',
          marker: 'bifurcación',
        },
        {
          n: '03',
          title: 'Decidir en la ventana',
          text: 'Definimos criterios, responsables, alertas y condiciones para actuar o revisar antes del punto de no retorno.',
          marker: 'ventana de decisión',
        },
      ],
      close:
        'Anticipar no es predecir el escenario: es decidir mientras la decisión todavía incide. Pasado el punto de no retorno queda gestionar el efecto, no elegirlo.',
    },

    value: {
      kicker: 'Qué gana tu organización',
      h2: 'Anticipar no es un ejercicio abstracto: mejora la calidad, la velocidad y el efecto de las decisiones.',
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
        text: 'En su muestra, las empresas con alta preparación de futuro registraron 33% más rentabilidad y 200% más crecimiento; McKinsey asocia decisiones rápidas y de alta calidad con mejores retornos. La CEPAL advierte que la falta de perspectiva de largo plazo limita las oportunidades y la contención de riesgos en América Latina y el Caribe, y la OCDE vincula la prospectiva con decisiones más resilientes. Son asociaciones, no promesas: el resultado depende de la calidad de la decisión y de su ejecución.',
        sources: 'Rohrbeck & Kum (2018) · McKinsey (2019) · CEPAL (2016) · OCDE (2023)',
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
          proof: 'Diseño entregado, pendiente de constitución',
        },
        {
          n: '03',
          title: 'Unidad de Prospectiva MINVU',
          proof: 'Diseño entregado, pendiente de implementación',
        },
        {
          n: '04',
          title: 'Mesa del Transantiago',
          proof: 'Posición común entre organizaciones distintas',
        },
      ],
      cta: 'Ver los casos completos →',
      figureAlt:
        'Esquema del núcleo del método: la señal emerge del ruido, cruza un umbral difuso, se bifurca en un cono de futuros y abre una ventana de decisión que se cierra en el punto de no retorno.',
      figureCaption:
        'Los cuatro casos son el mismo esquema en obra: dónde estaba la señal, cuándo se bifurcó y qué tan abierta seguía la ventana.',
    },

    team: {
      h2: 'Equipo',
      sub: 'Un equipo chico: lo ejecutan las mismas personas que lo diseñan. Sin juniors facturados como seniors.',
      label: ['Equipo', '01 — 04'],
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
        {
          name: 'Ariel López',
          role: 'Socio',
          text: 'Ingeniero en transporte y urbanista. Consultor internacional de la CEPAL y el PNUD, asesor del Consejo Nacional de Desarrollo Territorial y perito judicial en tránsito.',
        },
        {
          name: 'Willy Maikowski',
          role: 'Socio',
          text: 'Ingeniero de software. Engineering Manager en Buk, antes en el Centro Tecnológico Ucampus de la Universidad de Chile. Construyó con Ariel el monitor en tiempo real de los buses de Santiago.',
        },
      ],
      cta: 'Ver las credenciales completas →',
    },

    closing: {
      h2: 'Trae una decisión que no puedas postergar.',
      body: 'No es una presentación de servicios. En una hora identificamos qué información falta, qué posibilidades conviene abrir y cuál es tu próxima decisión. Si después de eso no hay encargo, igual te llevas eso.',
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
        work: 'Diseño del dispositivo: qué señales mirar, con qué frecuencia revisarlas y quién queda a cargo cuando el equipo cambia.',
        result:
          'El diseño quedó entregado, con las reglas de traspaso escritas en el propio instrumento. No está constituido: eso depende de una decisión del municipio que todavía no se toma.',
        status: 'Diseño entregado · sin constituir',
      },
      {
        n: '03',
        title: 'Unidad de Prospectiva del MINVU',
        subtitle: 'Capacidad anticipatoria en el aparato público',
        context:
          'El Centro de Estudios Ciudad y Territorio del Ministerio de Vivienda y Urbanismo, entre febrero de 2024 y octubre de 2025.',
        problem:
          'El ministerio producía conocimiento sobre políticas urbanas y habitacionales, pero no tenía ninguna unidad encargada de anticipar escenarios de largo plazo.',
        work: 'Diseño de la primera Unidad de Prospectiva institucional del ministerio: mandato, funciones, dotación y ciclo de trabajo —estudios de escenarios, análisis de tendencias sociotécnicas, territoriales y climáticas, y formación interna en pensamiento de futuros—.',
        result:
          'El diseño quedó entregado dentro del Centro de Estudios Ciudad y Territorio, un equipo de 26 profesionales en cinco áreas. La unidad no se implementó: constituirla es una decisión del ministerio que no se ha tomado.',
        status: 'Diseño entregado · sin implementar',
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

    membersLabel: ['El equipo', '01 — 04'],
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
      {
        n: '03',
        name: 'Ariel López López',
        role: 'Socio',
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
        role: 'Socio',
        text: 'Ingeniero de software, con la trayectoria puesta en sistemas que operan todos los días y no en demostraciones. Engineering Manager en Buk y antes en el Centro Tecnológico Ucampus de la Universidad de Chile, donde el software de gestión académica lo usan miles de personas a diario. Con Ariel construyó el monitor en tiempo real de los buses de Santiago sobre los datos GPS de Red Movilidad: exactamente el problema del Observatorio —convertir un flujo crudo en algo que alguien pueda mirar y decidir—, resuelto con datos públicos y sin encargo de nadie.',
        credentials: [
          'Engineering Manager en Buk',
          'Centro Tecnológico Ucampus, Universidad de Chile',
          'Monitor en tiempo real de los buses de Santiago (velocidades.seguimos.cl), con Ariel López',
          'Profesor guía de memorias en Ingeniería Civil en Computación, FCFM — Universidad de Chile',
        ],
        profile: 'https://www.linkedin.com/in/willymaikowski',
      },
    ],

    capacity: {
      tag: 'Capacidad declarada',
      text: 'Con las horas disponibles hoy, el Lab sostiene dos proyectos estratégicos en paralelo y cuatro suscripciones al Observatorio. Lo decimos porque un tercer proyecto simultáneo rompe la calidad, y preferimos decirlo antes que después.',
    },
  },
}
