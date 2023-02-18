import Button from "../ui/Button";
import Heading from "../ui/design/Heading";
import Paragraph from "../ui/design/Paragraph";
import HeroImage from "../ui/HeroImage";
import Section from "../ui/Section";

const Home = () => (
  <Section>
    <div className="h-full pt-20 flex">
      <div className="w-1/2 h-full flex flex-col justify-center">
        <Heading level={1} text="Where there’s problem, there’s also a solution." />
        <Heading level={3} className="text-tertiary mt-10" text="Seb Herrera" />
        <Heading level={5} className="text-secondary" text="Full Stack Developer" />
        <Paragraph
          className="mt-10"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
          mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        />
        <div className="flex">
          <Button className="mt-10">Something</Button>
          <Button className="mt-10 ml-8" styleType="secondary">
            Something
          </Button>
        </div>
      </div>
      <div className="w-1/2 h-full relative overflow-hidden rounded-full border border-tertiary/20 bg-primary/70">
        <HeroImage />
      </div>
    </div>
  </Section>
);

export default Home;
