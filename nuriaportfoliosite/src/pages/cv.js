import Section from "../components/section";
import LinkButton from "../components/linkButton";
import BentoCV from "../components/bentoCv";
import AwardCard from "../components/awardCard";
import SkillsSection from "../components/skillsSection";

function Cv() {
  return (
    <div className="bg-white">
      <Section
        titleh1={"Curriculum Vitae"}
        titleh2={"CV"}
        rightContent={
          <div className="pt-2">
            <h3 className="font-urbanist text-3xl font-semibold text-[#270400]">
              Nuria Vaquero Tell
            </h3>
            <p className="font-manrope mt-4 text-base leading-7 text-[#270400]/80">
              Born 7 February 2003, NJ, USA
              <br />
              Living and raised in Barcelona, Spain
            </p>

            <div className="mt-6 border-t border-[#270400]/10 pt-5">
              <LinkButton src="tel:+34618517258" text={"+34 618 517 258"} />
              <LinkButton
                src="mailto:nvaquerot@gmail.com"
                text={"nvaquerot@gmail.com"}
              />
              <LinkButton
                src="https://www.linkedin.com/in/nuria-vaquero-tell"
                text={"Linkedin"}
              />
            </div>
          </div>
        }
      ></Section>

      <div className="page-shell pb-4 sm:pb-6">
        <hr className="border-t border-[#270400]/10" />
      </div>

      <BentoCV></BentoCV>

      <div className="page-shell py-4 sm:py-6">
        <hr className="border-t border-[#270400]/10" />
      </div>

      <section className="section-space-sm bg-white">
        <div className="page-shell">
          <div className="max-w-3xl">
            <h1 className="font-urbanist text-4xl font-semibold text-[#270400]">
              Awards and Recognitions
            </h1>
          </div>

          <div className="mt-10 space-y-5">
            <AwardCard
              title="Extraordinary TFG Award (2025)"
              issuer="CITM UPC"
              descript="Awarded Best Final Degree Project for quality, dedication, and rigor."
            />
            <AwardCard
              title="1st Place Hackathon Giravolt Award (2022)"
              issuer="Dept. of Culture, Generalitat de Catalunya & UPC"
              descript="Awarded for best cultural tech project promoting Catalan cultural heritage"
            />
            <AwardCard
              title="Premi Recerca Jove (PRJ 2021)"
              issuer="Generalitat de Catalunya"
              descript="Awarded for High School Final Research Project"
            />
          </div>
        </div>
      </section>

      <div className="page-shell py-4 sm:py-6">
        <hr className="border-t border-[#270400]/10" />
      </div>

      <SkillsSection></SkillsSection>
    </div>
  );
}

export default Cv;
