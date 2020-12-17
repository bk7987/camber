import { Parabola, Point } from './types';

export const calcPoint = (parabola: Parabola, x: number): number => {
  return parabola.aCoeff * x * x + parabola.bCoeff * x;
};

export const calcTangent = (parabola: Parabola): Point[] => {
  const midpointX = parabola.length / 2;
  const midpointY = parabola.bCoeff * midpointX;
  return [
    { x: 0, y: 0 },
    { x: midpointX, y: midpointY },
  ];
};

export const getPoints = (parabola: Parabola, interval: number): Point[] => {
  const points: Point[] = [];
  for (let x = 0; x < parabola.length; x += interval) {
    const y = calcPoint(parabola, x);
    points.push({ x, y });
  }
  console.log(points);
  return points;
};
