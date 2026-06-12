export default function BookDemoPage() {
  const benefits = [
    "AI Ticket Classification",
    "Smart Assignment Engine",
    "Resolution Intelligence",
    "Executive Command Center",
    "Knowledge Reuse Analytics",
    "SLA & Operational Visibility",
  ];

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      {/* HERO */}

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,.40),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,.20),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-8 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-black text-cyan-300">
              30 Minute Product Walkthrough
            </div>

            <h1 className="text-5xl font-black tracking-[-0.05em] sm:text-7xl">
              Let's understand your support environment.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              Discover how AI-powered ticket classification, smart routing,
              resolution intelligence and executive visibility can transform
              support operations.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL SEE */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="font-black uppercase tracking-[0.35em] text-violet-300">
            What You'll See
          </p>

          <h2 className="mt-5 text-5xl font-black tracking-[-0.04em]">
            A complete AI-powered support platform.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-400/30"
            >
              <div className="mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />

              <h3 className="text-2xl font-black">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
              Industry Use Cases
            </p>

            <h2 className="mt-5 text-5xl font-black">
              Designed for enterprise operations.
            </h2>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {[
              "Healthcare",
              "Oracle ERP",
              "Enterprise IT",
              "Manufacturing",
              "Education",
              "Shared Services",
            ].map((industry) => (
              <div
                key={industry}
                className="rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 font-bold text-slate-300"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDLY */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 text-center">
          <h2 className="text-5xl font-black">
            Schedule your demo.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Tell us about your support organization, ticket volumes,
current challenges and SLA pressures. We'll show how
Ticktsphr could fit into your environment and where it can
deliver the biggest impact.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4">
          <iframe
            src="https://calendly.com/umayank/30min"
            width="100%"
            height="900"
            frameBorder="0"
            title="Book Ticktsphr Demo"
            className="rounded-2xl"
          />
        </div>
      </section>

      {/* OUTCOMES */}

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500 p-1">
          <div className="rounded-[2.4rem] bg-[#050713] p-10 text-center md:p-16">
            <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
              Expected Outcomes
            </p>

            <h2 className="mt-5 text-5xl font-black">
              Faster routing. Faster resolution. Better visibility.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div>
                <div className="text-5xl font-black text-cyan-300">70%</div>
                <p className="mt-3 text-slate-400">
                  Reduction in manual triage effort
                </p>
              </div>

              <div>
                <div className="text-5xl font-black text-cyan-300">40%</div>
                <p className="mt-3 text-slate-400">
                  Faster ticket resolution
                </p>
              </div>

              <div>
                <div className="text-5xl font-black text-cyan-300">24/7</div>
                <p className="mt-3 text-slate-400">
                  AI-powered support intelligence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}