import { ReactNode } from "react";

interface Props {
  level?: 1 | 2 | 3;
  className?: string;
  children?: ReactNode;
}

const Paragraph = ({ level = 1, className = "", children }: Props) => {
  const paragraphs = {
    1: "text-xs sm:text-sm xl:text-base",
    2: "text-[0.65rem] sm:text-xs xl:text-sm",
    3: "text-[0.55rem] sm:text-[0.65rem] xl:text-xs",
  };

  return <p className={`${paragraphs[level]}  ${className}`}>{children}</p>;
};

export default Paragraph;
