import type { ReactNode } from "react";
import { cn } from "@/app/lib/cn";

type Props = {
  index?: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionLabel({ index, children, tone = "dark", className }: Props) {
  const light = tone === "light";
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em]",
        light ? "text-stone" : "text-smoke",
        className
      )}
    >
      {index && <span className={light ? "text-rust" : "text-ember"}>({index})</span>}
      <span className={cn("h-px w-10", light ? "bg-ink/25" : "bg-bone/25")} />
      <span>{children}</span>
    </div>
  );
}
