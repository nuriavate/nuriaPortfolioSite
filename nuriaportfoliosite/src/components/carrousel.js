import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function ProcessCarousel({ title = "Process", items = [] }) {
  const [active, setActive] = useState(0);
  const [quickViewItem, setQuickViewItem] = useState(null);
  const wheelLockRef = useRef(false);
  const sectionRef = useRef(null);

  const safeItems = useMemo(() => {
    return Array.isArray(items) ? items : [];
  }, [items]);

  const hasItems = safeItems.length > 0;
  const canGoPrev = active > 0;
  const canGoNext = active < safeItems.length - 1;

  const prev = useCallback(() => {
    if (!hasItems) return;
    setActive((i) => Math.max(0, i - 1));
  }, [hasItems]);

  const next = useCallback(() => {
    if (!hasItems) return;
    setActive((i) => Math.min(safeItems.length - 1, i + 1));
  }, [hasItems, safeItems.length]);

  useEffect(() => {
    const handleWheel = (event) => {
      if (!hasItems || !sectionRef.current) return;
      if (Math.abs(event.deltaY) < 8) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportCenterY = window.innerHeight / 2;
      const isCentered = rect.top <= viewportCenterY && rect.bottom >= viewportCenterY;
      if (!isCentered) return;

      const scrollingDown = event.deltaY > 0;
      const canMove = scrollingDown ? canGoNext : canGoPrev;
      if (!canMove) return;

      // Lock vertical page scroll while the carousel still has horizontal steps.
      event.preventDefault();
      if (wheelLockRef.current) return;

      wheelLockRef.current = true;
      if (scrollingDown) {
        next();
      } else {
        prev();
      }

      window.setTimeout(() => {
        wheelLockRef.current = false;
      }, 420);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [hasItems, canGoNext, canGoPrev, next, prev]);

  useEffect(() => {
    if (!quickViewItem) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setQuickViewItem(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [quickViewItem]);

  if (!hasItems) return null;

return (
  <section ref={sectionRef} >
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
      {/* Header (alineat) */}
      <div className="flex items-center justify-between">
        <h2 className="font-urbanist text-3xl font-semibold tracking-tight text-pretty text-[#270400] sm:text-4xl">
          {title}
        </h2>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={prev}
            disabled={!canGoPrev}
            className=" inline-flex h-9 w-9 items-center justify-center border border-[#270400]/20 text-[#270400] transition hover:border-[#270400]/40 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Previous"
          >
            {"<"}
          </button>
          <button
            type="button"
            onClick={next}
            disabled={!canGoNext}
            className=" inline-flex h-9 w-9 items-center justify-center border border-[#270400]/20 text-[#270400] transition hover:border-[#270400]/40 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Next"
          >
            {">"}
          </button>
        </div>
      </div>

      {/* Track: bleed right (sense padding dret) */}
      <div className="mt-8 overflow-hidden lg:-mr-[calc((100vw-80rem)/2+2rem)]">
        <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(-${active} * (min(78vw, 48rem) + 1.5rem)))`,
            }}
          >
          {safeItems.map((item, idx) => (
            <Card
              key={`${item.title}-${idx}`}
              item={item}
              isActive={idx === active}
              onClick={() => {
                if (idx !== active) {
                  setActive(idx);
                  return;
                }
                setQuickViewItem(item);
              }}
            />
          ))}
        </div>
      </div>
    </div>
    {quickViewItem && (
      <div
        className="fixed inset-0 z-50 bg-black/60 p-4 sm:p-8"
        onClick={() => setQuickViewItem(null)}
      >
        <div
          className="mx-auto mt-6 max-w-5xl bg-[#FFFEFA] text-[#270400] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-end p-3">
            <button
              type="button"
              onClick={() => setQuickViewItem(null)}
              className=" inline-flex h-9 w-9 items-center justify-center border border-[#270400]/25 text-[#270400] transition hover:border-[#270400]/50"
              aria-label="Close quick view"
            >
              X
            </button>
          </div>

          <div className="px-4 pb-5 sm:px-6 sm:pb-6">
            <div className="overflow-hidden border border-[#270400]/10">
              <img
                src={quickViewItem.imageSrc}
                alt={quickViewItem.imageAlt || quickViewItem.title}
                className="h-auto w-full object-contain"
              />
            </div>
            <h3 className="font-urbanist mt-4 text-xl font-semibold">{quickViewItem.title}</h3>
            <p className="font-raleway mt-2 text-sm leading-6 text-[#270400]/75">{quickViewItem.text}</p>
          </div>
        </div>
      </div>
    )}
  </section>
);

}

function Card({ item, isActive, onClick }) {
  return (
    <article
      className={[
        "shrink-0",
        "w-[78vw] sm:w-[66vw] lg:w-[48rem]",
        "transition-colors duration-500 ",
        isActive ? "bg-[#270400] text-white" : "bg-[#ffffff] text-[#270400]",
      ].join(" ")}
    >
      <button
        type="button"
        onClick={onClick}
        className="block w-full text-left cursor-zoom-in"
        aria-label={`Open quick view for ${item.title}`}
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
        <h3 className={["font-urbanist text-lg font-semibold", isActive ? "text-white" : "text-[#270400]"].join(" ")}>
          {item.title}
        </h3>
        <p className={["font-raleway mt-2 text-sm leading-6", isActive ? "text-white/80" : "text-[#270400]/70"].join(" ")}>
          {item.text}
        </p>
      </div>
      </button>
    </article>
  );
}
