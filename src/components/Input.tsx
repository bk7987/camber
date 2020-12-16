import React, { useState } from 'react';

interface InputProps {
  label: string;
  onChange: (value: number) => void;
}

export const Input: React.FC<InputProps> = ({ label, onChange }) => {
  const [value, setValue] = useState('');

  const isNumeric = (text: string) => {
    const parsed = parseFloat(text);
    return !isNaN(parsed) && isFinite(parsed);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (val === '') {
      onChange(0);
      return setValue(val);
    }

    if (isNumeric(val)) {
      const parsedValue = parseFloat(val);
      if (!isNaN(parsedValue)) {
        onChange(parsedValue);
      } else {
        onChange(0);
      }
      return setValue(val);
    }
  };

  return (
    <div>
      <label
        className="block text-gray-600 uppercase font-bold text-sm tracking-wide"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        id={label}
        type="text"
        value={value}
        onChange={handleChange}
        className="p-2 w-32 text-right rounded border border-gray-300 focus:ring focus:outline-none focus:border-blue-300"
      />
    </div>
  );
};
