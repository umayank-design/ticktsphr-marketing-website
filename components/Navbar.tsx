import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 text-lg font-black text-white shadow-lg shadow-fuchsia-500/20">
            T
          </div>
          <div>
            <div className="text-xl font-bold tracking-tight text-white">
              Ticktsphr
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-500">
              Predict Route Resolve
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/pricing" className="hover:text-white">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
          <Link href="/book-demo" className="hover:text-white">
            Book Demo
          </Link>
        </nav>

        <Link
          href="/book-demo"
          className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition hover:bg-cyan-100 md:inline-flex"
        >
          Book Demo
        </Link>
      </div>
    </header>
  );
}