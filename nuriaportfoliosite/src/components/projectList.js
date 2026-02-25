import { Link } from "react-router-dom";
import gsap from "gsap";

const CATEGORY_LABELS = {
  uxui: "UX/UI",
  vdxr: "Games & XR",
  other: "Other",
};

function zoomIn(target) {
  gsap.to(target, { scale: 1.08, duration: 0.45, ease: "power2.out" });
}

function zoomOut(target) {
  gsap.to(target, { scale: 1, duration: 0.45, ease: "power2.out" });
}

export default function ProjectList({ items = [] }) {
  return (
    <div className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="sr-only">Projects</h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          {items.map((project) => (
            <Link
              key={project.id}
              to={`/detail/${project.id}`}
              className="group block"
              onMouseEnter={(e) => {
                const image = e.currentTarget.querySelector("[data-project-image]");
                if (image) zoomIn(image);
              }}
              onMouseLeave={(e) => {
                const image = e.currentTarget.querySelector("[data-project-image]");
                if (image) zoomOut(image);
              }}
            >
              <div className="relative overflow-hidden rounded-[12px] bg-[#F8F2EE]">
                <img
                  data-project-image
                  alt={project.imageAlt}
                  src={project.imageSrc}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute left-4 top-4 inline-flex items-center rounded-[8px] border border-white/70 bg-white/90 px-3 py-1.5 font-manrope text-[11px] font-semibold uppercase tracking-[0.14em] text-[#270400]/80 backdrop-blur-sm">
                  {CATEGORY_LABELS[project.category] || project.category}
                </div>
              </div>
              <div className="pt-4 sm:pt-5">
                <h3 className="font-urbanist text-[1.6rem] font-semibold leading-[1.05] text-[#270400] transition-colors duration-300 group-hover:text-[#E63A27] sm:text-[2rem]">
                  {project.name}
                </h3>
                <p className="mt-3 max-w-[40ch] font-manrope text-sm leading-6 text-[#270400]/75 sm:text-[15px]">
                  {project.tinDescription}
                </p>
              </div>
            </Link>
          ))}

          {items.length === 0 && (
            <p className="font-manrope col-span-full text-sm text-gray-500">
              No projects in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
