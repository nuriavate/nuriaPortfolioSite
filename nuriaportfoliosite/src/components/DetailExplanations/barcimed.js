import ProcessCarousel from "../carrousel";
import DetailSection from "../detailSection";
import VideoEmbed from "../videoEmbed";

export default function Barcimed() {
     const processItems = [
  {
    imageSrc: "/imatges/Barcimed/taskflow.png",
    title: "1. Taskflow",
    text: "I created a taskflow representing the steps a user goes through to complete a level in the app",
  },
  {
    imageSrc: "/imatges/Barcimed/userflow.png",
    title: "2. Userflow",
    text: "I illustrated the user journeys and information architecture with Figma.",
  },
  {
    imageSrc: "/imatges/Barcimed/wireframes.png",
    title: "3. Wireframes",
    text: "Low fidelity wireframes to validate hierarchy and navigation.",
  },
];
    return (
        <div>
            <DetailSection
                titleh1="Problem Statement"
                rightContent={
                    <div>
                        <p>
                            Barcelona is a city with a great historical and cultural heritage.
                            The Gothic Quarter, the oldest part of the city, still preserves the
                            imprint of its medieval past. Unfortunately, the methods and
                            materials used to promote this heritage have become outdated, leading
                            to a certain disconnection between young people and the knowledge of
                            their own city’s history.
                        </p>
                    </div>
                }
            />

            <VideoEmbed videoId="H1n5DJwscIk"></VideoEmbed>

            <hr className="my-4 border-t border-[#270400]/10" />
            <DetailSection
                titleh1="Target Audience"
                rightContent={
                    <div>
                        <p>
                            The project targets Barcelona’s local population, especially those interested in cultural leisure. While mainly aimed at young people (ages 12–30), it is designed to be enjoyable for audiences of all ages.
                        </p>
                    </div>
                }
            />
            <img className="mx-auto max-w-7xl px-6 lg:px-8" src="/imatges/Barcimed/public.png"></img>
       <hr className="my-4 border-t border-[#270400]/10" />        
<ProcessCarousel title="Process" items={processItems} />


            <DetailSection titleh1="How does it works"
                rightContent={
                    <div>
                        <p>The project targets Barcelona’s local population, especially those interested in cultural leisure. While mainly aimed at young people (ages 10–30), it is designed to be enjoyable for audiences of all ages.</p>
                    </div>
                } />
        </div>

    );
}
