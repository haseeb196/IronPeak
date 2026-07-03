import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-iron-950 text-chalk-100 pt-32 pb-20 md:pt-44 md:pb-28 contour-bg overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-oxide-400 mb-6">
          Downtown platform floor — open 5am–10pm daily
        </p>
        <h1 className="font-[family-name:var(--font-oswald)] font-semibold text-balance text-5xl sm:text-6xl md:text-7xl leading-[0.95] uppercase max-w-3xl">
          Train like the number on the bar is the whole point.
        </h1>
        <p className="mt-6 max-w-xl text-chalk-100/70 text-lg leading-relaxed">
          Iron Peak Fitness is a strength and conditioning gym for people who
          showed up to lift, not to browse. Coached programs, an open
          platform floor, and a total that actually moves.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#pricing"
            className="bg-oxide-600 hover:bg-oxide-500 transition-colors text-chalk-100 font-mono text-sm tracking-[0.1em] uppercase px-6 py-3"
          >
            Book a trial session
          </a>
          <a
            href="#programs"
            className="border border-chalk-100/30 hover:border-chalk-100/60 transition-colors text-chalk-100 font-mono text-sm tracking-[0.1em] uppercase px-6 py-3"
          >
            See the programs
          </a>
        </div>

        <dl className="mt-20 grid grid-cols-3 gap-6 max-w-xl border-t border-chalk-100/10 pt-8">
          {stats.map((stat) => (
            <div key={stat.id}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-[family-name:var(--font-oswald)] text-3xl md:text-4xl text-chalk-100">
                {stat.value}
              </dd>
              <dd className="mt-1 font-mono text-xs uppercase tracking-wide text-chalk-100/50 leading-snug">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
