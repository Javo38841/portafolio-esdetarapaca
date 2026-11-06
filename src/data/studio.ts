// Datos del estudio. Deja un link vacío ('') para ocultar su botón.
export const studio = {
  name: 'esdetarapaca',
  domain: 'esdetarapaca.cl',
  owner: 'Javier Choque Flores',
  role: 'Desarrollador de Software',
  location: 'Alto Hospicio, Tarapacá',
  email: 'jchoque0@gmail.com',
  // TODO: tu número en formato internacional sin '+' ni espacios, p. ej. '56912345678'
  whatsapp: '',
  instagram: 'https://www.instagram.com/skiptrancing/',
  instagramHandle: '@skiptrancing',
  linkedin: 'https://www.linkedin.com/in/javier-silvio-choque-flores-49904923b/',
  github: 'https://github.com/Javo38841',
  // Desde cuándo tomas proyectos nuevos (se muestra abajo como "Disponible").
  availableFrom: 'Diciembre 2026',
};

export function whatsappLink(text: string): string {
  return studio.whatsapp ? `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(text)}` : '';
}

// Antepone el `base` de Astro (necesario si se despliega bajo un subpath en GitHub Pages).
export function withBase(path: string): string {
  return import.meta.env.BASE_URL.replace(/\/$/, '') + path;
}
