import Paragraph from "../design/Paragraph";
import Section from "../ui/Section";
import Title from "../ui/Title";
import WorkMainProject from "./WorkMainProject";
import WorkOtherProjects from "./WorkOtherProjects";

const Work = () => (
  <div className="bg-quaternary">
    <Section level={2} id="work">
      <Title text="// work" type="A" />
      <Paragraph className="mt-10 text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur aspernatur corrupti eveniet voluptates quis porro
        explicabo eos magnam omnis sed illo delectus error culpa earum, tempore nostrum quisquam facilis?
      </Paragraph>
      <WorkMainProject />
      <WorkOtherProjects />
      <div className="w-full flex justify-end mt-8">
        <a className="bg-quaternary px-2 text-gray-700 underline cursor-pointer ">View the archive</a>
      </div>
    </Section>
  </div>
);

export default Work;
