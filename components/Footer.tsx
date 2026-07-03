export default function Footer() {
  return (
    <footer className="bg-iron-950 text-chalk-100/50 py-10">
      <div className="mx-auto max-w-6xl px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs tracking-wide uppercase">
          Iron Peak Fitness — Downtown Platform District
        </p>
        <p className="font-mono text-xs tracking-wide">
          © {new Date().getFullYear()} Iron Peak Fitness
        </p>
      </div>
    </footer>
  );
}
