import { useState } from "react";

export default function Hero() {
    const [pointerGlow, setPointerGlow] = useState({
        x: 0,
        y: 0,
        visible: false,
    });

    function handleMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        setPointerGlow({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
            visible: true,
        });
    }

    function handleMouseLeave() {
        setPointerGlow((prev) => ({ ...prev, visible: false }));
    }

    return (
        <div
            className="group relative overflow-hidden bg-white"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-0 transition-all duration-700 ease-out group-hover:scale-[1.03]"
                style={{
                    background:
                        "radial-gradient(90% 65% at 50% 88%, rgba(230,58,39,0.95) 0%, rgba(230,58,39,0.55) 35%, rgba(230,58,39,0.22) 58%, rgba(230,58,39,0.08) 72%, rgba(245,245,245,0) 88%)",
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
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 ease-out"
                style={{
                    opacity: pointerGlow.visible ? 1 : 0,
                    background: `radial-gradient(220px circle at ${pointerGlow.x}px ${pointerGlow.y}px, rgba(230,58,39,0.28) 0%, rgba(230,58,39,0.14) 35%, rgba(230,58,39,0.06) 55%, rgba(230,58,39,0) 75%)`,
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
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
     
                    </div>
                    <div className="text-center">
                        <h1 className="font-urbanist text-5xl font-semibold tracking-tight text-balance text-[#270400] sm:text-7xl">
                          I’m Núria, a creative multidisciplinary digital designer based in Barcelona. 
                        </h1>
                        <p className="font-urbanist mt-8 text-lg font-medium text-pretty text-[#270400] sm:text-xl/8">
                           Designing with purpose, sensitivity, and intuitive interaction.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="/projects"
                                className="font-grace rounded-md bg-[#E63A27] px-6 py-2.5 text-xl text-white shadow-xs hover:bg-[#FF5542] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E63A27]"
                            >
                                DISCOVER MORE
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
