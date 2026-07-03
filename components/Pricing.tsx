import { membershipTiers } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-iron-950 text-chalk-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="max-w-xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-oxide-400">
            Membership
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-oswald)] font-semibold text-4xl md:text-5xl uppercase text-balance">
            Pick your grade
          </h2>
          <p className="mt-4 text-chalk-100/60 leading-relaxed">
            Named the way we name routes: each grade is a real step up in
            access and coaching, not a marketing label.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {membershipTiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col p-8 border ${
                tier.featured
                  ? "border-oxide-500 bg-iron-900"
                  : "border-chalk-100/15 bg-iron-950"
              }`}
            >
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-chalk-100/50">
                {tier.grade}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-oswald)] text-2xl uppercase">
                {tier.name}
              </h3>
              <p className="mt-3 text-chalk-100/60 text-sm leading-relaxed">
                {tier.description}
              </p>

              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-[family-name:var(--font-oswald)] text-4xl">
                  ${tier.price}
                </span>
                <span className="font-mono text-xs text-chalk-100/50">
                  /{tier.billing}
                </span>
              </p>

              <ul className="mt-6 flex flex-col gap-3 text-sm text-chalk-100/80">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-oxide-400 shrink-0" aria-hidden="true">
                      —
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 text-center font-mono text-xs tracking-[0.1em] uppercase px-5 py-3 transition-colors ${
                  tier.featured
                    ? "bg-oxide-600 hover:bg-oxide-500 text-chalk-100"
                    : "border border-chalk-100/30 hover:border-chalk-100/60"
                }`}
              >
                Choose {tier.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
