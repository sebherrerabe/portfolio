import { useInView } from "react-intersection-observer";
import Paragraph from "../design/Paragraph";
import MotionComponent from "../framerMotion/MotionComponent";
import Section from "../ui/Section";
import Title from "../ui/Title";
import WorkMainProject from "./WorkMainProject";
import WorkOtherProjects from "./WorkOtherProjects";

const Work = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <div className="bg-quaternary">
      <Section level={2} id="work" ref={ref}>
        <MotionComponent inView={inView} variant="translate">
          <Title text="// work" type="A" />
          <Paragraph className="mt-10 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur aspernatur corrupti eveniet voluptates quis
            porro explicabo eos magnam omnis sed illo delectus error culpa earum, tempore nostrum quisquam facilis?
          </Paragraph>
        </MotionComponent>
        <WorkMainProject inView={inView} />
        <WorkOtherProjects inView={inView} />
      </Section>
    </div>
  );
};

export default Work;
