import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import Reveal from "@/components/Reveal";
import { AUDIENCES } from "@/content";
import { useInquiry } from "@/context/InquiryContext";

const AudienceCard = ({ audience, index }) => {
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { openInquiry } = useInquiry();

  const onMouseMove = (e) => {
    if (flipped) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 6 });
  };

  const toggle = () => setFlipped((f) => !f);

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <Reveal delay={0.08 * (index % 4)} className="h-full">
      <div className="perspective-1400 h-full" data-testid={`audience-card-${audience.key}`}>
        <div
          role="button"
          tabIndex={0}
          aria-pressed={flipped}
          aria-label={`${audience.title} — flip card for details`}
          onClick={toggle}
          onKeyDown={onKeyDown}
          onMouseMove={onMouseMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          data-testid={`audience-flip-${audience.key}`}
          className="preserve-3d gold-ring-focus relative h-[460px] cursor-pointer rounded-3xl outline-none transition-transform duration-[800ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: flipped
              ? "rotateY(180deg)"
              : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transitionDuration: flipped ? "800ms" : "300ms",
          }}
        >
          {/* Front */}
          <div
            className="backface-hidden absolute inset-0 flex flex-col overflow-hidden rounded-3xl border border-gold/20 bg-royal/50 shadow-[0_16px_48px_rgba(7,20,38,0.45)] backdrop-blur-sm"
            aria-hidden={flipped}
          >
            <div className="relative h-56 shrink-0 overflow-hidden">
              <img
                src={audience.image}
                alt={audience.imageAlt}
                loading="lazy"
                className="animate-float-slow h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal via-royal/20 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" aria-hidden="true" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-bold text-white">{audience.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{audience.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold text-gold">
                {audience.button}
                <ArrowRight size={15} />
              </span>
            </div>
          </div>

          {/* Back */}
          <div
            className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col overflow-hidden rounded-3xl border border-gold/40 bg-navy-800 p-6 shadow-[0_16px_48px_rgba(7,20,38,0.6)]"
            aria-hidden={!flipped}
          >
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gold/10 blur-2xl" aria-hidden="true" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">{audience.backTitle}</p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ivory/85">{audience.backDescription}</p>
            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  openInquiry(audience.key);
                }}
                data-testid={`audience-start-work-${audience.key}`}
                className="gold-ring-focus inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-display text-sm font-bold text-navy transition-[background-color,box-shadow] duration-300 hover:bg-gold-light hover:shadow-[0_10px_30px_rgba(214,181,116,0.4)]"
              >
                Start Your Work
                <ArrowRight size={15} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setFlipped(false);
                }}
                data-testid={`audience-back-${audience.key}`}
                className="gold-ring-focus inline-flex items-center justify-center gap-2 rounded-full border border-ivory/20 px-6 py-2.5 text-sm font-medium text-mist transition-colors duration-300 hover:border-gold/50 hover:text-ivory"
              >
                <RotateCcw size={14} />
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const AudienceCards = () => (
  <section id="opportunities" className="relative overflow-hidden bg-navy py-24 lg:py-32" data-testid="opportunities-section">
    <div className="hero-grid absolute inset-0 opacity-50" aria-hidden="true" />
    <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-royal/50 blur-[140px]" aria-hidden="true" />
    <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Opportunities</p>
        <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl" data-testid="audience-headline">
          Your Journey. Your Schedule. <span className="text-gold-gradient">Your Opportunity.</span>
        </h1>
        <p className="mt-5 text-base leading-relaxed text-mist md:text-lg">
          Different backgrounds. Different ambitions. One place to explore your next step.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {AUDIENCES.map((audience, i) => (
          <AudienceCard key={audience.key} audience={audience} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default AudienceCards;
