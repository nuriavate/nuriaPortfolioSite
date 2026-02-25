import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { PROJECT_CATEGORIES as CAT } from "../constants/projectCategories";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const activeCategory = new URLSearchParams(location.search).get("cat");

const navigation = [
  { name: "CONTACT", to: "/#contact" },
  { name: "CV", to: "/cv" },
  { name: "UX/UI DESIGN", to: `/projects?cat=${CAT.UXUI.key}` },
  { name: "VIDEOGAMES & XR", to: `/projects?cat=${CAT.VDXR.key}` },
  { name: "OTHER", to: `/projects?cat=${CAT.OTHER.key}` },
];

  const isNavItemActive = (item) => {
    if (item.to === "/cv") {
      return location.pathname === "/cv";
    }

    if (item.to === "/#contact") {
      return location.pathname === "/";
    }

    if (item.to.startsWith("/projects")) {
      if (location.pathname !== "/projects") return false;
      const itemCategory = new URLSearchParams(item.to.split("?")[1] || "").get("cat");
      return activeCategory === itemCategory;
    }

    return location.pathname === item.to;
  };


  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <img alt="Logo" src="/imatges/red_logo.svg" className="h-10 w-auto lg:h-8" />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-3 text-[#270400]"
              aria-label="Open menu"
            >
              <Bars3Icon aria-hidden="true" className="size-8" />
            </button>
          </div>

          <div className="hidden font-urbanist lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`relative pb-1 text-sm/6 font-semibold transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full after:bg-[#E63A27] after:transition-all after:duration-300 after:content-[''] ${
                  isNavItemActive(item)
                    ? "text-[#E63A27] after:w-full"
                    : "text-[#270400] after:w-0 hover:text-[#E63A27] hover:after:w-full"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        <Transition show={mobileMenuOpen}>
          <Dialog onClose={setMobileMenuOpen} className="lg:hidden">
            <TransitionChild
              enter="transition-opacity duration-400 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-260 ease-out"
              leaveFrom="opacity-100"
              leaveTo="opacity-100"
            >
              <div className="fixed inset-0 z-50 bg-[#270400]/20 backdrop-blur-[2px]" />
            </TransitionChild>

            <div className="fixed inset-0 z-50">
              <div className="flex h-full justify-end">
                <TransitionChild
                  enter="transform transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  enterFrom="translate-x-full opacity-0"
                  enterTo="translate-x-0 opacity-100"
                  leave="transform transition duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                  leaveFrom="translate-x-0 opacity-100"
                  leaveTo="translate-x-full opacity-100"
                >
                  <DialogPanel className="w-full overflow-y-auto bg-[#E63A27] p-6 shadow-2xl sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                      <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                        <img alt="Logo" src="/imatges/white_logo.png" className="h-10 w-auto" />
                      </Link>

                      <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-m-2.5 rounded-md p-3 text-white transition-transform duration-200 hover:scale-105"
                        aria-label="Close menu"
                      >
                        <XMarkIcon aria-hidden="true" className="size-8" />
                      </button>
                    </div>

                    <div className="mt-6 flow-root">
                      <div className="-my-6 divide-y divide-[#270400]/10">
                        <div className="space-y-2 py-6">
                          {navigation.map((item, index) => (
                            <Link
                              key={item.name}
                              to={item.to}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`font-urbanist -mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold transition-all duration-300 ${
                                isNavItemActive(item)
                                  ? "bg-[#C42817] text-white"
                                  : "text-white hover:bg-[#C42817]"
                              }`}
                              style={{
                                transitionDelay: mobileMenuOpen ? `${140 + index * 55}ms` : "0ms",
                                opacity: mobileMenuOpen ? 1 : 0,
                                transform: mobileMenuOpen ? "translateX(0)" : "translateX(16px)",
                              }}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>
      </header>
    </div>
  );
}
