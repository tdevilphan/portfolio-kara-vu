import { FloatingBadge } from "@/components/floating-badge";

export function HeroFallback() {
  return (
    <div
      className="relative h-full min-h-[360px] overflow-hidden rounded-deck border border-ink/10 bg-white p-6 shadow-deck deck-grid"
      aria-hidden="true"
    >
      <div className="motion-orbit absolute left-8 top-8 h-24 w-24 rounded-full bg-yellowPop" />
      <div className="motion-drift motion-delay-1 absolute right-10 top-16 h-28 w-28 rounded-full bg-cyanPop" />
      <div className="motion-drift absolute bottom-8 left-20 h-20 w-44 rounded-3xl bg-violetPop [--drift-rotate:-8deg]" />
      <div className="motion-orbit motion-delay-2 absolute bottom-14 right-12 h-24 w-24 rounded-2xl bg-orangePop [--orbit-rotate:12deg]" />
      <div className="motion-sheen absolute inset-x-10 top-1/2 h-28 -translate-y-1/2 overflow-hidden rounded-[32px] border-2 border-ink bg-paper/90 shadow-sticker" />

      <FloatingBadge
        label="Brand"
        color="violet"
        className="motion-bob absolute right-8 top-8"
      />
      <FloatingBadge
        label="Content"
        color="yellow"
        className="motion-bob motion-delay-1 absolute bottom-10 left-8"
      />
      <FloatingBadge
        label="CRM / Email"
        color="green"
        className="motion-bob motion-delay-2 absolute bottom-20 right-16"
      />
    </div>
  );
}
