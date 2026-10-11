import { motion } from "framer-motion";

// Site-wide motion signature: slow, even ease-in-out matching the card flips
export const MOTION_EASE = [0.65, 0, 0.35, 1];

const Reveal = ({ children, delay = 0, className = "", ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 1.05, delay, ease: MOTION_EASE }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export default Reveal;
