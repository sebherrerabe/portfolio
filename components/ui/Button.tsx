import { CSSProperties, ReactNode } from "react";

interface Props {
  styleType?: "primary" | "secondary" | "tertiary";
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const buttonStyles = {
  primary:
    "bg-gradient-to-br from-tertiary/95 to-primary/40 border border-tertiary text-quaternary px-6 lg:px-12 py-2 font-bold rounded w-fit hover:from-tertiary/80 hover:to-primary/60 transition-all duration-100 text-xs sm:text-sm lg:text-base",
  secondary:
    "border border-tertiary text-tertiary px-6 lg:px-12 py-2 font-bold rounded w-fit hover:text-primary hover:bg-tertiary/80 transition-all duration-100 text-xs sm:text-sm lg:text-base ",
  tertiary:
    "border border-primary text-primary px-6 py-2 font-bold rounded w-fit hover:text-white hover:bg-primary/80 transition-all duration-100 text-xs sm:text-sm lg:text-base",
};

const Button = ({ styleType = "primary", children, className, style }: Props) => (
  <button className={`${buttonStyles[styleType]} ${className}`} style={style}>
    {children}
  </button>
);

export default Button;
