

export default function Section({ rightContent, titleh1, titleh2, leftContent }) {
  return (
    <div className="overflow-hidden bg-white pt-20 sm:pt-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-2 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className=" font-urbanist text-base/7 font-semibold text-[#270400]">
                {titleh2}
              </h2>
              <p className="font-urbanist mt-3 text-4xl font-semibold tracking-tight text-pretty text-[#270400] sm:text-5xl">
                {titleh1}
              </p>
              {leftContent}
            </div>
          </div>

          {rightContent}
        </div>
      </div>
    </div>
  );
}
