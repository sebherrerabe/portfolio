import useNavbarScroll from "@/hooks/useNavbarScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const { pages, hasScrolled } = useNavbarScroll();
  return (
    <>
      <div className="lg:hidden">
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          className={`fixed top-4 left-4 rounded text-gray-200 z-40 lg:border-b bg-gradient-to-b from-primary via-primary to-primary/90 p-2 ${
            hasScrolled ? "lg:border-b-tertiary/90" : "border-b-transparent"
          }`}
          onClick={() => setIsNavbarOpen(true)}
        />
      </div>
      <div
        className={`lg:h-20 rounded lg:rounded-none fixed z-[10000] w-full px-4 lg:px-10 xl:px-72 text-gray-200 py-8 flex flex-col lg:flex-row transition-all duration-500 ease-in-out rounded-b lg:rounded-b-none border-b bg-gradient-to-b from-primary via-primary to-primary/90 ${
          hasScrolled ? "border-b-tertiary/90" : "border-b-tertiary/90 lg:border-b-transparent"
        } ${isNavbarOpen ? "top-0" : "-top-full lg:top-0"}`}
      >
        <span className="mr-40">@sebherrera.tech</span>
        <ul className="flex flex-col lg:flex-row grow justify-between mt-4 lg:mt-0">
          {pages.map((page) => (
            <li
              key={page.name}
              className={`py-4 lg:py-0 border-b lg:border-none ${page.isActive ? "border-b-tertiary" : "border-b-gray-300"} `}
            >
              <Link
                className={`cursor-pointer drop-shadow-2xl ${page.isActive ? "text-tertiary" : ""}`}
                href={page.href}
                onClick={() => setIsNavbarOpen(false)}
              >
                {`// ${page.name}`}
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden w-full flex justify-end">
          <FontAwesomeIcon icon={faX} size="lg" className=" mt-4" onClick={() => setIsNavbarOpen(false)} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
