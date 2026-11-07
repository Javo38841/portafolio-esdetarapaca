// Lo que cambia entre ediciones: fotos de fondo de día y de noche, y sus pies de foto.
// Edición Casco histórico (rama casco-historico).
export const theme = {
  edition: "Casco histórico",
  bg: {
    day: { src: '/img/dia-baquedano.webp', sm: '/img/dia-baquedano-sm.webp', w: 2400, h: 1800 },
    night: { src: '/img/noche-plaza-prat.webp', sm: '/img/noche-plaza-prat-sm.webp', w: 2400, h: 1800 },
  },
  caption: {
    day: "Paseo Baquedano, Iquique",
    night: "Plaza Prat al anochecer",
  },
  // Pantalla de carga (estilo landonorris.com): color de marca, logo al centro y texto abajo.
  loader: {
    bg: '#2a2738',
    fg: '#f4ede4',
    accent: '#f0c674',
    label: "Cargando el Iquique antiguo",
    // Barra de progreso: balaustrada de los balcones
    bar: "repeating-linear-gradient(90deg, #f4ede4 0 3px, transparent 3px 9px)",
    // Torre del Reloj de la Plaza Prat, con la esfera que se ilumina
    mark: '<svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true"><style>.cl{fill:#f0c674;animation:cl 1.8s ease-in-out infinite alternate}@keyframes cl{from{opacity:.4}to{opacity:1}}</style><path d="M32 2l4 8h-8zM26 10h12v8H26zM24 18h16v22H24zM20 40h24v6H20zM18 46h28v14H18z" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/><circle class="cl" cx="32" cy="28" r="5.5"/><path d="M28 60V52a4 4 0 0 1 8 0v8" fill="none" stroke="currentColor" stroke-width="2.6"/></svg>',
  },
  tagline: "Landings para negocios de Tarapacá, con la elegancia del Iquique antiguo. Cuidadas, a tu medida y listas para recibir clientes.",
};
