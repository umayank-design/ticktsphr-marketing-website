import Link from "next/link";

const metrics = [
  ["72%", "AI assisted resolution"],
  ["18s", "Average triage time"],
  ["41%", "MTTR reduction target"],
  ["24/7", "Command visibility"],
];

const capabilities = [
  ["AI Classification", "Reads every ticket and predicts category, urgency, impact and ownership."],
  ["Smart Routing", "Routes work to support groups, subgroups, resolver teams and engineers."],
  ["Resolution Engine", "Suggests fixes, RCA hints and matching knowledge from similar incidents."],
  ["Executive Control", "Tracks SLA risk, MTTR, backlog, workload and AI adoption in real time."],
];

const tickets = [
  ["ERP access failure", "P2", "Oracle Support", "Routed"],
  ["Invoice approval stuck", "P3", "Finance Ops", "Suggested Fix"],
  ["App login outage", "P1", "Infra Team", "Escalated"],
  ["Password reset issue", "P4", "Service Desk", "Resolved"],
];

const industries = ["Enterprise IT", "Healthcare", "Manufacturing", "Retail", "Education", "Shared Services"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 font-black shadow-2xl shadow-violet-700/40">
              T
            </div>
            <div>
              <div className="text-2xl font-black">Ticktsphr</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-slate-500">
                Predict Route Resolve
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-bold text-slate-300 lg:flex">
            <a href="#platform" className="hover:text-white">Platform</a>
            <a href="#workflow" className="hover:text-white">Workflow</a>
            <a href="#solutions" className="hover:text-white">Solutions</a>
            <Link href="/pricing" className="hover:text-white">Pricing</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>

          <Link href="/book-demo" className="rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 shadow-2xl shadow-violet-700/30 hover:bg-violet-100">
            Book a Demo
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,.45),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(34,211,238,.28),transparent_28%),radial-gradient(circle_at_55%_75%,rgba(236,72,153,.18),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:py-32">
          <div>
            <div className="mb-8 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-200">
              AI command layer for enterprise support
            </div>

            <h1 className="text-6xl font-black leading-[0.88] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
              Turn support chaos into AI-led execution.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">
              Ticktsphr classifies tickets, predicts priority, routes work, recommends resolutions and gives leadership a live command center for SLA, MTTR and support health.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/book-demo" className="rounded-full bg-violet-600 px-8 py-4 text-center font-black shadow-2xl shadow-violet-700/40 hover:bg-violet-500">
                Book a Demo
              </Link>
              <a href="#platform" className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-center font-black backdrop-blur-xl hover:bg-white/15">
                View Platform
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {metrics.map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
                  <div className="text-3xl font-black">{value}</div>
                  <div className="mt-2 text-xs leading-5 text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-r from-violet-600/30 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-white/10 bg-[#070b18]/90 p-5 shadow-[0_40px_140px_rgba(0,0,0,.65)] backdrop-blur-2xl">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-bold text-slate-500">ticktsphr.ai/command-center</span>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                  <p className="text-sm text-slate-400">SLA Risk</p>
                  <p className="mt-2 text-4xl font-black text-emerald-400">Low</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                  <p className="text-sm text-slate-400">AI Confidence</p>
                  <p className="mt-2 text-4xl font-black">91%</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                  <p className="text-sm text-slate-400">Open Queue</p>
                  <p className="mt-2 text-4xl font-black">148</p>
                </div>
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
                <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-black">Live Ticket Intelligence</h3>
                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-300">LIVE</span>
                  </div>

                  <div className="space-y-3">
                    {tickets.map(([name, priority, team, status]) => (
                      <div key={name} className="grid grid-cols-[1fr_auto] gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                        <div>
                          <p className="font-black">{name}</p>
                          <p className="mt-1 text-sm text-slate-400">{priority} · {team}</p>
                        </div>
                        <span className="self-start rounded-full bg-violet-500/20 px-3 py-1 text-xs font-black text-violet-200">
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <h3 className="font-black">AI Decision Flow</h3>

                  <div className="mt-6 space-y-5">
                    {["Classify", "Prioritize", "Route", "Recommend", "Learn"].map((item, index) => (
                      <div key={item} className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-black">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="font-black">{item}</div>
                          <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                            <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" style={{ width: `${92 - index * 9}%` }} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="border-y border-white/10 bg-white/[0.025] py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-6">
          {industries.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-slate-300">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="platform" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-black uppercase tracking-[0.35em] text-cyan-300">Platform</p>
          <h2 className="mt-5 text-5xl font-black tracking-[-0.04em] sm:text-6xl">
            Everything support teams need. One AI brain.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            Replace manual triage and scattered knowledge with a connected operating layer for incidents, requests, escalations and executive reporting.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {capabilities.map(([title, text], index) => (
            <div key={title} className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 transition hover:-translate-y-1 hover:bg-white/[0.06]">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-xl font-black shadow-xl shadow-violet-700/25">
                {index + 1}
              </div>
              <h3 className="text-3xl font-black">{title}</h3>
              <p className="mt-4 text-lg leading-8 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>
<section className="mx-auto max-w-7xl px-6 py-28">
  <div className="mb-16 text-center">
    <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
      Product Showcase
    </p>

    <h2 className="mt-4 text-5xl font-black tracking-[-0.04em]">
      Built for real enterprise support operations
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
      Ticktsphr combines AI classification, intelligent routing,
      resolution intelligence and executive visibility into a single
      operating platform.
    </p>
  </div>

  <div className="space-y-32">

    {/* Executive Dashboard */}
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div>
        <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-bold text-cyan-300">
          Executive Dashboard
        </span>

        <h3 className="mt-6 text-4xl font-black">
          Real-time command center for support leadership
        </h3>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          Monitor ticket volume, SLA exposure, open incidents,
          support health and AI insights from one executive view.
        </p>

        <ul className="mt-8 space-y-3 text-slate-300">
          <li>✓ Executive summary</li>
          <li>✓ SLA risk monitoring</li>
          <li>✓ AI generated insights</li>
          <li>✓ Operational visibility</li>
        </ul>
      </div>

      <img
        src="/screenshots/executive-dashboard.png"
        alt="Executive Dashboard"
        className="rounded-3xl border border-white/10 shadow-2xl"
      />
    </div>

    {/* Tickets */}
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <img
        src="/screenshots/tickets-lists.png"
        alt="Tickets"
        className="order-2 rounded-3xl border border-white/10 shadow-2xl lg:order-1"
      />

      <div className="order-1 lg:order-2">
        <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm font-bold text-violet-300">
          Ticket Management
        </span>

        <h3 className="mt-6 text-4xl font-black">
          Complete ticket lifecycle visibility
        </h3>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          Track incidents, service requests, approvals and support
          activities with intelligent routing and ownership controls.
        </p>

        <ul className="mt-8 space-y-3 text-slate-300">
          <li>✓ Unified ticket view</li>
          <li>✓ Priority tracking</li>
          <li>✓ Assignment visibility</li>
          <li>✓ SLA monitoring</li>
        </ul>
      </div>
    </div>

    {/* AI Copilot */}
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div>
        <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-300">
          AI Copilot
        </span>

        <h3 className="mt-6 text-4xl font-black">
          AI understands every ticket before humans do
        </h3>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          Automatically predicts category, priority, assignment group,
          resolver team and probable root cause from ticket content.
        </p>

        <ul className="mt-8 space-y-3 text-slate-300">
          <li>✓ AI categorization</li>
          <li>✓ Confidence scoring</li>
          <li>✓ Resolver recommendations</li>
          <li>✓ RCA prediction</li>
        </ul>
      </div>

      <img
        src="/screenshots/ai-copilot.png"
        alt="AI Copilot"
        className="rounded-3xl border border-white/10 shadow-2xl"
      />
    </div>

    {/* Resolution Engine */}
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <img
        src="/screenshots/resolution-engine.png"
        alt="Resolution Engine"
        className="order-2 rounded-3xl border border-white/10 shadow-2xl lg:order-1"
      />

      <div className="order-1 lg:order-2">
        <span className="rounded-full bg-orange-500/10 px-4 py-2 text-sm font-bold text-orange-300">
          Resolution Engine
        </span>

        <h3 className="mt-6 text-4xl font-black">
          Accelerate support with AI recommendations
        </h3>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          AI recommends resolutions, identifies duplicate incidents,
          analyzes similar tickets and promotes knowledge reuse.
        </p>

        <ul className="mt-8 space-y-3 text-slate-300">
          <li>✓ Resolution suggestions</li>
          <li>✓ Duplicate detection</li>
          <li>✓ Similar incidents</li>
          <li>✓ Knowledge capture</li>
        </ul>
      </div>
    </div>

    {/* Assignment Engine */}
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div>
        <span className="rounded-full bg-pink-500/10 px-4 py-2 text-sm font-bold text-pink-300">
          Smart Assignment Engine
        </span>

        <h3 className="mt-6 text-4xl font-black">
          Route tickets to the right engineer instantly
        </h3>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          Support groups, subgroups, resolver teams and engineers are
          automatically suggested based on ticket context and history.
        </p>

        <ul className="mt-8 space-y-3 text-slate-300">
          <li>✓ Auto assignment</li>
          <li>✓ Resolver team mapping</li>
          <li>✓ Engineer recommendation</li>
          <li>✓ Faster response times</li>
        </ul>
      </div>

      <img
        src="/screenshots/assignment-engine.png"
        alt="Assignment Engine"
        className="rounded-3xl border border-white/10 shadow-2xl"
      />
    </div>

  </div>
</section>
      <section id="workflow" className="relative border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="font-black uppercase tracking-[0.35em] text-violet-300">Workflow</p>
              <h2 className="mt-5 text-5xl font-black tracking-[-0.04em]">
                From ticket noise to clean execution.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-400">
                Every ticket becomes structured, assigned, measurable and reusable.
              </p>
            </div>

            <div className="grid gap-4">
              {["Ticket captured", "AI classification", "Resolver routing", "Suggested resolution", "Knowledge created"].map((item, index) => (
                <div key={item} className="flex gap-5 rounded-3xl border border-white/10 bg-[#070b18] p-6">
                  <div className="text-4xl font-black text-violet-400">0{index + 1}</div>
                  <div>
                    <h3 className="text-xl font-black">{item}</h3>
                    <p className="mt-2 text-slate-400">
                      Ticktsphr converts support activity into usable intelligence for agents, managers and leadership.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-28">
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500 p-1">
          <div className="rounded-[2.4rem] bg-[#050713] p-10 md:p-16">
            <h2 className="max-w-4xl text-5xl font-black tracking-[-0.04em]">
              Built for CIOs, support leaders and teams who hate queue chaos.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Ticktsphr fits IT service desks, customer support, shared services and enterprise operations teams that need faster resolution and stronger accountability.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {["IT Service Desk", "Customer Support", "Shared Services", "Enterprise Ops"].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="text-xl font-black">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    AI triage, routing, SLA control and resolution intelligence.
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link href="/book-demo" className="rounded-full bg-white px-8 py-4 text-center font-black text-slate-950">
                Book a Demo
              </Link>
              <Link href="/pricing" className="rounded-full border border-white/15 px-8 py-4 text-center font-black text-white hover:bg-white/10">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}