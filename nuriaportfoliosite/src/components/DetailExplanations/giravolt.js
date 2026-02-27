import DetailSection from "../detailSection";
import FullImage from "../Fullimage";
import VideoEmbed from "../videoEmbed";

export default function Giravolt(){
    return(
        <div>
              <DetailSection titleh1={"About the project"}></DetailSection>
              
              <DetailSection  titleh1={"Problem Statement"} rightContent={<p className="font-manrope">This project originated from a hackathon organized by the Agència Catalana del Patrimoni Cultural and CITM, where participants were challenged to create a viable and engaging technological solution to bring cultural heritage closer to the public. The challenge focused on using Giravolt 3D models to promote interaction and make heritage experiences more appealing, especially to younger audiences.</p>}></DetailSection>
              <FullImage src={"/imatges/Giravolt/foto2.png"}></FullImage>
              <DetailSection titleh1={"The HUD UI"}></DetailSection>
              <FullImage src={"/imatges/Giravolt/HUD1.png"}></FullImage>
                <FullImage src={"/imatges/Giravolt/HUD2.png"}></FullImage>
                  <FullImage src={"/imatges/Giravolt/HUD3.png"}></FullImage>
              <DetailSection titleh1={"Assets & Characters"}></DetailSection>
              <DetailSection titleh1={"Result"}></DetailSection>
            <VideoEmbed videoId={"Ysv7c4oLHxw"}></VideoEmbed>
        
        </div>
    );
}
