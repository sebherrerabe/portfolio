import { CSSProperties, ReactNode } from "react";

interface Props {
  styleType?: "primary" | "secondary" | "tertiary";
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const buttonStyles = {
  primary:
    "bg-gradient-to-br from-tertiary/95 to-primary/40 border border-tertiary text-quaternary px-12 py-2 font-bold rounded w-fit hover:from-tertiary/80 hover:to-primary/60 transition-all",
  secondary:
    "border border-tertiary text-tertiary px-12 py-2 font-bold rounded w-fit hover:text-primary hover:bg-tertiary/80 transition-all",
  tertiary: "",
};

const Button = ({ styleType = "primary", children, className, style }: Props) => (
  <button className={`${buttonStyles[styleType]} ${className}`} style={style}>
    {children}
  </button>
);

export default Button;
