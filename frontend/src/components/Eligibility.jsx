import { CheckCircle2, ShieldAlert } from "lucide-react";
import Reveal from "@/components/Reveal";
import { ELIGIBILITY } from "@/content";
import { useInquiry } from "@/context/InquiryContext";

const Eligibility = () => {
  const { openInquiry } = useInquiry();

  return (
    <section id="eligibility" className="bg-ivory py-24 lg:py-32" data-testid="eligibility-section">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">Eligibility</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl" data-testid="eligibility-headline">
              Is FGI the Right Fit for You?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy/70 md:text-lg">
              Our opportunities are designed to be accessible. Here is what generally helps you get started.
            </p>
            <button
              type="button"
              onClick={() => openInquiry()}
              data-testid="eligibility-start-work-btn"
              className="gold-ring-focus mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3.5 font-display text-sm font-bold text-gold transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(7,20,38,0.3)]"
            >
              Start Your Work
            </button>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <ul className="space-y-4" data-testid="eligibility-list">
                {ELIGIBILITY.map((item) => (
                  <li key={item} className="flex items-start gap-3.5 rounded-xl border border-navy/10 bg-white p-4 shadow-[0_3px_14px_rgba(7,20,38,0.04)]">
                    <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-gold-dark" />
                    <span className="text-sm leading-relaxed text-navy/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 flex items-start gap-3.5 rounded-xl border border-gold/50 bg-navy p-5" data-testid="eligibility-documents-note">
                <ShieldAlert size={19} className="mt-0.5 shrink-0 text-gold" />
                <p className="text-sm leading-relaxed text-ivory/85">
                  Any sensitive identity or banking documents needed for a legitimate project are requested separately, through appropriate, secure, authorized channels. We never collect such documents through the public inquiry form.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
