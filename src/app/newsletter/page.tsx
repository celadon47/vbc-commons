import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter",
};

export default function Newsletter() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-16">
      <h1 className="font-serif text-4xl tracking-heading-tighter text-deep-ink">
        Newsletter
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-slate">
        Biweekly CMS intelligence brief covering value-based care methodology
        updates and vendor ecosystem coverage.
      </p>
      <div className="mt-12 rounded-lg border border-soft-border bg-white p-8 text-center text-slate">
        Newsletter signup coming soon.
      </div>
    </div>
  );
}
