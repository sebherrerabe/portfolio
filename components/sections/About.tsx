import Paragraph from "../design/Paragraph";
import Button from "../ui/Button";
import Section from "../ui/Section";
import Title from "../ui/Title";
import AboutImageCard from "./AboutImageCard";

const About = () => (
  <Section level={3} id="about">
    <Title text="// about" type="B" />
    <div className="flex w-full mt-10 items-center">
      <div className="flex flex-col w-1/2 pr-10">
        <Paragraph level={2} className="text-gray-700">
          Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
          dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget
          condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
          molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
          interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra,
        </Paragraph>
        <Button styleType="tertiary" className="mt-10">
          Follow me on Instagram
        </Button>
      </div>
      <div className="flex flex-col w-1/2 h-[30rem] relative justify-center items-center py-20">
        <AboutImageCard
          style={{ height: "200px", width: "150px", marginRight: "20rem", marginBottom: "14rem", transform: "rotate(-20deg)" }}
        />
        <AboutImageCard
          style={{ height: "300px", width: "250px", marginRight: "20rem", marginTop: "10rem", transform: "rotate(-8deg)" }}
        />
        <AboutImageCard
          style={{ height: "250px", width: "200px", marginLeft: "20rem", marginBottom: "10rem", transform: "rotate(15deg)" }}
        />
        <AboutImageCard style={{ height: "350px", width: "300px", transform: "rotate(10deg)" }} />
      </div>
    </div>
  </Section>
);

export default About;
