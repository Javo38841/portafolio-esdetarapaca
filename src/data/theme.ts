// Lo que cambia entre ediciones: fotos de fondo de día y de noche, y sus pies de foto.
// Edición Geoglifos (rama geoglifos).
export const theme = {
  edition: "Geoglifos",
  bg: {
    day: { src: '/img/dia-cerros-pintados.webp', sm: '/img/dia-cerros-pintados-sm.webp', w: 2400, h: 1498 },
    night: { src: '/img/noche-via-lactea.webp', sm: '/img/noche-via-lactea-sm.webp', w: 2400, h: 1597 },
  },
  caption: {
    day: "Geoglifos de Cerros Pintados, pampa del Tamarugal",
    night: "La Vía Láctea sobre el desierto de Atacama",
  },
  // Pantalla de carga (estilo landonorris.com): color de marca, logo al centro y texto abajo.
  loader: {
    bg: '#a8432a',
    fg: '#f6ead8',
    accent: '#ffd3a1',
    label: "Cargando la pampa",
    // Barra de progreso: piedras en fila, como el borde de un geoglifo
    bar: "repeating-linear-gradient(90deg, #f6ead8 0 7px, transparent 7px 13px)",
    // Llama de geoglifo que se va dibujando trazo a trazo
    mark: '<svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true"><style>.gl{fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:160;stroke-dashoffset:160;animation:gl 1.6s ease forwards}.gl2{animation-delay:.5s}@keyframes gl{to{stroke-dashoffset:0}}</style><path class="gl" d="M44 10l4 4-2 4v14H18l-4 6M44 10l-3 6v16"/><path class="gl gl2" d="M18 32v20M24 32v20M40 32v20M46 32v20M14 38l-4 4"/></svg>',
  },
  tagline: "Landings para negocios de Tarapacá, trazadas con el cuidado de un geoglifo. Rápidas, a tu medida y hechas para durar.",
};
