import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-[#270400]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Branding */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src="/imatges/white_logo.png"
                alt="Logo"
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-white max-w-sm font-manrope">
              UX/UI designer & creative technologist focused on meaningful
              digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium">

            <Link to="/projects?uxui" className="text-white hover:text-[#E63A27] font-manrope">
              UX/UI Design
            </Link>
            <Link to="/projects?vdxr" className="text-white hover:text-[#E63A27] font-manrope">
              Videogames & XR
            </Link>
            <Link to="/other" className="text-white hover:text-[#E63A27] font-manrope">
              Other
            </Link>
            <Link to="/cv" className="text-white hover:text-[#E63A27] font-manrope">
              CV
            </Link>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="font-manrope mt-10 flex flex-col gap-4 border-t pt-6 text-sm text-white md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Nuria Vaquero. All rights reserved.</p>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E63A27] font-manrope"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E63A27] font-manrope"
            >
              GitHub
            </a>
            <a
              href="mailto:nvaquerot@gmail.com"
              className="hover:text-[#E63A27] font-manrope"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
