import { MotionReveal } from "@/components/motion-reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <MotionReveal className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-violetPop">
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-black leading-tight text-ink md:text-6xl">
        {title}
      </h2>
      {copy ? <p className="mt-4 text-lg leading-8 text-neutral-700">{copy}</p> : null}
    </MotionReveal>
  );
}
