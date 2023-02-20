import Heading from "../design/Heading";

interface Props {
  text: string;
  type: "A" | "B";
}

const types = {
  A: "text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-200 to-tertiary",
  B: "text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary",
};

const Title = ({ text, type }: Props) => (
  <div className="w-full flex items-center pt-20">
    <Heading className={types[type]} level={2} text={text} />
    <div className="grow h-[1px] bg-tertiary ml-4"/>
  </div>
);

export default Title;
