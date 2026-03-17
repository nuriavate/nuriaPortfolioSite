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

      <div id="projects">
        <Section titleh1={"Featured Works"} titleh2={"PROJECTS"}></Section>
      </div>
      <FeaturedProjectsBento items={homeProjects} />
      <div className="page-shell">
        <hr className="border-t border-[#270400]/10" />
      </div>
      <AboutSection></AboutSection>
      <div className="page-shell">
        <hr className="border-t border-[#270400]/10" />
      </div>
      <div id="contact">
        <Section titleh1={"Let's connect!"} titleh2={"CONTACT"} leftContent={
          <div>
            <div className="max-w-xl">
              <p className="font-manrope text-lg leading-8 text-[#270400]/75">
                Feel free to contact me by email or through the form.
              </p>
            </div>
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
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const id = location.hash.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/detail/:id" element={<Details />} />
        </Routes>
      </main>
      <Footer></Footer>

    </div>
  );
}
