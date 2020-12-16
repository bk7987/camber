import React from 'react';
import { useParabola } from '../hooks/useParabola';
import { Input } from './Input';

export const App: React.FC = () => {
  const [parabola, setParabola] = useParabola({ length: 0, apex: 0 });

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <Input onChange={val => setParabola({ length: val })} label="Length" />
      <div>
        Length: {parabola.length} Apex: {parabola.apex}
      </div>
      <div>
        A-Coeff: {parabola.aCoeff} B-Coeff: {parabola.bCoeff}
      </div>
      <Input onChange={val => setParabola({ apex: val })} label="Camber @ Midpoint" />
    </div>
  );
};
