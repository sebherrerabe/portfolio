import { Sofia_Sans } from "@next/font/google";

const sofiaSans = Sofia_Sans({ subsets: ["latin"] });

interface Props {
  className?: string;
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading = ({ className = "", text, level }: Props) => {
  const headings = {
    1: <h1 className={`text-6xl font-bold ${sofiaSans.className} ${className}`}>{text}</h1>,
    2: <h2 className={`text-4xl font-bold ${sofiaSans.className} ${className}`}>{text}</h2>,
    3: <h3 className={`text-3xl font-bold ${sofiaSans.className} ${className}`}>{text}</h3>,
    4: <h4 className={`text-2xl font-bold ${sofiaSans.className} ${className}`}>{text}</h4>,
    5: <h5 className={`text-xl font-bold ${sofiaSans.className} ${className}`}>{text}</h5>,
    6: <h6 className={`text-lg font-bold ${sofiaSans.className} ${className}`}>{text}</h6>,
  };
  return headings[level];
};

export default Heading;
