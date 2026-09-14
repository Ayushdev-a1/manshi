import * as React from "react";
import { cn } from "@/lib/utils";

export function Button({ className, variant = "default", ...props }) {
  const variants = {
    default: "bg-forest text-paper hover:bg-[#1d5145]",
    outline: "border border-forest/20 bg-transparent text-forest hover:bg-forest hover:text-paper",
    ghost: "text-forest hover:bg-forest/5"
  };
  return (
    <button
      className={cn("inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors", variants[variant], className)}
      {...props}
    />
  );
}