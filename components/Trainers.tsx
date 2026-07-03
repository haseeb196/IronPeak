import { trainers } from "@/lib/data";

export default function Trainers() {
  return (
    <section id="coaches" className="bg-chalk-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="max-w-xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-oxide-600">
            Coaches
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-oswald)] font-semibold text-4xl md:text-5xl uppercase text-iron-950 text-balance">
            Every session, someone&apos;s watching your bar path
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <article key={trainer.id} className="flex flex-col gap-3">
              <div className="aspect-[4/5] bg-iron-800 flex items-end p-5">
                <span className="font-[family-name:var(--font-oswald)] text-chalk-100/20 text-6xl leading-none uppercase">
                  {trainer.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-oswald)] text-xl uppercase text-iron-950">
                {trainer.name}
              </h3>
              <p className="font-mono text-xs uppercase tracking-wide text-oxide-600">
                {trainer.role} — {trainer.focus}
              </p>
              <p className="text-iron-700 text-sm leading-relaxed">{trainer.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
