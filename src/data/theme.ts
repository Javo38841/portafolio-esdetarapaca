// Lo que cambia entre ediciones: fotos de fondo de día y de noche, y sus pies de foto.
// Edición Navidad en las alturas (rama parapente-navidad, sale de parapente).
export const theme = {
  edition: "Navidad en las alturas",
  bg: {
    day: { src: '/img/dia-parapente.webp', sm: '/img/dia-parapente-sm.webp', w: 2400, h: 1800 },
    night: { src: '/img/noche-bajada.webp', sm: '/img/noche-bajada-sm.webp', w: 2400, h: 1800 },
  },
  caption: {
    day: "Parapente sobre Iquique",
    night: "Iquique desde Alto Hospicio, de noche",
  },
  // Pantalla de carga (estilo landonorris.com): color de marca, logo al centro y texto abajo.
  loader: {
    bg: '#b3132e',
    fg: '#fff7ec',
    accent: '#f6c445',
    label: "Cargando la Navidad en las alturas",
    // Barra de progreso: bastón de dulce
    bar: 'repeating-linear-gradient(-45deg, #fff7ec 0 7px, #1d8fd1 7px 14px)',
    // Parapente que flota con el viento
    mark: '<svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true"><style>.pg{animation:pg 2.2s ease-in-out infinite alternate}@keyframes pg{from{transform:translate(-3px,2px) rotate(-4deg)}to{transform:translate(3px,-3px) rotate(4deg)}}</style><g class="pg"><path d="M6 22C14 8 50 8 58 22c-8-3-44-3-52 0z" fill="#f6c445"/><path d="M8 22l22 24M20 18l11 28M44 18L33 46M56 22L34 46" stroke="currentColor" stroke-width="1.2"/><circle cx="32" cy="49" r="3.5" fill="currentColor"/><path d="M32 52v7" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></g></svg>',
  },
  tagline: "Que tu negocio llegue a diciembre con su landing lista. Despega desde Alto Hospicio, rápida y lista para las ventas de Navidad.",
};
