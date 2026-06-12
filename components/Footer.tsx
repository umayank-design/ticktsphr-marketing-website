import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">
              Ticktsphr AI
            </h3>
            <p className="text-sm text-slate-400">
              AI-native support intelligence platform built to predict, route,
              resolve, and continuously learn from every ticket.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>AI Classification</li>
              <li>Smart Routing</li>
              <li>Resolution Intelligence</li>
              <li>Executive Command Center</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Solutions</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>IT Service Desk</li>
              <li>Customer Support</li>
              <li>Shared Services</li>
              <li>Enterprise Operations</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/book-demo">Book Demo</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Ticktsphr AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}