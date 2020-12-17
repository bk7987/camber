import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Parabola } from '../types';
import { calcTangent, getPoints } from '../utils';

interface ChartProps {
  parabola: Parabola;
}

export const Chart: React.FC<ChartProps> = ({ parabola }) => {
  const data = {
    datasets: [
      { data: getPoints(parabola, 15), label: 'Beam Camber Points' },
      { data: calcTangent(parabola), label: 'PVI', showLine: true, fill: false },
    ],
  };

  return parabola.length > 0 && parabola.apex !== 0 ? (
    <div>
      <Scatter data={data} />
    </div>
  ) : (
    <div>Invalid parabola.</div>
  );
};
