import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { PROJECT_CATEGORIES as CAT } from "../constants/projectCategories";
import { projects } from "../constants/projectsData";
import ProjectList from "./projectList";

const TABS = [{ key: "all", label: "All" }, ...Object.values(CAT)];
const DEFAULT_TAB = "all";

export default function Tabsbar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeKey = useMemo(() => {
    const raw = (searchParams.get("cat") || "").toLowerCase();
    return TABS.some((t) => t.key === raw) ? raw : DEFAULT_TAB;
  }, [searchParams]);

  const activeTab = useMemo(() => {
    return TABS.find((t) => t.key === activeKey) || TABS[0];
  }, [activeKey]);

  const selectedProjects = useMemo(() => {
    if (activeKey === "all") return projects;
    return projects.filter((p) => p.category === activeKey);
  }, [activeKey]);

  const setActive = (key) => {
    setSearchParams(
      (prev) => {
        const sp = new URLSearchParams(prev);
        sp.set("cat", key);
        return sp;
      },
      { replace: true }
    );
  };

  return (
    <div className="overflow-hidden  pt-20 sm:pt-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none">
          <div>
            <h2 className="sr-only">Projects</h2>

            <p className="font-urbanist text-[2.4rem] font-semibold tracking-tight text-[#270400] sm:text-[3.5rem] lg:text-[4.2rem]">
              {activeTab.label}
            </p>

            <div className="mt-8">
              <div className="flex flex-wrap gap-3 pb-2">
                {TABS.map((t) => {
                  const isActive = t.key === activeKey;
                  return (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => setActive(t.key)}
                      className={[
                        "font-manrope shrink-0 rounded-full border px-4 py-2 text-sm sm:text-base transition-colors duration-200",
                        isActive
                          ? "border-[#E63A27] bg-[#E63A27] text-white"
                          : "border-[#E63A27] bg-transparent text-[#E63A27] hover:border-[#E63A27] hover:text-[#E63A27]",
                      ].join(" ")}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-4">
            <ProjectList items={selectedProjects} />
          </div>
        </div>
      </div>
    </div>
  );
}
