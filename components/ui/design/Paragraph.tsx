interface Props {
  level?: 1 | 2 | 3;
  text: string;
  className?: string;
}

const Paragraph = ({ level = 1, text, className = "" }: Props) => {
  const paragraphs = {
    1: "text-base",
    2: "text-sm",
    3: "text-xs",
  };

  return <p className={`${paragraphs[level]} ${className}`}>{text}</p>;
};

export default Paragraph;
