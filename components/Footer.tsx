import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-black">Ticktsphr</h3>
            <p className="mt-4 text-slate-400">
              AI-native ticket management platform for enterprise support
              operations.
            </p>
            <p className="mt-6 text-sm font-black uppercase tracking-[0.3em] text-violet-400">
              Predict • Route • Resolve
            </p>
          </div>

          <div>
            <h4 className="font-black">Platform</h4>
            <ul className="mt-4 space-y-3 text-slate-400">
              <li>AI Classification</li>
              <li>Smart Routing</li>
              <li>Resolution Intelligence</li>
              <li>Executive Command Center</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black">Solutions</h4>
            <ul className="mt-4 space-y-3 text-slate-400">
              <li>IT Service Desk</li>
              <li>Customer Support</li>
              <li>Shared Services</li>
              <li>Enterprise Operations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black">Company</h4>
            <ul className="mt-4 space-y-3 text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/book-demo" className="hover:text-white">
                  Book Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-sm text-slate-500">
          © 2026 Ticktsphr. All rights reserved.
        </div>
      </div>
    </footer>
  );
}