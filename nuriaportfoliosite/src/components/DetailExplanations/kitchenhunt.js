import ProcessCarousel from "../carrousel";
import DetailSection from "../detailSection";
import DoubleImage from "../doubleImage";
import FullImage from "../Fullimage";
import VideoEmbed from "../videoEmbed";

export default function KitchenHunt(){
const processItems = [
    {
        imageSrc: "/imatges/KitchenHunt/lev1.png",
        title: "1. Level 1 (Tutorial)",
        text: "The player needs to collect bread and tomato to prepare 'pa amb tomàquet'.",
    },
    {
        imageSrc: "/imatges/KitchenHunt/lev2.png",
        title: "2. Level 2",
        text: "This level takes place in the dish pit. The player needs to collect bread, cheese, butter, and jam to make a sandwich.",
    },
    {
        imageSrc: "/imatges/KitchenHunt/lev3.png",
        title: "3. Level 3",
        text: "This level takes place on the kitchen line. The player needs to collect tomatoes, pasta, meat, flour, and milk to cook lasagna.",
    },
];
    return(
        <div>
            <DetailSection titleh1={"The plot"} rightContent={<p className="font-raleway" >Jeff has a kitchen that Klauss assumes he will inherit, because he is his only son. Jeff sees that his son is not serious about cooking or his future and decides to give her an ultimatum. If they don't manage to expand the business, you won't even be welcome to eat. Klauss has to wake up and get everything they ask for as quickly as possible to ensure at least a place there and not starve. With everything that is asked of him, Klauss becomes a nervous wreck and anxiety makes everything seem like a world to him, literally.</p>}></DetailSection>
            <VideoEmbed videoId={"v0rCEaGLmX0"}></VideoEmbed>
              <hr className="my-4 border-t border-[#270400]/10" />
            <DetailSection titleh1={"The process"} rightContent={<p></p>}></DetailSection>
            <DetailSection titleh1={"The Level Design"} rightContent={<p>In this case, the experience is divided into three levels, each set in a different section of the same kitchen. The first level serves as a tutorial to help users familiarise themselves with the game.</p>}></DetailSection>
              <hr className="my-4 border-t border-[#270400]/10" />
            <ProcessCarousel title="The Level Design" items={processItems}></ProcessCarousel>
              <hr className="my-4 border-t border-[#270400]/10" />
            <DetailSection titleh1={"Characters"}></DetailSection>
            <DoubleImage src1={"/imatges/KitchenHunt/turnaroundklauss.gif"} src2={"/imatges/KitchenHunt/jeff.jpg"}></DoubleImage>
              <hr className="my-4 border-t border-[#270400]/10" />
            <DetailSection titleh1={"The scene"}></DetailSection>
            <FullImage src={""}></FullImage>
        </div>
    );
}