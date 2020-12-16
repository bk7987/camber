import React, { useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import { Parabola } from '../types';
import { getData } from '../utils';

interface ChartProps {
  parabola: Parabola;
}

export const Chart: React.FC<ChartProps> = ({ parabola }) => {
  const [data, setData] = useState(getData(parabola, 5));
  return (
    <div>
      <Scatter data={data} />
    </div>
  );
};
