# esdetarapaca.cl

Estudio web de landings para negocios de Tarapacá. Sitio hecho con Astro y publicado en GitHub Pages en **https://esdetarapaca.cl**.

## Decisión: un diseño por rama

Este repo guarda varios diseños del mismo sitio, cada uno en su propia rama. **`main` es solo lo que está publicado.**

| Rama              | Diseño                                                                                  |
| ----------------- | --------------------------------------------------------------------------------------- |
| `ruta`            | Ruta del desierto: Cerro Dragón, la bajada de Alto Hospicio, Overpass                   |
| `iquique`         | Costanera: Cavancha, el atardecer, Instrument Serif y Manrope                           |
| `ruta-navidad`    | Navidad en el desierto: `ruta` + rojo pascuero y decoración de Navidad                  |
| `iquique-navidad` | Navidad en la costanera: `iquique` + rojo pascuero y decoración de Navidad              |
| `geoglifos`       | Geoglifos: Cerros Pintados, tierra rojiza, Syne                                         |
| `salitrera`       | Salitrera: Santa Laura y Humberstone, fierro oxidado, Alfa Slab One                     |
| `la-tirana`       | La Tirana: diablada, rojo y dorado de la fiesta, DM Serif Display                       |
| `altiplano`       | Altiplano: laguna del Huasco e Isluga, colores de aguayo, Unbounded                     |
| `pica`            | Oasis de Pica: la plaza, verde y amarillo limón, Fraunces                               |
| `casco-historico` | Casco histórico: Paseo Baquedano y Plaza Prat, colores pastel, Playfair Display         |
| `parapente`       | Parapente: Iquique desde el aire, cielo y vela naranja, Manrope en minúsculas           |
| `main`            | Copia de la rama que está en línea. Cada push a `main` despliega solo (GitHub Actions). |

Las ramas `-navidad` agregan `src/components/Navidad.astro`: nieve que cae, gorro sobre la "S", regalo en "Tu negocio" (en celular se abre tocándolo), sello "Landing lista antes del 24", cuenta regresiva y estrellas de noche. Se activa con una línea `<Navidad />` en `Layout.astro`. Si cambias `Navidad.astro`, pásalo a la otra rama navideña con `git checkout <rama> -- src/components/Navidad.astro`.

Las fotos de noche marcadas como "retocada" en los créditos son la foto de día oscurecida, porque no había una foto de noche con licencia libre.

> La edición Costanera también vive en su propio repo (`esdetarapaca-iquique`, en iquique.esdetarapaca.cl). Si cambias ese diseño, recuerda hacerlo en los dos lados.

### Cambiar el diseño publicado

```bash
git push --force-with-lease origin iquique:main   # publica Costanera
git push --force-with-lease origin ruta:main      # publica Ruta del desierto
```

Reemplaza todo `main` por la rama elegida. En un par de minutos queda en esdetarapaca.cl (ver la pestaña Actions).

### Rotación diaria (automática)

`.github/workflows/rotar-diseno.yml` publica un diseño distinto cada día a las 04:00 (hora de Chile):

- **Del 1 al 25 de diciembre:** rota entre `ruta-navidad` e `iquique-navidad`.
- **El resto del año:** rota entre `ruta`, `iquique`, `geoglifos`, `salitrera`, `la-tirana`, `altiplano`, `pica`, `casco-historico` y `parapente`.

Publica directo la rama elegida, sin tocar `main`. Un push a `main` publica esa rama al tiro, pero al día siguiente la rotación vuelve a cambiarla.

- **Rotar a mano:** pestaña Actions → "Rotar diseño del día" → Run workflow.
- **Pausar** (para dejar fijo un diseño): en GitHub, Settings → Secrets and variables → Actions → Variables, crea `ROTAR` con el valor `no`, y publica la rama que quieras en `main`. Para reanudar, borra la variable.
- **Agregar o quitar un diseño de la rotación:** edita las listas `normales` o `navidad` del workflow y pasa el archivo a todas las ramas.
- **El archivo tiene que estar igual en todas las ramas.** GitHub solo corre los workflows programados que están en `main`, y `main` puede ser cualquier rama.
- GitHub apaga los workflows programados después de 60 días sin commits en el repo. Si pasa, llega un correo y se reactiva con un clic en Actions.

### Reglas

1. **Nunca hacer commits en `main`.** Todo lo que se haga ahí se pierde la próxima vez que se sobreescriba. Trabaja siempre en `ruta` o en `iquique`.
2. **Sube la rama antes de publicarla** (`git push origin iquique`) para que también quede guardada en GitHub.
3. **El contenido va en las dos ramas.** Si agregas un trabajo o cambias un texto, haz el commit en una rama y después pásalo a la otra:
   ```bash
   git checkout iquique
   git cherry-pick <hash-del-commit>
   ```
4. **Un diseño nuevo es una rama nueva** que sale de una existente (`git checkout -b diseno-nuevo ruta`) y solo cambia los archivos del tema.
5. **Todas las ramas tienen todas las fuentes.** `package.json` y `package-lock.json` son iguales en todas, con todas las fuentes de todos los diseños (hoy Overpass, Instrument Serif, Manrope, Syne, Alfa Slab One, DM Serif Display, Unbounded, Fraunces y Playfair Display). Así `node_modules` sirve para cualquier rama y te puedes cambiar sin `npm install`. Cada diseño importa en `Layout.astro` solo las fuentes que usa, y las demás no llegan al sitio publicado. **Si un diseño nuevo trae una fuente nueva**, instálala y pasa esos dos archivos a todas las ramas:
   ```bash
   npm install @fontsource/<fuente>
   git commit -am "chore: fuente <fuente> en todas las ramas"
   git checkout <otra-rama> && git checkout <rama-con-la-fuente> -- package.json package-lock.json && git commit -m "chore: fuente <fuente> en todas las ramas"
   ```

### Qué es diseño y qué es contenido

Para que pasar commits entre ramas no dé conflictos, el diseño y el contenido están en archivos separados.

**Diseño (cambia según la rama):**

- `src/data/theme.ts`: nombre de la edición, fotos de día y de noche, textos de las fotos, colores y logo de la pantalla de carga
- `src/styles/global.css`: colores, fuentes y forma
- `src/layouts/Layout.astro`: solo las líneas `import '@fontsource/...'` (y `<Navidad />` en las ramas navideñas)
- `src/data/credits.json`: créditos de las fotos
- `public/img/*.webp` (excepto `trabajos/`) y `public/favicon.svg`

**Contenido y estructura (igual en todas las ramas):**

- `src/data/studio.ts`: nombre, email, redes, disponibilidad
- `src/pages/info.astro` y `public/img/javier.webp`: página Info con foto y bio
- `package.json` y `package-lock.json`: con todas las fuentes (regla 5)
- `src/data/trabajos.ts` y `public/img/trabajos/`: los trabajos del carrusel
- `src/pages/`, `src/components/`, `src/scripts/`, `src/styles/base.css`: estructura, carrusel, pantalla de carga, efecto de agua

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # revisión de tipos
npm run build    # genera dist/
```
