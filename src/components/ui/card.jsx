import { cn } from "@/lib/utils";

export function Card({ className, children, ...props }) {
  return <div className={cn("rounded-3xl border border-forest/10 bg-paper", className)} {...props}>{children}</div>;
}