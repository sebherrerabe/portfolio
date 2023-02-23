import { Variants } from "framer-motion";
import MotionComponent from "../framerMotion/MotionComponent";

const getVariant = (rotate: number): Variants => ({
  visible: { opacity: 1, scale: 1, rotate, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0.5, transition: { duration: 1 } },
});

interface Props {
  className?: string;
  rotate?: number;
  inView: boolean;
}

const AboutImageCard = ({ className, rotate = 0, inView }: Props) => (
  <MotionComponent
    inView={inView}
    variant={getVariant(rotate)}
    className={`bg-gradient-to-br from-gray-50 rounded-sm to-gray-200 p-[3%] absolute ${className}`}
  >
    <div className="bg-gray-400 w-full aspect-square"></div>
  </MotionComponent>
);

export default AboutImageCard;
