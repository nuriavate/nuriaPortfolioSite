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
      <AboutSection></AboutSection>
      <ProjectList items={homeProjects} />
      <ContactSection></ContactSection>
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
      </Routes>
      <Footer></Footer>
    </>
  );
}
