import Link from "next/link";

export default function BookDemoPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-violet-300">← Back to Home</Link>
        <h1 className="mt-10 text-5xl font-black tracking-tight">Book a Demo</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">See how Ticktsphr can classify, route and resolve support tickets with AI.</p>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <h2 className="text-2xl font-black">Schedule a walkthrough</h2>
          <p className="mt-4 text-slate-400">Calendly embed will be added here. For now, use the contact email below.</p>
          <a href="mailto:hello@ticktsphr.com?subject=Ticktsphr Demo Request" className="mt-8 inline-block rounded-full bg-violet-600 px-8 py-4 font-bold hover:bg-violet-500">Request Demo</a>
        </div>
      </div>
    </main>
  );
}
