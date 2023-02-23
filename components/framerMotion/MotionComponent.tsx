import { motion, useAnimation, Variants } from "framer-motion";
import { ReactNode, useEffect } from "react";

const variants: {
  opacity: Variants;
  translate: Variants;
} = {
  opacity: {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0.5, transition: { duration: 1 } },
  },

  translate: {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: -100, transition: { duration: 1 } },
  },
};

interface Props {
  children: ReactNode;
  variant: "opacity" | "translate" | Variants;
  className?: string;
  inView: boolean;
}

const MotionComponent = ({ children, variant, className, inView }: Props) => {
  const control = useAnimation();

  useEffect(() => {
    if (inView) control.start("visible");
    else control.start("hidden");
  }, [control, inView]);
  return (
    <motion.div
      className={className}
      variants={typeof variant === "string" ? variants[variant] : variant}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
};

export default MotionComponent;
