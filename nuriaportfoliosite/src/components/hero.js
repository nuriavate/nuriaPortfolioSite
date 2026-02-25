import { ArrowDownIcon } from "@heroicons/react/24/outline";

export default function Hero() {
    return (
        <div className="group relative overflow-hidden bg-white">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-0 transition-transform duration-700 ease-out group-hover:scale-[1.03] lg:hidden"
                style={{
                    background:
                        "radial-gradient(90% 65% at 50% 88%, rgba(230,58,39,0.95) 0%, rgba(230,58,39,0.55) 35%, rgba(230,58,39,0.22) 58%, rgba(230,58,39,0.08) 72%, rgba(245,245,245,0) 88%)",
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-0 hidden transition-transform duration-700 ease-out group-hover:scale-[1.03] lg:block"
                style={{
                    backgroundAttachment: "fixed",
                    backgroundImage:
                        "radial-gradient(90% 65% at 50% 88%, rgba(230,58,39,0.95) 0%, rgba(230,58,39,0.55) 35%, rgba(230,58,39,0.22) 58%, rgba(230,58,39,0.08) 72%, rgba(245,245,245,0) 88%)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center bottom",
                    backgroundSize: "100% 100%",
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
                style={{
                    background:
                        "radial-gradient(95% 70% at 58% 82%, rgba(230,58,39,0.95) 0%, rgba(230,58,39,0.45) 34%, rgba(230,58,39,0.16) 58%, rgba(245,245,245,0) 86%)",
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.16] mix-blend-multiply"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.05' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='table' tableValues='0 0.22'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
                    backgroundSize: "220px 220px",
                    backgroundRepeat: "repeat",
                }}
            />
            <div className="relative isolate z-10 px-6 pt-14 lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <img
                        src="/star.svg"
                        alt=""
                        aria-hidden="true"
                        className="absolute left-2 top-28 w-10 rotate-[-8deg] opacity-95 transition-transform duration-700 ease-out hover:rotate-[172deg] sm:left-8 sm:top-24 sm:w-14 lg:left-[18%] lg:top-36 lg:w-16"
                    />
                    <img
                        src="/star.svg"
                        alt=""
                        aria-hidden="true"
                        className="absolute right-16 top-40 w-9 rotate-[10deg] opacity-95 transition-transform duration-700 ease-out hover:rotate-[190deg] sm:right-28 sm:top-36 sm:w-12 lg:right-[28%] lg:top-40 lg:w-14"
                    />
                    <img
                        src="/star.svg"
                        alt=""
                        aria-hidden="true"
                        className="absolute right-6 top-48 w-6 rotate-[-12deg] opacity-90 transition-transform duration-700 ease-out hover:rotate-[168deg] sm:right-16 sm:top-44 sm:w-8 lg:right-[22%] lg:top-52 lg:w-9"
                    />
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
     
                    </div>
                    <div >
                        <h1 className="font-urbanist text-5xl font-semibold tracking-tight text-balance text-[#270400] sm:text-7xl">
                       I'm Núria, a Digital Product Designer & UI Artist
                        </h1>
                        <p className="font-urbanist mt-8 text-lg font-medium text-pretty text-[#270400] sm:text-xl/8">
                           Designing with purpose, sensitivity, and intuitive interactions.
                        </p>
                        <div className="mt-10 flex justify-center">
                            <a
                                href="#projects"
                                aria-label="Go to projects section"
                                className="inline-flex items-center justify-center text-[#270400] transition hover:-translate-y-0.5 hover:text-[#E63A27]"
                            >
                                <ArrowDownIcon className="h-9 w-9" />
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                       
                    />
                </div>
            </div>
        </div>
    )
}
