import Link from "next/link";

const principles = [
  {
    title: "AI-first support",
    text: "Support operations should not depend only on manual reading, tagging and queue movement.",
  },
  {
    title: "Enterprise depth",
    text: "Ticktsphr is shaped by real implementation, support and transformation experience across complex organizations.",
  },
  {
    title: "Operational intelligence",
    text: "Leadership needs more than reports. They need signals, risks, patterns and recommended action.",
  },
  {
    title: "Knowledge reuse",
    text: "Every resolved issue should make the next similar issue easier, faster and cleaner to resolve.",
  },
];

const roadmap = [
  ["2026", "AI Ticket Classification"],
  ["2026", "Smart Routing Engine"],
  ["2026", "Resolution Intelligence"],
  ["2026", "Executive Command Center"],
  ["2027", "Predictive Support Operations"],
  ["2027", "Autonomous Resolution Workflows"],
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,.42),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(34,211,238,.22),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-36">
          <div className="max-w-4xl">
            <p className="mb-8 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-200">
              About Ticktsphr
            </p>

            <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
              We believe support teams deserve AI teammates, not more queues.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              Ticktsphr was built to eliminate manual triage, accelerate
              resolutions and transform support operations into a strategic,
              intelligence-driven function.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book-demo"
                className="rounded-full bg-violet-600 px-8 py-4 text-center font-black shadow-2xl shadow-violet-700/40 hover:bg-violet-500"
              >
                Book a Demo
              </Link>

              <Link
                href="/pricing"
                className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-center font-black hover:bg-white/15"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="font-black uppercase tracking-[0.35em] text-violet-400">
            The Problem
          </p>
          <h2 className="mt-5 text-5xl font-black tracking-[-0.04em]">
            Ticketing became storage. Support needs intelligence.
          </h2>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 text-lg leading-9 text-slate-300">
          <p>
            Support teams spend thousands of hours manually reading,
            categorizing, assigning and analyzing tickets. Critical knowledge
            remains trapped inside closed incidents. Resolution expertise
            depends on a few experienced people. Leaders get dashboards, but
            not always the operational intelligence needed to improve outcomes.
          </p>

          <p className="mt-6">
            Ticktsphr was created to change that. The platform turns every
            ticket into a source of intelligence: what it is, who should own it,
            how urgent it is, what likely caused it and how similar issues were
            resolved earlier.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
              Why We Exist
            </p>

            <h2 className="mt-5 text-5xl font-black tracking-[-0.04em]">
              Not another ticketing system. An AI operating layer.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Ticktsphr sits above traditional support workflows to predict,
              route, resolve and learn from support activity.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-[#070b18] p-7"
              >
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-xl font-black">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500 p-1">
          <div className="rounded-[2.4rem] bg-[#050713] p-10 md:p-16">
            <p className="font-black uppercase tracking-[0.35em] text-violet-300">
              Founder Story
            </p>

            <h2 className="mt-5 max-w-5xl text-5xl font-black leading-tight tracking-[-0.04em]">
              Built at the intersection of enterprise operations and growth.
            </h2>

            <div className="mt-8 grid gap-8 text-lg leading-9 text-slate-300 lg:grid-cols-2">
              <div>
                <p>
                  Ticktsphr was founded by a team that has spent more than two
                  decades solving complex business problems from two different
                  directions.
                </p>

                <p className="mt-6">
                  One side of the team has led large-scale enterprise
                  transformation programs across global organizations, covering
                  ERP, supply chain, customer experience, service operations and
                  mission-critical technology environments.
                </p>

                <p className="mt-6">
                  The other side has built and scaled high-growth businesses,
                  led national marketing and operations functions, launched new
                  products, shaped digital transformation initiatives and helped
                  organizations improve acquisition, engagement and growth.
                </p>
              </div>

              <div>
                <p>
                  Despite operating in different domains, both perspectives
                  pointed to the same problem: support operations were still
                  too dependent on manual triage, fragmented knowledge,
                  inconsistent routing and reactive reporting.
                </p>

                <p className="mt-6">
                  The opportunity was clear. What if support platforms could do
                  more than store tickets? What if they could understand work,
                  predict ownership, recommend resolutions and continuously
                  learn from every interaction?
                </p>

                <p className="mt-6 font-bold text-white">
                  That idea became Ticktsphr.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-4">
              {[
                "20+ Years Enterprise Experience",
                "Global Transformation Programs",
                "Growth & Operations Leadership",
                "AI-Powered Support Vision",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-sm font-bold text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-[#070b18] p-8">
            <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
              Mission
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em]">
              Transform support from reactive ticket management into proactive
              execution.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              We help teams reduce manual work, improve routing, recommend
              better resolutions and convert support history into reusable
              intelligence.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#070b18] p-8">
            <p className="font-black uppercase tracking-[0.35em] text-violet-300">
              Vision
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em]">
              A future where every support team has an AI copilot that learns
              with them.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Ticktsphr aims to help organizations understand work, route it
              intelligently, resolve it faster and continuously improve service
              outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 max-w-3xl">
          <p className="font-black uppercase tracking-[0.35em] text-emerald-300">
            Roadmap
          </p>

          <h2 className="mt-5 text-5xl font-black tracking-[-0.04em]">
            Where Ticktsphr is heading.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            We are building toward an autonomous support operations layer where
            AI helps teams act earlier, resolve faster and improve continuously.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {roadmap.map(([year, title]) => (
            <div
              key={`${year}-${title}`}
              className="flex items-center gap-6 rounded-3xl border border-white/10 bg-white/[0.035] p-6"
            >
              <div className="rounded-2xl bg-violet-600/20 px-4 py-3 text-xl font-black text-violet-300">
                {year}
              </div>
              <div className="text-xl font-black">{title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-violet-600 to-slate-900 p-10 md:p-16">
          <h2 className="max-w-4xl text-5xl font-black tracking-[-0.04em]">
            See how Ticktsphr can change support operations.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-violet-100">
            Book a walkthrough and see AI classification, smart routing,
            resolution recommendations and executive visibility in action.
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