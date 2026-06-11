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
            Built by operators.
            <br />
            Designed for support teams.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-400">
            Ticktsphr was created to solve a problem experienced across
            enterprise IT, ERP, customer support and shared service teams:
            too many tickets, too much manual triage and too little
            operational visibility.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              Our Mission
            </p>

            <h2 className="text-5xl font-black">
              Turn support from a cost center into a strategic advantage.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-400">
            <p>
              Most ticketing systems stop at tracking work.
            </p>

            <p>
              Ticktsphr goes further by predicting priorities,
              recommending resolutions, identifying duplicate incidents,
              routing tickets intelligently and continuously learning from
              every interaction.
            </p>

            <p>
              The result is faster resolution, lower operating costs,
              improved SLA performance and reusable organizational
              knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                value: "70%",
                label: "Tickets resolved automatically",
              },
              {
                value: "90%",
                label: "Reduction in manual triage",
              },
              {
                value: "24x7",
                label: "AI support intelligence",
              },
              {
                value: "100%",
                label: "Knowledge retention",
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

      {/* Founder Story */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Founder Story
          </p>

          <h2 className="text-5xl font-black">
            Built at the intersection of enterprise delivery and growth.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
            <div className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-violet-300">
              Enterprise Technology Leader
            </div>

            <p className="leading-8 text-slate-400">
              With more than two decades leading Oracle ERP, CRM and
              enterprise transformation programs across North America,
              Europe, the Middle East and Asia, the technology founder
              witnessed firsthand how support organizations struggle with
              ticket overload, tribal knowledge and inefficient routing.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              Experience spans global consulting firms, large-scale ERP
              programs, solution architecture, delivery governance and
              enterprise operations across healthcare, education,
              manufacturing and services sectors.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
            <div className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Growth & Scale Operator
            </div>

            <p className="leading-8 text-slate-400">
              The business founder brings two decades of experience scaling
              brands, products and customer acquisition engines across
              education, fintech, telecom, travel and consumer businesses.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              Having led marketing, operations, product innovation and
              growth for high-scale organizations, the focus has always
              been on building systems that deliver measurable business
              outcomes through automation, intelligence and operational
              excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Ticktsphr */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-violet-300">
              Why Ticktsphr
            </p>

            <h2 className="text-5xl font-black">
              Not another ticketing tool.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Ticket systems record work. Ticktsphr learns from work.
              Every incident improves routing intelligence, resolution
              quality and organizational knowledge.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              "AI Classification",
              "AI Resolution Engine",
              "Knowledge Reuse",
              "Duplicate Detection",
              "Executive Analytics",
              "Auto Assignment",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center"
              >
                <div className="text-xl font-bold">
                  {item}
                </div>
              </div>
            ))}
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
            See how AI-powered ticket intelligence can reduce support costs,
            improve SLA compliance and accelerate resolution times.
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