import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Hero from "./components/hero";
import ProjectList from "./components/projectList";

import Cv from "./pages/cv";
import Projects from "./pages/projects";
import Footer from "./components/footer";
// importa las demás cuando existan:
// import UxUidesign from "./pages/uxuidesign";
// import VideogamesXR from "./pages/videogamesxr";
// import Other from "./pages/other";
// import DetailScreen from "./pages/detailScreen";

function Home() {
  return (
    <>
      <Hero />
      <ProjectList />
      
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
