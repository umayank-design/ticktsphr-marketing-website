import Link from "next/link";

export default function ROICalculatorPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <section className="relative border-b border-white/10 px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,.38),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,.20),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
            ROI Calculator
          </p>

          <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] sm:text-7xl">
            How much time is manual triage costing your team?
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Estimate the hours your support team spends classifying, routing and
            chasing repeated tickets — then see where Ticktsphr can help reduce
            the load.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8">
          <h2 className="text-3xl font-black">Enter your current support load</h2>

          <div className="mt-8 grid gap-5">
            {[
              "Tickets per Month",
              "Support Agents",
              "Average Triage Time per Ticket",
              "Average Cost per Agent Hour",
            ].map((field) => (
              <label key={field} className="block">
                <span className="text-sm font-bold text-slate-300">
                  {field}
                </span>

                <input
                  type="text"
                  placeholder={field}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-cyan-300"
                />
              </label>
            ))}
          </div>

          <button
            type="button"
            className="mt-8 w-full rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 px-8 py-4 font-black text-white shadow-[0_0_40px_rgba(124,58,237,0.35)]"
          >
            Estimate ROI
          </button>

          <p className="mt-5 text-sm leading-6 text-slate-500">
            This is a simple estimation page for lead capture. We can make this
            fully interactive later with live calculations.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
            Typical Impact Areas
          </p>

          <h2 className="mt-5 text-4xl font-black">
            Where support teams usually lose time.
          </h2>

          <div className="mt-8 space-y-5">
            {[
              "Manual ticket classification",
              "Wrong assignment and reassignment",
              "Repeated incidents with no reusable knowledge",
              "SLA risk discovered too late",
              "Senior engineers pulled into avoidable triage",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                <span className="font-bold text-slate-300">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-cyan-400/20 bg-cyan-400/5 p-6">
            <h3 className="text-2xl font-black text-cyan-300">
              Want a personalized ROI view?
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Share your ticket volume and support structure. We’ll help estimate
              where AI routing, resolution reuse and SLA visibility can deliver
              measurable value.
            </p>

            <Link
              href="/free-consultation"
              className="mt-6 inline-flex rounded-full bg-white px-7 py-4 font-black text-slate-950 hover:bg-violet-100"
            >
              Request Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}