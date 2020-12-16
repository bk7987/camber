import { useState } from 'react';

interface Parabola {
  length: number;
  apex: number;
  aCoeff: number;
  bCoeff: number;
}

const calcParabola = (length: number, apex: number): Parabola => {
  const aCoeff = length > 0 ? (-4 * apex) / (length * length) : 0;
  const bCoeff = -aCoeff * length;
  return {
    length,
    apex,
    aCoeff,
    bCoeff,
  };
};

interface ParabolaInput {
  length?: number;
  apex?: number;
}

export const useParabola = (
  initialParabola: ParabolaInput
): [Parabola, (updatedParabola: ParabolaInput) => void] => {
  const [parabola, setParabola] = useState(
    calcParabola(initialParabola.length || 0, initialParabola.apex || 0)
  );

  const updateParabola = (updatedParabola: ParabolaInput) => {
    const length = updatedParabola.length || parabola.length;
    const apex = updatedParabola.apex || parabola.apex;
    setParabola(calcParabola(length, apex));
  };

  return [parabola, updateParabola];
};
