import React, { useId } from "react";
import { cn } from "../lib/utils";

const Select = React.forwardRef(function Select(
  { options, label, className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="mb-2 block text-sm font-medium">
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={cn(
          "px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full",
          className
        )}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
