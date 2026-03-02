import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/header";
import Hero from "./components/hero";
import FeaturedProjectsBento from "./components/featuredProjectsBento";
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
  const homeProjects = projects.slice(0, 6);

  return (
    <>
      <Hero />
      
      <div id="projects" className="mb-6">
        <Section titleh1={"Featured Works"} titleh2={"PROJECTS"} /*rightContent={
          <div>
            <p className="font-manrope mt-4 text-lg/8 text-[#270400]">Here's a small selection of some of the most creative projects I've had the opportunity to work on.</p>
            <LinkButton src="/Projects?uxui" text={"UX/UI Design Projects"} ></LinkButton>
            <LinkButton src="/Projects?vdxr" text={"Videogames and XR Projects"} ></LinkButton>
            <LinkButton src="/Projects?vdxr" text={"Other Projects"} ></LinkButton>
          </div>
        }*/></Section>
      </div>
      <FeaturedProjectsBento items={homeProjects} />
      <hr className="my-4 border-t border-[#270400]/10" />
      <AboutSection></AboutSection>
      <hr className="my-4 border-t border-[#270400]/10" />
      <div id="contact" className="mb-6">
        <Section titleh1={"Let's connect!"} titleh2={"CONTACT"} leftContent={
          <div>
            <div className="mx-auto max-w-2xl ">
              <p className="mt-2 text-lg/8 text-gray-600 font-manrope">Feel free to contact me by email, phone, or throught the form.</p>
            </div>
            <LinkButton src="tel:+34618517258" text={"+34 618 517 258"}></LinkButton>
            <LinkButton src="mailto:nvaquerot@gmail.com" text={"nvaquerot@gmail.com"}></LinkButton>
            <LinkButton src="https://www.linkedin.com/in/n%C3%BAria-vaquero-tell" text={"Linkedin"}></LinkButton>
          </div>
        } rightContent={
          <ContactSection></ContactSection>
        }></Section>
      </div>


    </>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

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
