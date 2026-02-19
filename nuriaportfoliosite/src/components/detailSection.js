export default function DetailSection({ rightContent, titleh1, leftContent }) {
  return (
    <div className="overflow-hidden bg-white pt-24 sm:pt-8 sm:pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className=" lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="font-urbanist text-3xl font-semibold tracking-tight text-pretty text-[#270400] sm:text-4xl">
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
