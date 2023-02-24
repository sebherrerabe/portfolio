import Heading from "../design/Heading";
import Paragraph from "../design/Paragraph";
import Button from "../ui/Button";
import HeroImage from "../ui/HeroImage";
import Section from "../ui/Section";

import MotionComponent from "../framerMotion/MotionComponent";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [ref, inView] = useInView();
  return (
    <Section id="home" ref={ref}>
      <div className="min-h-screen lg:pt-20 flex items-center w-full relative">
        <MotionComponent inView={inView} variant="translate" className="w-full lg:w-1/2 h-full flex flex-col justify-center lg:pr-4">
          <Heading level={1} text="If there’s problem, there’s a solution." />
          <Heading level={3} className="text-tertiary mt-6 lg:mt-10" text="Seb Herrera" />
          <Heading level={5} className="text-secondary" text="Full Stack Developer" />
          <Paragraph className="mt-6 lg:mt-10 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
            mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </Paragraph>
          <div className="flex flex-wrap">
            <Button className="mt-6 lg:mt-10 hover:shadow-2xl">Something</Button>
            <Button className="mt-6 lg:mt-10 ml-4 lg:ml-8" styleType="secondary">
              Something
            </Button>
          </div>
        </MotionComponent>
        <HeroImage inView={inView} />
      </div>
    </Section>
  );
};
export default Home;
