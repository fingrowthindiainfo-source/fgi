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
        className="flex h-24 w-24 items-center justify-center rounded-2xl border border-gold/50 bg-navy-800 shadow-[0_0_60px_rgba(214,181,116,0.2)]"
      >
        <span className="text-gold-gradient animate-shimmer bg-[length:200%_auto] font-display text-3xl font-extrabold tracking-widest">
          FGI
        </span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-6 text-xs uppercase tracking-[0.4em] text-mist"
      >
        Fin Growth India
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
