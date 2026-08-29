# utopialab.ai

Sitio comercial de utopialab.ai: **Vite + React + TypeScript**, bilingüe (español /
inglés), con la agenda de Cal.com como destino de conversión principal.

El contenido se deriva del catálogo comercial (ocho productos en cuatro escalones de
compromiso) y se ordena según el TCBF — el manual de compra de consultoría tecnológica.
Cuatro registros que no se mezclan: este sitio está en el de **landing**, no en el
académico, el de patente ni el interno.

## Desarrollo

Requiere Node 20+ (hay un `.nvmrc` con 24).

```bash
nvm use
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + build a dist/
npm run preview  # sirve dist/
```

## Configuración

Todo lo configurable vive en [`src/config.ts`](src/config.ts):

| Constante        | Para qué                                                        |
| ---------------- | --------------------------------------------------------------- |
| `BOOKING_URL`    | Destino de todos los CTA (Cal.com)                                |
| `BRAND`          | El nombre del wordmark, sin dominio                               |
| `BRAND_TLD`      | El dominio del wordmark, separado por el punto de señal           |
| `SITE_DOMAIN`    | Dominio canónico que aparece en el pie                            |
| `CONTACT_EMAIL`  | Correo publicado en el pie                                        |
| `COPYRIGHT_YEAR` | Año del pie de página                                             |

El correo no es redundante con la agenda: el vertical público compra por licitación y
necesita un canal escrito para bases y consultas administrativas.

## Idiomas

Cada idioma tiene su propia URL, con español por defecto:

| Página    | Español         | English        |
| --------- | --------------- | -------------- |
| Home      | `/es`           | `/en`          |
| Productos | `/es/productos` | `/en/products` |
| Casos     | `/es/casos`     | `/en/cases`    |
| Equipo    | `/es/equipo`    | `/en/team`     |

`/` redirige a `/en` si el navegador está en inglés y a `/es` en cualquier otro caso
(ver `detectLocale` en [`src/App.tsx`](src/App.tsx)).

El selector ES/EN del header mantiene la página y el ancla actuales.

Las rutas de estructuras anteriores —`/es/servicios`, `/es/sistema`, `/es/pensamiento`,
`/es/que-es`, `/es/intervenciones`, `/es/dispositivos` y sus pares en inglés— se conservan
como redirecciones 301 para no romper enlaces publicados. Viven en dos lugares que hay que
mantener sincronizados: `LEGACY_REDIRECTS` en [`src/routes.ts`](src/routes.ts) para la SPA
y [`public/_redirects`](public/_redirects) para el servidor.

### Editar textos

Todo el contenido está en dos archivos, uno por idioma:

- [`src/i18n/es.ts`](src/i18n/es.ts)
- [`src/i18n/en.ts`](src/i18n/en.ts)

Ambos implementan la interfaz `Content` de [`src/i18n/types.ts`](src/i18n/types.ts), así que
si se agrega un texto en uno y falta en el otro, **el build falla**. No hay strings sueltos
en los componentes.

Los slugs de cada idioma se definen en [`src/routes.ts`](src/routes.ts).

## Estructura

```
src/
  config.ts          Booking URL, marca, dominio, año
  routes.ts          Páginas, slugs por idioma, anclas y redirecciones heredadas
  App.tsx            Router, marco de página, redirecciones
  site-context.ts    Contexto con { locale, page, t }
  useDocumentMeta.ts <title>, description, <html lang>, canonical y hreflang
  styles.css         Hoja única
  i18n/              types.ts + es.ts + en.ts
  brand/             glyphs.ts (geometría del manual) + Glyph.tsx + Wordmark.tsx
  components/        Header, Footer, LangSwitch, BookButton, Rich, Lines, SectionLabel
  pages/             Home, Products, Cases, Team
scripts/
  build-brand-assets.ts  Genera brand/ y los iconos de public/ (npm run brand)
  wordmark-path.py       Convierte el wordmark a curvas para los lockups
brand/                   Kit generado: svg/, png/, pdf/ + su propio README
```

### La home

Nueve bloques, en el orden del recorrido de compra y no en orden narrativo:

1. **Hero** — posicionamiento: a quién, para qué problema, con qué profundidad.
2. **Prueba** — credenciales institucionales, antes de cualquier oferta: quien evalúa un
   proveedor decide la credibilidad antes de leer lo que se le vende.
3. **Situaciones** — las cinco frases en que el cliente se reconoce.
4. **Catálogo** — los ocho productos por velocidad, con enlace a las fichas.
5. **Para quién** — los seis mandantes, con la demanda observada separada de la apuesta.
6. **Casos** · 7. **Equipo** — las dos caras de la prueba, cada una con su página.
8. **Objeciones** — las tres preguntas que siempre aparecen.
9. **Cierre** — la agenda.

### Las dos velocidades

El catálogo separa **productos-caja** (Brief, Observatorio, Estudio, Nichos), que producen
análisis, de **productos-capacidad** (Laboratorio, Formación, Capacidad instalada), que la
instalan. La promesa «instalamos capacidad» aplica **solo a los segundos** y no debe
colgarse de la oferta completa ni del hero. `Acceso a la Máquina` es prototipo: se nombra
como horizonte del acuerdo, nunca como producto disponible.

No se publican precios. Sí duración y entregable, que califican al visitante sin
convertirse en tarifario.

### Tipografía

Cuatro familias, según §05 del manual de marca. Se definen al inicio de
[`src/styles.css`](src/styles.css):

| Variable | Familia | Para qué |
| --- | --- | --- |
| `--font-sans` | Helvetica | Wordmark, datos, texto corrido |
| `--font-display` | Bricolage Grotesque 600 | Titulares (`h1`, `h2`) |
| `--font-serif` | Fraunces itálica 400 | Citas — las cinco frases del cliente en la home |
| `--font-mono` | JetBrains Mono | Rótulos, numeración y datos |

Helvetica es de licencia propietaria, así que va como stack de sistema (`Helvetica Neue`
→ `Helvetica` → `Arial` → `Liberation Sans`) y donde no esté instalada cae en Arial, que
comparte métricas. Las otras tres se descargan de Google Fonts en `index.html`.

Los titulares van a 600 y no a 800: el 800 existía porque Helvetica solo trae 400 y 700 y
era la manera de pedir negrita. Bricolage sí tiene la escala completa.

### Estilos

Las clases que significan cosas distintas según la página van aisladas bajo
`.page-<key>`, que `App.tsx` pone en el contenedor de cada página.

## Marca

La geometría de los glifos vive en [`src/brand/glyphs.ts`](src/brand/glyphs.ts) y es la
**única** fuente: la usan el sitio (`Glyph.tsx`, `Wordmark.tsx`) y el generador del kit de
imprenta. Si un glifo cambia ahí, cambia en los dos lados a la vez.

| Glifo | Qué es | Dónde va |
| --- | --- | --- |
| `toro` | Marca matriz | Barra, pie, aperturas |
| `anomalia` | Marca de uso | Favicon, avatar, OG, bajo 32 px |
| `observatorio` | Pulso con núcleo | Contexto — triada de `/sistema` |
| `nmu` | Triada inscrita | Anticipación — triada de `/sistema` |
| `hipotesis` | Secante | Umbral y bifurcación |

El trazo no se elige a ojo: `strokeFor(px)` implementa la tabla de escala y peso del
manual (224 px → 0,30 · 72 px → 0,45 · 42 px → 0,70 · 16 px → 2,40). `<Glyph size={40} />`
ya sale con el peso correcto.

### El kit de assets

```bash
npm run brand
```

Reconstruye `brand/` —SVG, PNG de 256 a 2048 px y PDF vectorial, cada glifo en tinta,
papel y naranja, más los lockups— y los iconos de `public/` (favicon, apple-touch-icon,
og.png). Son **artefactos**: se borran y se regeneran, no se editan a mano. Las
instrucciones de uso para imprenta y merchandising quedan en `brand/README.md`, también
generado.

El wordmark de los lockups se entrega **convertido a curvas** (`scripts/wordmark-path.py`,
con fontTools): un kit de marca no puede suponer que la imprenta tenga Helvetica. Se dibuja
con Nimbus Sans, el clon de Helvetica que sí se puede redistribuir.

Requisitos del generador: Node 20+ y Python con `cairosvg` y `fonttools`
(`python3 -m pip install cairosvg fonttools`). El `favicon.ico` multi-resolución además
usa `convert` de ImageMagick. Sin cairosvg el script genera igual los SVG y avisa que
omitió el resto.

## Deploy

Es una SPA: el servidor debe devolver `index.html` para cualquier ruta, o los enlaces
directos (`/es/servicios`) darán 404.

- **Netlify / Cloudflare Pages:** ya está el archivo [`public/_redirects`](public/_redirects).
- **Vercel:** agregar `vercel.json` con
  `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`.
- **nginx:** `try_files $uri $uri/ /index.html;`

### Redirecciones de la estructura anterior

`public/_redirects` manda los slugs viejos a los nuevos con 301 (`/es/que-es` →
`/es/sistema`, `/es/intervenciones` → `/es/casos`, `/es/dispositivos` → `/es/servicios`, y
sus equivalentes en inglés). `LEGACY_REDIRECTS` en `src/routes.ts` hace lo mismo dentro de
la SPA, para los hosts que no leen ese archivo.

**Pendiente de infraestructura:** el plan de contenidos también pide que el dominio
anterior `u2lab.cl` siga vivo al menos doce meses redirigiendo a `utopialab.cl`, con su
home apuntando a `/sistema`. Eso es una regla del host antiguo, no de esta aplicación: si
se pusiera aquí, la home nueva quedaría inalcanzable.

## Deuda de contenido

1. **Un caso corporativo o gremial documentado.** El tercer carril de «Para quién»
   (empresas y gremios) se apoya hoy en el caso de formación/IA, que es sectorial y no
   corporativo.
2. **El caso 03 con la plantilla completa.** «El futuro de la formación ante la
   inteligencia artificial» todavía lleva el texto que ya estaba publicado en
   Intervenciones, marcado como `En documentación`, en vez de los cuatro pasos —contexto,
   intervención, resultado, qué se probó—. Hay un `TODO` en ambos archivos de contenido.
3. **Fotos reales del equipo.** El bloque de equipo va sin fotos. Cuando lleguen, el
   hueco está marcado con un `TODO` sobre `.persona .qname` en `styles.css`. Nada de stock.
