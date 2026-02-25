import LinkButton from './linkButton';
import ButtonText from './buttonText';


export default function AboutSection() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">

            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="font-urbanist text-base/7 font-semibold text-[#270400]">ABOUT ME</p>
                            <h1 className="font-urbanist mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#270400] sm:text-5xl">
                                Hi! I'm Núria
                            </h1>
                            <p className="font-manrope mt-6 text-xl/8 text-[#270400]">
                                I recently graduated in Multimedia at CITM, UPC. I am a very creative person and very eager to contribute to our projects related to the creation and design of web pages, UX, UI and video games, application development.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt=""
                        src="/imatges/me.jpg"
                        className=" w-full max-w-none rounded-xl bg-[#270400] shadow-xl ring-1 ring-[#270400]/10 sm:w-228"
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base/7 text-[#270400] lg:max-w-lg">

                            <LinkButton
                                src="/cv/VaqueroNuriaCV_2026.pdf"
                                text="Download my CV"
                            />
                            <LinkButton
                                src="/cv/VaqueroNuriaCV_2026.pdf"
                                text="Download my Portfolio"
                            />

                            <ButtonText
                                src="#"
                                text="CV"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
