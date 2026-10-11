import { ArrowRight, Undo2 } from "lucide-react";
import { useInquiry } from "@/context/InquiryContext";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";

const StartWork = () => {
  const { flipped, openInquiry, closeInquiry } = useInquiry();

  return (
    <section id="start-work" className="relative overflow-hidden bg-navy py-24 lg:py-32" data-testid="start-work-section">
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/40 blur-[150px]" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-[100px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Begin Here</p>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl" data-testid="start-work-headline">
            One Short Form. <span className="text-gold-gradient">A World of Possibility.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="perspective-1400 mx-auto mt-14 max-w-xl" data-testid="signature-flip-card">
            <div
              className="preserve-3d relative transition-transform duration-[850ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
            >
              {/* Front face */}
              <div
                className={`backface-hidden overflow-hidden rounded-3xl border border-gold/30 bg-royal/40 shadow-[0_28px_72px_rgba(7,20,38,0.55)] backdrop-blur-md ${
                  flipped ? "pointer-events-none absolute inset-0" : "relative"
                }`}
                aria-hidden={flipped}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" aria-hidden="true" />
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
                <div className="flex min-h-[420px] flex-col items-center justify-center p-10 text-center sm:p-14">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/40 bg-navy/70 shadow-[0_0_40px_rgba(214,181,116,0.15)]">
                    <span className="font-display text-lg font-extrabold tracking-widest text-gold">FGI</span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-extrabold text-white sm:text-3xl" data-testid="signature-card-front-heading">
                    Ready to Take Your Next Step?
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist md:text-base">
                    Tell us a little about yourself. Our team can guide you through the next steps.
                  </p>
                  <button
                    type="button"
                    onClick={() => openInquiry()}
                    data-testid="signature-card-flip-btn"
                    className="gold-ring-focus group mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-9 py-4 font-display text-sm font-bold tracking-wide text-navy shadow-[0_12px_40px_rgba(214,181,116,0.35)] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_16px_48px_rgba(214,181,116,0.5)]"
                  >
                    Start Your Work
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Back face — inquiry form */}
              <div
                className={`backface-hidden rotate-y-180 overflow-hidden rounded-3xl border border-gold/40 bg-navy-800 shadow-[0_28px_72px_rgba(7,20,38,0.65)] ${
                  flipped ? "relative" : "pointer-events-none absolute inset-0"
                }`}
                aria-hidden={!flipped}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" aria-hidden="true" />
                <div className="thin-scroll max-h-[78vh] overflow-y-auto">
                  <div className="flex justify-end px-5 pt-5">
                    <button
                      type="button"
                      onClick={closeInquiry}
                      data-testid="signature-card-back-btn"
                      className="gold-ring-focus inline-flex items-center gap-1.5 rounded-full border border-ivory/20 px-4 py-1.5 text-xs font-medium text-mist transition-colors duration-300 hover:border-gold/50 hover:text-ivory"
                    >
                      <Undo2 size={13} />
                      Back
                    </button>
                  </div>
                  <InquiryForm />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default StartWork;
