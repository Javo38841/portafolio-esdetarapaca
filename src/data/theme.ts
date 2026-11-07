// Lo que cambia entre ediciones: fotos de fondo de día y de noche, y sus pies de foto.
// Edición Parapente (rama parapente).
export const theme = {
  edition: "Parapente",
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
    bg: '#1d8fd1',
    fg: '#ffffff',
    accent: '#ffd166',
    label: "Despegando desde Alto Hospicio",
    // Barra de progreso: blanca como las nubes
    bar: "#ffffff",
    // Parapente que flota con el viento
    mark: '<svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true"><style>.pg{animation:pg 2.2s ease-in-out infinite alternate}@keyframes pg{from{transform:translate(-3px,2px) rotate(-4deg)}to{transform:translate(3px,-3px) rotate(4deg)}}</style><g class="pg"><path d="M6 22C14 8 50 8 58 22c-8-3-44-3-52 0z" fill="#ff6a3d"/><path d="M8 22l22 24M20 18l11 28M44 18L33 46M56 22L34 46" stroke="currentColor" stroke-width="1.2"/><circle cx="32" cy="49" r="3.5" fill="currentColor"/><path d="M32 52v7" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></g></svg>',
  },
  tagline: "Landings para negocios de Tarapacá, que despegan desde Alto Hospicio. Rápidas, a tu medida y listas para volar.",
};
