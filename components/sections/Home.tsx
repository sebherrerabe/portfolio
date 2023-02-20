import Button from "../ui/Button";
import Heading from "../design/Heading";
import Paragraph from "../design/Paragraph";
import HeroImage from "../ui/HeroImage";
import Section from "../ui/Section";

const Home = () => (
  <Section id="home">
    <div className="h-full pt-20 flex">
      <div className="w-1/2 h-full flex flex-col justify-center">
        <Heading level={1} text="Where there’s problem, there’s also a solution." />
        <Heading level={3} className="text-tertiary mt-10" text="Seb Herrera" />
        <Heading level={5} className="text-secondary" text="Full Stack Developer" />
        <Paragraph className="mt-10 text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
          mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </Paragraph>
        <div className="flex">
          <Button className="mt-10">Something</Button>
          <Button className="mt-10 ml-8" styleType="secondary">
            Something
          </Button>
        </div>
      </div>
      <div className="w-1/2 h-full relative overflow-hidden rounded-full border border-white/40 bg-primary/20 backdrop-blur-[3px]">
        <HeroImage />
        <div className="absolute h-full w-full bg-gradient-to-br from-white/5 to-white/50 backdrop-blur-[0.5px]" />
      </div>
    </div>
  </Section>
);

export default Home;
