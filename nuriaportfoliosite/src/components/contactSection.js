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

    const subject = encodeURIComponent(
      `Portfolio contact from ${firstName} ${lastName}`.trim()
    );
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
    <div className="relative overflow-hidden bg-white p-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(55% 65% at 50% 0%, rgba(230,58,39,0.24) 0%, rgba(230,58,39,0.08) 52%, rgba(255,255,255,0) 100%)",
        }}
      />

      <form onSubmit={handleSubmit} className="relative mx-auto max-w-xl">
        <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="font-urbanist block text-sm font-semibold text-[#270400]"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                required
                autoComplete="given-name"
                className="input-field"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="font-urbanist block text-sm font-semibold text-[#270400]"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="input-field"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="font-urbanist block text-sm font-semibold text-[#270400]"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="input-field"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="font-urbanist block text-sm font-semibold text-[#270400]"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="input-field min-h-[9rem] resize-y"
                defaultValue=""
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="grace-soft block w-full rounded-[0.85rem] bg-[#E63A27] px-4 py-3 text-center text-xl text-white transition hover:bg-[#d73422] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E63A27] font-grace"
          >
            LET&apos;S TALK
          </button>
          {status && (
            <p className="mt-3 text-sm font-manrope text-[#270400]/70">
              {status}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
