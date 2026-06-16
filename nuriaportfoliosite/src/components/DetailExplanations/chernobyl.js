import DetailSection from "../detailSection";
import VideoEmbed from "../videoEmbed";
import { projects } from "../../constants/projectsData";
import RelatedProjects from "../relatedProjects";

export default function Chernobyl(){

          const homeProjects = projects.filter(
            (p) => p.id === 4 || p.id === 8
        );

    return(
        <div>
            <DetailSection titleh1={"About the project"} rightContent={<p className="font-manrope text-base">
For this project, I recreated the opening of Chernobyl using the visual composition and editing style of Narcos, using Adobe After Effects for video editing and Adobe Photoshop to edit some of the images. The goal was to combine the narrative theme of Chernobyl with the distinctive aesthetic and pacing of the Narcos intro. To achieve this, I used several video editing techniques such as motion tracking to attach elements to moving parts of the footage, layer overlay to combine multiple visual components, and keyframing to control the movement, scale, and timing of different elements throughout the sequence.
            </p>}></DetailSection>
            <VideoEmbed videoId={"Dz0vBZ9qFL4"}></VideoEmbed>
              <hr className="space-y-4 border-t border-[#270400]/10" />
                        <RelatedProjects items={homeProjects} />
        </div>
    );
}
