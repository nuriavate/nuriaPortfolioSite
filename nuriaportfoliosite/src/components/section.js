
export default function Section({ rightContent, titleh1, titleh2, leftContent }) {
  return (
    <section className="section-space-sm overflow-hidden bg-white">
      <div className="page-shell">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2 lg:items-start">
          <div className="max-w-2xl lg:max-w-xl">
            <div>
              <h2 className="font-urbanist text-sm font-semibold uppercase tracking-[0.18em] text-[#270400]/65 sm:text-base">
                {titleh2}
              </h2>
              <p className="font-urbanist mt-3 text-4xl font-semibold tracking-tight text-pretty text-[#270400] sm:text-5xl">
                {titleh1}
              </p>
              {leftContent ? <div className="mt-6">{leftContent}</div> : null}
            </div>
          </div>

          {rightContent}
        </div>
      </div>
    </section>
  );
}
