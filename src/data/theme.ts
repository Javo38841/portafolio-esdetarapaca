// Lo que cambia entre ediciones: fotos de fondo de día y de noche, y sus pies de foto.
export const theme = {
  edition: 'Ruta del desierto',
  bg: {
    day: { src: '/img/dia-cerro-dragon.webp', sm: '/img/dia-cerro-dragon-sm.webp', w: 2400, h: 1387 },
    night: { src: '/img/noche-bajada.webp', sm: '/img/noche-bajada-sm.webp', w: 2400, h: 1800 },
  },
  caption: {
    day: 'Cerro Dragón desde la ruta a Alto Hospicio',
    night: 'La bajada de Alto Hospicio a Iquique, de noche',
  },
  info: {
    day: { src: '/img/dia-pampa.webp', w: 2048, h: 1536, alt: 'La pampa del Tamarugal vista desde la Ruta 5' },
    night: { src: '/img/noche-via-lactea.webp', w: 2400, h: 1597, alt: 'La Vía Láctea sobre el desierto de Atacama' },
  },
  // Pantalla de carga (estilo landonorris.com): color de marca, logo al centro y texto abajo.
  loader: {
    bg: '#0b6b3a',
    fg: '#ffffff',
    accent: '#f2b705',
    label: 'Cargando Tarapacá',
    // Barra de progreso: segmentos de la línea amarilla de la carretera
    bar: 'repeating-linear-gradient(90deg, #f2b705 0 26px, transparent 26px 44px)',
    mark: '<svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true"><rect x="2" y="8" width="60" height="48" rx="9" fill="none" stroke="currentColor" stroke-width="3"/><path d="M32 46V20m0 0-11 11m11-11 11 11" fill="none" stroke="#f2b705" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  tagline: 'Landings para negocios de Tarapacá, hechas en Alto Hospicio. Rápidas, a tu medida y listas para recibir clientes.',
};
