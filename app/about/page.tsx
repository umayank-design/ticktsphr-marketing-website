import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,.25),transparent_40%),radial-gradient(circle_at_top_right,rgba(6,182,212,.15),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-violet-300">
            About Ticktsphr
          </p>

          <h1 className="max-w-5xl text-6xl font-black leading-none md:text-8xl">
            Built by people who have spent decades improving enterprise
            operations.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-400">
            Ticktsphr was created to solve a problem experienced across
            enterprise IT, ERP, customer support and shared service teams:
            too many tickets, too much manual triage and too little
            operational visibility.
          </p>
        </div>
      </section>

      {/* Why Ticktsphr Exists */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              Why Ticktsphr Exists
            </p>

            <h2 className="text-5xl font-black">
              Support teams deserve more than ticket tracking.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-400">
            <p>
              Most support organizations still rely on manual classification,
              tribal knowledge and reactive workflows.
            </p>

            <p>
              Tickets are often routed incorrectly, knowledge is trapped in
              individuals and leaders struggle to gain visibility into service
              performance.
            </p>

            <p>
              Ticktsphr was built to bring intelligence into every stage of
              support operations—from classification and routing to resolution
              and continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                value: "70%",
                label: "Manual triage reduction target",
              },
              {
                value: "40%",
                label: "MTTR improvement target",
              },
              {
                value: "24/7",
                label: "Operational visibility",
              },
              {
                value: "20+",
                label: "Years of enterprise experience",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-slate-950 p-8"
              >
                <div className="text-5xl font-black text-violet-400">
                  {item.value}
                </div>

                <div className="mt-3 text-slate-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Enterprise Expertise
          </p>

          <h2 className="text-5xl font-black">
            Built at the intersection of enterprise delivery and growth.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
            <div className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-violet-300">
              Operations & Technology Leadership
            </div>

            <p className="leading-8 text-slate-400">
              More than two decades of experience delivering enterprise
              transformation programs, Oracle Fusion initiatives, ERP
              implementations, global delivery leadership and operational
              excellence programs across healthcare, manufacturing,
              education and services.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
            <div className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Growth & Business Leadership
            </div>

            <p className="leading-8 text-slate-400">
              Extensive experience in marketing, operations, customer
              growth, business scaling, product innovation and service
              excellence across multiple industries and high-growth
              organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-violet-300">
              Industries We Serve
            </p>

            <h2 className="text-5xl font-black">
              Designed for complex support environments.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              "Healthcare",
              "Manufacturing",
              "Retail",
              "Education",
              "Shared Services",
              "Enterprise IT",
            ].map((industry) => (
              <div
                key={industry}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center"
              >
                <div className="text-xl font-bold">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              Product Vision
            </p>

            <h2 className="text-5xl font-black">
              Predict. Route. Resolve.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-400">
            <p>
              Today, Ticktsphr focuses on AI classification, intelligent
              routing, resolution intelligence and executive visibility.
            </p>

            <p>
              Tomorrow, we envision autonomous support operations powered
              by predictive analytics, intelligent automation and
              continuously learning AI systems.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[40px] border border-white/10 bg-gradient-to-r from-violet-600 to-cyan-600 p-14 text-center">
          <h2 className="text-5xl font-black">
            Ready to modernize support operations?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-white/80">
            See how AI-powered ticket intelligence can improve support
            performance, increase operational visibility and accelerate
            resolution times.
          </p>

          <Link
            href="/book-demo"
            className="mt-10 inline-block rounded-full bg-white px-10 py-5 text-lg font-black text-slate-950"
          >
            Book a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}