interface Props {
  className?: string;
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading = ({ className = "", text, level }: Props) => {
  const headings = {
    1: <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${className}`}>{text}</h1>,
    2: <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${className}`}>{text}</h2>,
    3: <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${className}`}>{text}</h3>,
    4: <h4 className={`text-lg sm:text-xl lg:text-2xl font-bold ${className}`}>{text}</h4>,
    5: <h5 className={`text-md sm:text-lg lg:text-xl font-bold ${className}`}>{text}</h5>,
    6: <h6 className={`sm:text-md lg:text-lg font-bold ${className}`}>{text}</h6>,
  };
  return headings[level];
};

export default Heading;
