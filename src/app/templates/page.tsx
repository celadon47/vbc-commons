import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Templates",
};

export default function Templates() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-16">
      <h1 className="font-serif text-4xl tracking-heading-tighter text-deep-ink">
        Templates
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-slate">
        Excel and Python models implementing CMS value-based care methodologies.
        Built for actuaries, data scientists, and analytics engineers.
      </p>
      <div className="mt-12 rounded-lg border border-soft-border bg-white p-8 text-center text-slate">
        Templates coming soon.
      </div>
    </div>
  );
}
