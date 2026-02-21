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
    <div className="overflow-hidden bg-white pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-10 lg:mx-0 lg:max-w-none">
          {/* Header (mateix estil que Section) */}
          <div>
            <h2 className="font-urbanist text-base/7 font-semibold text-[#270400]">
              PROJECTS
            </h2>

            <p className="font-urbanist mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#270400] sm:text-5xl">
              {activeTab.label}
            </p>

            {/* Tabs */}
            <div className="mt-6 border-b border-[#E63A27]">
              <div className="flex gap-8 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible">
                {TABS.map((t) => {
                  const isActive = t.key === activeKey;
                  return (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => setActive(t.key)}
                      className={[
                        "font-urbanist relative shrink-0 pb-3 text-lg font-bold transition",
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
          </div>

          {/* Content */}
          <div>
            <ProjectList items={selectedProjects} />
          </div>
        </div>
      </div>
    </div>
  );
}
