import { getRandomNumberByRange } from "@/utils/getRandomNumberByRange";
import Image from "next/image";

import { useEffect, useState } from "react";
import MotionComponent from "../framerMotion/MotionComponent";

interface Props {
  inView: boolean;
}

const HeroImage = ({ inView }: Props) => {
  const [dropShadow, setDropShadow] = useState("drop-shadow(0 50px 50px rgba(0,240,255.98))");
  const moveShadow = () => {
    const blur = getRandomNumberByRange(30, 80);
    const x = getRandomNumberByRange(10, 20);
    setDropShadow(`drop-shadow(0px ${x}px ${blur}px rgba(0,240,255.20))`);
  };

  useEffect(() => {
    const interval = setInterval(() => moveShadow(), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MotionComponent
      inView={inView}
      variant="opacity"
      className="w-full lg:w-1/2 h-[80%] md:h-[88vh] top-0 absolute -z-10 lg:z-0 lg:relative lg:overflow-hidden lg:rounded-full border border-white/20 lg:bg-primary/20 lg:backdrop-blur-[3px] flex"
    >
      <Image
        src="/seb.png"
        className="transition-all duration-1000 opacity-90 lg:opacity-100 translate-x-1/2 lg:translate-x-0 rounded-b-full lg:rounded-b-none"
        fill
        style={{ objectFit: "contain", filter: dropShadow }}
        alt="background"
        priority
      />

      <div className="hidden lg:block absolute h-full w-full bg-gradient-to-br from-quaternary/5 to-quaternary/30 backdrop-blur-[0.5px] opacity-20 lg:opacity-100" />
    </MotionComponent>
  );
};

export default HeroImage;
