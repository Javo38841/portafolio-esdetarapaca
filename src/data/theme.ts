// Lo que cambia entre ediciones: fotos de fondo de día y de noche, y sus pies de foto.
export const theme = {
  edition: 'Navidad en el desierto',
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
    bg: '#a3162b',
    fg: '#fff7ec',
    accent: '#f6c445',
    label: 'Cargando la Navidad',
    // Barra de progreso: bastón de dulce
    bar: 'repeating-linear-gradient(-45deg, #fff7ec 0 7px, #1f8a4c 7px 14px)',
    // Cardón del desierto con luces y la estrella arriba
    mark: '<svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true"><path d="M32 60V24M32 44H24a6 6 0 0 1-6-6v-8M32 38h8a6 6 0 0 0 6-6v-6" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><polygon points="32.0,3.0 34.0,8.2 39.6,8.5 35.2,12.1 36.7,17.5 32.0,14.4 27.3,17.5 28.8,12.1 24.4,8.5 30.0,8.2" fill="#f6c445"/><circle cx="32" cy="32" r="2.2" fill="#f6c445"/><circle cx="18" cy="31" r="2.2" fill="#1f8a4c"/><circle cx="46" cy="27" r="2.2" fill="#f6c445"/><circle cx="32" cy="50" r="2.2" fill="#1f8a4c"/><circle cx="25" cy="44" r="2.2" fill="#f6c445"/></svg>',
  },
  tagline: 'Que tu negocio llegue a diciembre con su landing lista. Hecha en Alto Hospicio, rápida y lista para las ventas de Navidad.',
};
