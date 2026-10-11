import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Reveal from "@/components/Reveal";
import useTitle from "@/hooks/useTitle";
import { useInquiry } from "@/context/InquiryContext";

const Home = () => {
  useTitle(
    "Fin Growth India | Business Support & Professional Growth Opportunities",
    "Explore business-support opportunities, skill development, and professional growth with Fin Growth India. Discover suitable roles and connect with our team."
  );
  const { openInquiry } = useInquiry();

  return (
    <Layout offset={false}>
      <Hero />
      <Benefits />
      <section className="relative overflow-hidden bg-navy py-24 lg:py-28" data-testid="home-cta-section">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-[120px]" aria-hidden="true" />
        <Reveal className="relative mx-auto max-w-2xl px-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Begin Here</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl" data-testid="home-cta-heading">
            Ready to Take Your <span className="text-gold-gradient">Next Step?</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist">
            Tell us a little about yourself. Our team can guide you through the next steps.
          </p>
          <button
            type="button"
            onClick={() => openInquiry()}
            data-testid="home-cta-start-work-btn"
            className="gold-ring-focus group mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-9 py-4 font-display text-sm font-bold tracking-wide text-navy shadow-[0_12px_40px_rgba(214,181,116,0.35)] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_16px_48px_rgba(214,181,116,0.5)]"
          >
            Start Your Work
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Reveal>
      </section>
    </Layout>
  );
};

export default Home;
