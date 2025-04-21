import React from "react";
import { cn } from "../lib/utils"; // Important - ab se hamesha correct karna hai

function Logo({ width = "100px" }) {
  return (
    <div
      className={cn(
        "text-2xl font-bold tracking-tight",
      )}
      style={{ width }}
    >
      BlogStack
    </div>
  );
}

export default Logo;
