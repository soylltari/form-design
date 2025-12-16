import React, { type ChangeEvent } from "react";

interface InputProps {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  error,
}: InputProps) => {
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
        className={`w-full px-4 py-2 border-2 bg-secondary-100 rounded-sm focus:outline-none transition-all
          ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-transparent focus:ring-2 focus:ring-accent"
          }
        `}
      />
      {error && <span className="text-red-500 text-[10px] mt-1">{error}</span>}
    </div>
  );
};

export default Input;
