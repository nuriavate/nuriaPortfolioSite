import ProcessCarousel from "../carrousel";
import DetailSection from "../detailSection";
import DoubleImage from "../doubleImage";
import FullImage from "../Fullimage";
import VideoEmbed from "../videoEmbed";

export default function KitchenHunt() {
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
    return (
        <div>
            <DetailSection
                titleh1={"The Plot"}
                rightContent={
                    <p className="font-raleway">
                        Jeff owns a kitchen that Klauss assumes he will inherit, as he is his only son. However, Jeff realizes that Klauss is not taking cooking or his future seriously and decides to give him an ultimatum. If he fails to help grow the business, he won’t even be welcome to eat there. Klauss must step up and complete every task as quickly as possible to secure his place and avoid being left with nothing. As the pressure builds, Klauss becomes increasingly overwhelmed, and his anxiety turns every challenge into something much bigger—almost like an entire world of its own.
                    </p>
                }
            />
            <VideoEmbed videoId={"v0rCEaGLmX0"}></VideoEmbed>
            <hr className="my-4 border-t border-[#270400]/10" />
            <DetailSection titleh1={"The process"} rightContent={<p></p>}></DetailSection>
            <ProcessCarousel title="The Level Design" items={processItems}></ProcessCarousel>
            <hr className="my-4 border-t border-[#270400]/10" />
            <DetailSection titleh1={"Characters"}></DetailSection>
            <DoubleImage src1={"/imatges/KitchenHunt/turnaroundklauss.gif"} src2={"/imatges/KitchenHunt/jeff.jpg"}></DoubleImage>
            <hr className="my-4 border-t border-[#270400]/10" />
            <DetailSection titleh1={"The scene"}></DetailSection>
            <div className="space-y-4">  
                <FullImage src={"/imatges/KitchenHunt/game1.png"}></FullImage>
                <FullImage src={"/imatges/KitchenHunt/game2.png"}></FullImage>
                <FullImage src={"/imatges/KitchenHunt/game3.png"}></FullImage>
                <FullImage src={"/imatges/KitchenHunt/game4.png"}></FullImage>
                <FullImage src={"/imatges/KitchenHunt/game5.png"}></FullImage></div>

        </div>
    );
}