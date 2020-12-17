import React from 'react';
import { useParabola } from '../hooks/useParabola';
import { Chart } from './Chart';
import { IconAdjustments } from './icons/IconAdjustments';
import { Input } from './Input';
import { ParabolaInfo } from './ParabolaInfo';
import { getPoints } from '../utils';

export const App: React.FC = () => {
  const [parabola, setParabola] = useParabola({ length: 0, apex: 0 });

  return (
    <div className="max-w-screen-lg mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-extrabold">Beam Camber Toolbox</h1>
      <div className="mt-12 flex items-start space-x-12">
        <div className="p-6 rounded-lg border-2 border-dashed">
          <div className="flex items-center">
            <IconAdjustments className="p-1.5 h-8 w-8 text-blue-500 rounded-full bg-blue-100" />
            <h2 className="ml-2 text-2xl font-extrabold text-blue-600">Inputs</h2>
          </div>
          <div className="mt-6 flex space-x-4">
            <Input onChange={val => setParabola({ length: val })} label="Length" />
            <Input onChange={val => setParabola({ apex: val })} label="Camber @ Midpoint" />
          </div>
        </div>
        <div className="p-6 rounded-lg border-2 border-dashed">
          <ParabolaInfo parabola={parabola} />
        </div>
      </div>
      <div className="mt-12">
        <Chart parabola={parabola} />
      </div>
    </div>
  );
};
