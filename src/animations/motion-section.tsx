import { Variants, motion } from "framer-motion";
import { ReactNode } from "react";

export type MotionSectionProps = {
    children: ReactNode;
    className?: string;
    element?: "section" | "div" | "article";
    variants?: Variants;
    style?: React.CSSProperties;
    threshold?: number;
  };

export default function AnimateOnView({ 
    children,
    className,
    element = "section",
    variants,
    style,
    threshold = 0.5,
 }: MotionSectionProps) {
    const props = {
        className,
        initial: "initial",
        whileInView: "visible",
        viewport: { once: true, amount: threshold },
        variants,
        style,
    }
    if (element === "div") {
        return <motion.div {...props}>{children}</motion.div>;
      }
      return <motion.section {...props}>{children}</motion.section>;
}