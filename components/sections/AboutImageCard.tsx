import { CSSProperties } from "react";

interface Props {
  className?: string;
}

const AboutImageCard = ({ className }: Props) => (
  <div className={`bg-gradient-to-br from-gray-50 rounded-sm to-gray-200 p-[3%] absolute ${className}`}>
    <div className="bg-gray-400 w-full aspect-square"></div>
  </div>
);

export default AboutImageCard;
