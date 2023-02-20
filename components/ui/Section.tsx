import Image from "next/image";
import { ReactNode } from "react";

const styles = {
  1: {
    section: "w-full h-screen relative text-gray-200",
    image: "-z-10 bg-primary",
    div: "h-full w-full bg-gradient-to-b from-primary via-tertiary/10 to-primary px-72",
  },
  2: {
    section: "w-full relative text-gray-200",
    image: "-z-10 bg-primary",
    div: "h-full w-full bg-gradient-to-b from-primary to-tertiary/10 px-72 pb-14",
  },
};

interface Props {
  children: ReactNode;
  level?: 1 | 2;
  id?: string;
}

const Section = ({ children, level = 1, id = "" }: Props) => (
  <section className={styles[level].section} id={id}>
    <Image src="/bg.svg" className={styles[level].image} fill style={{ objectFit: "cover" }} alt="background" />
    <div className={styles[level].div}>{children}</div>
  </section>
);

export default Section;