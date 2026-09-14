import { cn } from "@/lib/utils";

export function Badge({ className, children }) {
  return <span className={cn("inline-flex rounded-full border border-forest/15 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-forest/75", className)}>{children}</span>;
}