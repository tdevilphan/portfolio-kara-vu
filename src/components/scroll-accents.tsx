"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollAccents() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        typeof window === "undefined" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      const workSection = document.querySelector("#work");

      if (!workSection) {
        return;
      }

      const floatingElements = gsap.utils.toArray<HTMLElement>(
        workSection.querySelectorAll('[data-float="slow"]'),
      );

      if (floatingElements.length === 0) {
        return;
      }

      gsap.to(floatingElements, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: workSection,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope },
  );

  return <div ref={scope} aria-hidden="true" hidden />;
}
