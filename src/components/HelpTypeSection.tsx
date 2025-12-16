import { helpTypeButtons } from "./data";

export default function HelpTypeSection() {
  return (
    <div className="w-full grid grid-cols-2 gap-4 justify-center items-center md:flex md:justify-between md:px-5">
      {helpTypeButtons.map(({ id, label, Icon }) => {
        const isActive = "financial" === id;
        return (
          <button
            type="button"
            key={id}
            className="group w-full h-full md:w-auto flex flex-col sm:flex-row items-center sm:justify-start justify-center gap-3 md:gap-4 focus:outline-none transition-all"
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
              className={`text-sm sm:text-md text-center sm:text-left w-auto md:w-24 leading-tight transition-all min-h-10 flex items-center justify-center sm:justify-start
                  ${
                    isActive
                      ? "text-primary"
                      : "text-secondary-200 group-hover:text-primary"
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
