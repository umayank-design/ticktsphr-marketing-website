import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 text-lg font-black shadow-2xl shadow-violet-700/40">
            T
          </div>

          <div>
            <p className="text-2xl font-black tracking-tight text-white">
              Ticktsphr
            </p>

            <p className="-mt-1 text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300">
              Predict Route Resolve
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-bold text-slate-300 lg:flex">
          <a href="/#platform" className="transition hover:text-white">
            Platform
          </a>

          <a href="/#product" className="transition hover:text-white">
            Product
          </a>

          <a href="/#workflow" className="transition hover:text-white">
            Workflow
          </a>

          <a href="/#comparison" className="transition hover:text-white">
            Compare
          </a>

          <Link href="/pricing" className="transition hover:text-white">
            Pricing
          </Link>
          <Link href="/roi-calculator" className="transition hover:text-white">
  ROI Calculator
</Link>

          <Link href="/case-studies" className="transition hover:text-white">
            Case Studies
          </Link>

          <Link href="/about" className="transition hover:text-white">
            About
          </Link>

          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
        </nav>

        <Link
          href="/book-demo"
          className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-sm font-black text-white shadow-2xl shadow-violet-700/30 transition hover:scale-105"
        >
          Book Demo
        </Link>
      </div>
    </header>
  );
}