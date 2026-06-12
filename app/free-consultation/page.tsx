import Link from "next/link";

const fields = [
  "Name",
  "Work Email",
  "Company",
  "Current Ticketing Tool",
  "Monthly Ticket Volume",
  "Biggest Support Challenge",
];

export default function FreeConsultationPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <section className="relative border-b border-white/10 px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,.38),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,.20),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
            Free Consultation
          </p>

          <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] sm:text-7xl">
            Let’s understand your support environment.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Share a few details about your ticket volumes, SLA pressure and
            support setup. We’ll help identify where Ticktsphr can create the
            biggest operational impact.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-3xl font-black">What we’ll review</h2>

          <div className="mt-8 space-y-5 text-slate-300">
            {[
              "Where manual triage is slowing your team",
              "Which ticket categories repeat most often",
              "Where SLA risk is building up",
              "How routing and ownership can improve",
              "Where reusable knowledge can reduce repeat work",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <span className="text-cyan-300">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link
            href="/book-demo"
            className="mt-10 inline-flex rounded-full bg-white px-7 py-4 font-black text-slate-950 hover:bg-violet-100"
          >
            Prefer Calendly? Book directly
          </Link>
        </div>

        <form className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8">
          <h2 className="text-3xl font-black">Request consultation</h2>

          <div className="mt-8 grid gap-5">
            {fields.map((field) => (
              <label key={field} className="block">
                <span className="text-sm font-bold text-slate-300">
                  {field}
                </span>

                <input
                  type={field === "Work Email" ? "email" : "text"}
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
            Request Free Consultation
          </button>

          <p className="mt-5 text-center text-sm text-slate-500">
            No spam. Just a focused conversation about your support operations.
          </p>
        </form>
      </section>
    </main>
  );
}