// Procedurally painted "natural scenes" used by the reconstruction visuals.
// No photographs are used — everything is drawn with the canvas API.

export type SceneVariant = 'lake' | 'meadow';

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function ridge(ctx: CanvasRenderingContext2D, S: number, base: number, amp: number, seed: number, color: string) {
  const r = rng(seed);
  const phases = [r() * 6.28, r() * 6.28, r() * 6.28];
  ctx.beginPath();
  ctx.moveTo(0, S);
  for (let x = 0; x <= S; x += S / 96) {
    const u = x / S;
    const y =
      base -
      amp * (0.55 * Math.sin(u * 5.1 + phases[0]) + 0.3 * Math.sin(u * 11.3 + phases[1]) + 0.15 * Math.sin(u * 23.7 + phases[2]));
    ctx.lineTo(x, y);
  }
  ctx.lineTo(S, S);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLake(ctx: CanvasRenderingContext2D, S: number) {
  const horizon = S * 0.6;
  const sky = ctx.createLinearGradient(0, 0, 0, horizon);
  sky.addColorStop(0, '#1d2a5c');
  sky.addColorStop(0.45, '#7b4c86');
  sky.addColorStop(0.8, '#f08a5d');
  sky.addColorStop(1, '#ffc27a');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, S, horizon);

  // sun + glow
  const sx = S * 0.62, sy = horizon - S * 0.07, sr = S * 0.075;
  const glow = ctx.createRadialGradient(sx, sy, sr * 0.2, sx, sy, sr * 4);
  glow.addColorStop(0, 'rgba(255,230,160,0.9)');
  glow.addColorStop(1, 'rgba(255,190,120,0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, S, horizon);
  ctx.fillStyle = '#fff1c4';
  ctx.beginPath();
  ctx.arc(sx, sy, sr, 0, Math.PI * 2);
  ctx.fill();

  ridge(ctx, S, horizon - S * 0.1, S * 0.08, 7, '#5a3a6e');
  ridge(ctx, S, horizon - S * 0.03, S * 0.05, 11, '#3a2a55');
  ctx.fillStyle = '#2a2145';
  ctx.fillRect(0, horizon - 2, S, 3);

  // water with reflection
  const water = ctx.createLinearGradient(0, horizon, 0, S);
  water.addColorStop(0, '#d9876a');
  water.addColorStop(0.3, '#6a4a7c');
  water.addColorStop(1, '#14193a');
  ctx.fillStyle = water;
  ctx.fillRect(0, horizon, S, S - horizon);
  for (let i = 0; i < 18; i++) {
    const y = horizon + (i / 18) ** 1.4 * (S - horizon);
    const w = sr * (1.8 - i * 0.07) * (0.6 + 0.4 * Math.sin(i * 1.7));
    ctx.fillStyle = `rgba(255,225,170,${0.55 - i * 0.028})`;
    ctx.fillRect(sx - w, y, w * 2, Math.max(1, S * 0.006));
  }

  // pine silhouettes on the left shore
  ctx.fillStyle = '#120f24';
  ctx.beginPath();
  ctx.moveTo(0, horizon + S * 0.02);
  ctx.quadraticCurveTo(S * 0.18, horizon - S * 0.01, S * 0.34, horizon + S * 0.03);
  ctx.lineTo(0, horizon + S * 0.06);
  ctx.fill();
  const r = rng(3);
  for (let i = 0; i < 9; i++) {
    const x = S * (0.02 + i * 0.035 + r() * 0.01);
    const h = S * (0.12 + r() * 0.12);
    const w = h * 0.28;
    const b = horizon + S * 0.025;
    ctx.beginPath();
    ctx.moveTo(x, b - h);
    ctx.lineTo(x + w / 2, b);
    ctx.lineTo(x - w / 2, b);
    ctx.closePath();
    ctx.fill();
  }

  // small boat
  ctx.fillStyle = '#120f24';
  const bx = S * 0.72, by = S * 0.78;
  ctx.beginPath();
  ctx.moveTo(bx - S * 0.06, by);
  ctx.lineTo(bx + S * 0.06, by);
  ctx.lineTo(bx + S * 0.045, by + S * 0.018);
  ctx.lineTo(bx - S * 0.045, by + S * 0.018);
  ctx.fill();
  ctx.fillRect(bx - 1, by - S * 0.09, Math.max(1.5, S * 0.006), S * 0.09);
  ctx.beginPath();
  ctx.moveTo(bx + 1, by - S * 0.085);
  ctx.lineTo(bx + S * 0.05, by - S * 0.012);
  ctx.lineTo(bx + 1, by - S * 0.012);
  ctx.fillStyle = '#f3d3b0';
  ctx.fill();
}

function drawMeadow(ctx: CanvasRenderingContext2D, S: number) {
  const sky = ctx.createLinearGradient(0, 0, 0, S * 0.65);
  sky.addColorStop(0, '#2f6fb3');
  sky.addColorStop(1, '#a8d8f0');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, S, S);

  // clouds
  const cloud = (x: number, y: number, s: number) => {
    ctx.fillStyle = 'rgba(255,255,255,0.92)';
    for (const [dx, dy, r] of [[0, 0, 1], [0.9, -0.35, 0.8], [1.7, 0, 0.9], [0.8, 0.25, 0.85]] as const) {
      ctx.beginPath();
      ctx.arc(x + dx * s, y + dy * s, r * s, 0, Math.PI * 2);
      ctx.fill();
    }
  };
  cloud(S * 0.15, S * 0.2, S * 0.05);
  cloud(S * 0.6, S * 0.13, S * 0.04);

  ridge(ctx, S, S * 0.56, S * 0.05, 5, '#5c8fa8');
  ridge(ctx, S, S * 0.66, S * 0.06, 9, '#5f9b4b');
  const grass = ctx.createLinearGradient(0, S * 0.65, 0, S);
  grass.addColorStop(0, '#79b34d');
  grass.addColorStop(1, '#2f6a2a');
  ctx.fillStyle = grass;
  ctx.beginPath();
  ctx.moveTo(0, S * 0.76);
  ctx.quadraticCurveTo(S * 0.5, S * 0.64, S, S * 0.74);
  ctx.lineTo(S, S);
  ctx.lineTo(0, S);
  ctx.fill();

  // tree
  const tx = S * 0.7, ty = S * 0.72;
  ctx.fillStyle = '#4a3020';
  ctx.fillRect(tx - S * 0.015, ty - S * 0.16, S * 0.03, S * 0.17);
  for (const [dx, dy, r, c] of [
    [0, -0.22, 0.11, '#2f6b2c'],
    [-0.07, -0.17, 0.08, '#2a5f28'],
    [0.07, -0.17, 0.08, '#3a7a33'],
    [0, -0.3, 0.07, '#3f8236'],
  ] as const) {
    ctx.fillStyle = c;
    ctx.beginPath();
    ctx.arc(tx + dx * S, ty + dy * S, r * S, 0, Math.PI * 2);
    ctx.fill();
  }

  // flowers
  const r = rng(21);
  for (let i = 0; i < 70; i++) {
    const x = r() * S, y = S * (0.8 + r() * 0.2);
    ctx.fillStyle = ['#ffd84a', '#ffffff', '#ff8fa3'][i % 3];
    ctx.beginPath();
    ctx.arc(x, y, S * (0.004 + r() * 0.004), 0, Math.PI * 2);
    ctx.fill();
  }
}

/** Returns an offscreen canvas of size S×S with the scene painted on it. */
export function paintScene(variant: SceneVariant, S: number) {
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const ctx = c.getContext('2d')!;
  if (variant === 'lake') drawLake(ctx, S);
  else drawMeadow(ctx, S);
  return c;
}

/** Downsamples a scene to an n×n grid of RGB triples (area-averaged). */
export function sampleGrid(scene: HTMLCanvasElement, n: number) {
  const c = document.createElement('canvas');
  c.width = c.height = n;
  const ctx = c.getContext('2d')!;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(scene, 0, 0, n, n);
  return ctx.getImageData(0, 0, n, n).data;
}

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function gaussian(r: () => number) {
  const u = Math.max(1e-9, r()), v = r();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

export { rng };
