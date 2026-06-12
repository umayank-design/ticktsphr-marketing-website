export default function BookDemoPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <section className="relative border-b border-white/10 px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,.35),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,.20),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
            Book a Demo
          </p>

          <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] sm:text-7xl">
            See Ticktsphr in action.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Discover how AI-powered ticket classification, smart routing,
            resolution intelligence and executive visibility can transform
            your support operations.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
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
    </main>
  );
}