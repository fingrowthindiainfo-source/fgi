import { Building2, CalendarDays, Globe2, MapPin, Briefcase, GraduationCap, TrendingUp } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SITE } from "@/content";

const FEATURES = [
  {
    icon: Briefcase,
    title: "Employment Opportunities",
    description: "Explore opportunities that may suit your background, skills, and availability.",
  },
  {
    icon: GraduationCap,
    title: "Skill Development",
    description: "Develop practical skills through learning, guidance, and assigned tasks.",
  },
  {
    icon: TrendingUp,
    title: "Professional Growth",
    description: "Build experience and explore pathways for your continued professional development.",
  },
];

const INFO = [
  { icon: Building2, label: "Company", value: "Fin Growth India (FGI)" },
  { icon: CalendarDays, label: "Established", value: SITE.established },
  { icon: Globe2, label: "Industry", value: SITE.industry },
  { icon: MapPin, label: "Head Office", value: SITE.address },
];

const About = () => (
  <section id="about" className="relative bg-ivory py-24 lg:py-32" data-testid="about-section">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">About Us</p>
            <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl" data-testid="about-headline">
              Growth Begins with the Right Opportunity.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-navy/70 md:text-lg">
              Fin Growth India (FGI) is a growing organization dedicated to employment opportunities, skill development, and professional growth across business and service sectors.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy/70 md:text-lg">
              We aim to help people explore suitable work opportunities through guidance, practical experience, and task-based business support.
            </p>
          </Reveal>

          <div className="mt-10 space-y-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={0.12 * (i + 1)}>
                <div
                  className="group flex items-start gap-4 rounded-2xl border border-navy/10 bg-white p-5 shadow-[0_4px_20px_rgba(7,20,38,0.05)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_12px_32px_rgba(7,20,38,0.1)]"
                  data-testid={`about-feature-${i + 1}`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                    <f.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy/60">{f.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="lg:sticky lg:top-28">
          <div className="relative overflow-hidden rounded-3xl bg-navy p-8 shadow-[0_24px_64px_rgba(7,20,38,0.35)] lg:p-10" data-testid="company-info-card">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Company Profile</p>
            <h3 className="mt-3 font-display text-2xl font-extrabold text-white">Fin Growth India</h3>
            <p className="mt-1 text-sm italic text-mist">“{SITE.brandMessage}”</p>
            <dl className="mt-8 space-y-5">
              {INFO.map((item) => (
                <div key={item.label} className="flex items-start gap-4 border-b border-ivory/10 pb-5 last:border-0 last:pb-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-royal/60 text-gold">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.2em] text-mist">{item.label}</dt>
                    <dd className="mt-0.5 text-sm font-medium text-ivory">{item.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>

      {/* Mission & Vision */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-gold/30 bg-navy p-8" data-testid="mission-card">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Mission</p>
            <p className="mt-4 text-base leading-relaxed text-ivory/90 md:text-lg">
              To create opportunities for professional growth by connecting people with business-support activities, practical learning, and guidance.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="h-full rounded-2xl border border-navy/10 bg-white p-8 shadow-[0_4px_20px_rgba(7,20,38,0.05)]" data-testid="vision-card">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">Our Vision</p>
            <p className="mt-4 text-base leading-relaxed text-navy/80 md:text-lg">
              To contribute to employment generation, skill development, digital workforce expansion, and financial growth.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
