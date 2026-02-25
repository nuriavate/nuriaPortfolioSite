import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Hero from "./components/hero";
import ProjectList from "./components/projectList";
import { projects } from "./constants/projectsData";

import Cv from "./pages/cv";
import Projects from "./pages/projects";
import Footer from "./components/footer";
import ContactSection from "./components/contactSection";
import AboutSection from "./components/aboutSection";
import Section from "./components/section";
import LinkButton from "./components/linkButton";
import Details from "./pages/details";
// importa las demás cuando existan:
// import UxUidesign from "./pages/uxuidesign";
// import VideogamesXR from "./pages/videogamesxr";
// import Other from "./pages/other";
// import DetailScreen from "./pages/detailScreen";

function Home() {
  const homeProjects = projects.filter(
    (p) => p.id === 1 || p.id === 4
  );

  return (
    <>
      <Hero />
      
      <div id="projects">
        <Section titleh1={"See what I've done"} titleh2={"WORK"} rightContent={
          <div>
            <p className="font-manrope mt-4 text-lg/8 text-[#270400]">Here's a small selection of some of the most creative projects I've had the opportunity to work on.</p>
            <LinkButton src="/Projects?uxui" text={"UX/UI Design Projects"} ></LinkButton>
            <LinkButton src="/Projects?vdxr" text={"Videogames and XR Projects"} ></LinkButton>
            <LinkButton src="/Projects?vdxr" text={"Other Projects"} ></LinkButton>
          </div>
        }></Section>
      </div>
      <ProjectList items={homeProjects} />
      <hr className="my-4 border-t border-[#270400]/10" />
      <AboutSection></AboutSection>
      <hr className="my-4 border-t border-[#270400]/10" />
      <Section titleh1={"Let's connect!"} titleh2={"CONTACT"} leftContent={
        <div>
          <div className="mx-auto max-w-2xl ">
            <p className="mt-2 text-lg/8 text-gray-600 font-manrope">Feel free to contact me by email, phone, or throught the form.</p>
          </div>
          <LinkButton text={"+34 618 517 258"}></LinkButton>
          <LinkButton text={"nvaquerot@gmail.com"}></LinkButton>
          <LinkButton text={"Linkedin"}></LinkButton>
        </div>
      } rightContent={
        <ContactSection></ContactSection>
      }></Section>


    </>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
      <Footer></Footer>
      
    </>
  );
}
