// Polygon vars and functions
export interface Point {
  x: number;
  y: number;
}

function formPolygonPoints(points: Point[]): string {
  return points.map(({ x, y }) => `${x},${y}`).join(' ');
}

const POLYGON_FILLS = [
  '#03045E',
  '#023E8A',
  '#0077B6',
  '#0096C7',
  '#00B4D8',
  '#48CAE4',
  '#90E0EF',
  '#ADE8F4',
  '#CAF0F8',
];

// Radar data vars and functions
export type RadarData = Array<number[]>;

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
function generateSeries(max: number, sides: number): number[] {
  const arr: number[] = [];

  for (let i = 0; i < sides; i++) {
    arr.push(getRandomIntInclusive(1, max));
  }

  return arr;
}
function randomizeData(count: number, max: number, sides: number): RadarData {
  const data: RadarData = [];
  if (count < 0) {
    throw new Error('Count less than zero');
  }
  for (let i = 0; i < count; i++) {
    data.push(generateSeries(max, sides));
  }
  return data;
}

// Interpolation functions
function interpolatePercent(
  pointA: Point,
  pointB: Point,
  percent: number,
): Point {
  const xLength = pointB.x - pointA.x;
  const x = xLength * percent;
  const yLength = pointB.y - pointA.y;
  const y = yLength * percent;
  return { x, y };
}
function interpolateValue(
  pointA: Point,
  pointB: Point,
  value: number,
  max: number,
): Point {
  return interpolatePercent(pointA, pointB, value / max);
}

export {
  formPolygonPoints,
  interpolatePercent,
  interpolateValue,
  POLYGON_FILLS,
  randomizeData,
};
