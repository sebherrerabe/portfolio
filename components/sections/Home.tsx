import { getRandomNumberByRange } from "@/utils/getRandomNumberByRange";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Section from "../ui/Section";

const Home = () => {
  const [dropShadow, setDropShadow] = useState("drop-shadow(0 50px 50px rgba(0,240,255.98))");

  const moveShadow = () => {
    const blur = getRandomNumberByRange(30, 70);
    const x = getRandomNumberByRange(10, 20);
    setDropShadow(`drop-shadow(0px ${x}px ${blur}px rgba(0,240,255.20))`);
  };

  useEffect(() => {
    const interval = setInterval(() => moveShadow(), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section>
      <div className="h-full pt-20 flex">
        <div className="w-1/2 h-full flex flex-col justify-center">
          <h1 className="text-6xl font-bold">Where there’s problem, there’s also a solution.</h1>
          <h2 className="text-3xl font-bold text-tertiary mt-8">Seb Herrera</h2>
          <h3 className="text-xl font-bold text-secondary">Full Stack Developer</h3>
          <p className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
            mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <div className="flex">
            <Button className="mt-8 shadow-2xl shadow-tertiary">Something</Button>
            <Button className="mt-8 ml-8" styleType="secondary">
              Something
            </Button>
          </div>
        </div>
        <div className="w-1/2 h-full relative">
          <Image
            src="/seb.png"
            className="transition-all duration-1000"
            fill
            style={{ objectFit: "contain", filter: dropShadow }}
            alt="background"
          />
        </div>
      </div>
    </Section>
  );
};

export default Home;
