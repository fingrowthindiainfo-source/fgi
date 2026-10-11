import { useEffect } from "react";
import { motion } from "framer-motion";

const Loader = ({ onDone }) => {
  useEffect(() => {
    const t = window.setTimeout(onDone, 1400);
    return () => window.clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-navy"
      exit={{ opacity: 0 }}
      data-testid="app-loader"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        <img
          src="/assets/fgi-logo-wide.png"
          alt="Fin Growth India"
          className="h-20 w-auto drop-shadow-[0_0_40px_rgba(214,181,116,0.3)]"
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-6 text-xs uppercase tracking-[0.4em] text-gold"
      >
        Keep Grow With FinGrow
      </motion.p>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        className="mt-4 h-px w-40 origin-left bg-gradient-to-r from-transparent via-gold to-transparent"
      />
    </motion.div>
  );
};

export default Loader;
