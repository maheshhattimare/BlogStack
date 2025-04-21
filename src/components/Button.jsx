import React from "react";
import { Button as ShadcnButton } from "../components/ui/button";

export default function Button({
  children,
  type = "button",
  className = "",
  variant = "default",
  ...props
}) {
  return (
    <ShadcnButton
      type={type}
      variant={variant}
      className={className}
      {...props}
    >
      {children}
    </ShadcnButton>
  );
}
