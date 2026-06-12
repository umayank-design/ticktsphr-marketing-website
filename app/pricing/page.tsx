import Link from "next/link";

const plans = [
  {
    name: "Team",
    price: "Starting from ₹9,999/month",
    description: "For small support teams starting AI-led ticket operations.",
    highlight: false,
    features: [
      "AI ticket classification",
      "Basic smart routing",
      "Ticket dashboard",
      "Priority prediction",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    name: "Business",
    price: "Starting from ₹29,999/month",
    description: "For growing support organizations that need speed and control.",
    highlight: true,
    features: [
      "Everything in Team",
      "Resolution intelligence",
      "Knowledge reuse",
      "SLA insights",
      "Duplicate detection",
      "Team performance analytics",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Contact Sales",
    description: "For large enterprises with complex service operations.",
    highlight: false,
    features: [
      "Everything in Business",
      "Executive command center",
      "Multi-organization support",
      "Advanced analytics",
      "Custom workflows",
      "SSO-ready architecture",
      "Dedicated success support",
    ],
  },
  {
    name: "Custom AI",
    price: "Contact Sales",
    description: "For Oracle, healthcare, education and government use cases.",
    highlight: false,
    features: [
      "Custom AI models",
      "ERP-aware classification",
      "Oracle-centric workflows",
      "Industry-specific routing",
      "Implementation services",
      "Custom reporting",
      "White-label options",
    ],
  },
];

const matrix = [
  ["AI Classification", "✓", "✓", "✓", "✓"],
  ["Smart Routing", "Basic", "Advanced", "Advanced", "Custom"],
  ["Resolution Intelligence", "—", "✓", "✓", "✓"],
  ["Executive Command Center", "—", "Basic", "✓", "✓"],
  ["Knowledge Reuse", "—", "✓", "✓", "✓"],
  ["Duplicate Detection", "—", "✓", "✓", "✓"],
  ["Custom Workflows", "—", "—", "✓", "✓"],
  ["Custom AI Models", "—", "—", "—", "✓"],
];

const faqs = [
  {
    q: "Is Ticktsphr a ticketing tool?",
    a: "Ticktsphr is an AI-native support intelligence platform. It can work as a ticketing layer or sit above existing systems to improve classification, routing and resolution.",
  },
  {
    q: "Can pricing change based on volume?",
    a: "Yes. Final pricing depends on number of users, ticket volume, integrations and implementation scope.",
  },
  {
    q: "Do you support enterprise workflows?",
    a: "Yes. Ticktsphr is designed for multi-team, multi-level enterprise support operations.",
  },
  {
    q: "Can Ticktsphr support Oracle-heavy organizations?",
    a: "Yes. Custom AI plans can be designed around Oracle Fusion, Oracle EBS and ERP support patterns.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white">
      <section className="relative border-b border-white/10 px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,.38),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,.20),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
            Pricing
          </p>

          <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] sm:text-7xl">
            Scale AI support operations with the right plan.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Start with AI classification and routing. Grow into resolution
            intelligence, executive visibility and custom enterprise AI.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[2rem] border p-8 ${
                plan.highlight
                  ? "border-cyan-300/40 bg-cyan-300/[0.08] shadow-2xl shadow-cyan-500/10"
                  : "border-white/10 bg-white/[0.035]"
              }`}
            >
              {plan.highlight && (
                <div className="mb-5 inline-flex rounded-full bg-cyan-300 px-4 py-1 text-xs font-black uppercase tracking-widest text-slate-950">
                  Recommended
                </div>
              )}

              <h2 className="text-3xl font-black">{plan.name}</h2>

              <p className="mt-4 text-xl font-black text-cyan-300">
                {plan.price}
              </p>

              <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-400">
                {plan.description}
              </p>

              <ul className="mt-8 space-y-3 text-sm text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/book-demo"
                className={`mt-8 inline-flex w-full justify-center rounded-full px-6 py-3 font-black ${
                  plan.highlight
                    ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                    : "bg-white text-slate-950 hover:bg-violet-100"
                }`}
              >
                Book Demo
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-[0.35em] text-violet-300">
              Compare Plans
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Choose based on maturity, not guesswork.
            </h2>
          </div>

          <div className="mt-14 overflow-x-auto rounded-[2rem] border border-white/10 bg-[#070b18]">
            <table className="w-full min-w-[850px] text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.04] text-slate-300">
                  <th className="p-5 text-left">Capability</th>
                  <th className="p-5 text-center">Team</th>
                  <th className="p-5 text-center text-cyan-300">Business</th>
                  <th className="p-5 text-center">Enterprise</th>
                  <th className="p-5 text-center">Custom AI</th>
                </tr>
              </thead>

              <tbody>
                {matrix.map((row) => (
                  <tr
                    key={row[0]}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    <td className="p-5 font-bold text-white">{row[0]}</td>
                    <td className="p-5 text-center text-slate-400">{row[1]}</td>
                    <td className="bg-cyan-400/5 p-5 text-center font-black text-cyan-300">
                      {row[2]}
                    </td>
                    <td className="p-5 text-center text-slate-400">{row[3]}</td>
                    <td className="p-5 text-center text-slate-400">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500 p-1">
          <div className="rounded-[2.4rem] bg-[#050713] p-10 text-center md:p-16">
            <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
              Enterprise Ready
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Need Oracle, healthcare, education or government workflows?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Ticktsphr can be shaped around your operating model, resolver
              hierarchy, SLA logic, historical ticket patterns and executive
              reporting needs.
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

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="text-center">
          <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
            FAQ
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em]">
            Pricing questions, answered.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"
            >
              <h3 className="text-xl font-black">{faq.q}</h3>
              <p className="mt-3 leading-7 text-slate-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}