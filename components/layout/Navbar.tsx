"use client";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto mt-5 flex w-[95%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-8 py-4 backdrop-blur-xl">
        <h1 className="cursor-pointer text-xl font-bold tracking-wide text-white">
          Sujal <span className="text-blue-500">Undre</span>
        </h1>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-300 transition-all duration-300 hover:text-white"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <button className="rounded-full border border-white/20 px-5 py-2 text-sm text-white transition hover:border-blue-500 hover:text-blue-400">
            Resume
          </button>

          <button className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
            Hire Me
          </button>
        </div>
      </nav>
    </header>
  );
}