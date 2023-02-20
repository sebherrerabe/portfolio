import useNavbarScroll from "@/hooks/useNavbarScroll";
import Link from "next/link";

const Navbar = () => {
  const { pages, hasScrolled } = useNavbarScroll();
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