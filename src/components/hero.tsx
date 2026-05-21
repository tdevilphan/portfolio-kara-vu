"use client";

import dynamic from "next/dynamic";
import { ArrowDown, Download } from "lucide-react";
import { useEffect, useState } from "react";

import { FloatingBadge } from "@/components/floating-badge";
import { HeroFallback } from "@/components/hero-fallback";
import { profile } from "@/data/portfolio";
import { trackEvent } from "@/lib/analytics";

const HeroScene = dynamic(
  () => import("@/components/hero-scene").then((module) => module.HeroScene),
  {
    ssr: false,
    loading: () => null,
  },
);

export function Hero() {
  const [canRenderScene, setCanRenderScene] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
    );
    const updateCanRenderScene = () => setCanRenderScene(mediaQuery.matches);

    updateCanRenderScene();
    mediaQuery.addEventListener("change", updateCanRenderScene);

    return () => {
      mediaQuery.removeEventListener("change", updateCanRenderScene);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-5 py-8 md:px-8 md:py-10"
      data-clarity-label="hero"
    >
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[36px] border border-ink/10 bg-paper p-5 shadow-deck deck-grid md:grid-cols-[1.05fr_0.95fr] md:p-8">
        <div className="relative z-10 flex min-h-[560px] flex-col justify-between rounded-deck bg-white/85 p-6 shadow-sticker md:p-10">
          <nav
            className="flex flex-wrap items-center gap-3 text-sm font-bold"
            aria-label="Primary"
          >
            <a
              href="#work"
              className="rounded-full bg-ink px-4 py-2 text-white"
            >
              Work
            </a>
            <a
              href="#experience"
              className="rounded-full bg-yellowPop px-4 py-2 text-ink"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="rounded-full bg-cyanPop px-4 py-2 text-ink"
            >
              Contact
            </a>
          </nav>

          <div>
            <div className="mb-6 flex flex-wrap gap-3">
              <FloatingBadge label="Brand" color="violet" />
              <FloatingBadge label="Content" color="yellow" />
              <FloatingBadge label="Performance" color="cyan" />
            </div>
            <h1 className="text-balance text-5xl font-black leading-[0.95] text-ink md:text-7xl">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-neutral-700">
              {profile.subheadline}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-black text-white"
              data-clarity-label="download_cv"
              onClick={() => trackEvent("download_cv")}
            >
              <Download size={20} aria-hidden="true" />
              Download CV
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-white px-6 py-4 font-black text-ink"
              data-clarity-label="view_selected_work"
              onClick={() => trackEvent("view_selected_work")}
            >
              <ArrowDown size={20} aria-hidden="true" />
              View Selected Work
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-deck bg-white shadow-sticker">
          <HeroFallback />
          {canRenderScene ? <HeroScene /> : null}
        </div>
      </div>
    </section>
  );
}
