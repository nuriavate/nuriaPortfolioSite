import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { PROJECT_CATEGORIES as CAT } from "../constants/projectCategories";
import { projects } from "../constants/projectsData";
import ProjectList from "./projectList";

const TABS = Object.values(CAT);
const DEFAULT_TAB = "uxui";

export default function Tabsbar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeKey = useMemo(() => {
    const raw = (searchParams.get("cat") || "").toLowerCase();
    return TABS.some((t) => t.key === raw) ? raw : DEFAULT_TAB;
  }, [searchParams]);

  const activeTab = useMemo(() => {
    return TABS.find((t) => t.key === activeKey) || TABS[0];
  }, [activeKey]);

  // ✅ hook dentro del componente
  const selectedProjects = useMemo(() => {
    return projects.filter((p) => p.category === activeKey);
  }, [activeKey]);

  const setActive = (key) => {
    setSearchParams((prev) => {
      const sp = new URLSearchParams(prev);
      sp.set("cat", key);
      return sp;
    }, { replace: true });
  };

  return (
    <div className="p-6">
      <div className="px-8 py-8 text-[#270400]">
        <h2 className="text-base/7 font-semibold text-[#270400]">PROJECTS</h2>

        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
          {activeTab.label}
        </h2>

        <div className="mt-6 border-b border-[#E63A27]">
          <div className="flex gap-8">
            {TABS.map((t) => {
              const isActive = t.key === activeKey;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setActive(t.key)}
                  className={[
                    "relative pb-3 text-sm font-medium transition",
                    isActive
                      ? "text-[#270400]"
                      : "text-[#E63A27] hover:text-[#270400]",
                  ].join(" ")}
                >
                  {t.label}
                  <span
                    className={[
                      "absolute left-0 -bottom-[1px] h-[2px] w-full rounded",
                      isActive ? "bg-[#270400]" : "bg-transparent",
                    ].join(" ")}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          {/* ✅ ProjectList solo pinta lo que le pasas */}
          <ProjectList items={selectedProjects} />
        </div>
      </div>
    </div>
  );
}
