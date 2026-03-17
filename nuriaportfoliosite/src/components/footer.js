import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-[#270400]">
      <div className="page-shell py-12 sm:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link to="/" className="inline-block">
              <img
                src="/imatges/white_logo.png"
                alt="Logo"
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/78 font-manrope">
              UX/UI designer & creative technologist focused on meaningful
              digital experiences.
            </p>
          </div>

          <nav className="flex max-w-md flex-wrap gap-x-8 gap-y-4 text-sm font-medium">
            <Link
              to="/projects?uxui"
              className="font-manrope text-white transition hover:text-[#E63A27]"
            >
              UX/UI Design
            </Link>
            <Link
              to="/projects?vdxr"
              className="font-manrope text-white transition hover:text-[#E63A27]"
            >
              Videogames & XR
            </Link>
            <Link
              to="/projects?cat=other"
              className="font-manrope text-white transition hover:text-[#E63A27]"
            >
              Other
            </Link>
            <Link
              to="/cv"
              className="font-manrope text-white transition hover:text-[#E63A27]"
            >
              CV
            </Link>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white md:flex-row md:items-center md:justify-between">
          <p className="font-manrope">
            (c) {new Date().getFullYear()} Nuria Vaquero. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="font-manrope transition hover:text-[#E63A27]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="font-manrope transition hover:text-[#E63A27]"
            >
              GitHub
            </a>
            <a
              href="mailto:nvaquerot@gmail.com"
              className="font-manrope transition hover:text-[#E63A27]"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
