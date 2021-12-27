export class CubicHermiteSpline {
  points: [number, number][];
  lerpFn: any;
  constructor(lerp: any) {
    this.points = [];
    this.lerpFn = lerp;
  }

  AddPoint(t: any, d: any) {
    this.points.push([t, d]);
  }

  Get(t: number) {
    let p1 = 0;

    for (let i = 0; i < this.points.length; i++) {
      if (this.points[i][0] >= t) {
        break;
      }
      p1 = i;
    }

    const p0 = Math.max(0, p1 - 1);
    const p2 = Math.min(this.points.length - 1, p1 + 1);
    const p3 = Math.min(this.points.length - 1, p1 + 2);

    if (p1 == p2) {
      return this.points[p1][1];
    }

    return this.lerpFn(
      (t - this.points[p1][0]) / (this.points[p2][0] - this.points[p1][0]),
      this.points[p0][1],
      this.points[p1][1],
      this.points[p2][1],
      this.points[p3][1]
    );
  }
}

type LerpFn<T> = (index: number, a: T, b: T) => T;

export class LinearSpline<T> {
  points: [number, T][];
  lerpFn: LerpFn<T>;

  constructor(lerp: any) {
    this.points = [];
    this.lerpFn = lerp;
  }

  AddPoint(t: number, d: T) {
    this.points.push([t, d]);
  }

  Get(t: number) {
    let p1 = 0;

    for (let i = 0; i < this.points.length; i++) {
      if (this.points[i][0] >= t) {
        break;
      }
      p1 = i;
    }

    const p2 = Math.min(this.points.length - 1, p1 + 1);

    if (p1 == p2) {
      return this.points[p1][1];
    }

    return this.lerpFn(
      (t - this.points[p1][0]) / (this.points[p2][0] - this.points[p1][0]),
      this.points[p1][1],
      this.points[p2][1]
    );
  }
}

export type SplinePoints<T> = SplinePoint<T>[];
export type SplinePoint<T> = [number, T];

export function getSplineValue<T>(
  spline: SplinePoints<T>,
  t: number,
  lerpFn: LerpFn<T>
): T {
  let p1 = 0;

  for (let i = 0; i < spline.length; i++) {
    if (spline[i][0] >= t) {
      break;
    }
    p1 = i;
  }

  const p2 = Math.min(spline.length - 1, p1 + 1);

  if (p1 == p2) {
    return spline[p1][1];
  }

  return lerpFn(
    (t - spline[p1][0]) / (spline[p2][0] - spline[p1][0]),
    spline[p1][1],
    spline[p2][1]
  );
}

export function getColorSplineValue(
  spline: SplinePoints<THREE.Color>,
  t: number
): THREE.Color {
  const c = getSplineValue(spline, t, colorLerp);
  return c;
}

function colorLerp(t: number, p0: THREE.Color, p1: THREE.Color) {
  const c = p0.clone();
  return c.lerp(p1, t);
}

export class ColorLinearSpline extends LinearSpline<THREE.Color> {
  constructor() {
    super(colorLerp);
  }
}
