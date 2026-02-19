import Link from "next/link";

const programs = [
  {
    name: "MSSP",
    description: "Medicare Shared Savings Program",
    href: "/knowledge-base/mssp",
  },
  {
    name: "TEAM",
    description: "Transforming Episode Accountability Model",
    href: "/knowledge-base/team",
  },
  {
    name: "LEAD",
    description: "Leveraging Encounters for ACO-Driven Excellence",
    href: "/knowledge-base/lead",
  },
  {
    name: "ACCESS",
    description: "ACO Community Care through Enhanced Specialized Services",
    href: "/knowledge-base/access",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — full width, text constrained */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[800px]">
          <h1 className="font-serif text-[56px] leading-heading tracking-heading-tighter text-deep-ink">
            Value-based care,
            <br />
            explained clearly.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            VBC Commons is an open-access knowledge base for CMS value-based care
            models. Deep methodology reference for administrators, analysts, and
            model builders.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/knowledge-base"
              className="inline-flex items-center gap-2 rounded-md bg-signal-green px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Browse Knowledge Base
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/newsletter"
              className="inline-flex items-center rounded-md border border-soft-border px-5 py-2.5 text-sm font-medium text-deep-ink transition-colors hover:border-signal-green"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>

      {/* Program cards — wider container */}
      <section className="mx-auto max-w-[1280px] px-6 pb-20">
        <h2 className="font-serif text-3xl leading-heading tracking-heading-tight text-deep-ink">
          CMS Models
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <Link
              key={program.name}
              href={program.href}
              className="group rounded-lg border border-soft-border bg-white p-6 transition-colors hover:border-signal-green"
            >
              <span className="font-mono text-xs uppercase tracking-label text-signal-green">
                {program.name}
              </span>
              <h3 className="mt-2 font-serif text-xl leading-heading text-deep-ink">
                {program.description}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
