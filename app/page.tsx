import build from "next/dist/build";
import Link from "next/link";

const stats = [
  { value: "70%", label: "Potential tickets resolved by AI" },
  { value: "18s", label: "Average AI triage time" },
  { value: "24/7", label: "Support intelligence visibility" },
  { value: "148+", label: "Hours saved in demo model" },
];

const platformCards = [
  {
    title: "AI Ticket Classification",
    text: "Understand incoming incidents, service requests and operational issues instantly using category, priority and historical pattern signals.",
    items: ["Category prediction", "Priority scoring", "Duplicate detection"],
  },
  {
    title: "Smart Routing Engine",
    text: "Send work to the right support group, subgroup, resolver team and engineer before queues turn noisy.",
    items: ["Support group mapping", "Resolver assignment", "SLA-aware routing"],
  },
  {
    title: "Resolution Intelligence",
    text: "Recommend probable root cause, next action and reusable knowledge based on similar incidents and past fixes.",
    items: ["Suggested resolution", "RCA hints", "Knowledge reuse"],
  },
  {
    title: "Executive Command Center",
    text: "Give leadership a crisp view of SLA health, MTTR, backlog risk, workload and AI adoption.",
    items: ["SLA dashboards", "MTTR analytics", "Forecasting"],
  },
];

const industries = [
  "Enterprise IT",
  "Healthcare",
  "Manufacturing",
  "Retail",
  "Education",
  "Shared Services",
];

const workflow = [
  {
    step: "01",
    title: "Capture",
    text: "Tickets arrive from service desk, email, portal or uploaded dumps.",
  },
  {
    step: "02",
    title: "Understand",
    text: "AI reads the issue, predicts category, priority and support ownership.",
  },
  {
    step: "03",
    title: "Route",
    text: "Work is assigned to the correct resolver path with SLA context.",
  },
  {
    step: "04",
    title: "Resolve",
    text: "Teams get recommended actions, RCA hints and reusable knowledge.",
  },
];

const solutionCards = [
  {
    title: "IT Service Desk",
    text: "Password resets, access issues, incidents, outages and internal support queues.",
  },
  {
    title: "Customer Support",
    text: "Faster replies, better routing and cleaner customer handoffs.",
  },
  {
    title: "Shared Services",
    text: "Finance, HR, procurement and operations requests in one AI-assisted flow.",
  },
  {
    title: "Enterprise Operations",
    text: "SLA risk, escalations, analytics and leadership visibility across teams.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050713] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050713]/85 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 text-lg font-black shadow-xl shadow-violet-900/40">
              T
            </div>
            <div>
              <p className="text-2xl font-black tracking-tight">Ticktsphr</p>
              <p className="-mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Predict · Route · Resolve
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-bold text-slate-300 lg:flex">
            <a href="#platform" className="hover:text-white">Platform</a>
            <a href="#solutions" className="hover:text-white">Solutions</a>
            <a href="#workflow" className="hover:text-white">How it works</a>
            <Link href="/pricing" className="hover:text-white">Pricing</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>

          <Link
            href="/book-demo"
            className="rounded-full bg-violet-600 px-6 py-3 text-sm font-black shadow-xl shadow-violet-900/40 transition hover:bg-violet-500"
          >
            Book a Demo
          </Link>
        </div>
      </header>

      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(124,58,237,.45),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(20,184,166,.22),transparent_30%),linear-gradient(180deg,rgba(255,255,255,.04),transparent_40%)]" />
        <div className="absolute left-1/2 top-0 h-[1px] w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.02fr_.98fr] lg:py-32">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-slate-200 shadow-2xl shadow-violet-950/30">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/40" />
              AI-native support automation for enterprise teams
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Stop guessing where tickets should go.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Ticktsphr classifies, prioritizes, routes and recommends resolutions for every support ticket — so service teams move faster, protect SLA commitments and build reusable knowledge from real work.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book-demo"
                className="rounded-full bg-violet-600 px-8 py-4 text-center text-base font-black shadow-2xl shadow-violet-900/50 transition hover:bg-violet-500"
              >
                Book a Demo
              </Link>
              <a
                href="#platform"
                className="rounded-full border border-white/15 bg-white/[0.06] px-8 py-4 text-center text-base font-black text-white transition hover:bg-white/[0.1]"
              >
                Explore Platform
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-xl shadow-black/20"
                >
                  <p className="text-3xl font-black tracking-tight">{item.value}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
                    <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-violet-600/20 to-emerald-500/10 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-white/10 bg-slate-950/90 p-6 shadow-[0_30px_120px_rgba(0,0,0,.45)]">
              <div className="mb-6 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm text-slate-400">Resolved by AI</p>
                  <p className="mt-2 text-4xl font-black">72%</p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm text-slate-400">SLA Risk</p>
                  <p className="mt-2 text-4xl font-black text-emerald-400">
                    Low
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm text-slate-400">Hours Saved</p>
                  <p className="mt-2 text-4xl font-black">148</p>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xl font-black">
                    Live AI Resolution Feed
                  </h3>

                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-black text-emerald-300">
                    LIVE
                  </span>
                </div>

                {[
                  "Password reset issue",
                  "Invoice access request",
                  "Oracle integration failure",
                  "Application login outage",
                ].map((item, idx) => (
                  <div
                    key={item}
                    className="mb-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 last:mb-0"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-bold">{item}</p>

                      <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-bold text-violet-200">
                        {idx === 0
                          ? "Resolved"
                          : idx === 1
                          ? "Assigned"
                          : idx === 2
                          ? "Review"
                          : "Investigating"}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-slate-400">
                      AI recommended next action using historical incidents and
                      verified knowledge.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-bold text-slate-300"
            >
              {industry}
            </div>
          ))}
        </div>
      </section>

      <section id="platform" className="mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-3xl">
          <p className="font-black uppercase tracking-[0.3em] text-emerald-400">
            Platform
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-tight">
            One AI layer for every support queue.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Replace manual triage, spreadsheet-based assignments and tribal
            knowledge with an intelligent support operating layer.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {platformCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
            >
              <h3 className="text-2xl font-black">{card.title}</h3>

              <p className="mt-4 leading-7 text-slate-400">{card.text}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {card.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-2 text-xs font-bold text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="workflow"
        className="border-y border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28">
          <h2 className="text-center text-5xl font-black">
            How Ticktsphr works
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="rounded-[2rem] border border-white/10 bg-slate-950 p-8"
              >
                <div className="text-5xl font-black text-violet-500">
                  {item.step}
                </div>

                <h3 className="mt-6 text-2xl font-black">{item.title}</h3>

                <p className="mt-4 leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-28">
        <h2 className="text-5xl font-black">Built for every support team.</h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {solutionCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7"
            >
              <h3 className="text-2xl font-black">{card.title}</h3>

              <p className="mt-4 leading-7 text-slate-400">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-violet-600 to-slate-900 p-12 md:p-16">
          <h2 className="max-w-4xl text-5xl font-black leading-tight">
            Ready to transform ticket operations with AI?
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-violet-100">
            See AI classification, routing, resolution intelligence and
            executive analytics in a live Ticktsphr walkthrough.
          </p>

          <Link
            href="/book-demo"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-black text-slate-950"
          >
            Book a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}