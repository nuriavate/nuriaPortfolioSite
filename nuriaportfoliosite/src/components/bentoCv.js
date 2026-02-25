import ExperienceComponent from "./experienceComponent";
import { cvData } from "../constants/cvData";


export default function BentoCV() {
    const experienceData = cvData.filter(
        (item) => item.type === "experience"
    );

    const educationData = cvData.filter(
        (item) => item.type === "education"
    );
    return (
<div>
  <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">

      {/* WORKING EXPERIENCE */}
<div className="relative lg:row-span-2">
  <div className="relative flex h-full flex-col">
    <div className="pr-8 pt-8 pb-3 sm:pr-10">
      <h1 className="font-urbanist mt-2 text-4xl font-semibold text-[#270400] sm:text-4xl">
        Working Experience
      </h1>
    </div>

    <div className="mt-6 space-y-4 pr-8 pb-8 sm:pr-10">
      {experienceData.map((item) => (
        <ExperienceComponent key={item.id} {...item} />
      ))}
    </div>
  </div>
</div>


      {/* EDUCATION */}
<div className="relative">
  <div className="relative flex h-full flex-col">

    <div className="pr-8 pt-8 sm:pr-10 sm:pt-10">
      <h1 className="font-urbanist mt-2 text-4xl font-semibold text-[#270400] sm:text-4xl">
        Education
      </h1>
    </div>

    <div className="mt-6 space-y-4 pr-8 pb-8 sm:pr-10">
      {educationData.map((item) => (
        <ExperienceComponent key={item.id} {...item} />
      ))}
    </div>

  </div>
</div>

      {/* LANGUAGE */}
<div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
  <div className="relative flex h-full flex-col">

    <div className="pr-8 pt-8 sm:pr-10 sm:pt-10">

    </div>

<h1 className="font-urbanist mt-2 text-4xl font-semibold tracking-tight text-[#270400] sm:text-4xl">
  Language
</h1>

<div className="mt-6 pr-8 pb-8 sm:pr-10 space-y-4">
  <div>
    <p className="text-2xl font-semibold font-urbanist text-[#270400]">Catalan, Spanish</p>
    <p className="font-manrope text-base text-[#270400]">Native</p>
  </div>

  <div>
    <p className="text-2xl font-semibold font-urbanist text-[#270400]">English</p>
    <p className="font-manrope text-base text-[#270400]">
      Cambridge English: B2 First (FCE)
    </p>
  </div>
</div>


  </div>
</div>

    </div>
  </div>
</div>

    )
}
