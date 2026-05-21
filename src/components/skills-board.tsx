import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/data/portfolio";

const colorClass = {
  violet: "bg-violetPop text-white",
  cyan: "bg-cyanPop text-ink",
  yellow: "bg-yellowPop text-ink",
  green: "bg-greenPop text-white",
  orange: "bg-orangePop text-white",
  blue: "bg-bluePop text-white",
};

export function SkillsBoard() {
  return (
    <section id="skills" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A practical board for brand, content, and growth work."
          copy="Recruiter-readable strengths across strategy, communication, performance learning, CRM/email, and collaboration."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className={`rounded-deck border-2 border-ink p-6 shadow-sticker ${colorClass[group.color]}`}
            >
              <h3 className="text-2xl font-black">{group.title}</h3>
              <ul className="mt-5 space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-2xl border-2 border-ink bg-white/90 px-4 py-3 font-bold text-ink"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
