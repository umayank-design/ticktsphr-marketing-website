import Link from "next/link";

const faqs = [
  {
    question: "What is Ticktsphr?",
    answer:
      "Ticktsphr is an AI-powered support intelligence platform that helps organizations classify, route and resolve tickets faster.",
  },
  {
    question: "Does Ticktsphr replace ServiceNow or Jira?",
    answer:
      "No. Ticktsphr can complement existing ticketing platforms by adding AI-driven classification, routing and resolution intelligence.",
  },
  {
    question: "Can Ticktsphr support Oracle ERP environments?",
    answer:
      "Yes. Ticktsphr is particularly well suited for Oracle Fusion, Oracle EBS and enterprise application support operations.",
  },
  {
    question: "How does AI routing work?",
    answer:
      "AI analyzes ticket content, historical incidents and support structures to recommend the most appropriate assignment path.",
  },
  {
    question: "Can Ticktsphr reduce manual triage effort?",
    answer:
      "Yes. The platform is designed to significantly reduce repetitive ticket categorization and assignment work.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Implementation timelines vary depending on workflows, integrations and organizational requirements.",
  },
  {
    question: "Is customer data secure?",
    answer:
      "Ticktsphr is designed with enterprise security, operational governance and controlled access principles.",
  },
  {
    question: "Do you offer custom AI models?",
    answer:
      "Yes. Enterprise customers can discuss industry-specific and workflow-specific AI capabilities.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <section className="relative border-b border-white/10 px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,.35),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,.18),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
            FAQ
          </p>

          <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] sm:text-7xl">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Answers to common questions about Ticktsphr, AI-powered support
            operations and enterprise implementations.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
            >
              <h2 className="text-2xl font-black">{faq.question}</h2>

              <p className="mt-4 leading-8 text-slate-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2.5rem] bg-gradient-to-r from-violet-600 to-cyan-500 p-12 text-center">
          <h2 className="text-5xl font-black">
            Still have questions?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80">
            Book a live walkthrough and discuss your support operations,
            implementation needs and AI strategy.
          </p>

          <Link
            href="/book-demo"
            className="mt-8 inline-block rounded-full bg-white px-10 py-4 font-black text-slate-950"
          >
            Book a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}