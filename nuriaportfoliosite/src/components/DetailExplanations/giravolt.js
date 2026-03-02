import DetailSection from "../detailSection";
import DoubleImage from "../doubleImage";
import FullImage from "../Fullimage";
import VideoEmbed from "../videoEmbed";
import Section from "../section";
import { projects } from "../../constants/projectsData";
import ProjectList from "../projectList";

export default function Giravolt(){
  const homeProjects = projects.filter(
              (p) => p.id === 1 || p.id === 3
          );
  
    return(
        <div>
              <DetailSection titleh1={"About the project"} rightContent={<p className="font-manrope">Masks & Marquises is a virtual reality video game inspired by Palau Moja in Barcelona, developed in collaboration with the Agència Catalana del Patrimoni Cultural through the Giravolt program. The project aims to spark interest in cultural heritage through immersive technology. Set during a baroque masquerade hosted by Antonio López y López, the story takes a dark turn when the Marquis suddenly dies in the middle of the event. Meanwhile, a spy sent by his enemy, Francesc Bru, is investigating him for fraud, but secretly, the spy is also a radical labour activist who sees the mission as a chance to get closer to the elite and bring down the bourgeoisie.</p>}></DetailSection>
              <hr className="my-4 border-t border-[#270400]/10" />
              <DetailSection  titleh1={"Problem Statement"} rightContent={<p className="font-manrope">This project originated from a hackathon organized by the Agència Catalana del Patrimoni Cultural and CITM, where participants were challenged to create a viable and engaging technological solution to bring cultural heritage closer to the public. The challenge focused on using Giravolt 3D models to promote interaction and make heritage experiences more appealing, especially to younger audiences.</p>}></DetailSection>
              <FullImage src={"/imatges/Giravolt/foto2.png"}></FullImage>
              <hr className="my-4 border-t border-[#270400]/10" />
              <DetailSection titleh1={"Visual Design"}></DetailSection>
              <DoubleImage src1={"/imatges/Giravolt/colors.png"} src2={"/imatges/Giravolt/font.png"}></DoubleImage>
              <hr className="my-4 border-t border-[#270400]/10" />
              <DetailSection titleh1={"The HUD UI"}></DetailSection>
               <FullImage src={"/imatges/Giravolt/components.png"}></FullImage>
              <FullImage src={"/imatges/Giravolt/HUD1.png"}></FullImage>
                <FullImage src={"/imatges/Giravolt/HUD2.png"}></FullImage>
                  <FullImage src={"/imatges/Giravolt/HUD3.png"}></FullImage>
                  <hr className="my-4 border-t border-[#270400]/10" />
              <DetailSection titleh1={"Assets & Characters"}></DetailSection>
              <hr className="my-4 border-t border-[#270400]/10" />
              <DetailSection titleh1={"Result"}></DetailSection>
            <VideoEmbed videoId={"Ysv7c4oLHxw"}></VideoEmbed>
            <hr className="my-4 border-t border-[#270400]/10" />
        

         <Section titleh1={"You may also like"}></Section>
                                    <ProjectList items={homeProjects} />
        </div>
    );
}
