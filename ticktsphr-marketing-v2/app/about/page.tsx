import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-violet-300">← Back to Home</Link>
        <h1 className="mt-10 text-5xl font-black tracking-tight">About Ticktsphr</h1>
        <p className="mt-8 text-xl leading-9 text-slate-300">
          Ticktsphr is built for enterprise teams that want faster, smarter and more accountable support operations. The platform brings AI classification, ticket routing, resolution intelligence, knowledge reuse and executive analytics into one clean operating layer.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {["Predict", "Route", "Resolve"].map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-black">{item}</h2>
              <p className="mt-4 text-slate-400">Turn support data into practical action before queues become chaos.</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
