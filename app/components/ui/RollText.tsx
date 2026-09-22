import type { ReactNode } from "react";
import { cn } from "@/app/lib/cn";

/** Label that rolls up to a duplicate of itself when its `group` parent is hovered. */
export default function RollText({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("relative inline-flex overflow-hidden leading-[1.25]", className)}>
      <span className="block transition-transform duration-500 ease-expo group-hover:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-expo group-hover:translate-y-0"
      >
        {children}
      </span>
    </span>
  );
}
