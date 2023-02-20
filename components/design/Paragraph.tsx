import { ReactNode } from "react";

interface Props {
  level?: 1 | 2 | 3;
  className?: string;
  children?: ReactNode;
}

const Paragraph = ({ level = 1, className = "", children }: Props) => {
  const paragraphs = {
    1: "text-base",
    2: "text-sm",
    3: "text-xs",
  };

  return <p className={`${paragraphs[level]} ${className}`}>{children}</p>;
};

export default Paragraph;
