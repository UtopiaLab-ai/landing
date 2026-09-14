/**
 * Configuración del sitio / Site configuration.
 *
 * BOOKING_URL es el destino de conversión principal: todos los CTA
 * ("Agendar una hora de diagnóstico") apuntan aquí. CONTACT_EMAIL existe
 * porque el vertical público compra por licitación y necesita un canal
 * escrito: sin correo no hay por dónde mandar bases ni consultas formales.
 */
export const BOOKING_URL = 'https://cal.com/princesodan/ulab-consulting'

/** Marca y dominio canónico, tal como aparecen en el pie de página. */
export const BRAND = 'utopialab'
export const BRAND_TLD = 'ai'
export const SITE_DOMAIN = 'utopialab.ai'

/**
 * Origen canónico, con protocolo. Lo usan el `<head>` prerenderizado, el
 * JSON-LD y el sitemap: buscadores y LLM necesitan URL absolutas, y en el
 * build no hay `window.location` de donde sacarlo.
 *
 * Es `www`: el dominio sin `www` responde 308 hacia acá, y un canonical que
 * redirige es una señal contradictoria para Google. Si el dominio principal
 * cambia en Vercel, cambia acá.
 */
export const SITE_URL = 'https://www.utopialab.ai'
export const CONTACT_EMAIL = 'hola@utopialab.ai'

export const COPYRIGHT_YEAR = 2026

/**
 * El tablero demo de Atalaya: un observatorio con los datos del caso Ley
 * Lafkenche. Es un HTML autónomo servido desde `public/atalaya/`, fuera de la
 * SPA, así que se enlaza con `<a>` y no con `Link`, y con barra final para que
 * el servidor resuelva el `index.html` de la carpeta.
 */
export const ATALAYA_URL = '/atalaya/'
