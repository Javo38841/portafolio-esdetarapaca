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
| `<diseño>-navidad` | Versión navideña de cada diseño: `geoglifos-navidad`, `salitrera-navidad`, `la-tirana-navidad`, `altiplano-navidad`, `pica-navidad`, `casco-historico-navidad`, `parapente-navidad` |
| `main`            | Copia de la rama que está en línea. Cada push a `main` despliega solo (GitHub Actions). |

Las ramas `-navidad` agregan `src/components/Navidad.astro`: nieve que cae, gorro sobre la "S", regalo en "Tu negocio" (en celular se abre tocándolo), sello "Landing lista antes del 24", cuenta regresiva y estrellas de noche. Se activa con una línea `<Navidad />` en `Layout.astro`. `Navidad.astro` es **igual en las 9 ramas navideñas**: si lo cambias, pásalo a todas con `git checkout <rama> -- src/components/Navidad.astro`. Cada diseño puede ajustar el gorro en su `global.css` con `--hat-size` (ancho respecto a la letra) y `--hat-drop` (cuánto baja) dentro de `.headline`. Además de `Navidad.astro`, cada navideña cambia en su tema el rojo pascuero, la pantalla de carga (roja, con barra de bastón de dulce) y el texto de venta.

Las fotos de noche marcadas como "retocada" en los créditos son la foto de día oscurecida, porque no había una foto de noche con licencia libre.

> La edición Costanera también vive en su propio repo (`esdetarapaca-iquique`, en iquique.esdetarapaca.cl). Si cambias ese diseño, recuerda hacerlo en los dos lados.

## Guía rápida de comandos

Todo se hace desde `~/Escritorio/paginapropia4`.

**Ver qué ramas hay y en cuál estás**
```bash
git branch            # la que tiene * es la actual
git status            # si hay cambios sin commitear
```

**Ver un diseño en tu computador**
```bash
git checkout pica     # cambiar de rama (cualquiera de la tabla)
npm run dev           # http://localhost:4321 (si ya estaba corriendo, reinícialo)
```
No hace falta `npm install` al cambiar de rama (regla 5). Antes de cambiar de rama, haz commit de lo que tengas o el cambio se va contigo a la otra rama.

**Guardar y subir un cambio en la rama donde estás**
```bash
git add -A
git commit -m "feat: lo que cambiaste"
git push              # la primera vez en una rama nueva: git push -u origin <rama>
```

**Publicar un diseño fijo en esdetarapaca.cl**
1. Pausa la rotación: en GitHub, Settings → Secrets and variables → Actions → Variables, crea `ROTAR` = `no`.
2. Publica la rama:
   ```bash
   git push --force-with-lease origin pica:main
   ```
Si no pausas la rotación, se publica igual, pero a las 04:00 del día siguiente la rotación la cambia.

**Pasar al siguiente diseño ahora:** pestaña Actions → "Rotar diseño del día" → Run workflow.

**Pasar un cambio de contenido a todas las ramas** (un trabajo nuevo, un texto de `studio.ts`, la página Info): haz el commit en una rama y luego cópialo a las demás con `cherry-pick`:
```bash
git log --oneline -1                     # copia el hash del commit
origen=$(git branch --show-current)      # la rama donde ya está el commit
for b in ruta iquique geoglifos salitrera la-tirana altiplano pica casco-historico parapente ruta-navidad iquique-navidad geoglifos-navidad salitrera-navidad la-tirana-navidad altiplano-navidad pica-navidad casco-historico-navidad parapente-navidad; do
  [ "$b" = "$origen" ] && continue
  git checkout $b && git cherry-pick <hash> || break
done
git push origin ruta iquique geoglifos salitrera la-tirana altiplano pica casco-historico parapente ruta-navidad iquique-navidad geoglifos-navidad salitrera-navidad la-tirana-navidad altiplano-navidad pica-navidad casco-historico-navidad parapente-navidad
```
Si alguna rama ya tenía ese commit o da conflicto, el `for` se detiene ahí para que lo revises.

**Pasar un archivo común a todas las ramas** (README, workflow de rotación, `package.json`): se copia el archivo tal cual desde la rama donde lo cambiaste:
```bash
for b in ruta iquique geoglifos salitrera la-tirana altiplano pica casco-historico parapente ruta-navidad iquique-navidad geoglifos-navidad salitrera-navidad la-tirana-navidad altiplano-navidad pica-navidad casco-historico-navidad parapente-navidad; do
  git checkout $b
  git checkout <rama-donde-lo-cambiaste> -- README.md
  git commit -m "docs: README al día" || true
done
git push origin ruta iquique geoglifos salitrera la-tirana altiplano pica casco-historico parapente ruta-navidad iquique-navidad geoglifos-navidad salitrera-navidad la-tirana-navidad altiplano-navidad pica-navidad casco-historico-navidad parapente-navidad
```

## Publicación

### Cambiar el diseño publicado

```bash
git push --force-with-lease origin iquique:main   # publica Costanera
git push --force-with-lease origin ruta:main      # publica Ruta del desierto
```

Reemplaza todo `main` por la rama elegida. En un par de minutos queda en esdetarapaca.cl (ver la pestaña Actions). Si la rotación está activa, al día siguiente vuelve a cambiar (ver abajo).

### Rotación de diseños (carrusel)

`.github/workflows/rotar-diseno.yml` publica **el siguiente diseño** cada vez que corre: solo, todos los días a las 04:00 (hora de Chile), y también cuando apretas el botón.

- **Del 1 al 25 de diciembre:** rota entre las 9 navideñas: `ruta-navidad` → `iquique-navidad` → `geoglifos-navidad` → `salitrera-navidad` → `la-tirana-navidad` → `altiplano-navidad` → `pica-navidad` → `casco-historico-navidad` → `parapente-navidad`.
- **El resto del año:** rota en este orden: `ruta` → `iquique` → `geoglifos` → `salitrera` → `la-tirana` → `altiplano` → `pica` → `casco-historico` → `parapente` → vuelve a `ruta`.

Para saber cuál sigue, lee `esdetarapaca.cl/rotacion.txt`. Ese archivo lo deja el mismo workflow con el nombre de la rama publicada. Si no existe (por ejemplo, después de publicar a mano con un push a `main`), parte por el primero de la lista. No toca `main`.

- **Pasar al siguiente a mano:** pestaña Actions → "Rotar diseño del día" → Run workflow.
- **Pausar** (para dejar fijo un diseño): en GitHub, Settings → Secrets and variables → Actions → Variables, crea `ROTAR` con el valor `no`, y publica la rama que quieras en `main`. Para reanudar, borra la variable.
- **Agregar, quitar o reordenar diseños:** edita las listas `normales` o `navidad` del workflow y pasa el archivo a todas las ramas.
- **El archivo tiene que estar igual en todas las ramas.** GitHub solo corre los workflows programados que están en `main`, y `main` puede ser cualquier rama.
- GitHub apaga los workflows programados después de 60 días sin commits en el repo. Si pasa, llega un correo y se reactiva con un clic en Actions.

### Reglas

1. **Nunca hacer commits en `main`.** Todo lo que se haga ahí se pierde la próxima vez que se sobreescriba. Trabaja siempre en una rama de diseño.
2. **Sube la rama antes de publicarla** (`git push origin <rama>`) para que también quede guardada en GitHub. La rotación publica lo que está en GitHub, no lo de tu computador.
3. **El contenido va en todas las ramas.** Si agregas un trabajo o cambias un texto, haz el commit en una rama y pásalo a las demás (ver "Pasar un cambio de contenido a todas las ramas" en la guía rápida).
4. **Un diseño nuevo es una rama nueva** que sale de una existente (`git checkout -b diseno-nuevo ruta`) y solo cambia los archivos del tema. Agrégalo a la lista del workflow de rotación si quieres que rote.
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
