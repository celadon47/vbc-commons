"use client";

import Link from "next/link";
import { useState } from "react";

const programs = [
  {
    name: "MSSP",
    fullName: "Medicare Shared Savings Program",
    detail:
      "Total cost of care model for ACOs. 476 organizations, 11.2M beneficiaries.",
    href: "/knowledge-base/mssp",
  },
  {
    name: "TEAM",
    fullName: "Transforming Episode Accountability Model",
    detail:
      "Mandatory 30-day episode model for 5 surgical types. Launched January 2026.",
    href: "/knowledge-base/team",
  },
  {
    name: "LEAD",
    fullName: "Leveraging Encounters for ACO-Driven Excellence",
    detail:
      "Next-generation ACO model replacing REACH. Launching 2027.",
    href: "/knowledge-base/lead",
  },
  {
    name: "ACCESS",
    fullName: "ACO Community Care through Enhanced Specialized Services",
    detail:
      "Tech-enabled chronic care model with outcome-based payments. Launching July 2026.",
    href: "/knowledge-base/access",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribeStatus("loading");
    // TODO: integrate with Beehiiv API
    setTimeout(() => {
      setSubscribeStatus("success");
    }, 800);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-light-gray px-6 py-20">
        <div className="mx-auto max-w-[1280px]">
          <h1 className="max-w-[700px] font-serif text-[56px] leading-heading tracking-heading-tighter text-deep-ink">
            Value-based care,
            <br />
            explained clearly.
          </h1>
          <p className="mt-6 max-w-[600px] text-lg leading-relaxed text-slate">
            Open-access methodology reference for CMS value-based care models.
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

      {/* Program cards */}
      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <h2 className="font-serif text-3xl leading-heading tracking-heading-tight text-deep-ink">
          CMS Models
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <Link
              key={program.name}
              href={program.href}
              className="group flex flex-col rounded-lg border border-soft-border bg-white p-6 transition-colors hover:border-signal-green hover:border-t-signal-green hover:border-t-2"
            >
              <span className="font-mono text-xs uppercase tracking-label text-signal-green">
                {program.name}
              </span>
              <h3 className="mt-2 font-serif text-xl leading-heading text-deep-ink">
                {program.fullName}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {program.detail}
              </p>
              <span className="mt-auto pt-4 text-sm font-medium text-signal-green opacity-0 transition-opacity group-hover:opacity-100">
                Explore &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Built for two audiences */}
      <section className="mx-auto max-w-[1280px] px-6 pb-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl leading-heading tracking-heading-tight text-deep-ink">
              Built for two audiences
            </h2>
            <div className="mt-10 space-y-8">
              <div>
                <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-label text-signal-green">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5"
                    />
                  </svg>
                  Administrators &amp; analysts
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate">
                  Plain-English explanations of how CMS models actually work,
                  with real numbers and worked examples.
                </p>
              </div>
              <div>
                <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-label text-signal-green">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                    />
                  </svg>
                  Model builders
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate">
                  Implementation-grade methodology detail, coefficient tables,
                  edge cases, and downloadable templates.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden items-center justify-center lg:flex">
            {/* Placeholder for future illustration */}
            <div className="flex h-64 w-full items-center justify-center rounded-lg border border-dashed border-soft-border">
              <span className="text-sm text-slate">Illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="bg-deep-ink px-6 py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-[520px]">
            <h2 className="font-serif text-3xl leading-heading tracking-heading-tight text-white">
              Stay current on CMS value-based care
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate">
              Biweekly intelligence brief covering model updates, policy
              changes, and the vendor ecosystem.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="mt-8 flex gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="min-w-0 flex-1 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate outline-none transition-colors focus:border-signal-green"
              />
              <button
                type="submit"
                disabled={subscribeStatus === "loading"}
                className="whitespace-nowrap rounded-md bg-signal-green px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {subscribeStatus === "loading"
                  ? "Subscribing..."
                  : subscribeStatus === "success"
                    ? "Subscribed!"
                    : "Subscribe"}
              </button>
            </form>
            {subscribeStatus === "success" && (
              <p className="mt-3 text-sm text-signal-green">
                Thanks for subscribing. Check your inbox to confirm.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
