import DetailSection from "../detailSection";
import Section from "../section";

export default function Trescat() {
    return (
       <div>
            <DetailSection titleh1={"Problem Statement"} rightContent={
                <div>
                    <p>
                        3Cat is a free OTT platform operated by the CCMA, the Catalan public broadcasting corporation. As a publicly owned media initiative, it represents the main digital environment for audiovisual content in Catalan, much of which has a strong cultural component. It is accessible across multiple platforms. It was launched in October 2023 to adapt to new forms of audiovisual consumption and to strengthen its connection with younger audiences.
                    </p>
                    <p>
                        We were challenged to ideate new ways to gamify the platform to get more involved with the youth and engage them. The delivery was a high-fidelity prototype in Figma, tested and documented, but the proposals were evaluated during the process for the client.
                        Goals:
                        Innovative concept
                        Connexion with different targets
                        Gamify experience
                    </p>
                </div>
            
            }/>
            <DetailSection titleh1={"Target Audience"} rightContent={<p>The target audience was the Catalan population across all age groups. However, the project placed special emphasis on young people, who showed the lowest retention rates. Considering users of all ages and backgrounds was essential to ensure inclusivity and avoid exclusion.
</p>}/>
<DetailSection titleh1={"Process"} rightContent={<p>We followed a process of four phases.
    1. First Research: Analisis from QA. An investigation of the main content types, tha target that was not been attracted with the contemporary channels at the time.
    2. First Ideation: The team was divided in four verticals. Each one getting in depth according to the QA: Accessibility, Multiscreen, Content, Interaction.
    3. Iteration phases: After this ideation and feedback of the client we determined three important concepts: Personal Evolution, Community and Discovery platform.
    4. Consolidation: We created the final prototype with the final ideas and then we presented it.
</p>}/>
<DetailSection titleh1={"Final Ideas"} rightContent={<p>Adding friends
Profile creation - New user
Discoveries
Xat on live
Recat
Atrapa’m si pots

</p>}/>
<DetailSection titleh1={"Usability Test"} rightContent={<div><p>We tested the functionalities: Searcher, Game, Layout
</p></div>}></DetailSection>
<img className="mx-auto max-w-7xl px-6 lg:px-8" src={"/imatges/3cat/usabilitytest.jpg"} ></img>
        </div>
    );
}