import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-violet-300">← Back to Home</Link>
        <h1 className="mt-10 text-5xl font-black tracking-tight">Contact</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">Want to explore Ticktsphr for your support team? Send us your details and we’ll get back to you.</p>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <p className="text-slate-300">Email</p>
          <a href="mailto:hello@ticktsphr.com" className="mt-2 block text-2xl font-black text-violet-300">hello@ticktsphr.com</a>
        </div>
      </div>
    </main>
  );
}
