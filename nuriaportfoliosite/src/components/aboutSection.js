import {
  CursorArrowRaysIcon,
  PaintBrushIcon,
  SparklesIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import LinkButton from "./linkButton";

const services = [
  {
    title: "UX/UI Design",
    description:
      "Clear flows, thoughtful interfaces, and digital experiences shaped around user needs.",
    icon: CursorArrowRaysIcon,
  },
  {
    title: "Graphic Design",
    description:
      "Visual systems, layouts, and assets that bring consistency and personality to each project.",
    icon: SwatchIcon,
  },
  {
    title: "Motion & Visual Storytelling",
    description:
      "Narratives, interactions, and visual rhythm that make ideas easier to feel and remember.",
    icon: SparklesIcon,
  },
  {
    title: "Digital Product Craft",
    description:
      "A multidisciplinary approach that connects concept, interface, and execution with rigor.",
    icon: PaintBrushIcon,
  },
];

const focusAreas = [
  "User-centered thinking",
  "Visual identity",
  "Interaction design",
  "Creative direction",
  "Front-end sensitivity",
  "Detail-oriented execution",
];

export default function AboutSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-12 -z-10 h-72 opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(55% 55% at 20% 45%, rgba(230,58,39,0.16) 0%, rgba(230,58,39,0.08) 40%, rgba(255,255,255,0) 100%)",
        }}
      />

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-xl">
              <p className="font-urbanist text-base/7 font-semibold text-[#270400]">
                ABOUT ME
              </p>
              <h1 className="font-urbanist mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#270400] sm:text-5xl">
                Hi! I&apos;m Nuria
              </h1>
              <p className="font-manrope mt-6 text-xl/8 text-[#270400]">
                I&apos;m a Digital Product Designer, graduated in Multimedia from
                CITM UPC. Throughout my academic journey, I developed projects in
                UX/UI Design, Front-end Development, Graphic Design, Videogame
                Art and Design, and Motion Design.
              </p>
              <p className="font-manrope mt-6 text-lg/8 text-[#270400]">
                I enjoy building clear, engaging, and memorable experiences,
                combining visual sensitivity with structure, versatility, and
                rigor.
              </p>

              <div className="mt-10 rounded-[2rem] border border-[#270400]/10 bg-[#F8F1EB] p-6 shadow-[0_20px_60px_-40px_rgba(39,4,0,0.45)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="font-urbanist mt-2 text-2xl font-semibold text-[#270400]">
                      Designing with purpose, sensitivity, and intuitive interactions.
                    </h2>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {services.map((service) => {
                    const Icon = service.icon;

                    return (
                      <article
                        key={service.title}
                        className="rounded-[1.5rem] border border-[#270400]/10 bg-white p-5 transition-transform duration-300 hover:-translate-y-1"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E63A27]/10 text-[#E63A27]">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <h3 className="font-urbanist mt-4 text-xl font-semibold text-[#270400]">
                          {service.title}
                        </h3>
                        <p className="font-manrope mt-2 text-sm leading-7 text-[#270400]/80">
                          {service.description}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-6 -top-6 h-28 w-28 rounded-full "
            />
            <img
              alt="Portrait of Nuria"
              src="/imatges/me.jpg"
              className="w-full max-w-none rounded-[1.75rem] bg-[#270400] object-cover shadow-xl ring-1 ring-[#270400]/10 sm:w-228"
            />
          </div>
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-[#270400] lg:max-w-lg">
              <LinkButton
                src="/cv/VaqueroNuriaCV_2026.pdf"
                text="Download my CV"
              />
              <LinkButton
                src="/cv/VaqueroNuriaCV_2026.pdf"
                text="Download my Portfolio"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
