import { useEffect, useState } from "react";

const useNavbarScroll = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const [pages, setPages] = useState([
    { name: "home", href: "/", isActive: true },
    { name: "work", href: "#work", isActive: false },
    { name: "about", href: "#about", isActive: false },
    { name: "contact", href: "#contact", isActive: false },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach(
        (section) =>
          window.scrollY > section.offsetTop - 100 &&
          setPages((prev) => prev.map((page) => ({ ...page, isActive: page.name === section.id })))
      );
      setHasScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { pages, hasScrolled };
};

export default useNavbarScroll;
