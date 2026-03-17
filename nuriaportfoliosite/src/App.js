import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

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
        <Section
          titleh1={"Let's connect!"}
          titleh2={"CONTACT"}
          leftContent={
            <div>
              <div className="max-w-xl">
                <p className="font-manrope text-lg leading-8 text-[#270400]/75">
                  Feel free to contact me by email or through the form.
                </p>
              </div>
              <LinkButton
                src="mailto:nvaquerot@gmail.com"
                text={"nvaquerot@gmail.com"}
              ></LinkButton>
              <LinkButton
                src="https://www.linkedin.com/in/n%C3%BAria-vaquero-tell"
                text={"Linkedin"}
              ></LinkButton>
            </div>
          }
          rightContent={<ContactSection></ContactSection>}
        ></Section>
      </div>
    </>
  );
}

function IntroOverlay() {
  const [phase, setPhase] = useState("visible");

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      setPhase("leaving");
    }, 1450);

    return () => window.clearTimeout(exitTimer);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[120] overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={[
          "absolute left-0 top-0 h-[48%] w-full bg-[#E63A27] transition-transform duration-[1100ms] ease-[cubic-bezier(0.77,0,0.175,1)]",
          phase === "leaving" ? "-translate-y-full" : "translate-y-0",
        ].join(" ")}
      >
        <div className="absolute inset-x-0 bottom-[20%] flex translate-y-1/2 items-center justify-center px-6">
          <div
            className={[
              "transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
              phase === "leaving" ? "scale-[1.9]" : "scale-100",
            ].join(" ")}
          >
            <img
              src="/imatges/white_logo.png"
              alt=""
              className="h-20 w-auto sm:h-24 lg:h-28"
            />
          </div>
        </div>
      </div>
      <div
        className={[
          "absolute bottom-0 left-0 h-[52%] w-full bg-[#E63A27] transition-transform duration-[1100ms] ease-[cubic-bezier(0.77,0,0.175,1)]",
          phase === "leaving" ? "translate-y-full" : "translate-y-0",
        ].join(" ")}
      />
      <div
        className={[
          "absolute left-0 top-[48%] h-px w-full -translate-y-1/2 bg-white/14 transition-opacity duration-500",
          phase === "leaving" ? "opacity-0" : "opacity-100",
        ].join(" ")}
      />
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (!showIntro) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const hideTimer = window.setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(hideTimer);
    };
  }, [showIntro]);

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
      {showIntro ? <IntroOverlay /> : null}
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
