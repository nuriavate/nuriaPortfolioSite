import DetailSection from "../detailSection";
import VideoEmbed from "../videoEmbed";

export default function StrangerThings(){
    return(
        <div>
            <DetailSection titleh1={"About the project"} rightContent={<p className="font-raleway text-base">
The idea of the project was to create a video featuring a clock while incorporating specific Adobe After Effects expressions such as time, index, loopOut, and random. For the visual concept, I decided to draw inspiration from the clock that repeatedly appears in one of the seasons of Stranger Things. First, I designed the vector elements in Adobe Illustrator and then imported them into the After Effects project.
            </p>}></DetailSection>
            <VideoEmbed videoId={"6qXUdbj3CvM"}></VideoEmbed>
            
        </div>
    );
}