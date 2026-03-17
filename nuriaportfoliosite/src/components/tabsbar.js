import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PROJECT_CATEGORIES as CAT } from "../constants/projectCategories";
import { projects } from "../constants/projectsData";
import ProjectList from "./projectList";

const TABS = [{ key: "all", label: "All" }, ...Object.values(CAT)];
const DEFAULT_TAB = "all";
const TRANSITION_MS = 280;

export default function Tabsbar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const timeoutRef = useRef(null);

  const activeKey = useMemo(() => {
    const raw = (searchParams.get("cat") || "").toLowerCase();
    return TABS.some((t) => t.key === raw) ? raw : DEFAULT_TAB;
  }, [searchParams]);

  const [displayedKey, setDisplayedKey] = useState(activeKey);
  const [phase, setPhase] = useState("idle");

  useEffect(() => {
    if (activeKey === displayedKey) {
      setPhase("idle");
      return;
    }

    setPhase("leaving");

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setDisplayedKey(activeKey);
      setPhase("entering");

      timeoutRef.current = setTimeout(() => {
        setPhase("idle");
      }, TRANSITION_MS);
    }, TRANSITION_MS);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeKey, displayedKey]);

  const displayedTab = useMemo(() => {
    return TABS.find((t) => t.key === displayedKey) || TABS[0];
  }, [displayedKey]);

  const displayedProjects = useMemo(() => {
    if (displayedKey === "all") return projects;
    return projects.filter((p) => p.category === displayedKey);
  }, [displayedKey]);

  const setActive = (key) => {
    if (key === activeKey) return;

    setSearchParams(
      (prev) => {
        const sp = new URLSearchParams(prev);
        sp.set("cat", key);
        return sp;
      },
      { replace: true }
    );
  };

  const isTransitioning = phase !== "idle";
  const contentClasses =
    phase === "leaving"
      ? "translate-y-3 opacity-0 blur-[3px]"
      : phase === "entering"
        ? "translate-y-0 opacity-100 blur-0"
        : "translate-y-0 opacity-100 blur-0";

  return (
    <div className="section-space overflow-hidden bg-white">
      <div className="page-shell">
        <div className="grid grid-cols-1 gap-y-8">
          <div>
            <h2 className="sr-only">Projects</h2>

            <div
              className={[
                "transition-all duration-300 ease-out will-change-transform",
                contentClasses,
              ].join(" ")}
            >
              <p className="font-urbanist text-[2.4rem] font-semibold tracking-tight text-[#270400] sm:text-[3.5rem] lg:text-[4.2rem]">
                {displayedTab.label}
              </p>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap gap-3 pb-2">
                {TABS.map((t) => {
                  const isActive = t.key === activeKey;
                  return (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => setActive(t.key)}
                      disabled={isTransitioning}
                      className={[
                        "font-manrope shrink-0 rounded-full border px-4 py-2 text-sm transition-colors duration-200 sm:text-base",
                        isActive
                          ? "border-[#E63A27] bg-[#E63A27] text-white"
                          : "border-[#270400]/12 bg-white text-[#270400] hover:border-[#E63A27] hover:text-[#E63A27]",
                        isTransitioning ? "cursor-wait" : "",
                      ].join(" ")}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className={[
              "pt-2 transition-all duration-300 ease-out will-change-transform sm:pt-4",
              contentClasses,
            ].join(" ")}
          >
            <ProjectList items={displayedProjects} />
          </div>
        </div>
      </div>
    </div>
  );
}
