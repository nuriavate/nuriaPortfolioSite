import { PencilSquareIcon, FaceSmileIcon } from "@heroicons/react/24/outline";

export default function SkillsSection() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-2xl px-6 py-16 lg:max-w-7xl lg:px-8">
        {/* Title */}
        <h1 className="text-4xl font-semibold text-[#270400] sm:text-4xl">
          Skills
        </h1>

        {/* Columns */}
        <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-0">
          {/* Software */}
          <div className="lg:pr-12">
            <IconWrap>
              <PencilSquareIcon className="h-7 w-7 text-[#270400]" aria-hidden="true" />
            </IconWrap>

            <h3 className="mt-6 text-base font-semibold text-[#270400]">
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
              <CodeIcon />
            </IconWrap>

            <h3 className="mt-6 text-base font-semibold text-[#270400]">
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
              <FaceSmileIcon className="h-7 w-7 text-[#270400]" aria-hidden="true" />
            </IconWrap>

            <h3 className="mt-6 text-base font-semibold text-[#270400]">
              Interpersonal Skills
            </h3>

            <p className="mt-8 text-sm leading-6 text-[#270400]/70">
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
      <p className="text-sm font-semibold text-[#270400]">{label}</p>
      <p className="mt-2 text-sm leading-6 text-[#270400]/70">{text}</p>
    </div>
  );
}

function CodeIcon() {
  return (
    <div className="flex h-8 w-8 items-center justify-center text-[#270400]">
      <span className="font-mono text-lg leading-none">&lt;&gt;</span>
    </div>
  );
}
