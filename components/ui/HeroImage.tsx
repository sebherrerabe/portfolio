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
      className="w-1/2 h-full relative overflow-hidden rounded-full border border-white/40 bg-primary/20 backdrop-blur-[3px]"
    >
      <Image
        src="/seb.png"
        className="transition-all duration-1000"
        fill
        style={{ objectFit: "cover", filter: dropShadow }}
        alt="background"
        priority
      />

      <div className="absolute h-full w-full bg-gradient-to-br from-quaternary/5 to-quaternary/30 backdrop-blur-[0.5px]" />
    </MotionComponent>
  );
};

export default HeroImage;
