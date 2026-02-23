import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../constants/projectsData";
import { PROJECT_CATEGORIES } from "../constants/projectCategories";
import ProjectHeader from "../components/projectHeader";
import Barcimed from "../components/DetailExplanations/barcimed";
import Trescat from "../components/DetailExplanations/3cat";
import BookEcho from "../components/DetailExplanations/bookecho";
import NN from "../components/DetailExplanations/nn";
import Giravolt from "../components/DetailExplanations/giravolt";
import KitchenHunt from "../components/DetailExplanations/kitchenhunt";
import Farmacia from "../components/DetailExplanations/farmacia";
import StrangerThings from "../components/DetailExplanations/strangerthings";

const detailComponents = {
  "3cat.js": Trescat,
  "barcimed.js": Barcimed,
  "bookecho.js": BookEcho,
  "nn.js": NN,
  "giravolt.js": Giravolt,
  "kitchenhunt.js": KitchenHunt,
  "farmacia.js": Farmacia,
  "strangerthings.js": StrangerThings,
};

export default function Details() {
  const desktopCoverRef = useRef(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const numericId = Number(id);

  const project = projects.find((p) => p.id === numericId);
  const DetailContent = detailComponents[project?.contenido];
  const categoryLabel =
    Object.values(PROJECT_CATEGORIES).find((c) => c.key === project?.category)
      ?.label ?? project?.category;

  useEffect(() => {
    if (!project) return undefined;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      if (!desktopCoverRef.current) return;

gsap.fromTo(
  desktopCoverRef.current,
  { filter: "blur(0px)" },
  {
    filter: "blur(10px)",
    ease: "none",
    scrollTrigger: {
      trigger: desktopCoverRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  }
);
    });

    return () => mm.revert();
  }, [project]);

  if (!project) {
    return (
      <div className="pt-24 text-center text-[#270400]">
        Project not found.
      </div>
    );
  }

  return (
    <div className="text-[#270400]">


      {/* Desktop: full-screen cover with fixed background for parallax-like scroll */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] hidden w-screen lg:block">
        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="fixed left-8 top-40 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/85 text-[#270400] shadow-sm backdrop-blur transition hover:bg-white"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </button>
<div className="relative left-1/2 right-1/2 -mx-[50vw] hidden w-screen lg:block">
  
  <div className="h-[70vh] w-full overflow-hidden">
    <div
      ref={desktopCoverRef}
      className="h-full w-full bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${project.imageSrc})` }}
      role="img"
      aria-label={project.imageAlt}
    />
  </div>

</div>
      </div>

      {/* Mobile/Tablet: regular cover image */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen lg:hidden">
        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="absolute left-4 top-20 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-[#270400] shadow-sm backdrop-blur"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </button>
        <div className="h-[50vh] w-full overflow-hidden">
          <img
            src={project.imageSrc}
            alt={project.imageAlt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>


      <ProjectHeader
        categoryKey={project.category}
        categoryLabel={categoryLabel}
        title={project.name}
        timeline={project.timeline}
        client={project.client}
        keyActivities={project.KeyActivities}
      />
       <hr className="my-4 border-t border-[#270400]/10" />
      {DetailContent ? <DetailContent /> : null}
      {/* CONTINGUT dins container */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mt-6 text-lg">{project.description}</p>
      </div>
    </div>
  );
}
