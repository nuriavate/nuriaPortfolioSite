
import {
  SECTION_EYEBROW_CLASS,
  SECTION_TITLE_CLASS,
} from "./sectionTypography";
import Reveal from "./reveal";

export default function Section({ rightContent, titleh1, titleh2, leftContent }) {
  return (
    <section className="section-space-sm overflow-hidden bg-white">
      <div className="page-shell">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2 lg:items-start">
          <Reveal className="max-w-2xl lg:max-w-xl" distance={24}>
            <div>
              <h2 className={SECTION_EYEBROW_CLASS}>
                {titleh2}
              </h2>
              <p className={SECTION_TITLE_CLASS}>
                {titleh1}
              </p>
              {leftContent ? <div className="mt-6">{leftContent}</div> : null}
            </div>
          </Reveal>

          {rightContent ? (
            <Reveal delay={110} distance={32}>
              {rightContent}
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
