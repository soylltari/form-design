import React, { type ChangeEvent } from "react";

interface InputProps {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, id, type = "text", value, onChange }: InputProps) => {
  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label htmlFor={id} className="text-xs text-secondary-300 mb-1">
          {label}
        </label>
      )}

      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border-0 bg-secondary-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent transition duration-150 ease-in-out"
      />
    </div>
  );
};

export default Input;
