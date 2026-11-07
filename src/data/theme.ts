// Lo que cambia entre ediciones: fotos de fondo de día y de noche, y sus pies de foto.
export const theme = {
  edition: 'Ruta del desierto',
  bg: {
    day: { src: '/img/dia-cerro-dragon.webp', sm: '/img/dia-cerro-dragon-sm.webp', w: 2400, h: 1387 },
    night: { src: '/img/noche-ruta-estrellas.webp', sm: '/img/noche-ruta-estrellas-sm.webp', w: 2400, h: 1610 },
  },
  caption: {
    day: 'Cerro Dragón desde la ruta a Alto Hospicio',
    night: 'Carretera del desierto de Atacama bajo las estrellas',
  },
  // Pantalla de carga (estilo landonorris.com): color de marca, logo al centro y texto abajo.
  loader: {
    bg: '#0b6b3a',
    fg: '#ffffff',
    accent: '#f2b705',
    label: 'Cargando Tarapacá',
    // Barra de progreso: segmentos de la línea amarilla de la carretera (avanzan, ver global.css)
    bar: 'repeating-linear-gradient(90deg, #f2b705 0 26px, transparent 26px 44px)',
    // Carretera en perspectiva: la línea amarilla del centro viene hacia ti, como manejando
    mark: '<svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true"><style>.rd{stroke-dasharray:7 7;animation:rd .45s linear infinite}@keyframes rd{to{stroke-dashoffset:-14}}</style><path d="M26 6 6 58M38 6l20 52" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/><path class="rd" d="M32 6v52" fill="none" stroke="#f2b705" stroke-width="3.2"/></svg>',
  },
  tagline: 'Landings para negocios de Tarapacá, hechas en Alto Hospicio. Rápidas, a tu medida y listas para recibir clientes.',
};
