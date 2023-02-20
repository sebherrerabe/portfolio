import { getRandomNumberByRange } from "@/utils/getRandomNumberByRange";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroImage = () => {
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
    <Image
      src="/seb.png"
      className="transition-all duration-1000"
      fill
      style={{ objectFit: "cover", filter: dropShadow }}
      alt="background"
      priority
    />
  );
};

export default HeroImage;
