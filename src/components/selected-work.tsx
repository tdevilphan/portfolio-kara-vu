import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { WorkCard } from "@/components/work-card";
import { works } from "@/data/portfolio";

export function SelectedWork() {
  return (
    <section
      id="work"
      className="px-5 py-16 md:px-8 md:py-24"
      data-clarity-label="selected_work"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Case-study frames without inflated results."
          copy="Each item focuses on objective, role, channels, and practical work scope. Detailed visuals can be added as assets become available."
        />

        <MotionReveal className="grid gap-6 lg:grid-cols-3">
          {works.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </MotionReveal>
      </div>
    </section>
  );
}
