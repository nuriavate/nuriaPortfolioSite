import ProcessCarousel from "../carrousel";
import DetailSection from "../detailSection";
import ProjectList from "../projectList";
import VideoEmbed from "../videoEmbed";
import { projects } from "../../constants/projectsData";
import Section from "../section";

export default function Barcimed() {
    const homeProjects = projects.filter(
        (p) => p.id === 1 || p.id === 4
    );
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
        {
            imageSrc: "/imatges/Barcimed/components.jpg",
            title: "4. Components",
            text: "Next, I designed the components, including buttons, cards, illustrations, and other UI elements.",
        },
        {
            imageSrc: "/imatges/Barcimed/highfid.png",
            title: "5.High-Fidelity Prototype",
            text: "The high-fidelity prototype has a clean, colorful, minimalist style highlighting the gamified elements.",
        },
    ];
    return (
        <div>
            <DetailSection
                titleh1="Problem Statement"
                rightContent={
                    <div className="space-y-4">
                        <p className="font-manrope">
                            Barcelona is a city with a great historical and cultural heritage.
                            The Gothic Quarter, the oldest part of the city, still preserves the
                            imprint of its medieval past. Unfortunately, the methods and
                            materials used to promote this heritage have become outdated, leading
                            to a certain disconnection between young people and the knowledge of
                            their own city’s history.
                        </p>
                        <p className="font-manrope">The goal was to create an immersive, gamified experience that combines narrative and geolocation, connects with young audiences, motivates them to learn, and sparks interest in the city’s history.</p>
                    </div>
                }
            />

            <VideoEmbed videoId="H1n5DJwscIk"></VideoEmbed>

            <hr className="my-4 border-t border-[#270400]/10" />
            <DetailSection
                titleh1="Target Audience"
                rightContent={
                    <div>
                        <p className="font-manrope">
                            The project targets Barcelona’s local population, especially those interested in cultural leisure. While mainly aimed at young people (ages 12–30), it is designed to be enjoyable for audiences of all ages.
                        </p>
                    </div>
                }
            />
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                <img
                    className="block h-auto w-full"
                    src="/imatges/Barcimed/public.png"
                    alt="Barcimed target audience graphic"
                />
            </div>
            <hr className="my-4 border-t border-[#270400]/10" />
            <ProcessCarousel title="Process" items={processItems} />

            <hr className="my-4 border-t border-[#270400]/10" />
            <DetailSection titleh1="How does it works"
                rightContent={
                    <div>
                        <p className="font-manrope">The project targets Barcelona’s local population, especially those interested in cultural leisure. While mainly aimed at young people (ages 10–30), it is designed to be enjoyable for audiences of all ages.</p>
                    </div>
                } />
            <hr className="my-4 border-t border-[#270400]/10" />
            <DetailSection titleh1="Visual Design"
                rightContent={
                    <div>
                        <p className="font-manrope">The project targets Barcelona’s local population, especially those interested in cultural leisure. While mainly aimed at young people (ages 10–30), it is designed to be enjoyable for audiences of all ages.</p>
                    </div>
                } />
            <hr className="space-y-4 border-t border-[#270400]/10" />
            <DetailSection titleh1="User testing and Results"
                rightContent={
                    <div className=" space-y-4">
                        <p className="font-manrope">To validate the project, we conducted testing with three target users. Although the sample was small, it provided valuable qualitative insights about the experience. Participants followed the proposed route using the app and completed a feedback form assessing key aspects of the project.</p>
                        <p className="font-manrope"><span className="font-semibold">Positive outcomes: </span>
                            The experience was immersive and engaging, with 360° videos and sound design particularly appreciated. The minimalist, colorful design and narrative encouraged exploration, and users reported learning about Barcelona’s history. Informational cards were valued for allowing flexible, pressure-free learning, and participants said they would recommend the experience to others.</p>
                        <p className="font-manrope"><span className="font-semibold">Areas for improvement:</span> Feedback highlighted usability and navigation issues, including unclear starting points and route guidance. Suggestions included enhancing the map, redesigning the route for efficiency, providing an overview of the journey, and making informational cards more interactive with visual or audio elements.</p>
                    </div>
                } />
            <hr className="space-y-4 border-t border-[#270400]/10" />
            <DetailSection titleh1="Future Scope"
                rightContent={
                    <div className=" space-y-4">
                        <p className="font-manrope">The project targets Barcelona’s local population, especially those interested in cultural leisure. While mainly aimed at young people (ages 10–30), it is designed to be enjoyable for audiences of all ages.</p>
                        <ul className="font-manrope">
                            <li>- Improve UX and navigation based on user feedback</li>
                            <li>- Make knowledge cards interactive and relevant to puzzles</li>
                            <li>- Develop a native mobile app for better performance and immersion</li>
                            <li>- Expand the storyline and character depth</li>
                            <li>- Refine technical and artistic details (AI voices, animations, accuracy)</li>
                            <li>- Add 360° spatial audio to enhance immersion</li>
                            <li>- Extend to other historical periods, themes, or cities</li>
                        </ul>
                    </div>
                } />
            <hr className="space-y-4 border-t border-[#270400]/10" />
            <Section titleh1={"You may also like"}></Section>
            <ProjectList items={homeProjects} />

        </div>

    );
}
