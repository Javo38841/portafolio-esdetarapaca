// Lo que cambia entre ediciones: fotos de fondo de día y de noche, y sus pies de foto.
export const theme = {
  edition: 'Costanera',
  bg: {
    day: { src: '/img/dia-cavancha.webp', sm: '/img/dia-cavancha-sm.webp', w: 2400, h: 1800 },
    night: { src: '/img/noche-cavancha-luna.webp', sm: '/img/noche-cavancha-luna-sm.webp', w: 2400, h: 1550 },
  },
  caption: {
    day: 'Playa Cavancha, Iquique',
    night: 'Cavancha bajo la luz de la luna',
  },
  info: {
    day: { src: '/img/atardecer.webp', w: 2400, h: 1800, alt: 'Atardecer en la costanera de Iquique' },
    night: { src: '/img/noche-bahia.webp', w: 2400, h: 1350, alt: 'La bahía de Iquique iluminada de noche' },
  },
  // Pantalla de carga (estilo landonorris.com): color de marca, logo al centro y texto abajo.
  loader: {
    bg: '#e0573a',
    fg: '#fff8ef',
    accent: '#ffe0b8',
    label: 'Cargando Iquique',
    bar: '#fff8ef',
    mark: '<svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true"><circle cx="32" cy="24" r="12" fill="currentColor"/><path d="M5 42c5 0 5-4 10-4s5 4 10 4 5-4 10-4 5 4 10 4 5-4 10-4" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><path d="M5 52c5 0 5-4 10-4s5 4 10 4 5-4 10-4 5 4 10 4 5-4 10-4" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" opacity=".6"/></svg>',
  },
  tagline: 'Landings para negocios de Tarapacá, hechas frente al mar. Rápidas, a tu medida y listas para recibir clientes.',
};
