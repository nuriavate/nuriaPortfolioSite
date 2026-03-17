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
          className="group relative overflow-hidden rounded-[12px] p-6 text-[#270400] sm:p-8 lg:col-span-2"
        >
          <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full " />
          <div className="relative grid gap-3 sm:grid-cols-[1.1fr_1fr] sm:items-end sm:gap-6">
            <div>
            </div>
            <div className="sm:justify-self-end sm:text-right">
              <p className="mt-4 inline-flex items-center gap-2 font-urbanist text-4xl font-semibold text-[#E63A27] transition-transform duration-300 group-hover:translate-x-1">
                <span aria-hidden="true" className="font-manrope">-&gt;</span>
                All projects
                
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
