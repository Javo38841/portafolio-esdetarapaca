// Efecto líquido sobre la foto de fondo (WebGL, sin librerías).
// El mouse deja una estela que se desvanece; dentro de la estela se ve la otra foto
// (de día se asoma la noche y al revés), con bordes ondulados y refracción como de agua.

const VERT = `
attribute vec2 p;
varying vec2 vUv;
void main() {
  vUv = p * 0.5 + 0.5;
  gl_Position = vec4(p, 0.0, 1.0);
}`;

const NOISE = `
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
  return v;
}`;

// Estela: se desvanece de a poco, "fluye" un poco con ruido y suma el trazo del mouse.
const TRAIL = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uPrev;
uniform vec2 uA;
uniform vec2 uB;
uniform float uR;
uniform float uStrength;
uniform float uAspect;
uniform float uTime;
${NOISE}
void main() {
  vec2 wob = vec2(noise(vUv * 6.0 + uTime * 0.35), noise(vUv * 6.0 - uTime * 0.35 + 7.0)) - 0.5;
  float prev = texture2D(uPrev, vUv + wob * 0.004).r;
  prev = max(prev * 0.986 - 0.0025, 0.0);
  vec2 asp = vec2(uAspect, 1.0);
  vec2 pa = vUv * asp - uA * asp;
  vec2 ba = (uB - uA) * asp;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0.0, 1.0);
  float d = length(pa - ba * h);
  float brush = smoothstep(uR, uR * 0.15, d) * uStrength;
  gl_FragColor = vec4(clamp(prev + brush, 0.0, 1.0), 0.0, 0.0, 1.0);
}`;

// Imagen final: mezcla las dos fotos según la estela, con refracción y brillo en el borde.
const FINAL = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uBase;
uniform sampler2D uReveal;
uniform sampler2D uTrail;
uniform vec2 uRes;
uniform vec2 uTrailPx;
uniform vec2 uBaseSize;
uniform vec2 uRevealSize;
uniform float uTime;
${NOISE}
vec2 cover(vec2 uv, vec2 img) {
  float sr = uRes.x / uRes.y;
  float ir = img.x / img.y;
  vec2 s = sr > ir ? vec2(1.0, ir / sr) : vec2(sr / ir, 1.0);
  return (uv - 0.5) * s + 0.5;
}
void main() {
  float t = texture2D(uTrail, vUv).r;
  float tx = texture2D(uTrail, vUv + vec2(uTrailPx.x, 0.0)).r - texture2D(uTrail, vUv - vec2(uTrailPx.x, 0.0)).r;
  float ty = texture2D(uTrail, vUv + vec2(0.0, uTrailPx.y)).r - texture2D(uTrail, vUv - vec2(0.0, uTrailPx.y)).r;
  vec2 grad = vec2(tx, ty);
  float n = fbm(vUv * 3.5 + vec2(uTime * 0.06, -uTime * 0.04));
  float m = smoothstep(0.28, 0.62, t + (n - 0.5) * 0.3);
  vec2 refr = grad * 0.06;
  vec3 base = texture2D(uBase, cover(vUv - refr, uBaseSize)).rgb;
  vec3 rev = texture2D(uReveal, cover(vUv + refr * 0.6, uRevealSize)).rgb;
  vec3 col = mix(base, rev, m);
  float edge = m * (1.0 - m) * 4.0;
  col += edge * 0.07;
  gl_FragColor = vec4(col, 1.0);
}`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) ?? 'shader');
  return s;
}

function program(gl: WebGLRenderingContext, frag: string) {
  const p = gl.createProgram()!;
  gl.attachShader(p, compile(gl, gl.VERTEX_SHADER, VERT));
  gl.attachShader(p, compile(gl, gl.FRAGMENT_SHADER, frag));
  gl.bindAttribLocation(p, 0, 'p');
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p) ?? 'program');
  const u = (name: string) => gl.getUniformLocation(p, name);
  return { p, u };
}

function texture(gl: WebGLRenderingContext, source?: TexImageSource) {
  const t = gl.createTexture()!;
  gl.bindTexture(gl.TEXTURE_2D, t);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  if (source) {
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
  }
  return t;
}

async function ready(img: HTMLImageElement) {
  if (!img.complete || !img.naturalWidth) await new Promise((r) => img.addEventListener('load', r, { once: true }));
  try {
    await img.decode();
  } catch {}
}

/** Arranca el efecto. Devuelve false si no se puede (sin WebGL); en ese caso queda la foto normal. */
export async function initLiquid(
  canvas: HTMLCanvasElement,
  day: HTMLImageElement,
  night: HTMLImageElement,
  isDark: () => boolean,
): Promise<boolean> {
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, preserveDrawingBuffer: false });
  if (!gl) return false;

  let trailProg, finalProg;
  try {
    trailProg = program(gl, TRAIL);
    finalProg = program(gl, FINAL);
  } catch {
    return false;
  }

  // Triángulo que cubre toda la pantalla
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

  await Promise.all([ready(day), ready(night)]);
  const texDay = texture(gl, day);
  const texNight = texture(gl, night);
  const daySize = [day.naturalWidth, day.naturalHeight];
  const nightSize = [night.naturalWidth, night.naturalHeight];

  // Estela en dos texturas que se alternan (ping-pong), a 1/4 de resolución
  const trails = [texture(gl), texture(gl)];
  const fbos = trails.map((t) => {
    const f = gl.createFramebuffer()!;
    gl.bindFramebuffer(gl.FRAMEBUFFER, f);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, t, 0);
    return f;
  });
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  let w = 0;
  let h = 0;
  let tw = 0;
  let th = 0;
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    w = Math.max(1, Math.round(window.innerWidth * dpr));
    h = Math.max(1, Math.round(window.innerHeight * dpr));
    canvas.width = w;
    canvas.height = h;
    tw = Math.max(1, Math.round(w / 4));
    th = Math.max(1, Math.round(h / 4));
    trails.forEach((t) => {
      gl!.bindTexture(gl!.TEXTURE_2D, t);
      gl!.texImage2D(gl!.TEXTURE_2D, 0, gl!.RGBA, tw, th, 0, gl!.RGBA, gl!.UNSIGNED_BYTE, null);
    });
    wake();
  }

  const mouse = { x: 0.5, y: 0.5, px: 0.5, py: 0.5, moved: false };
  window.addEventListener(
    'pointermove',
    (e) => {
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = 1 - e.clientY / window.innerHeight;
      if (!mouse.moved) {
        mouse.px = mouse.x;
        mouse.py = mouse.y;
      }
      mouse.moved = true;
      wake();
    },
    { passive: true },
  );

  let idx = 0;
  let lastActive = performance.now();
  let running = false;
  const t0 = performance.now();

  function wake() {
    lastActive = performance.now();
    if (!running) {
      running = true;
      requestAnimationFrame(frame);
    }
  }

  function frame(now: number) {
    const time = (now - t0) / 1000;

    // 1) estela
    const dx = mouse.x - mouse.px;
    const dy = mouse.y - mouse.py;
    const speed = Math.min(Math.hypot(dx, dy) * 6, 1);
    gl!.useProgram(trailProg!.p);
    gl!.bindFramebuffer(gl!.FRAMEBUFFER, fbos[1 - idx]);
    gl!.viewport(0, 0, tw, th);
    gl!.activeTexture(gl!.TEXTURE0);
    gl!.bindTexture(gl!.TEXTURE_2D, trails[idx]);
    gl!.uniform1i(trailProg!.u('uPrev'), 0);
    gl!.uniform2f(trailProg!.u('uA'), mouse.px, mouse.py);
    gl!.uniform2f(trailProg!.u('uB'), mouse.x, mouse.y);
    gl!.uniform1f(trailProg!.u('uR'), 0.1 + speed * 0.09);
    gl!.uniform1f(trailProg!.u('uStrength'), mouse.moved ? 0.7 + speed * 0.3 : 0);
    gl!.uniform1f(trailProg!.u('uAspect'), w / h);
    gl!.uniform1f(trailProg!.u('uTime'), time);
    gl!.drawArrays(gl!.TRIANGLES, 0, 3);
    idx = 1 - idx;
    mouse.px = mouse.x;
    mouse.py = mouse.y;

    // 2) imagen final
    const dark = isDark();
    gl!.useProgram(finalProg!.p);
    gl!.bindFramebuffer(gl!.FRAMEBUFFER, null);
    gl!.viewport(0, 0, w, h);
    gl!.activeTexture(gl!.TEXTURE0);
    gl!.bindTexture(gl!.TEXTURE_2D, dark ? texNight : texDay);
    gl!.activeTexture(gl!.TEXTURE1);
    gl!.bindTexture(gl!.TEXTURE_2D, dark ? texDay : texNight);
    gl!.activeTexture(gl!.TEXTURE2);
    gl!.bindTexture(gl!.TEXTURE_2D, trails[idx]);
    gl!.uniform1i(finalProg!.u('uBase'), 0);
    gl!.uniform1i(finalProg!.u('uReveal'), 1);
    gl!.uniform1i(finalProg!.u('uTrail'), 2);
    gl!.uniform2f(finalProg!.u('uRes'), w, h);
    gl!.uniform2f(finalProg!.u('uTrailPx'), 1.5 / tw, 1.5 / th);
    const [bs, rs] = dark ? [nightSize, daySize] : [daySize, nightSize];
    gl!.uniform2f(finalProg!.u('uBaseSize'), bs[0], bs[1]);
    gl!.uniform2f(finalProg!.u('uRevealSize'), rs[0], rs[1]);
    gl!.uniform1f(finalProg!.u('uTime'), time);
    gl!.drawArrays(gl!.TRIANGLES, 0, 3);

    // Sin movimiento por 5 s la estela ya se borró: se pausa para no gastar batería.
    if (now - lastActive < 5000 && !document.hidden) requestAnimationFrame(frame);
    else running = false;
  }

  window.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', () => !document.hidden && wake());
  // Al cambiar de tema, se vuelve a dibujar con la foto que corresponde.
  new MutationObserver(wake).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', wake);

  resize();
  return true;
}
