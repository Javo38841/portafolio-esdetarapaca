// Lo que cambia entre ediciones: fotos de fondo de día y de noche, y sus pies de foto.
// Edición Navidad en La Tirana (rama la-tirana-navidad, sale de la-tirana).
export const theme = {
  edition: "Navidad en La Tirana",
  bg: {
    day: { src: '/img/dia-tirana-diablo.webp', sm: '/img/dia-tirana-diablo-sm.webp', w: 2400, h: 1607 },
    night: { src: '/img/noche-tirana-procesion.webp', sm: '/img/noche-tirana-procesion-sm.webp', w: 2400, h: 1800 },
  },
  caption: {
    day: "Diablada en la Fiesta de La Tirana",
    night: "La procesión de la Virgen del Carmen",
  },
  // Pantalla de carga (estilo landonorris.com): color de marca, logo al centro y texto abajo.
  loader: {
    bg: '#b3132e',
    fg: '#fff7ec',
    accent: '#f6c445',
    label: "Cargando la Navidad en La Tirana",
    // Barra de progreso: bastón de dulce
    bar: 'repeating-linear-gradient(-45deg, #fff7ec 0 7px, #1e88e5 7px 14px)',
    // Máscara de diablada con cachos, que brilla
    mark: '<svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true"><style>.ey{fill:#ffc93c;animation:ey 1.4s ease-in-out infinite alternate}@keyframes ey{from{opacity:.35}to{opacity:1}}</style><path d="M14 30C6 22 6 10 12 4c0 10 4 16 10 18M50 30c8-8 8-20 2-26 0 10-4 16-10 18" fill="none" stroke="#f6c445" stroke-width="4" stroke-linecap="round"/><path d="M14 28c0-6 8-10 18-10s18 4 18 10v10c0 12-8 20-18 20S14 50 14 38z" fill="currentColor"/><path class="ey" d="M20 34l9 2-2 5-7-3zM44 34l-9 2 2 5 7-3z"/><path d="M24 48c4 3 12 3 16 0" fill="none" stroke="#f6c445" stroke-width="3" stroke-linecap="round"/></svg>',
  },
  tagline: "Que tu negocio llegue a diciembre con su landing lista. Con el color de La Tirana, rápida y lista para las ventas de Navidad.",
};
