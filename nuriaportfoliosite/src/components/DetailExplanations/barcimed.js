import ProcessCarousel from "../carrousel";
import DetailSection from "../detailSection";
import ProjectList from "../projectList";
import VideoEmbed from "../videoEmbed";
import { projects } from "../../constants/projectsData";
import Section from "../section";
import DoubleImage from "../doubleImage";

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

      const processItems2 = [
        {
            imageSrc: "/imatges/Barcimed/characters.jpg",
            title: "1. Characters",
            text: "I created the characters with a minimalist and vectorial design with Figma and Illustrator.",
        },
        {
            imageSrc: "/imatges/Barcimed/scenes.png",
            title: "2. Scenes",
            text: "The scenes are a hybrid of 3D and 2D sprites, taking references from real-life locations of that period.",
        },
        {
            imageSrc: "/imatges/Barcimed/scenesetup.png",
            title: "3. Scene setup in Unity",
            text: "I placed all scene elements, including textured 3D environments, 2D assets/sprites, and characters, preparing the scene for animation.",
        },
        {
            imageSrc: "/imatges/Barcimed/animation.png",
            title: "4. Animation",
            text: "Finally, I animated the camera and characters with rigs, added lip-sync using the uLipSync library, applied special effects, and recorded in stereoscopic 360° mode.",
        }
    ];
    return (
        <div>
            <DetailSection titleh1={"About the Project"} rightContent={<p className="font-manrope">Barcimed is my Final Degree Project and winner of an Extraordinary Award. It is an immersive, gamified experience that combines narrative and geolocation, engages young audiences, motivates learning, and sparks interest in the city’s history.</p>}></DetailSection>
              <VideoEmbed videoId="H1n5DJwscIk"></VideoEmbed>
              <hr className="my-4 border-t border-[#270400]/10" />
            <DetailSection
                titleh1="Problem Statement"
                rightContent={
                    <div className="space-y-4">
                        <p className="font-manrope">
                            Barcelona is a city with a great historical and cultural heritage.
                            The Gothic Quarter, the oldest part of the city, still preserves the imprint of its medieval past. Unfortunately, the methods and
                            materials used to promote this heritage have become outdated, leading to a certain disconnection between young people and the knowledge of their own city’s history.
                        </p>            
                    </div>
                }
            />
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
                        <DetailSection titleh1="Solution"
                rightContent={
                    <div>
                        <p className="font-manrope">An interactive web app that guides users on a city route, where they solve puzzles by observing their surroundings to unlock immersive 360° videos and educational content in the form of cards.</p>
                    </div>
                } />
            <div className="mx-auto mt-8 w-full max-w-7xl px-6 lg:px-8">
                <div className="mx-auto w-full max-w-[560px] lg:max-w-[680px]">
                    <div className="relative">
                        <div className="absolute left-[6.5%] top-[3%] z-0 h-[94%] w-[86%] overflow-hidden rounded-[1.1rem] bg-black sm:rounded-[3rem]">
                            <video
                                className="h-full w-full object-cover"
                                src="https://res.cloudinary.com/dbv5idped/video/upload/v1772482541/ScreenRecording_03-02-2026_21-11-42_1_bdqab5.mov"
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls={false}
                                onPause={(e) => e.currentTarget.play()}
                            />
                        </div>
                        <img
                            className="relative z-10 block h-auto w-full pointer-events-none select-none"
                            src="/imatges/phone2.png"
                            alt="Phone frame horizontal"
                        />
                    </div>
                </div>
            </div>
                 <hr className="my-4 border-t border-[#270400]/10" />
            <ProcessCarousel title="Process" items={processItems} />

            <hr className="my-4 border-t border-[#270400]/10" />

            <DetailSection titleh1="Visual Design"
                rightContent={
                    <div>
                        <p className="font-manrope">The project targets Barcelona’s local population, especially those interested in cultural leisure. While mainly aimed at young people (ages 10–30), it is designed to be enjoyable for audiences of all ages.</p>
                    </div>
                } />
            <DoubleImage src1={"/imatges/Barcimed/colors.png"} src2={"/imatges/Barcimed/fonts.png"}></DoubleImage>
            <hr className="space-y-4 border-t border-[#270400]/10" />
            <DetailSection titleh1={"The 360 video production"} rightContent={<p></p>}></DetailSection>
            <ProcessCarousel items={processItems2}></ProcessCarousel>
            <div className="mx-auto mt-8 w-full max-w-7xl px-6 lg:px-8">
                <div className="mx-auto w-full max-w-[560px] lg:max-w-[680px]">
                    <div className="relative">
                        <div className="absolute left-[3.5%] top-[7%] z-0 h-[85%] w-[94%] overflow-hidden rounded-[1.1rem] bg-black sm:rounded-[1.5rem]">
                            <video
                                className="h-full w-full object-cover"
                                src="https://res.cloudinary.com/dbv5idped/video/upload/v1772477107/ScreenRecording_03-02-2026_19-19-50_1_qsnydj.mov"
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls={false}
                                onPause={(e) => e.currentTarget.play()}
                            />
                        </div>
                        <img
                            className="relative z-10 block h-auto w-full pointer-events-none select-none"
                            src="/imatges/phone.png"
                            alt="Phone frame horizontal"
                        />
                    </div>
                </div>
            </div>
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
