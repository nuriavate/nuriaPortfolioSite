import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Branding */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src="/imatges/red_logo.svg"
                alt="Logo"
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-500 max-w-sm">
              UX/UI designer & creative technologist focused on meaningful
              digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium">
            <Link to="/projects" className="text-gray-700 hover:text-gray-900">
              Projects
            </Link>
            <Link to="/uxuidesign" className="text-gray-700 hover:text-gray-900">
              UX/UI Design
            </Link>
            <Link to="/videogamesxr" className="text-gray-700 hover:text-gray-900">
              Videogames & XR
            </Link>
            <Link to="/other" className="text-gray-700 hover:text-gray-900">
              Other
            </Link>
            <Link to="/cv" className="text-gray-700 hover:text-gray-900">
              CV
            </Link>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Nuria Vaquero. All rights reserved.</p>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-700"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-700"
            >
              GitHub
            </a>
            <a
              href="mailto:hello@nuriavaquero.com"
              className="hover:text-gray-700"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
