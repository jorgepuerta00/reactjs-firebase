import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const routes = [
  { href: "/", label: "PROFILE" },
  { href: "/", label: "JOBS" },
  { href: "/", label: "PROFESSIONAL NETWORK" },
  { href: "/", label: "LOUNGE" },
  { href: "/", label: "SALARY" }
];

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const router = useRouter();

  return (
    <header className="absolute top-0 z-50 w-full bg-white shadow-lg">
      <nav className="container flex flex-wrap items-center justify-between px-2 py-3 mx-auto">
        <div className="relative flex justify-between w-full px-3 md:w-auto md:static md:block md:justify-start">
          <Link href="/">
            <a className="inline-block py-2 text-lg text-blue-500">HEALTH EXPLORE</a>
          </Link>
          <button
            className="px-3 py-1 text-xl outline-none md:hidden focus:outline-none"
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <span className="block w-6 h-px bg-gray-700 rounded-sm"></span>
            <span className="block w-6 h-px mt-1 bg-gray-700 rounded-sm"></span>
            <span className="block w-6 h-px mt-1 bg-gray-700 rounded-sm"></span>
          </button>
        </div>
        <div
          className={`flex overflow-hidden transition-height duration-300 md:h-auto ${
            isCollapsed ? "h-0" : "h-24"
          } `}
          id="list-mobile"
        >
          <ul className="flex flex-col justify-center items-center list-none md:flex-row">
            {routes.map(route => (
              <li className="py-1 text-left" key={route.label}>
                <Link href={route.href}>
                  <a
                    className={`px-3 text-sm font-semibold hover:opacity-20 ${
                      router.pathname === route.href ? "text-primary-500" : ""
                    }`}
                  >
                    {route.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center rounded-md">
              <a href="#" className="flex items-center uppercase justify-center px-4 py-2 border border-blue-600 font-xs rounded-md text-blue-600 bg-white hover:bg-blue-50">
                Create Job
              </a>
            </div>

            <div className="flex pl-3">
              <div className="flex justify-center items-center box-border md:box-content rounded-full h-10 w-10 bg-blue-600">
                <label className="text-lg font-bold text-white cursor-pointer uppercase">{"JO"}</label>
              </div>
              <div className="flex relative top-0 right-2 justify-center items-center box-border md:box-content rounded-full h-5 w-5 bg-red-600">
                <label className="text-xs font-bold text-white">3</label>
              </div>
            </div>
          </div>
        
          <div className="flex justify-center items-center">
            <Link href="/">
              <a
                className={`text-sm font-semibold hover:opacity-20 ${
                  router.pathname === "#" ? "text-primary-500" : ""
                }`}
              >
                {"LOGOUT"}
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;