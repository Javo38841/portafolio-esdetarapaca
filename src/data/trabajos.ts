// Landings y sitios publicados. El primero de la lista aparece primero.
// `subdomain` es el nombre que tendrá en esdetarapaca.cl (p. ej. wbhairstudio.esdetarapaca.cl).
export interface Trabajo {
  name: string;
  kind: string;
  place: string;
  year: number;
  url: string;
  subdomain: string;
  image: string;
  text: string;
  client: boolean; // false = proyecto propio
}

export const trabajos: Trabajo[] = [
  {
    name: 'WB Hair Studio',
    kind: 'Barbería',
    place: 'Alto Hospicio',
    year: 2026,
    url: 'https://wbhairstudio.gitflow.cl/',
    subdomain: 'wbhairstudio',
    image: '/img/trabajos/wbhairstudio.webp',
    text: 'Servicios con precios, galería de cortes conectada a Instagram, ubicación y reservas por WhatsApp.',
    client: true,
  },
  {
    name: 'Jamelin',
    kind: 'Equipo de software · Logística',
    place: 'Iquique',
    year: 2026,
    url: 'https://jamelin.gitflow.cl/',
    subdomain: 'jamelin',
    image: '/img/trabajos/jamelin.webp',
    text: 'Sitio del equipo que postula a Quantum III: software para la logística del Corredor Bioceánico, con demos interactivas.',
    client: false,
  },
  {
    name: 'Portafolio · edición biblioteca',
    kind: 'Portafolio personal',
    place: 'Tarapacá',
    year: 2026,
    url: 'https://biblioteca.gitflow.cl/',
    subdomain: 'biblioteca',
    image: '/img/trabajos/biblioteca.webp',
    text: 'Mi CV y proyectos en español, inglés y portugués, con un estante de libros interactivo.',
    client: false,
  },
  {
    name: 'Portafolio · edición 8-bit',
    kind: 'Portafolio personal',
    place: 'Tarapacá',
    year: 2026,
    url: 'https://8bit.gitflow.cl/',
    subdomain: '8bit',
    image: '/img/trabajos/8bit.webp',
    text: 'El mismo portafolio con estética de consola portátil: inventario de RPG y casetes.',
    client: false,
  },
];

export function host(url: string): string {
  return new URL(url).host;
}
