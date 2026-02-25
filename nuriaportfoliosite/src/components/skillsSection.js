import { CodeBracketIcon } from "@heroicons/react/20/solid";
import { PaintBrushIcon, FaceSmileIcon } from "@heroicons/react/24/outline";

export default function SkillsSection() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-2xl px-6 py-16 lg:max-w-7xl lg:px-8">
        {/* Title */}
        <h1 className="font-urbanist text-4xl font-semibold text-[#270400] sm:text-4xl">
          Skills
        </h1>

        {/* Columns */}
        <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-0">
          {/* Software */}
          <div className="lg:pr-12">
            <IconWrap>
              <PaintBrushIcon className="h-8 w-8 text-[#270400]" aria-hidden="true" />
            </IconWrap>

            <h3 className="font-urbanist mt-6 font-semibold text-[#270400] text-2xl">
              Software
            </h3>

            <div className="mt-8 space-y-8">
              <Block
                label="Design, UX & UI"
                text="Figma, Github, Illustrator, Indesign"
              />
              <Block
                label="Image and video editing"
                text="Da Vinci Resolve, Photoshop, After Effects, Premiere, Maya"
              />
            </div>
          </div>

          {/* Programming Languages */}
          <div className="lg:border-l lg:border-r lg:border-[#270400]/15 lg:px-12">
            <IconWrap>
              <CodeBracketIcon className="h-8 w-8" />
            </IconWrap>

            <h3 className="font-urbanist mt-6 text-2xl font-semibold text-[#270400]">
              Programming Languages
            </h3>

            <div className="mt-8 space-y-8">
              <Block
                label="Frequent use"
                text="CSS, HTML, JS, React, React Native"
              />
              <Block
                label="Used in the past"
                text="PHP, SQL, Flutter, Dart"
              />
            </div>
          </div>

          {/* Interpersonal */}
          <div className="lg:pl-12">
            <IconWrap>
              <FaceSmileIcon className="h-8 w-8 text-[#270400]" aria-hidden="true" />
            </IconWrap>

            <h3 className="font-urbanist mt-6 text-2xl font-semibold text-[#270400]">
              Interpersonal Skills
            </h3>

            <p className="mt-8 text-base leading-6 text-[#270400] font-manrope">
              Flexible, Communicative, Self Starter, creative problem solver,
              Empathy, Detail Oriented
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconWrap({ children }) {
  return <div className="h-8 w-8">{children}</div>;
}

function Block({ label, text }) {
  return (
    <div>
      <p className="text-base font-semibold text-[#270400] font-manrope">{label}</p>
      <p className="font-manrope mt-2 text-base leading-6 text-[#270400]">{text}</p>
    </div>
  );
}

