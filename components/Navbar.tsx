import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/95 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 text-lg font-black text-white shadow-2xl shadow-violet-700/40">
            T
          </div>

          <div>
            <p className="text-2xl font-black tracking-tight text-white">
              Ticktsphr
            </p>
            <p className="-mt-1 text-[10px] font-black uppercase tracking-[0.35em] text-slate-400">
              Predict Route Resolve
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-bold text-slate-300 lg:flex">
          <a href="/#platform" className="hover:text-white">
            Platform
          </a>
          <a href="/#product" className="hover:text-white">
            Product
          </a>
          <a href="/#workflow" className="hover:text-white">
            Workflow
          </a>
          <a href="/#comparison" className="hover:text-white">
            Compare
          </a>
          <Link href="/pricing" className="hover:text-white">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </nav>

        <Link
          href="/book-demo"
          className="rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 shadow-2xl shadow-violet-700/30 hover:bg-violet-100"
        >
          Book a Demo
        </Link>
      </div>
    </header>
  );
}