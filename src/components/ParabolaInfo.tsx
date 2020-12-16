import React from 'react';
import { Parabola } from '../types';
import { IconChartBar } from './icons/IconChartBar';

interface ParabolaInfoProps {
  parabola: Parabola;
}

export const ParabolaInfo: React.FC<ParabolaInfoProps> = ({ parabola }) => {
  return (
    <div>
      <div className="flex items-center">
        <IconChartBar className="p-1.5 h-8 w-8 text-green-500 rounded-full bg-green-100" />
        <h2 className="ml-2 text-2xl font-extrabold text-green-600">Parabola Info</h2>
      </div>
      <div className="flex space-x-12">
        <dl className="mt-6 text-lg">
          <dt className="text-gray-600 uppercase font-bold text-sm tracking-wide">Length</dt>
          <dd>{parabola.length}</dd>
          <dt className="mt-3 text-gray-600 uppercase font-bold text-sm tracking-wide">
            Camber @ Midpoint
          </dt>
          <dd>{parabola.apex}</dd>
        </dl>
        <dl className="mt-6 text-lg">
          <dt className="text-gray-600 uppercase font-bold text-sm tracking-wide">A Coefficient</dt>
          <dd>{parabola.aCoeff}</dd>
          <dt className="mt-3 text-gray-600 uppercase font-bold text-sm tracking-wide">
            B Coefficient
          </dt>
          <dd>{parabola.bCoeff}</dd>
        </dl>
      </div>
    </div>
  );
};
