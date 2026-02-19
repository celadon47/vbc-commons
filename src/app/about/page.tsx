import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-16">
      <h1 className="font-serif text-4xl tracking-heading-tighter text-deep-ink">
        About
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
        VBC Commons is an independent, open-access knowledge base for CMS
        value-based care models. It serves ACO administrators, practice
        managers, policy analysts, actuaries, data scientists, and analytics
        engineers who need to understand CMS models at a deep conceptual and
        implementation level.
      </p>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
        All content is based on publicly available CMS methodology from final
        rules, regulations, and data. VBC Commons does not contain or reference
        any proprietary information.
      </p>
    </div>
  );
}
