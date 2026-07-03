const hours = [
  { day: "Monday – Friday", time: "05:00 – 22:00" },
  { day: "Saturday", time: "07:00 – 18:00" },
  { day: "Sunday", time: "08:00 – 16:00" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-chalk-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-14">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-oxide-600">
            Visit
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-oswald)] font-semibold text-4xl md:text-5xl uppercase text-iron-950 text-balance">
            Come lift a warm-up set on us
          </h2>
          <p className="mt-4 text-iron-700 leading-relaxed max-w-md">
            First session is free — no program required. Just show up during
            open floor hours and ask for a coach.
          </p>

          <dl className="mt-10 space-y-3">
            {hours.map((h) => (
              <div key={h.day} className="flex justify-between max-w-xs border-b border-iron-950/10 pb-2">
                <dt className="font-mono text-sm text-iron-700">{h.day}</dt>
                <dd className="font-mono text-sm text-iron-950">{h.time}</dd>
              </div>
            ))}
          </dl>

          <address className="mt-8 not-italic text-iron-700 leading-relaxed">
            412 Foundry Street, Unit 3<br />
            Downtown Platform District
          </address>
        </div>

        <form
          className="flex flex-col gap-5 bg-iron-950 text-chalk-100 p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-chalk-100/60">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="bg-transparent border border-chalk-100/25 focus:border-oxide-500 px-3 py-2 outline-none transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-chalk-100/60">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="bg-transparent border border-chalk-100/25 focus:border-oxide-500 px-3 py-2 outline-none transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-chalk-100/60">
              What are you training for?
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="bg-transparent border border-chalk-100/25 focus:border-oxide-500 px-3 py-2 outline-none transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="mt-2 bg-oxide-600 hover:bg-oxide-500 transition-colors font-mono text-xs tracking-[0.1em] uppercase px-5 py-3"
          >
            Request trial session
          </button>
        </form>
      </div>
    </section>
  );
}
