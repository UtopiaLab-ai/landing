import type { Content } from './types'

export const en: Content = {
  common: {
    langName: 'English',
    nav: {
      home: 'Home',
      products: 'Products',
      cases: 'Cases',
      team: 'Team',
    },
    book: 'Book a diagnostic hour',
    bookShort: 'Book',
    switchLang: 'Switch language',
    footer: {
      location: 'Santiago, Chile',
      emailLabel: 'Write to us',
    },
  },

  home: {
    meta: {
      title: 'utopialab.ai · Strategic foresight for deciding under uncertainty',
      description:
        'Applied strategic foresight for companies and public bodies exposed to regulatory and territorial change. Ten products, from a 48-hour brief to installed capability and access to the Machine. Santiago, Chile.',
    },

    hero: {
      kicker: 'utopialab.ai · Strategic foresight',
      titleLines: ['Deciding', 'while the future', 'is still', 'open'],
      sub: 'We work with companies and public bodies whose regulatory and territorial environment moves faster than their decisions. The problem is not a lack of information: it is that nobody is tasked with reading that environment with method, or with saying when it forces a decision already taken to be revisited. That is what we install, from a brief in 48 hours to the capability running inside your own team.',
      microcopy: 'No cost, no prior quote. One hour on a decision you already have pending.',
    },

    situations: {
      h2: 'Do you recognise any of these sentences?',
      sub: 'We don’t sell a method. We sell getting out of a situation you can already describe.',
      label: ['Eight situations', '01 — 08'],
      heads: ['Your situation', 'The problem', 'What we propose'],
      rows: [
        {
          situation: '“We have to decide, but we don’t know which possibilities to consider.”',
          problem: 'The opening question is framed too narrowly and the alternatives stay the same ones.',
          proposal: 'Reframe the decision, explore possible futures and widen the alternatives before choosing.',
        },
        {
          situation: '“The problem is so complex we don’t know where to start.”',
          problem: 'Too many variables, actors and simultaneous changes are in play; everything looks important and no one can tell which decision to settle first.',
          proposal: 'Bound the problem, map the system, identify dependencies and build a first decision that lets the work move.',
        },
        {
          situation: '“Everything interesting gets ruled out as unfeasible.”',
          problem: 'The limit is stated as a verdict rather than as a condition that could be changed.',
          proposal: 'Identify dependencies, owners and enabling conditions to open real options.',
        },
        {
          situation: '“Each area sees a part, but nobody manages to see the whole.”',
          problem: 'Diagnoses, interests and data stay fragmented; the connections between decisions only become visible once blockages or contradictions appear.',
          proposal: 'Integrate perspectives, make the interdependencies visible and build a shared picture that lets action be coordinated.',
        },
        {
          situation: '“We can see a change coming, but not where it pays to act.”',
          problem: 'Every trend looks equally important and the relevant opportunities go unrecognised.',
          proposal: 'Assess relevance, potential and conditions for action, to focus effort where it can create value.',
        },
        {
          situation: '“We have a strategy, but we don’t know when or how to revisit it.”',
          problem: 'The plan stays fixed while the conditions that gave it sense keep changing.',
          proposal: 'Translate the vision into sequences, priorities, thresholds and adjustment decisions.',
        },
        {
          situation: '“AI could transform our work, but we don’t know how to bring it in without losing what matters.”',
          problem: 'Technical capability advances faster than the organisation’s capacity to decide what to transform, what to protect and which responsibilities to redefine.',
          proposal: 'Turn the technological potential into a transformation path with priorities, criteria, safeguards, owners and review.',
        },
        {
          situation: '“The work ends and we go back to depending on one or two people.”',
          problem: 'The capability to anticipate and decide does not stay inside the organisation.',
          proposal: 'Leave language, tools, routines and responsibilities the team can sustain.',
        },
      ],
      close:
        'In the meeting we work through a single one of these rows: the one you have just described in your own words.',
    },

    catalog: {
      h2: 'Ten forms of intervention',
      sub: 'We have our own methodology for decision problems in Latin American contexts of uncertainty, polycrisis and institutional distrust. We do not apply recipes: each engagement is fitted to the territory, the organisation, the actors and the moment of decision. You enter wherever the problem asks, and move up only if it helps.',
      label: ['The catalogue', '01 — 10'],
      speeds: [
        {
          key: 'caja',
          name: 'They produce analysis',
          note: 'They deliver a reading you did not have. They do not promise to install anything.',
          products: [
            {
              name: 'Situation Brief',
              text: 'Focused analysis on a single urgent decision. The way in.',
              duration: '48 h – 3 weeks',
            },
            {
              name: 'Signals Observatory',
              text: 'Watches the perimeter you define and delivers a one-page memo and a dashboard before the moment of decision.',
              duration: 'Subscription',
            },
            {
              name: 'Futures Study',
              text: 'Scenarios, feasibility conditions and a traceable decision for a long-term challenge.',
              duration: '4 – 10 weeks',
            },
            {
              name: 'Emerging Niches',
              text: 'Detection of markets that do not exist yet, with the window to enter before anyone else.',
              duration: '3 – 5 weeks',
            },
          ],
        },
        {
          key: 'capacidad',
          name: 'They install capability',
          note: 'The only three that carry that promise. They end with your team operating without us.',
          products: [
            {
              name: 'Futures Lab',
              text: 'A deliberative process that turns incompatible desires into a common, actionable position.',
              duration: '8 – 12 weeks',
            },
            {
              name: 'Futures Training',
              text: 'Transfer of the method so the team can use it without the Lab in the room.',
              duration: '1 – 3 months',
            },
            {
              name: 'Installed Capability',
              text: 'Protocols, training and human–AI governance across two or more teams, until they run alone.',
              duration: '3 – 6 months',
            },
          ],
        },
        {
          key: 'individual',
          name: 'Individual buyer',
          note: 'The same method at the scale of one person rather than an organisation.',
          products: [
            {
              name: 'Trajectory Architecture',
              text: 'Foresight on the personal horizon of an executive or senior professional.',
              duration: '3 – 6 weeks',
            },
          ],
        },
        {
          key: 'maquina',
          name: 'Access to the Machine',
          note: 'The Lab’s memory and watch running inside your organisation. They are prototypes: access is by pilot.',
          products: [
            {
              name: 'Futures Assistant',
              text: 'A chatbot holding your organisation’s decisions, information and context, to build scenarios and project them.',
              duration: 'Continuous access',
            },
            {
              name: 'News Bot',
              text: 'Each team member defines their perimeter and receives what appears in it, without having to go looking.',
              duration: 'Subscription',
            },
          ],
        },
      ],
      cta: 'See the full product sheets →',
    },

    value: {
      kicker: 'What your organisation gains',
      h2: 'Anticipation is not an abstract exercise: it improves the quality, speed and effect of decisions',
      sub: 'The value is in acting with more options open, fewer surprises, and shared criteria for investing, coordinating and growing.',
      label: ['What is gained', '01 — 03'],
      items: [
        {
          title: 'Better performance',
          text: 'Decisions that are clearer, traceable and executable; less rework, fewer blockages, fewer resources spent correcting late.',
        },
        {
          title: 'Growth with less exposure',
          text: 'The capacity to spot emerging opportunities and risks before they turn into emergencies or unavoidable costs.',
        },
        {
          title: 'Capability that stays',
          text: 'A shared language, alerts and criteria that remain with the team to review and adjust course.',
        },
      ],
      evidence: {
        text: [
          'In ',
          { a: 'Rohrbeck and Kum’s', href: 'https://doi.org/10.1016/j.techfore.2017.12.013' },
          ' longitudinal study, firms with high future preparedness recorded 33% higher profitability and 200% higher market-capitalisation growth than the average; ',
          {
            a: 'McKinsey',
            href: 'https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/decision-making-in-the-age-of-urgency',
          },
          ' associates fast, high-quality decisions with better returns. ',
          {
            a: 'ECLAC',
            href: 'https://www.cepal.org/es/publicaciones/40623-planificacion-prospectiva-la-construccion-futuro-america-latina-caribe-textos',
          },
          ' finds that governments in Latin America and the Caribbean have been reluctant to adopt long-term perspectives, and that anticipating risks and opportunities requires that horizon; ',
          { a: 'the OECD', href: 'https://doi.org/10.1787/1d78c791-en' },
          ' links foresight to more resilient policies. These are associations, not promises: the outcome depends on the quality of the decision and on its execution.',
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
            a: 'ECLAC (2016)',
            href: 'https://www.cepal.org/es/publicaciones/40623-planificacion-prospectiva-la-construccion-futuro-america-latina-caribe-textos',
          },
          ' · ',
          { a: 'OECD (2023)', href: 'https://doi.org/10.1787/1d78c791-en' },
        ],
      },
    },

    cases: {
      h2: 'Cases',
      cards: [
        {
          n: '01',
          title: 'Lafkenche Law',
          proof: 'Delivered to the advocacy of the UN High Commissioner for Human Rights',
        },
      ],
      cta: 'See the full case →',
    },

    team: {
      h2: 'Team',
      sub:
        'A multidisciplinary team with deep technical experience, in high-level advisory work, advocacy and technology: an uncommon synergy, and one further amplified by what AI now makes possible.',
      label: ['Team', '01 — 04'],
      members: [
        {
          name: 'Isabel Serra',
          role: 'Product lead',
          text: 'Urbanist. Led MINVU’s Centre for City and Territory Studies, and was an academic and researcher at Universidad Diego Portales for ten years. Author of the Utopía System.',
          profile: 'https://www.linkedin.com/in/isabel-serra-1574509/',
        },
        {
          name: 'Genaro Cuadros',
          role: 'Project lead',
          text: 'Architect and urban planner. Head of Recoleta’s Planning Secretariat; consultant to ECLAC–UN and the IDB on urban and territorial development.',
          profile: 'https://www.linkedin.com/in/genaro-cuadros-ib%C3%A1%C3%B1ez-46b02842/',
        },
        {
          name: 'Ariel López',
          role: 'Team member',
          text: 'Transport engineer and urban planner. International consultant to ECLAC and UNDP, adviser to Chile’s National Council for Territorial Development, and court-appointed traffic expert.',
          profile: 'https://www.linkedin.com/in/arielopez',
        },
        {
          name: 'Willy Maikowski',
          role: 'Team member',
          text: 'Software engineer. Engineering Manager at Buk, previously at Universidad de Chile’s Ucampus Technology Centre. Built the real-time monitor of Santiago’s buses with Ariel.',
          profile: 'https://www.linkedin.com/in/willymaikowski',
        },
      ],
      cta: 'See the full credentials →',
    },

    closing: {
      h2: 'Want to see the signals in the noise?',
      body: 'It is not a services pitch. In one hour we work out what information is missing, which possibilities are worth opening, and what your next decision is. If no engagement follows, you keep that anyway.',
      cta: 'Book an hour',
    },
  },

  products: {
    meta: {
      title: 'Products · utopialab.ai',
      description:
        'The full catalogue: ten products across four steps of commitment, with definition, deliverable, duration and the situation that triggers each one.',
    },
    kicker: 'The catalogue',
    titleLines: ['Ten', 'products'],
    sub: 'The only thing that gets signed.',
    lead: [
      'Each with its deliverable and duration declared. ',
      { b: 'You enter wherever the problem asks' },
      ', not where the list begins.',
    ],

    ladderLabel: ['The commitment ladder', '01 — 04'],
    ladderIntro:
      'Products are ordered by depth, not by type. No step obliges the next one: you can stop at any of them.',
    ladder: [
      {
        n: '01',
        name: 'Diagnostic',
        text: 'One pending decision. The way in, and the only thing you can buy without knowing us.',
      },
      {
        n: '02',
        name: 'Project',
        text: 'A concrete challenge, with the full process from start to finish.',
      },
      {
        n: '03',
        name: 'Capability',
        text: 'Your own teams running the protocol without us in the room.',
      },
      {
        n: '04',
        name: 'Recurring',
        text: 'Continuous access to the Machine: the observatory, the news bot and an assistant holding the organisation’s decision memory.',
      },
    ],

    productsLabel: ['The product sheets', '01 — 10'],
    definitionLabel: 'What it is',
    triggerLabel: 'Situation that triggers it',
    deliverableLabel: 'Deliverable',
    durationLabel: 'Duration',
    stepLabel: 'Step',

    speeds: [
      {
        key: 'caja',
        name: 'Products that produce analysis',
        note: 'They deliver a reading the organisation did not have. The promise of installing capability is not attached to them: that is not what they do.',
        products: [
          {
            n: '01',
            name: 'Situation Brief',
            def: 'Focused strategic analysis, delivered in days, in the face of an urgent decision or a critical signal.',
            text: 'It enters on a single pending decision. It reframes the problem — separating what is evidence from what is framing — and returns a map of alternatives that were outside the field of vision. It does not resolve the decision: it changes the question the decision is made with. It is the product that opens the conversation with any organisation, and the only one that can be bought without knowing the Lab yet.',
            trigger: '“We have to decide and we don’t know which scenarios to look at.”',
            deliverable: 'Reframed problem + map of alternatives',
            duration: '48 h – 3 weeks',
            step: 'Diagnostic',
          },
          {
            n: '02',
            name: 'Signals Observatory',
            def: 'Sustained watch over the perimeter of a debate that matters to the organisation — legislation, press, actors, counterparts — with a one-page memo and a dashboard delivered before the moment of decision.',
            text: 'Most organisations do not have an analysis problem: they have a problem arriving in time. The Observatory watches a perimeter defined by the client, not a general sweep, and before each moment of decision delivers what changed, which actor moved, which window is opening or closing, and how solid the evidence is. The form matters: a one-page memo, written, with sources and a declared level of confidence, that can be read between meetings and taken to a table; and a dashboard to follow the perimeter between one memo and the next.',
            trigger: '“Nobody watches the environment systematically and we always react late.”',
            deliverable: 'One-page memo + dashboard + off-cycle alerts',
            duration: 'Monthly subscription',
            step: 'Continuous',
          },
          {
            n: '03',
            name: 'Futures Study',
            def: 'An organisational, sectoral or territorial foresight process that produces scenarios, feasibility conditions and a traceable decision.',
            text: 'For a concrete long-term challenge, it runs the object of analysis through multiple scenarios, turns every “not feasible” into conditions with named owners, and leaves the decision recorded — what was known, what was assumed, when it must be reviewed — so the team can reconstruct it months later. In its territorial version it answers what will happen in a territory over the next ten years: land use, regulatory risk, latent conflicts.',
            trigger:
              '“Everything interesting gets ruled out as unfeasible” · “Nobody remembers why we decided that, or when to review it.”',
            deliverable: 'Scenarios + conditions with owners + decision record',
            duration: '4 – 10 weeks',
            step: 'Project',
          },
          {
            n: '04',
            name: 'Emerging Niches',
            def: 'Detection and validation of markets that do not exist yet — or are only now forming — in order to take a position before anyone else.',
            text: 'It is not benchmarking, which reads current competitors, nor market research, which reads existing demand: it reads the present for latent possibilities — weak signals, unserved gaps, disruptions arriving from outside the sector — and returns the emerging niche, the conditions for it to consolidate, the window to enter, and where the competition would come from.',
            trigger:
              '“We know our market is going to change, but not in which direction or where the competition will come from.”',
            deliverable: 'Map of emerging niches + conditions + entry window',
            duration: '3 – 5 weeks, or quarterly tracking',
            step: 'Project',
          },
        ],
      },
      {
        key: 'capacidad',
        name: 'Products that install capability',
        note: 'The second speed. These three — and only these three — carry the promise of leaving capability installed.',
        products: [
          {
            n: '05',
            name: 'Futures Lab',
            def: 'A deliberative process with the client’s team that turns incompatible desires into a common, actionable position.',
            text: 'When every area wants something different and the organisation ends up with a consensus that convinces no one, the Lab makes the incompatible desires explicit instead of erasing them, and builds from there a position the team can hold and execute. What remains in dispute is recorded, not hidden. It is the format of the twelve-week pilot and the point where the Lab starts installing capability rather than only delivering analysis.',
            trigger: '“Every area wants something different and we end up with a consensus that convinces no one.”',
            deliverable: 'Packaged common position + deliberation protocol',
            duration: '8 – 12 weeks',
            step: 'Project',
          },
          {
            n: '06',
            name: 'Futures Training',
            def: 'A programme that installs in the client’s teams the capability to anticipate, read systems and deliberate under uncertainty.',
            text: 'It is not an innovation course or a leadership workshop: it is the transfer of the method so the team can use it without the Lab in the room. It trains reading of complex systems, working with uncertainty, scenario thinking and strategic deliberation, and leaves a review routine installed. Each cycle returns to the same method but further along: the Lab’s hand goes down as the team’s goes up.',
            trigger: '“We are adopting AI, or entering a change of cycle, and we don’t know what will happen to how we work.”',
            deliverable: 'Programme + a real case from the team + review routine',
            duration: '1 – 3 months',
            step: 'Capability',
          },
          {
            n: '07',
            name: 'Installed Capability',
            def: 'Full installation of the protocol across two or more of the client’s teams, with human–AI governance, until they operate without the Lab.',
            text: 'The step where the client stops buying deliverables and comes to hold the capability as their own. The Lab installs the protocols, trains the teams, sets up the review routine and defines the governance between what the human decides and what the AI assists. It is the real promise behind “we install capability”, and the only product that keeps it without metaphor.',
            trigger:
              'A client who has already been through a Study or a Lab and wants to internalise the method instead of continuing to contract it.',
            deliverable: 'Protocols + training + human–AI governance',
            duration: '3 – 6 months',
            step: 'Capability',
          },
        ],
      },
      {
        key: 'individual',
        name: 'Individual buyer',
        note: 'It sits outside the organisational catalogue because the signatory is a person, not an institution.',
        products: [
          {
            n: '08',
            name: 'Trajectory Architecture',
            def: 'Strategic foresight for one person — an executive, a director, a senior professional — on their own horizon.',
            text: 'The same method applied to an individual trajectory rather than an organisation: it reads the person’s sectoral environment, builds scenarios of their trajectory and maps the capabilities each one demands. Where they are today, what each possible path asks of them, and what they would have to build to take it.',
            trigger:
              'A senior professional at a turning point who needs to read their environment ten years out.',
            deliverable: 'Trajectory scenarios + capability map',
            duration: '3 – 6 weeks',
            step: 'Individual',
          },
        ],
      },
      {
        key: 'maquina',
        name: 'Access to the Machine',
        note: 'The fourth speed: the Utopian Machine running inside the organisation, with its memory and its watch. They are prototypes and open by pilot.',
        products: [
          {
            n: '09',
            name: 'Futures Assistant',
            def: 'A chatbot with the organisation’s decisions, information and context built in, to consult what was decided, build scenarios and project their effects.',
            text: 'What a team learns while deciding tends to leave with the people. The Assistant keeps what was decided, with what information and under which assumption, and warns when that assumption stops holding. On top of that memory you can ask what was known at the time, request alternative scenarios, or project what changes if a variable moves. It is queried from Telegram and runs on an open model, in the organisation’s own instance: its deliberations do not live on the Lab’s server or an AI company’s, and if the engagement ends, the instance and the memory stay with the organisation. The AI proposes; the team commits.',
            trigger: '“Every time someone leaves, we lose why we decided what we decided.”',
            deliverable: 'Own instance + decision memory + scenarios on request',
            duration: 'Continuous access',
            step: 'Recurring',
          },
          {
            n: '10',
            name: 'News Bot',
            def: 'A bot that delivers to each team member whatever appears in the perimeter they defined, without them having to go looking.',
            text: 'Up to five people set their own search terms — press, legislation, actors, counterparts — and receive what appears in their perimeter as soon as it appears. It does not replace the Observatory memo: it is the daily layer, the one that avoids finding out from the press. What the bot picks up feeds the memo and the Assistant’s memory.',
            trigger: '“Everyone finds out about their own piece on their own, and almost always late.”',
            deliverable: 'Bot with a perimeter per person, up to five team members',
            duration: 'Monthly subscription',
            step: 'Recurring',
          },
        ],
      },
    ],

    horizon: {
      label: ['Status of the Machine', 'Honesty condition'],
      tag: 'In pilot',
      name: 'Access to the Machine',
      text: 'The Futures Assistant and the News Bot run on the Utopian Machine, which is a prototype. They open by pilot, with a limited number of organisations and with scope and limits in writing. We say it this way because selling them as a mature service would be promising what is still being validated.',
      stateLabel: 'Status',
      state: 'Prototype · access by pilot',
    },

    contracting: {
      label: ['How to contract', '01 — 04'],
      h2: 'How to contract',
      intro:
        'What a procurement team, a board or a tender unit needs to know before they can move.',
      items: [
        {
          title: 'It starts with an hour, not a proposal',
          text: 'The diagnostic conversation is free and requires no prior quote. Scope and value are defined only afterwards, because before that neither side knows what is being bought.',
        },
        {
          title: 'Scope and deliverable in writing',
          text: 'Every engagement declares what is in, what is out, who executes it and on what timeline. The deliverables in this catalogue are the ones that get signed: no others are promised in the meeting.',
        },
        {
          title: 'You can stop at any step',
          text: 'No product obliges the next. The Brief does not commit you to a Study, and the Study does not commit you to a Lab.',
        },
        {
          title: 'Public procurement and tenders',
          text: 'We work with municipalities and agencies through whatever formal route applies. For tender documents and administrative requirements, write to us before the deadline: the municipal budget cycle runs from August to October.',
        },
      ],
      priceNote:
        'Values depend on scope, on the number of teams and on the antennae that need installing. They are defined after the diagnostic hour, and larger engagements are structured in tranches so they fit within a running budget.',
    },

    neutrality: {
      tag: 'Neutrality condition',
      text: 'On the same regulatory or territorial matter and within the same window, we do not serve both a political party and a private or public client whose interests in that matter are in conflict. Every engagement declares its perimeter in writing. Without that perimeter, the engagement is not taken.',
    },
  },

  cases: {
    meta: {
      title: 'Cases · utopialab.ai',
      description:
        'Where the method has been run: the Lafkenche Law case, with context, problem, intervention, result and proof, and the three stages of the core of the method.',
    },
    kicker: 'The method at work',
    titleLines: ['Cases'],
    sub: 'Open processes, not finished monuments.',

    figureAlt:
      'Diagram of the core of the method: the signal emerges from noise, crosses a fuzzy threshold, forks into a cone of futures and opens a decision window that closes at the point of no return.',
    figureCaption:
      'The core of the method: where the signal was, when it forked, and how far open the window still was. Every case is this same drawing at work.',

    casesLabel: ['The case', '01 — 01'],
    contextLabel: 'Context',
    problemLabel: 'Problem',
    workLabel: 'Intervention',
    resultLabel: 'Result',
    proofLabel: 'Proof',

    cases: [
      {
        n: '01',
        title: 'Lafkenche Law',
        subtitle: 'Rights, territory and the coastal edge',
        context:
          'The conflict between the coastal edge, the rights of Indigenous peoples and productive activity, mid-process and with actors who did not share a diagnosis.',
        problem:
          'Each actor read the conflict through their own legal and territorial frame. There was no analysis of the whole system that would let them discuss the same object.',
        work: 'Systemic analysis of the conflict: the regulatory, institutional and discursive fabric, the actor map, and the trajectories each alternative opened or closed.',
        result: 'An analytical product delivered and used in the real process, not an archived report.',
        proof:
          'Delivered to the advocacy team of the UN High Commissioner for Human Rights.',
      },
    ],

    note: 'There are live engagements that cannot be published yet: cases with an active client are documented when the client authorises it, not before.',

    method: {
      kicker: 'How we work',
      h2: 'We read the signal, open up possibilities and decide in time',
      sub: 'The three stages correspond to a precise point on the diagram: detect the change, recognise the fork, and act inside the window where the decision can still alter the outcome.',
      label: ['The core of the method', '01 — 03'],
      markerLabel: 'On the diagram',
      steps: [
        {
          n: '01',
          title: 'Locate the signal',
          text: 'We read the territory, the rules and the actors to tell a relevant change apart from noise.',
          marker: 'signal',
        },
        {
          n: '02',
          title: 'See the fork',
          text: 'We make comparable the alternatives, tensions and futures that business as usual does not yet let anyone see.',
          marker: 'fork',
        },
        {
          n: '03',
          title: 'Decide inside the window',
          text: 'We set criteria, owners, alerts and conditions to act or revisit before the point of no return.',
          marker: 'decision window',
        },
      ],
      close:
        'Anticipating is not predicting the scenario: it is deciding while the decision still counts. Past the point of no return, what is left is managing the effect, not choosing it.',
      chain: {
        label: ['The full chain', '01 — 11'],
        intro:
          'The three stages are three links in a longer chain. Each glyph says what happens to the field: turquoise for what is observed, orange for what crosses into alert and blue for what gets decided.',
        stages: {
          senal: 'Signal',
          cadena: 'Chain',
          umbral: 'Threshold',
          convergencia: 'Convergence',
          bifurcacion: 'Fork',
          trayectoria: 'Trajectory',
          escenario: 'Scenario',
          implicancia: 'Implication',
          decision: 'Decision',
          experimento: 'Experiment',
          ajuste: 'Learning and adjustment',
        },
        legend: { observation: 'Observation', alert: 'Alert', decision: 'Decision' },
        returnNote: 'The cycle does not close: adjustment returns to the field and opens a new observation.',
      },
    },
  },

  team: {
    meta: {
      title: 'Team · utopialab.ai',
      description:
        'Who runs the engagements: Isabel Serra (MINVU Centre for City and Territory Studies, Utopía System) and Genaro Cuadros (Recoleta Planning Secretariat, ECLAC–UN, IDB). Verifiable credentials.',
    },
    kicker: 'Team',
    titleLines: ['Experience'],
    sub: 'Advocacy, decision-making, innovation and technology.',
    lead: [
      'A multidisciplinary team with deep technical experience, in high-level advisory work, advocacy and technology: ',
      { b: 'an uncommon synergy' },
      ', and one further amplified by what AI now makes possible.',
    ],

    membersLabel: ['The team', '01 — 04'],
    credentialsLabel: 'Track record',
    members: [
      {
        n: '01',
        name: 'Isabel Serra Benítez',
        role: 'Product lead',
        text: 'Urbanist and researcher, with fifteen years at the intersection of design, critical thought and futures studies — ten of them as an academic and researcher at Universidad Diego Portales. Author of the Utopía System, the methodological frame that orders the Lab’s work. She leads the design of engagements: scope, deliverables and the relationship with counterparts.',
        credentials: [
          'Head of the Centre for City and Territory Studies, MINVU (2024–2025): 26 professionals across five teams',
          'Academic and researcher, Universidad Diego Portales (2012–2022)',
          'Led eleven research projects with ECLAC, GIZ, the University of St. Gallen and Columbia University',
          'PhD candidate in American Studies, IDEA–USACH',
          'MA in Public Management and Policy, Universidad de Chile — Eugenio Lahera Prize',
          'Architect, Pontificia Universidad Católica de Chile',
        ],
        profile: 'https://www.linkedin.com/in/isabel-serra-1574509/',
      },
      {
        n: '02',
        name: 'Genaro Cuadros Ibáñez',
        role: 'Project lead',
        text: 'Architect and urban planner with a track record in urban and territorial public policy in Chile, across every place where it gets decided: government, municipalities, academia, cooperation and the private sector. He leads project execution and the relationship with the public sector.',
        credentials: [
          'Head of the Planning Secretariat (SECPLA), Municipality of Recoleta (2025–2026)',
          'Consultant to ECLAC–UN on mobility and urban development (2021–2023)',
          'External consultant to the IDB for SERCOTEC’s Commercial Neighbourhoods Programme (2023–2024)',
          'Director of the City and Territory Laboratory, Universidad Diego Portales (2011–2020)',
          'Member of the Presidential Commission for Urban Mobility (2016–2017)',
          'Coordinator of Critical Neighbourhoods, Quiero Mi Barrio programme, MINVU (2005–2008)',
          'MSc in Applied Sciences, Urbanism and Territorial Development, UCLouvain — with distinction',
        ],
        profile: 'https://www.linkedin.com/in/genaro-cuadros-ib%C3%A1%C3%B1ez-46b02842/',
      },
      {
        n: '03',
        name: 'Ariel López López',
        role: 'Team member',
        text: 'Transport engineer and urban planner. He treats mobility as what it is — who can reach where, in how long and at what cost — rather than as an infrastructure problem solved by building. That reading is what he brings to territorial engagements: a transport system reveals a city’s structure of opportunity before any aggregate indicator does.',
        credentials: [
          'International consultant to ECLAC and UNDP',
          'Adviser to the National Council for Territorial Development (CNDT)',
          'Court-appointed traffic expert, Courts of Appeal of Santiago, Valparaíso and Rancagua',
          'Head of Studies and Projects, W Ingeniería',
          'Lecturer in Transport Engineering, UTEM and Universidad Andrés Bello',
          'PhD candidate in Territory, Space and Society, FAU — Universidad de Chile',
          'MA in Urbanism, Universidad de Chile',
          'Transport and Traffic Engineer, UTEM',
        ],
        profile: 'https://www.linkedin.com/in/arielopez',
      },
      {
        n: '04',
        name: 'Willy Maikowski Correa',
        role: 'Team member',
        text: 'Software engineer, with his track record in systems that run every day rather than in demonstrations. Engineering Manager at Buk and previously at Universidad de Chile’s Ucampus Technology Centre, where thousands of people use the academic management software daily. With Ariel he built the real-time monitor of Santiago’s buses on Red Movilidad’s GPS feed: precisely the Observatory’s problem — turning a raw stream into something a person can look at and decide on — solved with public data and on nobody’s commission.',
        credentials: [
          'Engineering Manager at Buk',
          'Ucampus Technology Centre, Universidad de Chile',
          'Real-time monitor of Santiago’s buses (velocidades.seguimos.cl), with Ariel López',
          'Thesis supervisor in Computer Science Engineering, FCFM — Universidad de Chile',
        ],
        profile: 'https://www.linkedin.com/in/willymaikowski',
      },
    ],

    capacity: {
      tag: 'Declared capacity',
      text: 'With the hours available today, the Lab sustains two strategic projects in parallel and four Observatory subscriptions. We say so because a third simultaneous project breaks the quality, and we would rather say it up front than later.',
    },
  },
}
