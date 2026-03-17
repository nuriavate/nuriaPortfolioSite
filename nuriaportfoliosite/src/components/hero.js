import { ArrowDownIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <div className="group relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 opacity-[0.1] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.05' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='table' tableValues='0 0.22'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundSize: "220px 220px",
          backgroundRepeat: "repeat",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 transition-transform duration-700 ease-out group-hover:scale-[1.01]"
        style={{
          background:
            "radial-gradient(105% 78% at 50% 92%, rgba(230,58,39,0.5) 0%, rgba(230,58,39,0.22) 34%, rgba(230,58,39,0.08) 58%, rgba(245,245,245,0) 84%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(110% 82% at 58% 86%, rgba(230,58,39,0.32) 0%, rgba(230,58,39,0.14) 34%, rgba(230,58,39,0.05) 58%, rgba(245,245,245,0) 86%)",
        }}
      />

      <div className="relative isolate z-10 px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-28 text-center sm:py-40 lg:py-48">
          <img
            src="/star.svg"
            alt=""
            aria-hidden="true"
            className="absolute left-3 top-24 w-12 rotate-[-10deg] opacity-95 transition-transform duration-700 ease-out hover:rotate-[165deg] sm:left-8 sm:top-22 sm:w-16 lg:left-[14%] lg:top-28 lg:w-20"
          />
          <img
            src="/star.svg"
            alt=""
            aria-hidden="true"
            className="absolute right-6 top-40 w-7 rotate-[10deg] opacity-90 transition-transform duration-700 ease-out hover:rotate-[185deg] sm:right-16 sm:top-34 sm:w-11 lg:right-[20%] lg:top-36 lg:w-14"
          />
          <img
            src="/star.svg"
            alt=""
            aria-hidden="true"
            className="absolute right-10 top-64 w-5 rotate-[-12deg] opacity-85 transition-transform duration-700 ease-out hover:rotate-[170deg] sm:right-10 sm:top-56 sm:w-7 lg:right-[14%] lg:top-64 lg:w-9"
          />

          <p className="font-manrope text-sm font-semibold uppercase tracking-[0.24em] text-[#270400]/65">
            Digital Product Designer
          </p>

          <h1 className="font-urbanist mt-6 text-5xl font-semibold tracking-tight text-balance text-[#270400] sm:text-7xl">
            I&apos;m <span className="font-grace grace-soft text-[0.92em] text-[#E63A27]">NÚRIA</span>, a
            Digital Product Designer & UI Artist
          </h1>

          <p className="font-manrope mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#270400]/78 sm:text-xl">
            Interested in creating thoughtful, visual and intuitive digital
            experiences.
          </p>

      
          <div className="mt-12 flex justify-center">
            <a
              href="#projects"
              aria-label="Go to projects section"
              className="inline-flex items-center justify-center gap-2 text-[#270400] transition hover:-translate-y-0.5 hover:text-[#E63A27]"
            >
              <span className="font-urbanist text-base font-semibold">
                View projects
              </span>
              <ArrowDownIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
