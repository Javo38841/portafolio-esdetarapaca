// Lo que cambia entre ediciones: fotos de fondo de día y de noche, y sus pies de foto.
// Edición Salitrera (rama salitrera).
export const theme = {
  edition: "Salitrera",
  bg: {
    day: { src: '/img/dia-santa-laura.webp', sm: '/img/dia-santa-laura-sm.webp', w: 2400, h: 1350 },
    night: { src: '/img/noche-humberstone.webp', sm: '/img/noche-humberstone-sm.webp', w: 2400, h: 1133 },
  },
  caption: {
    day: "Oficina salitrera Santa Laura",
    night: "Humberstone al anochecer",
  },
  // Pantalla de carga (estilo landonorris.com): color de marca, logo al centro y texto abajo.
  loader: {
    bg: '#2b211b',
    fg: '#efe4cf',
    accent: '#e3c15a',
    label: "Cargando la oficina",
    // Barra de progreso: latón
    bar: "#e3c15a",
    // Chimenea de la oficina salitrera echando humo
    mark: '<svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true"><style>.sm{fill:currentColor;opacity:0;animation:sm 2.4s ease-out infinite}.sm2{animation-delay:.8s}.sm3{animation-delay:1.6s}@keyframes sm{0%{opacity:0;transform:translate(0,0) scale(.6)}25%{opacity:.8}100%{opacity:0;transform:translate(10px,-16px) scale(1.4)}}</style><circle class="sm" cx="34" cy="16" r="4"/><circle class="sm sm2" cx="34" cy="16" r="4"/><circle class="sm sm3" cx="34" cy="16" r="4"/><path d="M30 20h8v38h-8zM8 58V40h10v-6h10v24M40 58V36h14v22M4 58h56" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/></svg>',
  },
  tagline: "Landings para negocios de Tarapacá, hechas con oficio de pampino. Sólidas, a tu medida y listas para trabajar.",
};
