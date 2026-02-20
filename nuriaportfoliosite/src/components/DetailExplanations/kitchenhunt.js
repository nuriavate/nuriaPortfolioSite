import DetailSection from "../detailSection";
import VideoEmbed from "../videoEmbed";

export default function KitchenHunt(){
    return(
        <div>
            <DetailSection titleh1={"The plot"} rightContent={<p className="font-raleway">Jeff has a kitchen that Klauss assumes he will inherit, because he is his only son. Jeff sees that his son is not serious about cooking or his future and decides to give her an ultimatum. If they don't manage to expand the business, you won't even be welcome to eat. Klauss has to wake up and get everything they ask for as quickly as possible to ensure at least a place there and not starve. With everything that is asked of him, Klauss becomes a nervous wreck and anxiety makes everything seem like a world to him, literally.</p>}></DetailSection>
            <VideoEmbed videoId={"v0rCEaGLmX0"}></VideoEmbed>
        </div>
    );
}