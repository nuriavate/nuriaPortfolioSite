import ExperienceComponent from "./experienceComponent";
import { cvData } from "../constants/cvData";

export default function BentoCV() {
  const experienceData = cvData.filter((item) => item.type === "experience");
  const educationData = cvData.filter((item) => item.type === "education");

  return (
    <div className="section-space-sm bg-white pt-2 sm:pt-4">
      <div className="page-shell">
        <div className="grid gap-x-10 gap-y-12 lg:grid-cols-2 lg:grid-rows-2">
          <CvCard title="Working Experience" className="lg:row-span-2">
            <div className="space-y-5">
              {experienceData.map((item) => (
                <ExperienceComponent key={item.id} {...item} />
              ))}
            </div>
          </CvCard>

          <CvCard title="Education">
            <div className="space-y-5">
              {educationData.map((item) => (
                <ExperienceComponent key={item.id} {...item} />
              ))}
            </div>
          </CvCard>

          <CvCard title="Language" className="lg:col-start-2 lg:row-start-2">
            <div className="space-y-5">
              <div className="py-1">
                <p className="font-urbanist text-2xl font-semibold text-[#270400]">
                  Catalan, Spanish
                </p>
                <p className="font-manrope mt-1 text-base text-[#270400]/75">
                  Native
                </p>
              </div>
              <div className="py-1">
                <p className="font-urbanist text-2xl font-semibold text-[#270400]">
                  English
                </p>
                <p className="font-manrope mt-1 text-base text-[#270400]/75">
                  Cambridge English: B2 First (FCE)
                </p>
              </div>
            </div>
          </CvCard>
        </div>
      </div>
    </div>
  );
}

function CvCard({ title, children, className = "" }) {
  return (
    <section className={`p-1 sm:p-2 ${className}`}>
      <h2 className="font-urbanist text-3xl font-semibold text-[#270400] sm:text-4xl">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
