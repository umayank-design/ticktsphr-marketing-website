import Link from "next/link";

const metrics = [
  { value: "70%", label: "Manual triage reduction" },
  { value: "18s", label: "Average AI classification" },
  { value: "40%", label: "Target MTTR improvement" },
  { value: "24/7", label: "Operational visibility" },
];

const capabilities = [
  {
    title: "AI Ticket Classification",
    text: "Classify incidents, service requests, approvals and operational issues automatically from ticket content.",
  },
  {
    title: "Smart Assignment Engine",
    text: "Recommend support group, subgroup, resolver team and engineer using context and historical patterns.",
  },
  {
    title: "Resolution Intelligence",
    text: "Suggest probable root cause, next action, duplicate tickets and reusable resolution guidance.",
  },
  {
    title: "Executive Command Center",
    text: "Give leaders live visibility into SLA risk, backlog, MTTR, workload and AI adoption.",
  },
];

const workflow = [
  ["01", "Capture", "Tickets arrive from portal, email, service desk or imports."],
  ["02", "Understand", "AI reads the ticket and predicts category, priority and ownership."],
  ["03", "Route", "The right support path is recommended instantly."],
  ["04", "Resolve", "Agents get suggested fixes, RCA hints and duplicate signals."],
  ["05", "Learn", "Each resolution strengthens future recommendations."],
];

const comparisonRows = [
  ["AI Ticket Classification", "Manual", "Add-on / configured", "Limited", "Limited", "Native"],
  ["Resolver Assignment", "Manual", "Rules / workflow", "Workflow", "Rules", "AI-driven"],
  ["Probable RCA", "Not available", "Limited", "Not native", "Limited", "Built-in"],
  ["Resolution Recommendations", "Depends on expert", "Knowledge search", "Limited", "Knowledge search", "AI Copilot"],
  ["Duplicate Detection", "Manual", "Basic", "Basic", "Basic", "Similarity AI"],
  ["Executive Insights", "Reports", "Dashboards", "Dashboards", "Dashboards", "AI insights"],
];

const industries = [
  "Enterprise IT",
  "Healthcare",
  "Manufacturing",
  "Retail",
  "Education",
  "Shared Services",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(124,58,237,.50),transparent_34%),radial-gradient(circle_at_85%_15%,rgba(34,211,238,.25),transparent_32%),radial-gradient(circle_at_55%_80%,rgba(236,72,153,.18),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[0.92fr_1.08fr] lg:py-32">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-200">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
              AI command layer for enterprise support
            </div>

            <h1 className="text-5xl font-black leading-[0.88] tracking-[-0.07em] sm:text-6xl lg:text-7xl">
  Your support team shouldn't be fighting fires every day.
</h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
  Ticktsphr predicts, routes and resolves enterprise tickets
  before they become SLA breaches. Built for AMS teams,
  CIO offices and shared service centers running Oracle,
  SAP and Salesforce operations.
</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book-demo"
                className="rounded-full bg-violet-600 px-8 py-4 text-center font-black shadow-2xl shadow-violet-700/40 hover:bg-violet-500"
              >
                See Ticktsphr in Your Environment
              </Link>

              <a
  href="/free-consultation"
  className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-center font-black backdrop-blur-xl hover:bg-white/15"
>
  Let&apos;s Understand Your Environment
</a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
                >
                  <div className="text-3xl font-black">{item.value}</div>
                  <div className="mt-2 text-xs leading-5 text-slate-400">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COMMAND CENTER MOCKUP */}
          <div className="relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-r from-violet-600/30 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-white/10 bg-[#070b18]/90 p-5 shadow-[0_40px_140px_rgba(0,0,0,.65)] backdrop-blur-2xl">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-bold text-slate-500">
                  ticktsphr.ai/command-center
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                  <p className="text-sm text-slate-400">SLA Risk</p>
                  <p className="mt-2 text-4xl font-black text-emerald-400">
                    Low
                  </p>
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

              <div className="mt-5 rounded-3xl border border-white/10 bg-black/20 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-black">Live Ticket Intelligence</h3>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-300">
                    LIVE
                  </span>
                </div>

                {[
                  ["ERP access failure", "P2", "Oracle Support", "Routed"],
                  ["Invoice approval stuck", "P3", "Finance Ops", "Suggested"],
                  ["App login outage", "P1", "Infra Team", "Escalated"],
                  ["Password reset issue", "P4", "Service Desk", "Resolved"],
                ].map(([title, priority, team, status]) => (
                  <div
                    key={title}
                    className="mb-3 grid grid-cols-[1fr_auto] gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 last:mb-0"
                  >
                    <div>
                      <p className="font-black">{title}</p>
                      <p className="mt-1 text-sm text-slate-400">
                        {priority} · {team}
                      </p>
                    </div>

                    <span className="self-start rounded-full bg-violet-500/20 px-3 py-1 text-xs font-black text-violet-200">
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}

<section className="border-b border-white/10 bg-white/[0.03]">
  <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-12 px-6 py-8 text-center">

    <div>
      <div className="text-3xl font-black text-cyan-300">
        70%
      </div>
      <div className="text-sm text-slate-400">
        Less Manual Triage
      </div>
    </div>

    <div>
      <div className="text-3xl font-black text-cyan-300">
        40%
      </div>
      <div className="text-sm text-slate-400">
        Faster Resolution
      </div>
    </div>

    <div>
      <div className="text-3xl font-black text-cyan-300">
        24/7
      </div>
      <div className="text-sm text-slate-400">
        Operational Visibility
      </div>
    </div>

    <div>
      <div className="text-3xl font-black text-cyan-300">
        Enterprise
      </div>
      <div className="text-sm text-slate-400">
        Ready
      </div>
    </div>

  </div>
</section>

      {/* PLATFORM */}
      <section id="platform" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
            Platform
          </p>

          <h2 className="mt-5 text-5xl font-black tracking-[-0.04em] sm:text-6xl">
            A support operations brain, not just a ticket tracker.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Ticktsphr turns every ticket into a structured intelligence signal
            for agents, managers and executives.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {capabilities.map((item, index) => (
            <div
              key={item.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 transition hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-xl font-black shadow-xl shadow-violet-700/25">
                {index + 1}
              </div>

              <h3 className="text-3xl font-black">{item.title}</h3>
              <p className="mt-4 text-lg leading-8 text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section id="product" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="text-center">
            <p className="font-black uppercase tracking-[0.35em] text-violet-300">
              Real Product
            </p>

            <h2 className="mt-5 text-5xl font-black tracking-[-0.04em] sm:text-6xl">
              Built for real enterprise support operations.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Not concept screens. Not generic mockups. Actual Ticktsphr
              capabilities used to classify, route and resolve support work.
            </p>
          </div>

          <div className="mt-20 space-y-28">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-black text-cyan-300">
                  Executive Dashboard
                </span>

                <h3 className="mt-6 text-4xl font-black">
                  Operational visibility for support leadership.
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-400">
                  Track ticket volume, workload, AI adoption, SLA exposure
                  and service health from a single executive command center.
                </p>
              </div>

              <img
                src="/screenshots/executive-dashboard.png"
                alt="Executive Dashboard"
                className="rounded-[2rem] border border-white/10 shadow-2xl"
              />
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-2">
              <img
                src="/screenshots/tickets-lists.png"
                alt="Tickets"
                className="order-2 rounded-[2rem] border border-white/10 shadow-2xl lg:order-1"
              />

              <div className="order-1 lg:order-2">
                <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm font-black text-violet-300">
                  Ticket Management
                </span>

                <h3 className="mt-6 text-4xl font-black">
                  Complete lifecycle visibility.
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-400">
                  Manage incidents, requests, approvals and escalations
                  with intelligent ownership and operational control.
                </p>
              </div>
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-black text-emerald-300">
                  AI Copilot
                </span>

                <h3 className="mt-6 text-4xl font-black">
                  Understand tickets before humans do.
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-400">
                  AI predicts category, priority, support group,
                  resolver team and probable root cause automatically.
                </p>
              </div>

              <img
                src="/screenshots/ai-copilot.png"
                alt="AI Copilot"
                className="rounded-[2rem] border border-white/10 shadow-2xl"
              />
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-2">
              <img
                src="/screenshots/resolution-engine.png"
                alt="Resolution Engine"
                className="order-2 rounded-[2rem] border border-white/10 shadow-2xl lg:order-1"
              />

              <div className="order-1 lg:order-2">
                <span className="rounded-full bg-orange-500/10 px-4 py-2 text-sm font-black text-orange-300">
                  Resolution Intelligence
                </span>

                <h3 className="mt-6 text-4xl font-black">
                  Learn from every ticket.
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-400">
                  Recommend fixes, identify duplicates and reuse
                  organizational knowledge automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST LAYER */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="text-center">
            <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
              Built For
            </p>

            <h2 className="mt-5 text-5xl font-black tracking-[-0.04em] sm:text-6xl">
              Modern Enterprise Operations
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Ticktsphr is designed for organizations that manage high volumes
              of incidents, requests, approvals and operational workflows.
            </p>
          </div>

          <div className="mt-16 mb-16 grid gap-6 md:grid-cols-4">
            {[
              "Enterprise IT",
              "Oracle Ecosystems",
              "Shared Services",
              "AI-Powered Operations",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4 text-center"
              >
                <span className="font-bold text-cyan-300">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Healthcare",
                text: "Hospitals, clinics, healthcare operations and shared medical services.",
              },
              {
                title: "Manufacturing",
                text: "Production support, supply chain operations and enterprise ERP environments.",
              },
              {
                title: "Retail",
                text: "Store operations, customer support and omnichannel service teams.",
              },
              {
                title: "Education",
                text: "Universities, schools and large-scale academic support functions.",
              },
              {
                title: "Shared Services",
                text: "HR, finance, procurement and internal support organizations.",
              },
              {
                title: "Enterprise IT",
                text: "Service desks, infrastructure teams, ERP support and business applications.",
              },
            ].map((industry) => (
              <div
                key={industry.title}
                className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_20px_80px_rgba(34,211,238,0.15)]"
              >
                <div className="mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />

                <h3 className="text-2xl font-black">{industry.title}</h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {industry.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="mx-auto max-w-7xl px-6 py-28">
        <div className="text-center">
          <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
            Workflow
          </p>

          <h2 className="mt-5 text-5xl font-black tracking-[-0.04em] sm:text-6xl">
            From ticket creation to resolution intelligence.
          </h2>
        </div>

        <div className="mt-20 grid gap-6">
          {workflow.map(([step, title, text]) => (
            <div
              key={step}
              className="grid items-center gap-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:grid-cols-[120px_220px_1fr]"
            >
              <div className="text-5xl font-black text-violet-400">
                {step}
              </div>

              <div className="text-2xl font-black">{title}</div>

              <div className="text-slate-400">{text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section id="comparison" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="text-center">
            <p className="font-black uppercase tracking-[0.35em] text-violet-300">
              Comparison
            </p>

            <h2 className="mt-5 text-5xl font-black tracking-[-0.04em] sm:text-6xl">
              Traditional ticketing manages work. Ticktsphr improves it.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Platforms like ServiceNow, Jira and Zendesk are powerful systems
              of record. Ticktsphr is built as an AI-first support intelligence
              layer focused on classification, routing, resolution and learning.
            </p>
          </div>

          <div className="mt-16 overflow-x-auto rounded-[2rem] border border-white/10 bg-[#070b18]">
            <table className="w-full min-w-[980px] text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.04] text-slate-300">
                  <th className="p-5 text-left">Capability</th>
                  <th className="p-5 text-center">Manual Support</th>
                  <th className="p-5 text-center">ServiceNow</th>
                  <th className="p-5 text-center">Jira</th>
                  <th className="p-5 text-center">Zendesk</th>
                  <th className="p-5 text-center text-cyan-300">
                    Ticktsphr AI
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row[0]}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    <td className="p-5 font-bold text-white">{row[0]}</td>
                    <td className="p-5 text-center text-slate-400">{row[1]}</td>
                    <td className="p-5 text-center text-slate-400">{row[2]}</td>
                    <td className="p-5 text-center text-slate-400">{row[3]}</td>
                    <td className="p-5 text-center text-slate-400">{row[4]}</td>
                    <td className="bg-cyan-400/5 p-5 text-center font-black text-emerald-300">
                      {row[5]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-6 text-slate-500">
            This comparison is intended to explain positioning, not replace
            platform-by-platform evaluation. Existing systems can remain your
            ticketing backbone while Ticktsphr adds AI-powered intelligence on top.
          </p>
        </div>
      </section>

      {/* WHY TEAMS CHOOSE TICKTSPHR */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="text-center">
            <p className="font-black uppercase tracking-[0.35em] text-violet-300">
              Why Teams Choose Ticktsphr
            </p>

            <h2 className="mt-5 text-5xl font-black tracking-[-0.04em] sm:text-6xl">
              Built for support teams that need speed, accuracy and visibility.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Ticktsphr helps teams reduce repetitive work, route tickets faster,
              reuse knowledge and give leaders clearer operational control.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "AI-First by Design",
                text: "Classification, routing and resolution intelligence are built into the platform from day one.",
              },
              {
                title: "Faster Resolution",
                text: "Agents get suggested ownership, RCA clues and resolution guidance without wasting time.",
              },
              {
                title: "Knowledge Reuse",
                text: "Every resolved ticket becomes fuel for better future recommendations.",
              },
              {
                title: "Executive Visibility",
                text: "Leaders get a clearer view of SLA risk, backlog, workload and support health.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-400/30 hover:shadow-[0_20px_80px_rgba(139,92,246,0.18)]"
              >
                <div className="mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />

                <h3 className="text-2xl font-black">{item.title}</h3>

                <p className="mt-4 leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500 p-1">
          <div className="rounded-[2.4rem] bg-[#050713] p-10 md:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
                  Business Impact
                </p>

                <h2 className="mt-5 text-5xl font-black tracking-[-0.04em]">
                  Reduce manual work. Improve support outcomes.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-400">
                  Ticktsphr helps teams cut repetitive triage, route faster,
                  reuse knowledge and give leaders stronger operating visibility.
                </p>

                <Link
                  href="/book-demo"
                  className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-black text-slate-950"
                >
                  Book a Demo
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-white/[0.05] p-7"
                  >
                    <div className="text-5xl font-black text-white">
                      {item.value}
                    </div>

                    <p className="mt-3 text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}