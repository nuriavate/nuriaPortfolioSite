import { useMemo, useState } from "react";

export default function ProcessCarousel({ title = "Process", items = [] }) {
  const [active, setActive] = useState(0);

  const hasItems = items && items.length > 0;

  const safeItems = useMemo(() => {
    return Array.isArray(items) ? items : [];
  }, [items]);

  const prev = () => {
    if (!hasItems) return;
    setActive((i) => (i - 1 + safeItems.length) % safeItems.length);
  };

  const next = () => {
    if (!hasItems) return;
    setActive((i) => (i + 1) % safeItems.length);
  };

  // duplica per permetre “loop” visual sense tall (simple)
  const rail = useMemo(() => {
    if (!hasItems) return [];
    // amb pocs items, duplicar ajuda a evitar buits visuals
    return safeItems.length < 4 ? [...safeItems, ...safeItems, ...safeItems] : [...safeItems, ...safeItems];
  }, [safeItems, hasItems]);

  // trobem un index “central” perquè active sempre tingui següent disponible al rail
  const baseIndex = useMemo(() => {
    if (!hasItems) return 0;
    // posem active a la segona còpia per poder anar endavant/enrere
    const offset = safeItems.length < 4 ? safeItems.length : safeItems.length;
    return offset + active;
  }, [active, safeItems.length, hasItems]);

  if (!hasItems) return null;

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className=" text-3xl font-semibold tracking-tight text-pretty text-[#270400] sm:text-4xl">{title}</h2>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="inline-flex h-9 w-9 items-center justify-center border border-[#270400]/20 text-[#270400] hover:border-[#270400]/40 transition"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-9 w-9 items-center justify-center border border-[#270400]/20 text-[#270400] hover:border-[#270400]/40 transition"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>

        {/* Track */}
        <div className="mt-8 overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(-${baseIndex} * (min(72vw, 44rem) + 1.5rem)))`,
            }}
          >
            {rail.map((item, idx) => {
              const isActive = idx === baseIndex;
              return (
                <Card
                  key={`${item.title}-${idx}`}
                  item={item}
                  isActive={isActive}
                />
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
        // mida: en mobile ocupa gairebé tot; en desktop queda com el mockup
        "shrink-0",
        "w-[72vw] sm:w-[60vw] lg:w-[44rem]",
        "transition-colors duration-500",
        isActive
          ? "bg-[#270400] text-white"
          : "bg-[#ffffff] text-[#270400]",
      ].join(" ")}
    >
      {/* image area */}
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

      {/* text area (footer) */}
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
