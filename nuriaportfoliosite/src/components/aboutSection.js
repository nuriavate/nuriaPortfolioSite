import {
  CursorArrowRaysIcon,
  PaintBrushIcon,
  SparklesIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import ButtonText from "./buttonText";
import LinkButton from "./linkButton";
import Reveal from "./reveal";
import {
  SECTION_BODY_CLASS,
  SECTION_BODY_SECONDARY_CLASS,
  SECTION_EYEBROW_CLASS,
  SECTION_TITLE_CLASS,
} from "./sectionTypography";
const services = [
  { title: "UX/UI Design", icon: CursorArrowRaysIcon },
  { title: "Visual & Motion Design", icon: SwatchIcon },
  { title: "Interactive & Frontend Development", icon: SparklesIcon },
];

export default function AboutSection() {
  return (
    <section className="section-space relative isolate overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-16 -z-10 h-72 opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(55% 55% at 20% 45%, rgba(230,58,39,0.14) 0%, rgba(230,58,39,0.06) 40%, rgba(255,255,255,0) 100%)",
        }}
      />

      <div className="page-shell grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-start lg:gap-16">
        <Reveal className="max-w-2xl" distance={24}>
          <p className={SECTION_EYEBROW_CLASS}>
            About me
          </p>
          <h2 className={SECTION_TITLE_CLASS}>
            Hi! I&apos;m Nuria
          </h2>

          <p className={`mt-6 ${SECTION_BODY_CLASS}`}>
            I&apos;m a Digital Product Designer graduated in Multimedia from
            CITM UPC. During my studies I worked on projects across UX/UI,
            front-end, graphic design, videogame art and motion design.
          </p>
          <p className={`mt-5 ${SECTION_BODY_SECONDARY_CLASS}`}>
            I enjoy building clear, engaging and memorable experiences with a
            balance of visual sensitivity, structure and versatility.
          </p>

          <div className="mt-10">
            <ButtonText to="/cv" text="See CV" />
          </div>

          <div className="mt-8">
            <LinkButton src="/cv/VaqueroNuriaCV_2026.pdf" text="Download my CV" />
            <LinkButton
              src="/cv/VaqueroNuriaCV_2026.pdf"
              text="Download my Portfolio"
            />
          </div>
        </Reveal>

        <Reveal className="lg:sticky lg:top-8" delay={130} distance={36}>
          <div className="relative mx-auto max-w-xl">
            <div
              aria-hidden="true"
              className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#E63A27]/10 blur-2xl transition-transform duration-700 ease-out hover:scale-110"
            />
            <img
              alt="Portrait of Nuria"
              src="/imatges/me.jpg"
              className="w-full rounded-[1.2rem] bg-[#270400] object-cover shadow-[0_24px_70px_-45px_rgba(39,4,0,0.35)] transition-transform duration-700 ease-out hover:-translate-y-1 hover:scale-[1.01]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
