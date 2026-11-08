// Lo que cambia entre ediciones: fotos de fondo de día y de noche, y sus pies de foto.
// Edición Navidad en el altiplano (rama altiplano-navidad, sale de altiplano).
export const theme = {
  edition: "Navidad en el altiplano",
  bg: {
    day: { src: '/img/dia-laguna-huasco.webp', sm: '/img/dia-laguna-huasco-sm.webp', w: 2400, h: 1438 },
    night: { src: '/img/noche-isluga.webp', sm: '/img/noche-isluga-sm.webp', w: 2000, h: 2400 },
  },
  caption: {
    day: "Salar y laguna del Huasco",
    night: "La iglesia de Isluga bajo la Vía Láctea",
  },
  // Pantalla de carga (estilo landonorris.com): color de marca, logo al centro y texto abajo.
  loader: {
    bg: '#b3132e',
    fg: '#fff7ec',
    accent: '#f6c445',
    label: "Cargando la Navidad en el altiplano",
    // Barra de progreso: bastón de dulce
    bar: 'repeating-linear-gradient(-45deg, #fff7ec 0 7px, #1f8a70 7px 14px)',
    // Chakana (cruz andina escalonada) que gira despacio
    mark: '<svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true"><style>.ck{transform-origin:32px 32px;animation:ck 6s linear infinite}@keyframes ck{to{transform:rotate(360deg)}}</style><g class="ck"><path d="M24 4h16v8h8v8h8v24h-8v8h-8v8H24v-8h-8v-8H8V20h8v-8h8z" fill="currentColor"/><circle cx="32" cy="32" r="8" fill="#c81f63"/></g></svg>',
  },
  tagline: "Que tu negocio llegue a diciembre con su landing lista. De la costa al altiplano, rápida y lista para las ventas de Navidad.",
};
