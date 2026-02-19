import { useParams } from "react-router-dom";
import { projects } from "../constants/projectsData";
import { PROJECT_CATEGORIES } from "../constants/projectCategories";
import Section from "../components/section";
import ProjectHeader from "../components/projectHeader";
import Barcimed from "../components/DetailExplanations/barcimed";

export default function Details() {
  const { id } = useParams();
  const numericId = Number(id);

  const project = projects.find((p) => p.id === numericId);
  const categoryLabel =
    Object.values(PROJECT_CATEGORIES).find((c) => c.key === project?.category)
      ?.label ?? project?.category;

  if (!project) {
    return (
      <div className="pt-24 text-center text-[#270400]">
        Project not found.
      </div>
    );
  }

  return (
    <div className="pt-24 text-[#270400]">


      {/* HERO full-bleed real */}
{/* HERO full-bleed amb aspect ratio elegant */}
<div className="mt-10 relative left-1/2 right-1/2 -mx-[50vw] w-screen lg:px-[77px]">
  <div className="aspect-[5/3] w-full overflow-hidden">
    <img
      src={project.imageSrc}
      alt={project.imageAlt}
      className="h-full w-full object-cover"
    />
  </div>
</div>


      <ProjectHeader
        categoryLabel={categoryLabel}
        title={project.name}
        timeline={project.timeline}
        client={project.client}
        keyActivities={project.KeyActivities}
      />
       <hr className="my-4 border-t border-[#270400]/10" />
<Barcimed></Barcimed>
      {/* CONTINGUT dins container */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mt-6 text-lg">{project.description}</p>
      </div>
    </div>
  );
}
