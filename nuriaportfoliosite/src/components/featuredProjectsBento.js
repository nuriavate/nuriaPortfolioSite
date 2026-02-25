import { Link } from "react-router-dom";

const CATEGORY_LABELS = {
  uxui: "UX/UI",
  vdxr: "Games & XR",
  other: "Other",
};

export default function FeaturedProjectsBento({ items = [] }) {
  return (
    <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
        {items.map((project) => (
          <Link
            key={project.id}
            to={`/detail/${project.id}`}
            className="group block"
          >
            <div className="relative overflow-hidden rounded-[12px] bg-[#F8F2EE]">
              <img
                src={project.imageSrc}
                alt={project.imageAlt}
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute left-4 top-4 inline-flex items-center rounded-[8px] border border-white/70 bg-white/90 px-3 py-1.5 font-manrope text-[11px] font-semibold uppercase tracking-[0.14em] text-[#270400]/80 backdrop-blur-sm">
                {CATEGORY_LABELS[project.category] || project.category}
              </div>
            </div>

            <div className="pt-4 sm:pt-5">
              <div>
                <h3 className="font-urbanist text-[1.6rem] font-semibold leading-[1.05] text-[#270400] transition-colors duration-300 group-hover:text-[#E63A27] sm:text-[2rem]">
                  {project.name}
                </h3>
                <p className="mt-3 max-w-[40ch] font-manrope text-sm leading-6 text-[#270400]/75 sm:text-[15px]">
                  {project.tinDescription}
                </p>
              </div>
            </div>
          </Link>
        ))}

        <Link
          to="/projects"
          className="group relative overflow-hidden rounded-[12px] bg-[#F3E8DE] p-6 text-[#270400] sm:p-8 lg:col-span-2"
        >
          <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-[#E63A27]/15 blur-2xl" />
          <div className="relative grid gap-3 sm:grid-cols-[1.1fr_1fr] sm:items-end sm:gap-6">
            <div>
              <p className="font-manrope text-xs uppercase tracking-[0.18em] text-[#270400]/55">
                Work Index
              </p>
              <h3 className="mt-2 max-w-[16ch] font-urbanist text-2xl font-semibold leading-tight sm:text-3xl">
                See the full selection of projects
              </h3>
            </div>
            <div className="sm:justify-self-end sm:text-right">
              <p className="font-manrope text-sm leading-6 text-[#270400]/75">
                Browse UX/UI, XR, videogames and other visual work in one place.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 font-manrope text-sm font-semibold text-[#E63A27] transition-transform duration-300 group-hover:translate-x-1">
                Go to projects
                <span aria-hidden="true">-&gt;</span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
