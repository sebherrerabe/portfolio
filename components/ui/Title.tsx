import Heading from "../design/Heading";

interface Props {
  text: string;
  type: "A" | "B";
}

const types = {
  A: {
    text: "text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-200 to-tertiary",
    div: "grow h-[1px] bg-tertiary ml-4",
  },
  B: {
    text: "text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-700 to-primary",
    div: "grow h-[1px] bg-primary ml-4",
  },
};

const Title = ({ text, type }: Props) => (
  <div className="w-full flex items-center pt-20">
    <Heading className={types[type].text} level={2} text={text} />
    <div className={types[type].div} />
  </div>
);

export default Title;
