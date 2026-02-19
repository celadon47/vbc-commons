import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Knowledge Base",
};

const programs = [
  {
    name: "MSSP",
    fullName: "Medicare Shared Savings Program",
    href: "/knowledge-base/mssp",
    topics: [
      "Overview",
      "Beneficiary Assignment",
      "Benchmark Calculation",
      "Risk Adjustment",
      "Regional FFS Trending",
      "Expenditure Calculation",
      "Quality Scoring",
      "Shared Savings & Losses",
      "Key Levers",
      "Data Sources",
    ],
  },
  {
    name: "TEAM",
    fullName: "Transforming Episode Accountability Model",
    href: "/knowledge-base/team",
    topics: [
      "Overview",
      "Episode Definition",
      "Target Price",
      "Risk Tracks",
      "Expenditure Reconciliation",
      "Quality Measures",
      "Post-Acute Levers",
    ],
  },
  {
    name: "LEAD",
    fullName: "Leveraging Encounters for ACO-Driven Excellence",
    href: "/knowledge-base/lead",
    topics: [
      "Overview",
      "Beneficiary Alignment",
      "Benchmark Methodology",
      "Payment Mechanics",
      "CARAs",
      "Quality Measures",
      "Medicaid Integration",
      "Transition from REACH",
      "Open Questions",
    ],
  },
  {
    name: "ACCESS",
    fullName: "ACO Community Care through Enhanced Specialized Services",
    href: "/knowledge-base/access",
    topics: [
      "Overview",
      "Clinical Tracks",
      "Eligibility",
      "Payment Methodology",
      "Beneficiary Enrollment",
      "Technology Requirements",
      "Co-Management",
      "Key Levers",
    ],
  },
];

export default function KnowledgeBase() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-16">
      <h1 className="font-serif text-4xl leading-heading tracking-heading-tighter text-deep-ink">
        Knowledge Base
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-slate">
        Implementation-grade reference material for CMS value-based care models.
        Each section walks through methodology with worked examples and realistic
        figures.
      </p>

      <div className="mt-12 space-y-10">
        {programs.map((program) => (
          <section
            key={program.name}
            className="rounded-lg border border-soft-border bg-white p-8"
          >
            <span className="font-mono text-xs uppercase tracking-label text-signal-green">
              {program.name}
            </span>
            <h2 className="mt-2 font-serif text-2xl text-deep-ink">
              {program.fullName}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {program.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-md border border-soft-border px-3 py-1 text-sm text-slate"
                >
                  {topic}
                </span>
              ))}
            </div>
            <Link
              href={program.href}
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-signal-green hover:underline"
            >
              Explore {program.name} <span aria-hidden="true">&rarr;</span>
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
}
