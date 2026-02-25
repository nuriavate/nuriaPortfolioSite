import DetailSection from "../detailSection";
import FeatureVideo from "../featurevideo";
import FullImage from "../Fullimage";
import Section from "../section";
import { projects } from "../../constants/projectsData";
import ProjectList from "../projectList";

export default function Trescat() {
        const homeProjects = projects.filter(
            (p) => p.id === 2 || p.id === 3
        );
    return (
        <div>
            <DetailSection titleh1={"Problem Statement"} rightContent={
                <div className="grid gap-y-4 font-manrope">
                    <p>
                        3Cat is a free OTT platform operated by the CCMA, the Catalan public broadcasting corporation. As a publicly owned media initiative, it represents the main digital environment for audiovisual content in Catalan, much of which has a strong cultural component. It is accessible across multiple platforms. It was launched in October 2023 to adapt to new forms of audiovisual consumption and to strengthen its connection with younger audiences.
                    </p>
                    <p>
                        We were challenged to ideate new ways to gamify the platform to get more involved with the youth and engage them. The delivery was a high-fidelity prototype in Figma, tested and documented, but the proposals were evaluated during the process for the client.
                        Goals: Innovative concept, Connexion with different targets, Gamify experience
                    </p>
                </div>
            } />
            <hr className="my-4 border-t border-[#270400]/10" />
            <DetailSection titleh1={"Target Audience"} rightContent={<p className="font-manrope">The target audience was the Catalan population across all age groups. However, the project placed special emphasis on young people, who showed the lowest retention rates. Considering users of all ages and backgrounds was essential to ensure inclusivity and avoid exclusion.
            </p>} />
            <FullImage src="/imatges/3cat/protopersona.png" alt={"imatge proto persona"}></FullImage>
            <hr className="my-4 border-t border-[#270400]/10" />
            <DetailSection titleh1={"Process"} rightContent={
                <div className="grid gap-y-4 font-manrope">
                    <p>We followed a process of four phases.</p>
                    <ol className="grid gap-y-4 font-manrope">
                        <li><span class="font-bold">First Research:</span> Analisis from QA. An investigation of the main content types, tha target that was not been attracted with the contemporary channels at the time.</li>
                        <li><span class="font-bold">First Ideation:</span> The team was divided in four verticals. Each one getting in depth according to the QA: Accessibility, Multiscreen, Content, Interaction.</li>
                        <li><span class="font-bold">Iteration phases:</span> After this ideation and feedback of the client we determined three important concepts: Personal Evolution, Community and Discovery platform.</li>
                        <li><span class="font-bold">Consolidation:</span> We created the final prototype with the final ideas and then we presented it.</li>
                    </ol>
                </div>} />
            <hr className="my-4 border-t border-[#270400]/10" />
            <DetailSection titleh1={"Final Ideas"} rightContent={<p className="font-manrope">The final features address different user needs, enhancing exploration, motivation, personalisation, and interaction with the content. As a result, they increase overall user engagement with the platform.
            </p>} />
            <div className="w-full mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-8">
                    <div className="space-y-3">
                        <h1 className=" font-urbanist text-3xl font-semibold tracking-tight text-[#270400] sm:text-2xl">
                            Sign-Up and Onboarding
                        </h1>
                        <p className="font-manrope">The onboarding experience was designed to introduce the platform while identifying usersâ€™ preferences and interests in order to personalise the experience. The process is simple and fast, reducing friction and preventing fatigue during the first interaction.</p>
                    </div>
                    <FeatureVideo flush src={"https://res.cloudinary.com/dbv5idped/video/upload/v1771854473/2026-02-23-13-29-11_uapvyp.mp4"}></FeatureVideo>
                </div>
            </div>

            <div className="w-full mx-auto mt-12 max-w-7xl px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-8">
                    <div className="space-y-3">
                        <h1 className="font-urbanist text-3xl font-semibold tracking-tight text-[#270400] sm:text-2xl">Emotion Searcher</h1>
                        <p className="font-manrope">The emotion-based search allows user to discover content according to their emotional state rather than traditional categories and genres.</p>
                    </div>
                    <FeatureVideo flush src={"https://res.cloudinary.com/dbv5idped/video/upload/v1771854584/2026-02-23_14-24-02_dtqi3e.mkv"}></FeatureVideo>
                </div>
            </div>
            <div className="w-full mx-auto mt-12 max-w-7xl px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-8">
                    <div className="space-y-3">
                        <h1 className="font-urbanist text-3xl font-semibold tracking-tight text-[#270400] sm:text-2xl">Drops</h1>
                        <p className="font-manrope">Drops are rewards unlocked while watching live content. They appear as QR codes that users scan with their mobile devices to receive exclusive items, such as profile wallpapers.</p>
                    </div>
                    <FeatureVideo flush src={"https://res.cloudinary.com/dbv5idped/video/upload/v1771854634/2026-02-23_14-32-18_ifkl1t.mkv"}></FeatureVideo>
                </div>
            </div>

            <div className="w-full mx-auto mt-12 max-w-7xl px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-8">
                    <div className="space-y-3">
                        <h1 className="font-urbanist text-3xl font-semibold tracking-tight text-[#270400] sm:text-2xl">Live Chat</h1>
                        <p className="font-manrope">Live chats allow users to interact and actively participate during live sessions. They can be personalized to enhance the individual user experience and can also be accessed on mobile devices via QR code.</p>
                    </div>
                    <FeatureVideo flush src={"https://res.cloudinary.com/dbv5idped/video/upload/v1771855087/2026-02-23_14-57-06_ewrmeo.mkv"}></FeatureVideo>
                </div>
            </div>

            <div className="w-full mx-auto mt-12 max-w-7xl px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-8">
                    <div className="space-y-3">
                        <h1 className="font-urbanist text-3xl font-semibold tracking-tight text-[#270400] sm:text-2xl">Edit Profile</h1>
                        <p className="font-manrope">Providing editable profiles allows users to express their identity within the platform. They can customise profile photos and wallpapers inspired by their favourite shows, reinforcing personalisation and engagement.</p>
                    </div>
                    <FeatureVideo flush src={"https://res.cloudinary.com/dbv5idped/video/upload/v1771855360/2026-02-23_15-00-23_oqjtoq.mkv"}></FeatureVideo>
                </div>
            </div>

            <div className="w-full mx-auto mt-12 max-w-7xl px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-8">
                    <div className="space-y-3">
                        <h1 className="font-urbanist text-3xl font-semibold tracking-tight text-[#270400] sm:text-2xl">Game "Atrapa'm si pots"</h1>
                        <p className="font-manrope">Games inspired by usersâ€™ favourite shows help them feel part of the experience.</p>
                    </div>
                    <FeatureVideo flush src={"https://res.cloudinary.com/dbv5idped/video/upload/v1771855370/2026-02-23_15-01-30_ectdiy.mkv"}></FeatureVideo>
                </div>
            </div>
          
            <div className="w-full mx-auto mt-12 max-w-7xl px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-8">
                    <div className="space-y-3">
                        <h1 className="font-urbanist text-3xl font-semibold tracking-tight text-[#270400] sm:text-2xl">Recat and Calendar</h1>
                        <p className="font-manrope">Recat is a personalized video recap of usersâ€™ most-watched content, providing insights into their viewing habits and enhancing engagement and retention.</p>
                    </div>
                    <FeatureVideo flush src={"https://res.cloudinary.com/dbv5idped/video/upload/v1771855836/2026-02-23_15-07-40_yeqlyg.mkv"}></FeatureVideo>
                </div>
            </div>
           
            <hr className="my-4 border-t border-[#270400]/10" />

            <DetailSection titleh1={"Usability Test"} rightContent={<div className="font-manrope"><p>We conducted a usability test with five users to evaluate the emotion-based search engine, the game Atrapaâ€™m si pots, and the overall layout. Participants were asked to search content based on their current emotion and interact with the game to assess usability and engagement.
            </p></div>}></DetailSection>

            <FullImage src={"/imatges/3cat/usabilitytest.jpg"} alt={"Prototype testing process"}></FullImage>
            <hr className="my-4 border-t border-[#270400]/10" />
            <DetailSection titleh1={"Results"} rightContent={<div>
                <ul className="font-manrope">
                    <li>- 5 users tested the prototype; overall experience perceived as intuitive and easy to use.</li>
                    <li>- Emotion-based search engine and gamified elements were the most valued features.</li>
                    <li>- Visual design (low text, strong imagery) enhanced engagement and clarity.</li>
                    <li>- Minor usability issues detected in initial navigation and typography hierarchy.</li>
                    <li>- Improvements identified: clearer onboarding, stronger search visibility, refined text formatting.</li>
                </ul>
            </div>}></DetailSection>
            <hr className="space-y-4 border-t border-[#270400]/10" />
            <Section titleh1={"You may also like"}></Section>
            <ProjectList items={homeProjects} />
        </div>
    );
}
