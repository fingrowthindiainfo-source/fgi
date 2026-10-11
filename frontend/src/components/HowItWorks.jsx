import { Send, FileSearch, MessagesSquare, ShieldCheck, ClipboardList, Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";
import { STEPS } from "@/content";

const ICONS = { Send, FileSearch, MessagesSquare, ShieldCheck, ClipboardList, Rocket };

const HowItWorks = () => (
  <section id="how-it-works" className="relative overflow-hidden bg-ivory py-24 lg:py-32" data-testid="how-it-works-section">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">How It Works</p>
        <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl" data-testid="how-it-works-headline">
          From Inquiry to Opportunity
        </h1>
      </Reveal>

      <div className="relative mx-auto mt-16 max-w-3xl">
        {/* Connecting line */}
        <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-gold/10 via-gold/60 to-gold/10 sm:left-1/2" aria-hidden="true" />

        <div className="space-y-10">
          {STEPS.map((step, i) => {
            const Icon = ICONS[step.icon];
            const leftSide = i % 2 === 0;
            return (
              <Reveal key={step.title} delay={0.06 * i}>
                <div className={`relative flex items-start gap-6 sm:w-1/2 ${leftSide ? "sm:pr-12" : "sm:ml-auto sm:pl-12 sm:text-left"}`} data-testid={`how-step-${i + 1}`}>
                  {/* Node */}
                  <div
                    className={`absolute top-1 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-navy text-gold shadow-[0_0_24px_rgba(214,181,116,0.3)] ${
                      leftSide ? "left-0 sm:left-auto sm:-right-6" : "left-0 sm:-left-6"
                    }`}
                  >
                    <Icon size={19} />
                  </div>
                  <div className={`ml-16 rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_6px_24px_rgba(7,20,38,0.06)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_14px_36px_rgba(7,20,38,0.1)] sm:ml-0 ${leftSide ? "" : ""}`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-dark">Step {i + 1}</p>
                    <h3 className="mt-2 font-display text-lg font-bold text-navy">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/65">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-14 max-w-xl text-center text-xs leading-relaxed text-navy/50">
          Timelines and allocations depend on project availability, eligibility, and individual progress. Submitting an inquiry does not guarantee selection or employment.
        </p>
      </Reveal>
    </div>
  </section>
);

export default HowItWorks;
