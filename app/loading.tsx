export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="container-x flex min-h-[85svh] flex-col items-center justify-center gap-7"
    >
      <p className="font-display text-[clamp(3.5rem,11vw,8rem)] font-bold leading-none tracking-[-0.06em]">
        Rosca<span className="text-ember">.</span>
      </p>
      <div className="relative h-px w-56 overflow-hidden bg-bone/15">
        <div className="animate-loading-bar absolute inset-y-0 left-0 w-1/3 bg-ember" />
      </div>
      <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-smoke">Chargement de l&apos;expérience</p>
    </div>
  );
}
