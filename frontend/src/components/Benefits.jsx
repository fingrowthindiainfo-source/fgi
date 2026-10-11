import { CalendarClock, Wifi, GraduationCap, Wrench, Briefcase, LineChart } from "lucide-react";
import Reveal from "@/components/Reveal";
import { BENEFITS } from "@/content";

const ICONS = { CalendarClock, Wifi, GraduationCap, Wrench, Briefcase, LineChart };

const Benefits = () => (
  <section id="benefits" className="relative overflow-hidden bg-navy py-24 lg:py-32" data-testid="benefits-section">
    <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-royal/40 blur-[130px]" aria-hidden="true" />
    <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Why FGI</p>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl" data-testid="benefits-headline">
          Designed Around <span className="text-gold-gradient">Your Growth</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-mist md:text-lg">
          Explore opportunities that may fit your background, availability, and abilities while developing practical skills.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((benefit, i) => {
          const Icon = ICONS[benefit.icon];
          return (
            <Reveal key={benefit.title} delay={0.07 * (i % 3)}>
              <div
                className="group flex h-full items-start gap-5 rounded-2xl border border-ivory/10 bg-royal/30 p-6 transition-[transform,border-color,background-color] duration-400 hover:-translate-y-1.5 hover:border-gold/35 hover:bg-royal/50"
                data-testid={`benefit-card-${i + 1}`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-navy/70 text-gold transition-colors duration-400 group-hover:bg-gold group-hover:text-navy">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white">
                    {benefit.title}
                    {benefit.subtitle && <span className="text-gold">, {benefit.subtitle}</span>}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist">{benefit.description}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Benefits;
