import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { PROJECT_CATEGORIES as CAT } from "../constants/projectCategories";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const navigation = [
  { name: "CV", to: "/cv" },
  { name: "UX/UI DESIGN", to: `/projects?cat=${CAT.UXUI.key}` },
  { name: "VIDEOGAMES & XR", to: `/projects?cat=${CAT.VDXR.key}` },
  { name: "OTHER", to: `/projects?cat=${CAT.OTHER.key}` },
];


  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <img alt="Logo" src="/imatges/red_logo.svg" className="h-8 w-auto" />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#270400]"
              aria-label="Open menu"
            >
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="hidden font-urbanist lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-sm/6 font-semibold text-[#270400]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#E63A27] p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <img alt="Logo" src="/imatges/white_logo.png" className="h-8 w-auto" />
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
                aria-label="Close menu"
              >
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-[#270400]/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-urbanist -mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-[#C42817]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
