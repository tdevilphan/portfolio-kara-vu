import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/data/portfolio";

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="bg-ink px-5 py-16 text-white md:px-8 md:py-24"
      data-clarity-label="experience"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Marketing roles focused on clear execution."
          copy="A concise view of recent work across strategy, brand visibility, coordination, and reporting."
        />

        <div className="relative grid gap-6">
          {experiences.map((experience, index) => (
            <MotionReveal
              key={`${experience.company}-${experience.period}`}
              className="grid gap-4 rounded-deck border-2 border-white bg-paper p-6 text-ink shadow-sticker md:grid-cols-[220px_1fr] md:p-8"
            >
              <div>
                <p className="text-sm font-black uppercase tracking-[0.14em] text-violetPop">
                  {experience.period}
                </p>
                <p className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-yellowPop text-xl font-black">
                  {index + 1}
                </p>
              </div>

              <article>
                <p className="text-lg font-black text-orangePop">
                  {experience.company}
                </p>
                <h3 className="mt-1 text-3xl font-black leading-tight">
                  {experience.role}
                </h3>
                <p className="mt-4 text-lg leading-8 text-neutral-700">
                  {experience.summary}
                </p>

                <ul className="mt-6 space-y-3">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-2xl border-2 border-ink bg-white px-4 py-3 font-bold"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-cyanPop px-3 py-2 text-sm font-black text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
