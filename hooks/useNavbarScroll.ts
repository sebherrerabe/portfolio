import convertNegToPos from "@/utils/convertNegToPos";
import debounce from "@/utils/debounce";
import { useEffect, useState } from "react";

const useNavbarScroll = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const [pages, setPages] = useState([
    { name: "home", href: "/", isActive: true },
    { name: "work", href: "#work", isActive: false },
    { name: "about", href: "#about", isActive: false },
    { name: "contact", href: "#contact", isActive: false },
  ]);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const values = Array.from(sections).reduce(
      (acc, section) => ({ [section.id]: convertNegToPos(section.offsetTop - window.scrollY - 100), ...acc }),
      {} as { [key: string]: number }
    );
    const minValue = Math.min(...Object.values(values));
    const activePage = Object.keys(values).find((key) => values[key] === minValue);
    setPages((prevPages) =>
      prevPages.map((page) => ({
        ...page,
        isActive: page.name === activePage,
      }))
    );
    setHasScrolled(window.scrollY > 300);
  };

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, []);

  return { pages, hasScrolled };
};

export default useNavbarScroll;
