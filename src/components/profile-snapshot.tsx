import { FloatingBadge } from "@/components/floating-badge";
import { MotionReveal } from "@/components/motion-reveal";
import { profile, skillGroups } from "@/data/portfolio";

export function ProfileSnapshot() {
  return (
    <section id="profile" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <MotionReveal className="rounded-deck border-2 border-ink bg-white p-6 shadow-sticker md:p-8">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-orangePop">
            Profile
          </p>
          <h2 className="text-balance text-4xl font-black leading-tight text-ink md:text-6xl">
            Marketing systems with a clear brand point of view.
          </h2>
        </MotionReveal>

        <MotionReveal className="rounded-deck border-2 border-ink bg-yellowPop p-6 shadow-sticker md:p-8">
          <p className="text-xl leading-9 text-ink md:text-2xl md:leading-10">
            {profile.bio}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {skillGroups.map((group) => (
              <FloatingBadge
                key={group.title}
                label={group.title}
                color={group.color}
              />
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
