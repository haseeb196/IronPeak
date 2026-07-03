import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-iron-900 text-chalk-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-chalk-100/10">
          {testimonials.map((t) => (
            <figure key={t.id} className="bg-iron-900 p-8 flex flex-col gap-6">
              <blockquote className="text-lg leading-relaxed text-chalk-100/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-auto font-mono text-xs uppercase tracking-wide text-chalk-100/50">
                {t.name} — {t.detail}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
