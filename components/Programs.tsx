import { programs } from "@/lib/data";

const intensityOrder = { Foundation: 1, Performance: 2, Elite: 3 } as const;

export default function Programs() {
  return (
    <section id="programs" className="bg-chalk-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="max-w-xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-oxide-600">
            Programs
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-oswald)] font-semibold text-4xl md:text-5xl uppercase text-iron-950 text-balance">
            Coached sessions on a fixed weekly clock
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-iron-950/10">
          {programs.map((program) => (
            <article
              key={program.id}
              className="bg-chalk-50 p-8 flex flex-col gap-4 hover:bg-chalk-100 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-[family-name:var(--font-oswald)] text-2xl uppercase text-iron-950">
                  {program.name}
                </h3>
                <span
                  className="shrink-0 font-mono text-[10px] tracking-[0.15em] uppercase px-2 py-1 border border-iron-950/20 text-iron-700"
                  title={`Intensity order ${intensityOrder[program.intensity]} of 3`}
                >
                  {program.intensity}
                </span>
              </div>
              <p className="text-iron-700 leading-relaxed">{program.description}</p>
              <p className="mt-auto font-mono text-xs uppercase tracking-wide text-oxide-600">
                {program.schedule}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
