import { MapPin, Award } from "lucide-react";
import Reveal from "@/components/Reveal";
import { LEADERS } from "@/content";

const Leadership = () => {
  const founder = LEADERS.find((l) => l.featured);
  const cofounders = LEADERS.filter((l) => !l.featured);

  return (
    <section id="leadership" className="relative overflow-hidden bg-navy py-24 lg:py-32" data-testid="leadership-section">
      <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Leadership</p>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl" data-testid="leadership-headline">
            Leadership Built Around <span className="text-gold-gradient">Growth</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-mist md:text-lg">
            Our leadership team is committed to creating opportunities, supporting skill development, and helping people explore professional growth through guidance and practical experience.
          </p>
        </Reveal>

        {/* Featured founder */}
        <Reveal delay={0.1}>
          <article
            className="mx-auto mt-14 grid max-w-4xl items-stretch overflow-hidden rounded-3xl border border-gold/35 bg-royal/40 shadow-[0_24px_64px_rgba(7,20,38,0.5)] backdrop-blur-sm md:grid-cols-2"
            data-testid="founder-featured-card"
          >
            <div className="relative min-h-[380px]">
              <img
                src={founder.image}
                alt={`${founder.name}, ${founder.role} of Fin Growth India`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top"
                data-testid="founder-photo"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-royal/80 to-transparent md:hidden" aria-hidden="true" />
            </div>
            <div className="relative flex flex-col justify-center p-8 lg:p-12">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" aria-hidden="true" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">{founder.role}</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-white" data-testid="founder-name">{founder.name}</h2>
              <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-mist">
                <MapPin size={14} className="text-gold/70" />
                {founder.location}
              </p>
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-gold/25 bg-navy/60 p-4">
                <Award size={18} className="mt-0.5 shrink-0 text-gold" />
                <p className="text-sm leading-relaxed text-ivory/90" data-testid="founder-tagline">{founder.tagline}</p>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Co-founders */}
        <div className="mx-auto mt-10 grid max-w-3xl gap-8 sm:grid-cols-2">
          {cofounders.map((leader, i) => (
            <Reveal key={leader.name} delay={0.15 + 0.1 * i}>
              <article
                className="group relative overflow-hidden rounded-3xl border border-ivory/10 bg-royal/40 p-8 text-center backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_20px_52px_rgba(7,20,38,0.5)]"
                data-testid={`cofounder-card-${i + 1}`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                <img
                  src={leader.image}
                  alt={`${leader.name}, ${leader.role} of Fin Growth India`}
                  loading="lazy"
                  className="mx-auto h-28 w-28 rounded-full border-2 border-gold/50 object-cover shadow-[0_0_36px_rgba(214,181,116,0.18)]"
                  data-testid={`cofounder-photo-${i + 1}`}
                />
                <h3 className="mt-6 font-display text-xl font-bold text-white" data-testid={`cofounder-name-${i + 1}`}>{leader.name}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-gold">{leader.role}</p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-mist">
                  <MapPin size={14} className="text-gold/70" />
                  {leader.location}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
