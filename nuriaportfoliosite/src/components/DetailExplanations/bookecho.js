import ProcessCarousel from "../carrousel";
import DetailSection from "../detailSection";
import FullImage from "../Fullimage";
import Section from "../section";
import { projects } from "../../constants/projectsData";
import ProjectList from "../projectList";
import DoubleImage from "../doubleImage";
import VideoEmbed from "../videoEmbed";

export default function BookEcho() {
 const homeProjects = projects.filter(
            (p) => p.id === 1 || p.id === 3
        );

    const processItems = [
        {
            imageSrc: "/imatges/Bookecho/book2.png",
            title: "1. User flow",
            text: "User flows were created to map all app functionalities in a clear and structured way.",
        },
        {
            imageSrc: "/imatges/Bookecho/book3.png",
            title: "2. Wireframes",
            text: "Wireframes were used to define layout, structure, and core features.",
        },
        {
            imageSrc: "/imatges/Bookecho/components.png",
            title: "3. Components",
            text: "Components, colours, and typography were developed following a consistent visual identity.",
        },
        {
            imageSrc: "/imatges/Bookecho/highfid.png",
            title: "4. High Fidelity Prototype",
            text: "A high-fidelity prototype was built to test key interactions and user experience.",
        },
        {
            imageSrc: "/imatges/Bookecho/code.png",
            title: "5.Development",
            text: "Built with React Native. Integrated: Google Books API for book data and Supabase for user content.",
        },
    ];
    return (
        <div>
            <DetailSection titleh1={"About the project"} rightContent={<p className="font-manrope">BookEcho is a mobile app for readers that helps users track their reading activity. It also encourages users to discover new books, share opinions with other readers, and stay motivated through challenges and rewards.
                The goal of BookEcho is to transform reading into an interactive and personalised experience, offering useful tools to manage a personal library.
            </p>}></DetailSection>
            <hr className="my-4 border-t border-[#270400]/10" />
            <DetailSection titleh1={"Problem Statement"} rightContent={<p className="font-manrope">Readers often lose track of their books, find it hard to stay consistent, and lack motivation to explore new reads.
            </p>}></DetailSection>
            <hr className="my-4 border-t border-[#270400]/10" />
            <DetailSection titleh1={"Solution"} rightContent={<p className="font-manrope">BookEcho transforms reading into an interactive experience. It offers tools to manage personal libraries, share opinions, and engage users through gamification.
            </p>}></DetailSection>

 <div className="w-full mx-auto mt-12 max-w-7xl px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-8">
                    <div className="space-y-3">
                        <h1 className="font-urbanist text-3xl font-semibold tracking-tight text-[#270400] sm:text-2xl">Getting Started</h1>
                        <p className="font-manrope">When a new user first opens the app, they create a profile and go through a guided onboarding. This introduces them to the main features and ensures their data is saved for a personalised experience.</p>
                    </div>
                </div>
                  <FullImage src={"/imatges/BookEcho/inici.png"}></FullImage>
            </div>

            <div className="w-full mx-auto mt-12 max-w-7xl px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-8">
                    <div className="space-y-3">
                        <h1 className="font-urbanist text-3xl font-semibold tracking-tight text-[#270400] sm:text-2xl">Lists</h1>
                        <p className="font-manrope">Users can organise books into three categories: To Read, Reading, and Read. They can also create custom lists.</p>
                    </div>
                </div>
                  <FullImage src={"/imatges/BookEcho/llistes.png"}></FullImage>
            </div>
            <div className="w-full mx-auto mt-12 max-w-7xl px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-8">
                    <div className="space-y-3">
                        <h1 className="font-urbanist text-3xl font-semibold tracking-tight text-[#270400] sm:text-2xl">Search and adding books</h1>
                        <p className="font-manrope">Users can search for books or add their own manually or via OCR.</p>
                    </div>

                </div>
                <FullImage src={"/imatges/BookEcho/search.png"}></FullImage>
            </div>

            <div className="w-full mx-auto mt-12 max-w-7xl px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-8">
                    <div className="space-y-3">
                        <h1 className="font-urbanist text-3xl font-semibold tracking-tight text-[#270400] sm:text-2xl">Ratings and Reviews</h1>
                        <p className="font-manrope">Users can rate books, write reviews, explore other users’ opinions, and view overall ratings.</p>
                    </div>

                </div>
                <FullImage src={"/imatges/BookEcho/ressenya.png"}></FullImage>
            </div>

            <div className="w-full mx-auto mt-12 max-w-7xl px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-8">
                    <div className="space-y-3">
                        <h1 className="font-urbanist text-3xl font-semibold tracking-tight text-[#270400] sm:text-2xl">Challenges and Rewards</h1>
                        <p className="font-manrope">The app includes periodic reading challenges that encourage users to stay active. Users are rewarded with badges.
                            Share: Users can share books with friends.</p>
                    </div>

                </div>
                <FullImage src={"/imatges/BookEcho/reptes.png"}></FullImage>
            </div>
            <hr className="my-4 border-t border-[#270400]/10" />
            <ProcessCarousel items={processItems}></ProcessCarousel>
            <hr className="my-4 border-t border-[#270400]/10" />
            <DetailSection titleh1={"Visual Design"} rightContent={<p className="font-manrope">The design is built around a fresh palette dominated by turquoise green, with coral and yellow accents that add contrast and visual dynamism. Light backgrounds reinforce a sense of clarity and cleanliness. Urbanist is used for headings, providing presence and modernity, while Raleway is applied to body text, ensuring elegance and strong readability.
            </p>}></DetailSection>
            <DoubleImage src1={"/imatges/Bookecho/colors.png"} src2={"/imatges/Bookecho/font.png"}></DoubleImage>
            <hr className="my-4 border-t border-[#270400]/10" />
            <DetailSection titleh1={"Results"} rightContent={
                <ul className="font-manrope">
                    <li>- Gamification helped users stay motivated.</li>
                    <li>- Organised lists improved reading consistency.</li>
                    <li>- Learned how design and reward influence habits.</li>
                </ul>}></DetailSection>
<VideoEmbed videoId={"bruBCcbozaA"}></VideoEmbed>
                            <hr className="space-y-4 border-t border-[#270400]/10" />
                            <Section titleh1={"You may also like"}></Section>
                            <ProjectList items={homeProjects} />
        </div>
    );
}
