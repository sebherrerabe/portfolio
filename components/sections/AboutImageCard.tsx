import { CSSProperties } from "react";

interface Props {
  style?: CSSProperties;
}

const AboutImageCard = ({ style }: Props) => (
  <div style={style} className="bg-gradient-to-br from-gray-50 rounded-sm to-gray-200 shadow-2xl p-[3%] absolute">
    <div className="bg-gray-400 w-full aspect-square"></div>
    <div className="h-20 w-full">
    </div>
  </div>
);

export default AboutImageCard;
