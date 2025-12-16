import React from "react";
import { helpTypeButtons } from "./data";

export default function HelpTypeSection() {
  return (
    <div className="w-full flex justify-between">
      {helpTypeButtons.map(({ id, label, Icon }) => {
        const isActive = "financial" === id;
        return (
          <button
            type="button"
            key={id}
            className="group flex items-center gap-4 focus:outline-none transition-all"
          >
            <div
              className={`
                  w-16 h-16 rounded-2xl flex items-center justify-center border-2 transition-all
                  ${
                    isActive
                      ? "bg-accent border-accent"
                      : "bg-white border-secondary-200 group-hover:border-accent"
                  }
                `}
            >
              <Icon
                title={label}
                className={`
                    w-8 h-8 transition-all
                    
                    ${
                      isActive
                        ? "text-white"
                        : "text-secondary-200 group-hover:text-accent"
                    }
                  `}
              />
            </div>
            <span
              className={`text-md text-left w-24 leading-tight transition-all
                  ${
                    isActive
                      ? "text-primary"
                      : "text-gray-300 group-hover:text-primary"
                  }`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
