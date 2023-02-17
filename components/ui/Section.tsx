import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Section = ({ children }: Props) => (
  <div className="w-full h-screen relative text-gray-200">
    <Image
      src="/bg.svg"
      className="-z-10 bg-primary"
      fill
      style={{ objectFit: "cover" }}
      alt="background"
    />
    <div className="h-full w-full bg-gradient-to-b from-tertiary/10 to-primary px-72">
      {children}
    </div>
  </div>
);

export default Section;
