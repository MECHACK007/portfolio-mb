"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/app/lib/cn";

type Props = Omit<ImageProps, "alt"> & {
  title: string;
  alt?: string;
};

/** next/image that degrades to a branded poster when the screenshot is missing. */
export default function ProjectImage({ title, alt, className, ...props }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed || !props.src) {
    return <ProjectPoster title={title} />;
  }

  return (
    <Image
      {...props}
      // Static imports carry a tiny blurred preview; show it while the real file downloads.
      placeholder={props.placeholder ?? (typeof props.src === "object" ? "blur" : "empty")}
      alt={alt ?? title}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

function ProjectPoster({ title, className }: { title: string; className?: string }) {
  const initials = title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");

  return (
    <div
      role="img"
      aria-label={title}
      className={cn(
        "absolute inset-0 flex flex-col justify-between overflow-hidden bg-ink-3 px-6 py-[9%] sm:px-10",
        className
      )}
    >
      <div className="absolute -right-1/4 -top-1/4 h-[120%] w-[120%] rounded-full bg-[radial-gradient(circle,rgba(255,90,31,0.45),transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f2ede4 1px, transparent 1px), linear-gradient(to bottom, #f2ede4 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <span className="relative self-end font-mono text-[11px] uppercase tracking-[0.22em] text-bone/60">Aperçu à venir</span>
      <span className="relative font-display text-[clamp(4rem,12vw,9rem)] font-bold leading-none tracking-[-0.06em] text-bone">
        {initials}
        <span className="text-ember">.</span>
      </span>
    </div>
  );
}
