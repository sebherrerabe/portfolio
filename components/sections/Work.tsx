import Paragraph from "../design/Paragraph";
import Section from "../ui/Section";
import Title from "../ui/Title";
import WorkMainProject from "./WorkMainProject";
import WorkOtherProjects from "./WorkOtherProjects";

const Work = () => (
  <Section level={2} id="work">
    <Title text="// work" type="A" />
    <Paragraph className="mt-10 text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur aspernatur corrupti eveniet voluptates quis porro
      explicabo eos magnam omnis sed illo delectus error culpa earum, tempore nostrum quisquam facilis?
    </Paragraph>
    <WorkMainProject />
    <WorkOtherProjects />
    <div className="w-full flex justify-end mt-4">
      <a className="bg-primary underline cursor-pointer">View the archive</a>
    </div>
  </Section>
);

export default Work;
