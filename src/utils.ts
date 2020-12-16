import { Parabola } from './types';

export const calcPoint = (parabola: Parabola, x: number): number => {
  return parabola.aCoeff * x * x + parabola.bCoeff * x;
};

export const getData = (parabola: Parabola, interval: number): { x: number; y: number }[] => {
  const data: { x: number; y: number }[] = [];
  for (let x = 0; x < parabola.length; x += interval) {
    const y = calcPoint(parabola, x);
    data.push({ x, y });
  }
  return data;
};
