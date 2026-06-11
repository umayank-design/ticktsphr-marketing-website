import Link from "next/link";

const stats = [
  { label: "Tickets resolved by AI", value: "70%" },
  { label: "Avg. triage time", value: "18s" },
  { label: "Support visibility", value: "24/7" },
];

const features = [
  {
    title: "AI Ticket Classification",
    text: "Classify incidents, requests and service issues automatically using ticket description, priority signals and past patterns.",
  },
  {
    title: "Smart Routing",
    text: "Route tickets to the right support group, sub-group, resolver team and engineer before queues get messy.",
  },
  {
    title: "Resolution Engine",
    text: "Suggest fixes, probable root causes and reusable knowledge articles from similar past incidents.",
  },
  {
    title: "Executive Command Center",
    text: "Track SLA risk, MTTR, AI adoption, workload and support health from one leadership dashboard.",
  },
];

const solutions = ["IT Service Desk", "Customer Support", "Shared Services", "Enterprise Operations"];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-600 font-black shadow-lg shadow-violet-600/30">T</div>
            <span className="text-2xl font-bold tracking-tight">Ticktsphr</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-300 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#solutions" className="hover:text-white">Solutions</a>
            <Link href="/pricing" className="hover:text-white">Pricing</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
          <Link href="/book-demo" className="rounded-full bg-violet-600 px-6 py-3 text-sm font-bold shadow-lg shadow-violet-600/30 hover:bg-violet-500">
            Book a Demo
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,.35),transparent_35%),radial-gradient(circle_at_top_right,rgba(20,184,166,.22),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              AI-powered ticket management
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
              Predict. Route. Resolve. Before support gets buried.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Ticktsphr is an AI-native ticket management platform that classifies tickets, predicts priority, routes work to the right resolver team and recommends faster resolutions using enterprise knowledge.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/book-demo" className="rounded-full bg-violet-600 px-8 py-4 text-center font-bold shadow-xl shadow-violet-600/30 hover:bg-violet-500">
                Book a Demo
              </Link>
              <a href="#product" className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-center font-bold hover:bg-white/10">
                See Product
              </a>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-black">{item.value}</div>
                  <div className="mt-1 text-xs text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div id="product" className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-violet-950/40">
            <div className="mb-6 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">Resolved by AI</p>
                <p className="mt-2 text-3xl font-black">72%</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">SLA Risk</p>
                <p className="mt-2 text-3xl font-black text-emerald-400">Low</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">Saved Hours</p>
                <p className="mt-2 text-3xl font-black">148</p>
              </div>
            </div>
            <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950 p-6">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-bold">Live AI Resolution Feed</h3>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-300">Live</span>
              </div>
              {["Password reset issue", "Invoice access request", "App login failure"].map((ticket, i) => (
                <div key={ticket} className="mb-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 last:mb-0">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-bold">{ticket}</p>
                    <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-bold text-violet-200">{i === 0 ? "Resolved" : i === 1 ? "Handoff" : "Review"}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">AI suggested next step using verified knowledge and similar incidents.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="font-bold uppercase tracking-[0.3em] text-emerald-400">Platform</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">One operating layer for modern support teams.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06]">
              <h3 className="text-xl font-black">{feature.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="solutions" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-4xl font-black tracking-tight">Built for every support queue.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {solutions.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-slate-950 p-6">
                <h3 className="text-xl font-black">{item}</h3>
                <p className="mt-4 text-slate-400">AI triage, routing, SLA visibility and resolution intelligence for {item.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-600 to-slate-900 p-10 md:p-16">
          <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Ready to modernize support operations?</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-violet-100">Book a walkthrough and see how Ticktsphr can reduce manual triage, improve SLA control and build reusable support knowledge.</p>
          <Link href="/book-demo" className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-black text-slate-950 hover:bg-slate-100">
            Book a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
