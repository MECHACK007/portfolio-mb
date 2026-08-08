export default function GradientSeparator() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_40%),radial-gradient(circle_at_bottom,rgba(15,23,42,0.06),transparent_40%)]" />
      <div className="relative h-32 w-full">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(217,73,31,0.18)" />
              <stop offset="50%" stopColor="rgba(217,73,31,0.08)" />
              <stop offset="100%" stopColor="rgba(217,73,31,0.16)" />
            </linearGradient>
          </defs>
          <path
            d="M0,40 C320,100 640,0 960,48 C1180,80 1240,8 1440,52 L1440,120 L0,120 Z"
            fill="url(#waveGradient)"
            opacity="0.92"
          />
          <path
            d="M0,72 C320,24 640,108 960,60 C1180,28 1320,84 1440,46 L1440,120 L0,120 Z"
            fill="rgba(255,255,255,0.75)"
            opacity="0.48"
          />
        </svg>
      </div>
    </section>
  );
}
