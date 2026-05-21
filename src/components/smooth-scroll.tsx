"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let lenis: Lenis | null = null;
    let animationFrameId: number | null = null;

    function stopLenis() {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }

      lenis?.destroy();
      lenis = null;
    }

    function raf(time: number) {
      if (!lenis) {
        return;
      }

      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    function startLenis() {
      if (lenis) {
        return;
      }

      lenis = new Lenis();
      animationFrameId = requestAnimationFrame(raf);
    }

    function syncMotionPreference(matches: boolean) {
      if (matches) {
        stopLenis();
        return;
      }

      startLenis();
    }

    function handleMotionPreferenceChange(event: MediaQueryListEvent) {
      syncMotionPreference(event.matches);
    }

    syncMotionPreference(reducedMotionQuery.matches);
    reducedMotionQuery.addEventListener("change", handleMotionPreferenceChange);

    return () => {
      reducedMotionQuery.removeEventListener(
        "change",
        handleMotionPreferenceChange,
      );
      stopLenis();
    };
  }, []);

  return null;
}
