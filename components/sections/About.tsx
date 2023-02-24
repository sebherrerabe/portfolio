import { useInView } from "react-intersection-observer";
import Paragraph from "../design/Paragraph";
import MotionComponent from "../framerMotion/MotionComponent";
import Button from "../ui/Button";
import Section from "../ui/Section";
import Title from "../ui/Title";
import AboutImageCard from "./AboutImageCard";

const About = () => {
  const [ref, inView] = useInView();
  return (
    <Section level={3} id="about" ref={ref}>
      <MotionComponent variant="translate" inView={inView}>
        <Title text="// about" type="B" />
      </MotionComponent>
      <div className="flex flex-col-reverse md:flex-row w-full mt-10 items-center">
        <MotionComponent inView={inView} variant="translate" className="flex w-full flex-col lg:w-1/2 md:pr-10 mt-4 md:mt-0">
          <Paragraph level={2} className="text-gray-700">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
            dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas
            eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
            molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
            interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra,
          </Paragraph>
          <Button styleType="tertiary" className="mt-10">
            Follow me on Instagram
          </Button>
        </MotionComponent>
        <div className="flex flex-col w-full lg:w-1/2 h-[24rem] sm:h-[30rem] relative justify-center items-center py-20">
          <AboutImageCard inView={inView} className="h-20 w-16 sm:h-28 sm:w-24 xl:h-48 xl:w-36 mr-44 sm:mr-52 xl:mr-56 mb-52 sm:mb-72 xl:mb-80 shadow-xl" rotate={-12} />
          <AboutImageCard inView={inView} className="h-40 w-36 sm:h-56 sm:w-44 xl:h-72 xl:w-64 mr-28 sm:mr-40 xl:mr-56 mt-40 shadow-xl" rotate={-6} />
          <AboutImageCard inView={inView} className="h-36 w-32 sm:h-48 sm:w-40 xl:h-60 xl:w-52 mb-48 ml-24 sm:ml-32 xl:ml-72 shadow-xl" rotate={45} />
          <AboutImageCard inView={inView} className="h-44 w-36 sm:h-64 sm:w-56 xl:h-96 xl:w-80 shadow-2xl" rotate={12} />
        </div>
      </div>
    </Section>
  );
};

export default About;
