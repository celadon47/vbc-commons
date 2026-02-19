import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology",
};

export default function Methodology() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-16">
      <h1 className="font-serif text-4xl tracking-heading-tighter text-deep-ink">
        Methodology
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
        How VBC Commons documents CMS value-based care models &mdash; our
        sourcing, verification, and update process.
      </p>
      <div className="mt-12 rounded-lg border border-soft-border bg-white p-8 text-center text-slate">
        Methodology page coming soon.
      </div>
    </div>
  );
}
