import Image from "next/image";
import { ReactNode } from "react";

const styles = {
  1: {
    section: "w-full h-screen relative text-gray-200",
    image: "-z-10 bg-primary",
    div: "h-full w-full bg-gradient-to-b from-primary via-tertiary/10 to-primary px-72",
  },
  2: {
    section: "w-full relative text-gray-200 rounded-b-[200px]",
    image: "bg-primary rounded-b-[200px]",
    div: "h-full w-full bg-gradient-to-b from-primary to-tertiary/10 px-72 pb-14 rounded-b-[200px] relative",
  },
  3: {
    section: "w-full text-gray-200",
    image: "",
    div: "h-full w-full bg-quaternary px-72 pb-14",
  },
  4: {
    section: "w-full relative text-gray-200",
    image: "bg-primary rounded-t-[200px]",
    div: "h-full w-full bg-gradient-to-b from-primary via-tertiary/10 to-primary px-72 rounded-t-[200px] relative",
  },
};

interface Props {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4;
  id?: string;
}

const Section = ({ children, level = 1, id = "" }: Props) => (
  <section className={styles[level].section} id={id}>
    {styles[level].image && (
      <Image src="/bg.svg" className={styles[level].image} fill style={{ objectFit: "cover" }} alt="background" />
    )}
    <div className={styles[level].div}>{children}</div>
  </section>
);

export default Section;
