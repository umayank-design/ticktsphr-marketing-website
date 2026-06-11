export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0B0F19]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-600 font-black shadow-[0_0_40px_rgba(124,58,237,.5)]">
              T
            </div>
            <span className="text-2xl font-black tracking-tight">Ticktsphr</span>
          </div>

          <nav className="hidden gap-8 text-sm font-semibold text-gray-400 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#solutions" className="hover:text-white">Solutions</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#security" className="hover:text-white">Security</a>
          </nav>

          <a
            href="#demo"
            className="rounded-full bg-violet-600 px-6 py-3 text-sm font-bold shadow-[0_0_45px_rgba(124,58,237,.45)] hover:bg-violet-500"
          >
            Book a Demo
          </a>
        </div>
      </header>

      <section className="relative px-6 pb-24 pt-36 md:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,.35),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(16,185,129,.18),transparent_28%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,.9)]" />
              AI-native support automation
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.07em] md:text-7xl">
              Resolve up to 70% of support tickets before an agent touches them.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
              Ticktsphr classifies, routes, resolves and learns from every ticket —
              reducing response times, protecting SLA commitments and freeing teams
              for high-value work.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#demo" className="rounded-full bg-violet-600 px-8 py-4 text-center text-sm font-black hover:bg-violet-500">
                Start Free Trial
              </a>
              <a href="#product" className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-center text-sm font-black hover:bg-white/10">
                See Product
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-5">
              {[
                ["70%", "Ticket automation"],
                ["18s", "Avg response"],
                ["24/7", "AI coverage"],
              ].map(([value, label]) => (
                <div key={label} className="border-l border-white/10 pl-4">
                  <p className="text-3xl font-black">{value}</p>
                  <p className="mt-1 text-sm text-gray-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="product" className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_0_80px_rgba(124,58,237,.25)] backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0B0F19]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <p className="hidden text-xs text-gray-500 sm:block">ticktsphr.ai/dashboard</p>
              </div>

              <div className="grid gap-4 p-5">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    ["Resolved by AI", "72%"],
                    ["SLA Risk", "Low"],
                    ["Saved Hours", "148"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                      <p className="text-sm text-gray-400">{label}</p>
                      <p className={`mt-2 text-3xl font-black ${value === "Low" ? "text-emerald-400" : ""}`}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="font-bold">Live AI Resolution Feed</h3>
                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-400">
                      Live
                    </span>
                  </div>

                  {[
                    ["Password reset issue", "Resolved using verified knowledge article.", "Resolved"],
                    ["Invoice access request", "Routed to Billing Ops with full customer history.", "Handoff"],
                    ["App login failure", "AI suggested fix. Waiting for approval.", "Review"],
                  ].map(([title, desc, tag]) => (
                    <div key={title} className="mb-3 rounded-xl border border-white/10 bg-[#0B0F19]/70 p-4">
                      <div className="flex justify-between gap-4">
                        <div>
                          <p className="font-semibold">{title}</p>
                          <p className="mt-1 text-sm text-gray-400">{desc}</p>
                        </div>
                        <span className="h-fit rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold text-violet-300">
                          {tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-10 text-center">
        <p className="mb-7 text-xs font-bold uppercase tracking-[0.3em] text-gray-500">
          Works with your support stack
        </p>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-xl font-black text-white/40 md:grid-cols-5">
          <span>Slack</span>
          <span>Zendesk</span>
          <span>Intercom</span>
          <span>Jira</span>
          <span>Freshdesk</span>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-400">Core Platform</p>
        <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-[-0.05em] md:text-6xl">
          Support automation without losing human control.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            ["⚡", "Instant Resolution", "Deflect repetitive tickets in seconds using your knowledge base, ticket history and business rules."],
            ["🤝", "Human-in-the-Loop", "Escalate complex cases with summaries, probable root cause, priority and next-best action."],
            ["🧠", "Continuous Learning", "Every resolution improves routing, strengthens the knowledge base and exposes documentation gaps."],
          ].map(([icon, title, desc]) => (
            <article key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 transition hover:-translate-y-2 hover:border-violet-500/60 hover:bg-white/[0.06]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/20 text-2xl">
                {icon}
              </div>
              <h3 className="text-2xl font-black">{title}</h3>
              <p className="mt-4 text-gray-400">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="solutions" className="border-y border-white/10 bg-white/[0.02] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-violet-400">Built For</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-6xl">
            One AI layer for every support queue.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              ["IT Service Desk", "Password resets, access requests, incidents and internal support."],
              ["Customer Support", "Instant replies, smart routing and consistent customer experience."],
              ["Shared Services", "Finance, HR, procurement and operations requests in one flow."],
              ["Enterprise Ops", "SLA intelligence, escalations and executive visibility."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-[#0B0F19]/70 p-6">
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-400">Flexible Pricing</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] md:text-5xl">
                Start lean. Scale into full autonomous support.
              </h2>
              <p className="mt-5 text-gray-400">
                Ideal for B2B SaaS, IT support, shared services and enterprise service desks.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0B0F19]/70 p-7">
              <p className="text-gray-400">Automation Target</p>
              <h3 className="mt-2 text-5xl font-black">Up to 70%</h3>
              <div className="mt-6 h-3 rounded-full bg-white/10">
                <div className="h-3 w-[70%] rounded-full bg-gradient-to-r from-emerald-400 to-violet-500" />
              </div>
              <a href="#demo" className="mt-7 inline-block rounded-full bg-violet-600 px-6 py-3 text-sm font-black">
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="security" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-4xl font-black tracking-[-0.05em] md:text-5xl">
                Enterprise-grade controls from day one.
              </h2>
              <p className="mt-5 text-gray-400">
                Built for secure workflows, auditable AI decisions, privacy-conscious operations and controlled human approval.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {["SOC2 Ready", "GDPR Aligned", "Role-Based Access", "Audit Trails"].map((badge) => (
                <span key={badge} className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-3 text-sm font-black text-emerald-400">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2.5rem] border border-violet-500/40 bg-gradient-to-br from-violet-700/50 via-white/[0.04] to-emerald-500/20 p-10 md:p-16">
          <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-[-0.05em] md:text-6xl">
            Turn your support queue into an AI resolution engine.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Launch faster responses, cleaner escalations, stronger SLAs and measurable AI adoption.
          </p>
          <a href="mailto:hello@ticktsphr.com" className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-sm font-black text-[#0B0F19]">
            Get Started
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 font-black">T</div>
              <span className="text-xl font-black">Ticktsphr</span>
            </div>
            <p className="mt-3 text-sm text-gray-500">Predict. Route. Resolve.</p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm font-semibold text-gray-400">
            <a href="#features">Features</a>
            <a href="#solutions">Solutions</a>
            <a href="#pricing">Pricing</a>
            <a href="#security">Security</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}