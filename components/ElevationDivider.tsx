interface ElevationDividerProps {
  label: string;
  tone?: "light" | "dark";
}

/**
 * A contour/elevation-profile line used as a section divider throughout the
 * page. Each instance's peak sits at a different point, echoing a climb
 * profile — order carries meaning here (early sections sit low, later
 * sections read higher), rather than being a decorative flourish.
 */
export default function ElevationDivider({
  label,
  tone = "light",
}: ElevationDividerProps) {
  const stroke = tone === "dark" ? "#b5462f" : "#3a3d42";
  const textColor = tone === "dark" ? "text-iron-500" : "text-chalk-100/60";

  return (
    <div className="flex items-center gap-4 px-6 md:px-12 py-6" aria-hidden="false">
      <span
        className={`font-mono text-xs tracking-[0.2em] uppercase ${textColor} whitespace-nowrap`}
      >
        {label}
      </span>
      <svg
        viewBox="0 0 400 24"
        preserveAspectRatio="none"
        className="h-4 w-full"
        role="presentation"
      >
        <polyline
          points="0,20 40,20 70,6 100,18 140,18 170,2 210,16 250,16 280,10 320,16 360,16 400,4"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
