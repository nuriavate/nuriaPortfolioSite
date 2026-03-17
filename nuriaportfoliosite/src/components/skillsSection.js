import { CodeBracketIcon } from "@heroicons/react/20/solid";
import { PaintBrushIcon, FaceSmileIcon } from "@heroicons/react/24/outline";

export default function SkillsSection() {
  return (
    <section className="section-space-sm w-full bg-white">
      <div className="page-shell">
        <h1 className="font-urbanist text-4xl font-semibold text-[#270400] sm:text-4xl">
          Skills
        </h1>

        <div className="mt-10 grid gap-x-10 gap-y-10 lg:grid-cols-3">
          <SkillCard
            icon={<PaintBrushIcon className="h-8 w-8 text-[#270400]" aria-hidden="true" />}
            title="Software"
          >
            <Block
              label="Design, UX & UI"
              text="Figma, Github, Illustrator, Indesign"
            />
            <Block
              label="Image and video editing"
              text="Da Vinci Resolve, Photoshop, After Effects, Premiere, Maya"
            />
          </SkillCard>

          <SkillCard
            icon={<CodeBracketIcon className="h-8 w-8 text-[#270400]" />}
            title="Programming Languages"
          >
            <Block
              label="Frequent use"
              text="CSS, HTML, JS, React, React Native"
            />
            <Block label="Used in the past" text="PHP, SQL, Flutter, Dart" />
          </SkillCard>

          <SkillCard
            icon={<FaceSmileIcon className="h-8 w-8 text-[#270400]" aria-hidden="true" />}
            title="Interpersonal Skills"
          >
            <p className="font-manrope text-base leading-7 text-[#270400]/78">
              Flexible, communicative, self starter, creative problem solver,
              empathy, and detail-oriented.
            </p>
          </SkillCard>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ icon, title, children }) {
  return (
    <section className="p-1 sm:p-2">
      <div className="h-8 w-8">{icon}</div>
      <h3 className="font-urbanist mt-6 text-2xl font-semibold text-[#270400]">
        {title}
      </h3>
      <div className="mt-7 space-y-6">{children}</div>
    </section>
  );
}

function Block({ label, text }) {
  return (
    <div>
      <p className="font-manrope text-base font-semibold text-[#270400]">
        {label}
      </p>
      <p className="font-manrope mt-2 text-base leading-7 text-[#270400]/78">
        {text}
      </p>
    </div>
  );
}
