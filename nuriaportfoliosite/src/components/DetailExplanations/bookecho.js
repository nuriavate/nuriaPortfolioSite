import ProcessCarousel from "../carrousel";
import DetailSection from "../detailSection";

export default function BookEcho(){
      const processItems = [
        {
            imageSrc: "/imatges/Bookecho/book2.png",
            title: "1. Userflow",
            text: "I created a taskflow representing the steps a user goes through to complete a level in the app",
        },
        {
            imageSrc: "/imatges/Bookecho/book3.png",
            title: "2. Wireframes",
            text: "I illustrated the user journeys and information architecture with Figma.",
        },
        {
            imageSrc: "/imatges/Barcimed/wireframes.png",
            title: "3. Components",
            text: "Low fidelity wireframes to validate hierarchy and navigation.",
        },
        {
            imageSrc: "/imatges/Barcimed/components.jpg",
            title: "4. High Fidelity Prototype",
            text: "Next, I designed the components, including buttons, cards, illustrations, and other UI elements.",
        },
        {
            imageSrc: "/imatges/Barcimed/highfid.png",
            title: "5.Development",
            text: "The high-fidelity prototype has a clean, colorful, minimalist style highlighting the gamified elements.",
        },
    ];
    return(
        <div>
            <DetailSection titleh1={"About the project"} rightContent={<p>Many readers struggle to maintain consistent reading habits and to keep track of their personal libraries in an organised way.
</p>}></DetailSection>
            <DetailSection titleh1={"Problem Statement"} rightContent={<p>Many readers struggle to maintain consistent reading habits and to keep track of their personal libraries in an organised way.
</p>}></DetailSection>
<DetailSection titleh1={"Target Audience"} rightContent={<p>The project targets passionate readers who want to keep track of their reading activity and enjoy both exploring reviews and sharing their own opinions.
</p>}></DetailSection>
<ProcessCarousel items={processItems}></ProcessCarousel>

        </div>
    );
}
