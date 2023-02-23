import { ReactNode } from "react";

interface Props {
  level?: 1 | 2 | 3;
  className?: string;
  children?: ReactNode;
}

const Paragraph = ({ level = 1, className = "", children }: Props) => {
  const paragraphs = {
    1: "text-sm lg:text-base",
    2: "text-xs lg:text-sm",
    3: "text-[0.65rem] lg:text-xs",
  };

  return <p className={`${paragraphs[level]}  ${className}`}>{children}</p>;
};

export default Paragraph;
