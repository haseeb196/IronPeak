const navLinks = [
  { href: "#programs", label: "Programs" },
  { href: "#pricing", label: "Membership" },
  { href: "#coaches", label: "Coaches" },
  { href: "#contact", label: "Visit" },
];

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-chalk-100/10 bg-iron-950/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 md:px-12 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-[family-name:var(--font-oswald)] text-chalk-100 text-lg tracking-wide uppercase"
        >
          Iron Peak
          <span className="text-oxide-500"> Fitness</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-[0.15em] uppercase text-chalk-100/70 hover:text-oxide-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#pricing"
          className="font-mono text-xs tracking-[0.15em] uppercase bg-oxide-600 hover:bg-oxide-500 text-chalk-100 px-4 py-2 transition-colors"
        >
          Start trial
        </a>
      </div>
    </header>
  );
}
