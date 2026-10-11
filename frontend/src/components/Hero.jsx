import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { IMAGES } from "@/content";
import { useInquiry } from "@/context/InquiryContext";

const Hero = () => {
  const { openInquiry } = useInquiry();
  const navigate = useNavigate();

  const scrollToOpportunities = () => {
    navigate("/opportunities");
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-navy" data-testid="hero-section">
      {/* Fine-line grid */}
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      {/* Hero imagery wash */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.14]"
        style={{ backgroundImage: `url(${IMAGES.hero})` }}
        aria-hidden="true"
      />
      {/* Soft blue lighting */}
      <div className="absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-royal/60 blur-[140px]" aria-hidden="true" />
      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[130px]" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-transparent to-navy" aria-hidden="true" />

      {/* Floating geometric glass elements */}
      <div className="animate-float-slow absolute right-[14%] top-[22%] hidden h-28 w-28 rounded-3xl border border-gold/25 bg-royal/30 backdrop-blur-md lg:block" aria-hidden="true" />
      <div className="animate-float-slower absolute right-[26%] top-[58%] hidden h-16 w-16 rotate-12 rounded-2xl border border-gold/35 bg-gold/5 backdrop-blur-md lg:block" aria-hidden="true" />
      <div className="animate-float-slow absolute left-[8%] bottom-[18%] hidden h-20 w-20 -rotate-6 rounded-full border border-mist/20 bg-royal/20 backdrop-blur-md lg:block" aria-hidden="true" />
      <div className="animate-pulse-glow absolute right-[20%] top-[38%] hidden h-2 w-2 rounded-full bg-gold shadow-[0_0_20px_rgba(214,181,116,0.9)] lg:block" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-36 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-royal/40 px-4 py-2 backdrop-blur-md"
          data-testid="hero-label"
        >
          <Sparkles size={13} className="text-gold" />
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
            Fin Growth India · Your Growth Partner
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl"
          data-testid="hero-headline"
        >
          Your Ambition.{" "}
          <span className="text-gold-gradient">Our Opportunity.</span>
          <br />
          A Future of Growth.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-base leading-relaxed text-mist md:text-lg"
          data-testid="hero-subtext"
        >
          Discover business-support opportunities, develop practical skills, and explore professional growth with Fin Growth India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            type="button"
            onClick={() => openInquiry()}
            data-testid="hero-start-work-btn"
            className="gold-ring-focus group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-display text-sm font-bold tracking-wide text-navy shadow-[0_10px_36px_rgba(214,181,116,0.35)] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_14px_44px_rgba(214,181,116,0.5)]"
          >
            Start Your Work
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            type="button"
            onClick={scrollToOpportunities}
            data-testid="hero-explore-btn"
            className="gold-ring-focus inline-flex items-center gap-2 rounded-full border border-ivory/25 bg-royal/30 px-8 py-4 font-display text-sm font-bold tracking-wide text-ivory backdrop-blur-md transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:bg-royal/60"
          >
            Explore Opportunities
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-20 flex items-center gap-3 text-mist/70"
          aria-hidden="true"
        >
          <div className="flex h-9 w-6 items-start justify-center rounded-full border border-mist/30 p-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-gold"
            />
          </div>
          <span className="text-[11px] uppercase tracking-[0.25em]">Scroll to explore</span>
          <ChevronDown size={14} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
