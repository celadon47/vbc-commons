import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-soft-border bg-clean-white">
      <div className="mx-auto max-w-[1280px] px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-xl tracking-heading-tight text-deep-ink">
              VBC Commons
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Open-access knowledge base for CMS value-based care models.
            </p>
          </div>

          {/* Knowledge Base */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-label text-deep-ink">
              Knowledge Base
            </h3>
            <ul className="mt-3 space-y-2">
              {["MSSP", "TEAM", "LEAD", "ACCESS"].map((program) => (
                <li key={program}>
                  <Link
                    href={`/knowledge-base/${program.toLowerCase()}`}
                    className="text-sm text-slate transition-colors hover:text-signal-green"
                  >
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-label text-deep-ink">
              Resources
            </h3>
            <ul className="mt-3 space-y-2">
              {[
                { label: "Templates", href: "/templates" },
                { label: "Newsletter", href: "/newsletter" },
                { label: "Methodology", href: "/methodology" },
                { label: "About", href: "/about" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate transition-colors hover:text-signal-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-soft-border pt-6">
          <p className="text-center font-mono text-xs text-slate">
            &copy; {new Date().getFullYear()} VBC Commons. All content based on
            publicly available CMS methodology.
          </p>
        </div>
      </div>
    </footer>
  );
}
