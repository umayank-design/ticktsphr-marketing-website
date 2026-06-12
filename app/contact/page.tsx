import Link from "next/link";

const contactCards = [
  {
    title: "Sales Enquiries",
    text: "Explore Ticktsphr for your support, IT or shared services organization.",
    email: "hello@ticktsphr.com",
    subject: "Ticktsphr Sales Enquiry",
  },
  {
    title: "Product Demo",
    text: "Book a 30-minute walkthrough of AI classification, routing and resolution intelligence.",
    email: "hello@ticktsphr.com",
    subject: "Ticktsphr Product Demo Request",
  },
  {
    title: "Partnerships",
    text: "Discuss implementation partnerships, consulting alliances or industry solutions.",
    email: "hello@ticktsphr.com",
    subject: "Ticktsphr Partnership Enquiry",
  },
  {
    title: "Enterprise AI",
    text: "Talk to us about Oracle, healthcare, education or custom AI support workflows.",
    email: "hello@ticktsphr.com",
    subject: "Ticktsphr Enterprise AI Enquiry",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white">
      <section className="relative border-b border-white/10 px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,.38),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,.20),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
            Contact
          </p>

          <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] sm:text-7xl">
            Let’s talk about modern support operations.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you are evaluating AI ticket classification, smart routing,
            resolution intelligence or enterprise implementation support, we
            would be happy to connect.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {contactCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_20px_80px_rgba(34,211,238,0.15)]"
            >
              <div className="mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />

              <h2 className="text-3xl font-black">{card.title}</h2>

              <p className="mt-4 leading-7 text-slate-400">{card.text}</p>

              <a
                href={`mailto:${card.email}?subject=${encodeURIComponent(
                  card.subject
                )}`}
                className="mt-8 inline-block text-lg font-black text-cyan-300 hover:text-cyan-200"
              >
                {card.email}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500 p-1">
          <div className="rounded-[2.4rem] bg-[#050713] p-10 text-center md:p-16">
            <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
              Prefer a live walkthrough?
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Book a 30-minute Ticktsphr demo.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              See how Ticktsphr predicts, routes and resolves support work
              using AI-powered operational intelligence.
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