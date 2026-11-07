// Lo que cambia entre ediciones: fotos de fondo de día y de noche, y sus pies de foto.
// Edición Altiplano (rama altiplano).
export const theme = {
  edition: "Altiplano",
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
    bg: '#c81f63',
    fg: '#fff4e6',
    accent: '#ffd24d',
    label: "Cargando el altiplano",
    // Barra de progreso: franjas de aguayo
    bar: "repeating-linear-gradient(90deg, #fff4e6 0 14px, #ef8a1f 14px 22px, #ffd24d 22px 26px, #1f8a70 26px 36px)",
    // Chakana (cruz andina escalonada) que gira despacio
    mark: '<svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true"><style>.ck{transform-origin:32px 32px;animation:ck 6s linear infinite}@keyframes ck{to{transform:rotate(360deg)}}</style><g class="ck"><path d="M24 4h16v8h8v8h8v24h-8v8h-8v8H24v-8h-8v-8H8V20h8v-8h8z" fill="currentColor"/><circle cx="32" cy="32" r="8" fill="#c81f63"/></g></svg>',
  },
  tagline: "Landings para negocios de Tarapacá, de la costa al altiplano. Rápidas, a tu medida y listas para recibir clientes.",
};
