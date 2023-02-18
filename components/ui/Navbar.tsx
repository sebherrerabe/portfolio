import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const [pages, setPages] = useState([
    { name: "home", href: "/", isActive: true },
    { name: "work", href: "#work", isActive: false },
    { name: "about", href: "#about", isActive: false },
    { name: "contact", href: "#contact", isActive: false },
  ]);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`h-20 fixed z-10 w-full px-72 text-gray-200 py-8 flex transition-all duration-500 ease-in-out ${
        hasScrolled ? "bg-primary/80" : ""
      }`}
    >
      <span className="mr-40">@sebherrera.tech</span>
      <ul className="flex grow justify-between">
        {pages.map((page) => (
          <li key={page.name}>
            <Link className={`cursor-pointer drop-shadow-2xl ${page.isActive ? "text-tertiary" : ""}`} href={page.href}>
              {`// ${page.name}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
