# esdetarapaca.cl

Estudio web de landings para negocios de Tarapacá. Sitio hecho con Astro y publicado en GitHub Pages en **https://esdetarapaca.cl**.

## Decisión: un diseño por rama

Este repo guarda varios diseños del mismo sitio, cada uno en su propia rama. **`main` es solo lo que está publicado.**

| Rama      | Diseño                                                          |
| --------- | --------------------------------------------------------------- |
| `ruta`    | Ruta del desierto: Cerro Dragón, la bajada de Alto Hospicio, Overpass |
| `iquique` | Costanera: Cavancha, el atardecer, Instrument Serif y Manrope          |
| `main`    | Copia de la rama que está en línea. Cada push a `main` despliega solo (GitHub Actions). |

> La edición Costanera también vive en su propio repo (`esdetarapaca-iquique`, en iquique.esdetarapaca.cl). Si cambias ese diseño, recuerda hacerlo en los dos lados.

### Cambiar el diseño publicado

```bash
git push --force-with-lease origin iquique:main   # publica Costanera
git push --force-with-lease origin ruta:main      # publica Ruta del desierto
```

Reemplaza todo `main` por la rama elegida. En un par de minutos queda en esdetarapaca.cl (ver la pestaña Actions).

### Reglas

1. **Nunca hacer commits en `main`.** Todo lo que se haga ahí se pierde la próxima vez que se sobreescriba. Trabaja siempre en `ruta` o en `iquique`.
2. **Sube la rama antes de publicarla** (`git push origin iquique`) para que también quede guardada en GitHub.
3. **El contenido va en las dos ramas.** Si agregas un trabajo o cambias un texto, haz el commit en una rama y después pásalo a la otra:
   ```bash
   git checkout iquique
   git cherry-pick <hash-del-commit>
   ```
4. **Un diseño nuevo es una rama nueva** que sale de una existente (`git checkout -b diseno-nuevo ruta`) y solo cambia los archivos del tema.

### Qué es diseño y qué es contenido

Para que pasar commits entre ramas no dé conflictos, el diseño y el contenido están en archivos separados.

**Diseño (cambia según la rama):**

- `src/data/theme.ts`: nombre de la edición, fotos de día y de noche, textos de las fotos, colores y logo de la pantalla de carga
- `src/styles/global.css`: colores, fuentes y forma
- `src/layouts/Layout.astro`: solo las líneas `import '@fontsource/...'`
- `src/data/credits.json`: créditos de las fotos
- `public/img/*.webp` (excepto `trabajos/`) y `public/favicon.svg`
- `package.json`: las dependencias de fuentes

**Contenido y estructura (igual en todas las ramas):**

- `src/data/studio.ts`: nombre, email, redes, disponibilidad
- `src/data/trabajos.ts` y `public/img/trabajos/`: los trabajos del carrusel
- `src/pages/`, `src/components/`, `src/scripts/`, `src/styles/base.css`: estructura, carrusel, pantalla de carga, efecto de agua

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # revisión de tipos
npm run build    # genera dist/
```
