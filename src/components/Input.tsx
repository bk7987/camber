import React, { useState } from 'react';

interface InputProps {
  label: string;
  onChange: (value: number) => void;
}

export const Input: React.FC<InputProps> = ({ label, onChange }) => {
  const [value, setValue] = useState('0');

  const isNumeric = (text: string) => {
    const parsed = parseFloat(text);
    return !isNaN(parsed) && isFinite(parsed);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (val === '') {
      onChange(0);
      return setValue('');
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
    <div className="flex flex-col items-start">
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
        onFocus={e => e.target.select()}
        onChange={handleChange}
        className="p-2 w-44 text-right rounded border border-gray-300 focus:ring focus:outline-none focus:border-blue-300"
      />
    </div>
  );
};
