// Lo que cambia entre ediciones: fotos de fondo de día y de noche, y sus pies de foto.
export const theme = {
  edition: 'Navidad en la costanera',
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
    bg: '#b3132e',
    fg: '#fff8ef',
    accent: '#ffd27a',
    label: 'Cargando la Navidad en Iquique',
    // Barra de progreso: bastón de dulce
    bar: 'repeating-linear-gradient(-45deg, #fff8ef 0 7px, #0f6f8f 7px 14px)',
    // El sol de Cavancha con gorro del Viejito Pascuero, sobre las olas
    mark: '<svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true"><circle cx="32" cy="27" r="11" fill="currentColor"/><path d="M19 21c3-10 16-17 27-12-3 3-4 8-3 12z" fill="#ffd27a"/><rect x="17" y="18" width="28" height="7" rx="3.5" fill="currentColor"/><circle cx="47" cy="9" r="3.6" fill="currentColor"/><path d="M5 45c5 0 5-4 10-4s5 4 10 4 5-4 10-4 5 4 10 4 5-4 10-4" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><path d="M5 55c5 0 5-4 10-4s5 4 10 4 5-4 10-4 5 4 10 4 5-4 10-4" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" opacity=".6"/></svg>',
  },
  tagline: 'Que tu negocio llegue a diciembre con su landing lista. Hecha frente al mar, rápida y lista para las ventas de Navidad.',
};
