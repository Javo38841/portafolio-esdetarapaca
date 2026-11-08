// Lo que cambia entre ediciones: fotos de fondo de día y de noche, y sus pies de foto.
// Edición Navidad en el oasis (rama pica-navidad, sale de pica).
export const theme = {
  edition: "Navidad en el oasis",
  bg: {
    day: { src: '/img/dia-pica.webp', sm: '/img/dia-pica-sm.webp', w: 2400, h: 1600 },
    night: { src: '/img/noche-pica.webp', sm: '/img/noche-pica-sm.webp', w: 2048, h: 1536 },
  },
  caption: {
    day: "La plaza de Pica",
    night: "La plaza de Pica al anochecer",
  },
  // Pantalla de carga (estilo landonorris.com): color de marca, logo al centro y texto abajo.
  loader: {
    bg: '#b3132e',
    fg: '#fff7ec',
    accent: '#f6c445',
    label: "Cargando la Navidad en el oasis",
    // Barra de progreso: bastón de dulce
    bar: 'repeating-linear-gradient(-45deg, #fff7ec 0 7px, #2f7a1c 7px 14px)',
    // Rodaja de limón de Pica que gira
    mark: '<svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true"><style>.lm{transform-origin:32px 32px;animation:lm 4s linear infinite}@keyframes lm{to{transform:rotate(360deg)}}</style><g class="lm"><circle cx="32" cy="32" r="27" fill="#fff8c4" stroke="currentColor" stroke-width="4"/><g fill="#e9c400"><path d="M32 32V9a23 23 0 0 1 16 7z"/><path d="M32 32l16-16a23 23 0 0 1 7 16z"/><path d="M32 32h23a23 23 0 0 1-7 16z"/><path d="M32 32l16 16a23 23 0 0 1-16 7z"/><path d="M32 32v23a23 23 0 0 1-16-7z"/><path d="M32 32L16 48a23 23 0 0 1-7-16z"/><path d="M32 32H9a23 23 0 0 1 7-16z"/><path d="M32 32L16 16a23 23 0 0 1 16-7z"/></g><g stroke="#fff8c4" stroke-width="2"><path d="M32 9v46M9 32h46M16 16l32 32M48 16L16 48"/></g></g><path d="M44 8c6-4 12-3 14 0-4 4-10 4-14 0z" fill="#2f7a1c"/></svg>',
  },
  tagline: "Que tu negocio llegue a diciembre con su landing lista. Fresca como un jugo de Pica, rápida y lista para las ventas de Navidad.",
};
