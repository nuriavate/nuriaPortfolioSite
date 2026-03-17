import { useState } from "react";

export default function ContactSection() {
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        const firstName = (formData.get("first-name") || "").toString().trim();
        const lastName = (formData.get("last-name") || "").toString().trim();
        const email = (formData.get("email") || "").toString().trim();
        const message = (formData.get("message") || "").toString().trim();

        if (!firstName || !email || !message) {
            setStatus("Please fill in name, email and message.");
            return;
        }

        const subject = encodeURIComponent(`Portfolio contact from ${firstName} ${lastName}`.trim());
        const body = encodeURIComponent(
            [
                `Name: ${firstName} ${lastName}`.trim(),
                `Email: ${email}`,
                "",
                "Message:",
                message,
            ].join("\n")
        );

        window.location.href = `mailto:nvaquerot@gmail.com?subject=${subject}&body=${body}`;
        setStatus("Opening your email app...");
    };

    return (
        <div className="isolate bg-white px-6 py-4  lg:px-8">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#E63A27] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
                />
            </div>

            <form onSubmit={handleSubmit} className="mx-auto mt-4 max-w-xl">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="font-urbanist block text-sm/6 font-semibold text-[#270400]">
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                required
                                autoComplete="given-name"
                                className="
                                font-manrope
    block w-full rounded-md
    bg-white
    px-3.5 py-2
    text-base text-[#270400]
    border border-[#270400]/30      /* línea base visible */
    outline-none                    /* quitamos outline por defecto */
    focus:border-[#E63A27]          /* cambia borde en focus */
    focus:ring-2 focus:ring-[#E63A27]  /* segunda línea (halo) */
    placeholder:text-gray-400
  "
                            />

                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="font-urbanist block text-sm/6 font-semibold text-[#270400]">
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="family-name"
                                className="
                                font-manrope
    block w-full rounded-md
    bg-white
    px-3.5 py-2
    text-base text-[#270400]
    border border-[#270400]/30      /* línea base visible */
    outline-none                    /* quitamos outline por defecto */
    focus:border-[#E63A27]          /* cambia borde en focus */
    focus:ring-2 focus:ring-[#E63A27]  /* segunda línea (halo) */
    placeholder:text-gray-400
  "
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="font-urbanist block text-sm/6 font-semibold text-[#270400]">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="
                                font-manrope
  block w-full rounded-md
  bg-white
  px-3.5 py-2
  text-base text-[#270400]

  border border-[#270400]/30      /* línea base visible */

  outline outline-2 outline-transparent

  focus:border-[#E63A27]          /* borde interior */
  focus:outline-[#E63A27]         /* segunda línea sólida */
  focus:outline-offset-2

  placeholder:text-gray-400
"

                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="font-urbanist block text-sm/6 font-semibold text-[#270400]">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                className="
    font-manrope
                                block w-full rounded-md
    bg-white
    px-3.5 py-2
    text-base text-[#270400]
    border border-[#270400]/30      /* línea base visible */
    outline-none                    /* quitamos outline por defecto */
    focus:border-[#E63A27]          /* cambia borde en focus */
    focus:ring-2 focus:ring-[#E63A27]  /* segunda línea (halo) */
    placeholder:text-gray-400
  "

                                defaultValue={''}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-[#E63A27] px-3.5 py-2.5 text-center text-xl text-white shadow-xs hover:bg-[#E63A27] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E63A27] font-grace"
                    >
                        LET'S TALK
                    </button>
                    {status && (
                        <p className="mt-3 text-sm font-manrope text-[#270400]/70">{status}</p>
                    )}
                </div>
            </form>
        </div>
    )
}
