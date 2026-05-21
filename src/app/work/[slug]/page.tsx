import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { works } from "@/data/portfolio";

type CaseDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getWorkBySlug(slug: string) {
  const matches = works.filter((work) => work.slug === slug);

  if (matches.length > 1) {
    throw new Error(`Duplicate work slug found: ${slug}`);
  }

  return matches[0];
}

export function generateStaticParams() {
  return works.map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  return {
    title: work
      ? `${work.title} - Vu Thi Bich Ngoc`
      : "Case Study Not Found - Vu Thi Bich Ngoc",
  };
}

export default async function CaseDetailPage({ params }: CaseDetailPageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="deck-grid min-h-screen px-5 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-3 text-sm font-black text-ink shadow-sticker transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-violetPop"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Back to work
        </Link>

        <section className="mt-8 rounded-deck border-2 border-ink bg-white p-6 shadow-deck md:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <span className="rounded-full bg-yellowPop px-4 py-2 text-sm font-black text-ink">
              {work.status}
            </span>
            <div className="hidden h-16 w-16 rotate-6 rounded-full border-2 border-ink bg-cyanPop md:block" />
          </div>

          <h1 className="mt-8 text-balance text-4xl font-black leading-tight text-ink md:text-6xl">
            {work.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700 md:text-xl md:leading-9">
            {work.summary}
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <section className="rounded-[20px] border-2 border-ink bg-paper p-5">
              <h2 className="text-sm font-black uppercase tracking-[0.14em] text-violetPop">
                Objective
              </h2>
              <p className="mt-3 text-lg leading-8 text-neutral-800">
                {work.objective}
              </p>
            </section>

            <section className="rounded-[20px] border-2 border-ink bg-paper p-5">
              <h2 className="text-sm font-black uppercase tracking-[0.14em] text-orangePop">
                Role
              </h2>
              <p className="mt-3 text-lg leading-8 text-neutral-800">
                {work.role}
              </p>
            </section>
          </div>

          <section className="mt-10">
            <h2 className="text-sm font-black uppercase tracking-[0.14em] text-greenPop">
              Channels
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {work.channels.map((channel) => (
                <span
                  key={channel}
                  className="rounded-full border-2 border-ink bg-cyanPop px-3 py-2 text-sm font-black text-ink"
                >
                  {channel}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-sm font-black uppercase tracking-[0.14em] text-bluePop">
              Work structure
            </h2>
            <ol className="mt-5 grid gap-4">
              {work.detail.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-4 rounded-[20px] border-2 border-ink bg-white p-4 shadow-sticker"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-greenPop text-base font-black text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-lg leading-8 text-neutral-800">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </section>
      </div>
    </main>
  );
}
