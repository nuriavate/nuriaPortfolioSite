import { Link } from "react-router-dom";
import Section from "../components/section";
import LinkButton from "../components/linkButton";
import BentoCV from "../components/bentoCv";
import AwardCard from "../components/awardCard";
import SkillsSection from "../components/skillsSection";

function Cv() {
    return (
        <div>
            <Section titleh1={"Curriculum Vitae"} titleh2={"CV"} rightContent={
                <div className="pt-4">
                    <p>Núria Vaquero Tell</p>
                    <p>Born 7 February 2003, NJ, USA
                        Living and raised in Barcelona, Spain</p>
                    <LinkButton src="#" text={"+34 618 517 258"}></LinkButton>
                    <LinkButton src="#" text={"nvaquerot@gmail.com"}></LinkButton>
                    <LinkButton src="https://www.linkedin.com/in/núria-vaquero-tell" text={"Linkedin"}></LinkButton>
                </div>
            }>
            </Section>
            <hr className="my-4 border-t border-[#270400]/10" />
            <BentoCV></BentoCV>
            <hr className="my-4 border-t border-[#270400]/10" />
            {/*Awards and Reconitions */}
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">

                <div className="mt-16">
                    <h1 className="text-4xl font-semibold text-[#270400] sm:text-4xl">
                        Awards and Recognitions
                    </h1>

                    <div className="mt-8 space-y-4">
                        <AwardCard
                            title="Extraordinary TFG Award (2025)"
                            issuer="CITM UPC"
                            descript="Awarded Best Final Degree Project for quality, dedication, and
rigor."
                        />
                        <AwardCard
                            title="1st Place Hackathon Giravolt Award (2022)"
                            issuer="Dept. of Culture, Generalitat de Catalunya & UPC"
                            descript="Awarded for best cultural tech project promoting Catalan cultural
heritage"
                        />
                        <AwardCard
                            title="Premi Recerca Jove (PRJ 2021)"
                            issuer="Generalitat de Catalunya"
                            descript="Awarded for High School Final Research Project"
                        />
                    </div>
                </div>
            </div>
 <hr className="my-4 border-t border-[#270400]/10" />
 <SkillsSection></SkillsSection>
        </div>
    );
}
export default Cv;