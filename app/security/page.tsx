import Link from "next/link";

const securityItems = [
  {
    title: "Enterprise Security",
    text: "Designed for organizations that need controlled access, operational visibility and secure support workflows.",
  },
  {
    title: "Role-Based Access",
    text: "Support different user roles across agents, managers, executives and administrators.",
  },
  {
    title: "Data Protection",
    text: "Built with security-first architecture principles for handling ticket and operational data responsibly.",
  },
  {
    title: "Audit Readiness",
    text: "Maintain visibility into ticket actions, assignment changes and support workflow history.",
  },
  {
    title: "Deployment Flexibility",
    text: "Supports implementation patterns aligned to enterprise IT, shared services and ERP support models.",
  },
  {
    title: "AI Governance",
    text: "AI recommendations are designed to assist teams, not blindly replace operational judgment.",
  },
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,.35),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,.18),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
            Security
          </p>

          <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] sm:text-7xl">
            Built for enterprise-grade support operations.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Ticktsphr is designed with the operational controls, visibility and
            governance expectations required by modern enterprise teams.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {securityItems.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_20px_80px_rgba(34,211,238,0.15)]"
            >
              <div className="mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
              <h2 className="text-2xl font-black">{item.title}</h2>
              <p className="mt-4 leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500 p-1">
          <div className="rounded-[2.4rem] bg-[#050713] p-10 text-center md:p-16">
            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Want to review Ticktsphr for your enterprise?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Book a walkthrough to discuss architecture, security expectations,
              implementation scope and enterprise support workflows.
            </p>

            <Link
              href="/book-demo"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-black text-slate-950 hover:bg-violet-100"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}