import { mainPaddingX } from "@/constants/styles";
import Image from "next/image";
import { forwardRef, ReactNode } from "react";

const styles = {
  1: {
    section: "w-full h-screen relative text-gray-200 overflow-hidden flex items-center sm:items-start",
    image: "-z-10 bg-primary",
    div: `h-full w-full bg-gradient-to-b from-primary via-tertiary/10 to-primary ${mainPaddingX}`,
  },
  2: {
    section: "w-full relative text-gray-200 rounded-b-[100px] xl:rounded-b-[200px]",
    image: "bg-primary rounded-b-[100px] xl:rounded-b-[200px]",
    div: `h-full w-full bg-gradient-to-b from-primary to-tertiary/10 ${mainPaddingX} pb-24 lg:pb-14 rounded-b-[100px] xl:rounded-b-[200px] relative`,
  },
  3: {
    section: "w-full text-gray-200",
    image: "",
    div: `h-full w-full bg-quaternary ${mainPaddingX} pb-10 lg:pb-14`,
  },
  4: {
    section: "w-full relative text-gray-200",
    image: "bg-primary rounded-t-[100px] xl:rounded-t-[200px]",
    div: `h-full w-full bg-gradient-to-b from-primary via-tertiary/10 to-primary ${mainPaddingX} rounded-t-[100px] xl:rounded-t-[200px] relative`,
  },
};

interface Props {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4;
  id?: string;
}

const Section = forwardRef<HTMLElement, Props>(({ children, level = 1, id = "" }, ref) => (
  <section className={styles[level].section} id={id} ref={ref}>
    {styles[level].image && (
      <Image src="/bg.svg" className={styles[level].image} fill style={{ objectFit: "cover" }} alt="background" />
    )}
    <div className={styles[level].div}>{children}</div>
  </section>
));

Section.displayName = "Section";

export default Section;
