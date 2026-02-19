import { useMemo, useRef, useState } from "react";

export default function ProcessCarousel({ title = "Process", items = [] }) {
  const [active, setActive] = useState(0);
  const wheelLockRef = useRef(false);

  const safeItems = useMemo(() => {
    return Array.isArray(items) ? items : [];
  }, [items]);

  const hasItems = safeItems.length > 0;
  const canGoPrev = active > 0;
  const canGoNext = active < safeItems.length - 1;

  const prev = () => {
    if (!hasItems) return;
    setActive((i) => Math.max(0, i - 1));
  };

  const next = () => {
    if (!hasItems) return;
    setActive((i) => Math.min(safeItems.length - 1, i + 1));
  };

  const onWheel = (event) => {
    if (!hasItems || wheelLockRef.current) return;
    if (Math.abs(event.deltaY) < 8) return;

    if (event.deltaY > 0 && canGoNext) {
      event.preventDefault();
      wheelLockRef.current = true;
      next();
      window.setTimeout(() => {
        wheelLockRef.current = false;
      }, 420);
      return;
    }

    if (event.deltaY < 0 && canGoPrev) {
      event.preventDefault();
      wheelLockRef.current = true;
      prev();
      window.setTimeout(() => {
        wheelLockRef.current = false;
      }, 420);
    }
  };

  if (!hasItems) return null;

  return (
    <section className="w-full" onWheel={onWheel}>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-[#270400] sm:text-4xl">
            {title}
          </h2>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={prev}
              disabled={!canGoPrev}
              className="inline-flex h-9 w-9 items-center justify-center border border-[#270400]/20 text-[#270400] transition hover:border-[#270400]/40 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous"
            >
              {"<"}
            </button>
            <button
              type="button"
              onClick={next}
              disabled={!canGoNext}
              className="inline-flex h-9 w-9 items-center justify-center border border-[#270400]/20 text-[#270400] transition hover:border-[#270400]/40 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next"
            >
              {">"}
            </button>
          </div>
        </div>

        <div className="mt-8 overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(-${active} * (min(72vw, 44rem) + 1.5rem)))`,
            }}
          >
            {safeItems.map((item, idx) => {
              const isActive = idx === active;
              return (
                <Card key={`${item.title}-${idx}`} item={item} isActive={isActive} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ item, isActive }) {
  return (
    <article
      className={[
        "shrink-0",
        "w-[72vw] sm:w-[60vw] lg:w-[44rem]",
        "transition-colors duration-500",
        isActive ? "bg-[#270400] text-white" : "bg-[#ffffff] text-[#270400]",
      ].join(" ")}
    >
      <div className="p-2">
        <div
          className={[
            "w-full overflow-hidden",
            "aspect-[16/10]",
            isActive ? "border-2 border-white/20" : "border border-[#270400]/10",
          ].join(" ")}
        >
          <img
            src={item.imageSrc}
            alt={item.imageAlt || item.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div
        className={[
          "px-6 pb-6",
          "pt-4",
          isActive ? "border-t border-white/15" : "border-t border-[#270400]/10",
        ].join(" ")}
      >
        <h3 className={["text-sm font-semibold", isActive ? "text-white" : "text-[#270400]"].join(" ")}>
          {item.title}
        </h3>
        <p className={["mt-2 text-sm leading-6", isActive ? "text-white/80" : "text-[#270400]/70"].join(" ")}>
          {item.text}
        </p>
      </div>
    </article>
  );
}
