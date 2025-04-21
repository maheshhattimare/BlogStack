import React, { useId } from "react";
import { Input as ShadcnInput } from "../components/ui/input";
import { Label } from "../components/ui/label";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full space-y-1">
      {label && (
        <Label htmlFor={id} className="pl-1">
          {label}
        </Label>
      )}
      <ShadcnInput
        type={type}
        id={id}
        ref={ref}
        className={className}
        {...props}
      />
    </div>
  );
});

export default Input;
