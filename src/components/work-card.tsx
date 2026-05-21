"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { WorkItem } from "@/data/portfolio";
import { trackEvent } from "@/lib/analytics";

type WorkCardProps = {
  work: WorkItem;
};

export function WorkCard({ work }: WorkCardProps) {
  return (
    <Link
      href={`/work/${work.slug}`}
      className="group flex h-full flex-col rounded-deck border-2 border-ink bg-white p-6 shadow-sticker transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-violetPop md:p-8"
      data-clarity-label="open_case_detail"
      data-float="slow"
      onClick={() => trackEvent("open_case_detail")}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <span className="rounded-full bg-yellowPop px-4 py-2 text-sm font-black text-ink">
          {work.status}
        </span>
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white transition-transform group-hover:rotate-12">
          <ArrowUpRight size={22} aria-hidden="true" />
        </span>
      </div>

      <h3 className="mt-6 text-3xl font-black leading-tight text-ink">
        {work.title}
      </h3>
      <p className="mt-4 text-lg leading-8 text-neutral-700">{work.summary}</p>

      <dl className="mt-6 grid gap-4">
        <div>
          <dt className="text-sm font-black uppercase tracking-[0.14em] text-violetPop">
            Objective
          </dt>
          <dd className="mt-2 leading-7 text-neutral-800">{work.objective}</dd>
        </div>
        <div>
          <dt className="text-sm font-black uppercase tracking-[0.14em] text-orangePop">
            Role
          </dt>
          <dd className="mt-2 leading-7 text-neutral-800">{work.role}</dd>
        </div>
      </dl>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {work.channels.map((channel) => (
          <span
            key={channel}
            className="rounded-full border-2 border-ink bg-cyanPop px-3 py-2 text-sm font-black text-ink"
          >
            {channel}
          </span>
        ))}
      </div>
    </Link>
  );
}
