import Link from "next/link";

const plans = [
  { name: "Starter", price: "For growing teams", items: ["AI classification", "Basic routing", "Ticket dashboard"] },
  { name: "Professional", price: "For service desks", items: ["Resolution engine", "Knowledge reuse", "SLA insights"] },
  { name: "Enterprise", price: "For large operations", items: ["Executive command center", "Advanced analytics", "Custom workflows"] },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-violet-300">← Back to Home</Link>
        <h1 className="mt-10 text-5xl font-black tracking-tight">Pricing</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Simple plans for AI-powered ticket management. Final pricing depends on users, volume and implementation scope.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <h2 className="text-2xl font-black">{plan.name}</h2>
              <p className="mt-3 text-slate-400">{plan.price}</p>
              <ul className="mt-8 space-y-3 text-slate-300">
                {plan.items.map((item) => <li key={item}>✓ {item}</li>)}
              </ul>
              <Link href="/book-demo" className="mt-8 inline-block rounded-full bg-violet-600 px-6 py-3 font-bold hover:bg-violet-500">Book Demo</Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
