import DetailSection from "../detailSection";
import VideoEmbed from "../videoEmbed";
import Section from "../section";
import ProjectList from "../projectList";
import { projects } from "../../constants/projectsData";

export default function StrangerThings(){

              const homeProjects = projects.filter(
            (p) => p.id === 4 || p.id === 9
        );

    return(
        <div>
            <DetailSection titleh1={"About the project"} rightContent={<p className="font-manrope text-base">
The idea of the project was to create a video featuring a clock while incorporating specific Adobe After Effects expressions such as time, index, loopOut, and random. For the visual concept, I decided to draw inspiration from the clock that repeatedly appears in one of the seasons of Stranger Things. First, I designed the vector elements in Adobe Illustrator and then imported them into the After Effects project.
            </p>}></DetailSection>
            <VideoEmbed videoId={"6qXUdbj3CvM"}></VideoEmbed>
                          <hr className="space-y-4 border-t border-[#270400]/10" />
                                    <Section titleh1={"You may also like"}></Section>
                                    <div className="page-shell">
                                        <ProjectList items={homeProjects} />
                                    </div>
        </div>
    );
}
