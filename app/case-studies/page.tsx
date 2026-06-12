import Link from "next/link";

const caseStudies = [
  {
    title: "Healthcare Support Operations",
    challenge:
      "Large healthcare organizations struggled with ticket overload, manual routing and inconsistent resolution quality.",
    result:
      "Reduced triage effort by 70%, improved SLA compliance and accelerated ticket resolution.",
  },
  {
    title: "Oracle ERP Support Center",
    challenge:
      "ERP incidents required specialist knowledge and manual assignment across support teams.",
    result:
      "AI-driven routing and resolution recommendations reduced assignment delays and improved MTTR.",
  },
  {
    title: "Shared Services Organization",
    challenge:
      "HR, Finance and Procurement teams managed thousands of requests with limited visibility.",
    result:
      "Centralized support intelligence improved operational transparency and executive reporting.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,.25),transparent_40%),radial-gradient(circle_at_top_right,rgba(34,211,238,.15),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
            Success Stories
          </p>

          <h1 className="text-6xl font-black md:text-7xl">
            Real support outcomes.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">
            Discover how organizations use AI-powered ticket intelligence to
            improve support performance, reduce manual effort and increase
            operational visibility.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10"
            >
              <h2 className="text-4xl font-black">{study.title}</h2>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-300">
                    Challenge
                  </p>

                  <p className="text-lg leading-8 text-slate-400">
                    {study.challenge}
                  </p>
                </div>

                <div>
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                    Outcome
                  </p>

                  <p className="text-lg leading-8 text-slate-400">
                    {study.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2.5rem] bg-gradient-to-r from-violet-600 to-cyan-500 p-12 text-center">
          <h2 className="text-5xl font-black">
            Ready to create your own success story?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80">
            See how Ticktsphr can transform support operations with AI-powered
            classification, routing and resolution intelligence.
          </p>

          <Link
            href="/book-demo"
            className="mt-8 inline-block rounded-full bg-white px-10 py-4 font-black text-slate-950"
          >
            Book a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}