import { Link } from "react-router-dom";

export default function ProjectList({ items = [] }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Projects</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-2">
          {items.map((project) => (
            <Link
              key={project.id}
              to={`/detail/${project.id}`}
              className="group block"
            >
              <img
                alt={project.imageAlt}
                src={project.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-lg text-[#E63A27] font-raleway font-semibold">{project.name}</h3>
              <p className="mt-1 text-sm font-medium text-[#270400] font-raleway">
                {project.tinDescription}
              </p>
            </Link>
          ))}

          {items.length === 0 && (
            <p className="font-raleway col-span-full text-sm text-gray-500">
              No projects in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
