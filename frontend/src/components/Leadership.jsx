import { MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { LEADERS } from "@/content";

const Leadership = () => (
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

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {LEADERS.map((leader, i) => (
          <Reveal key={leader.name} delay={0.1 * i}>
            <article
              className="group relative overflow-hidden rounded-3xl border border-ivory/10 bg-royal/40 p-8 text-center backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_20px_52px_rgba(7,20,38,0.5)]"
              data-testid={`leader-card-${i + 1}`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              {/* PORTRAIT PLACEHOLDER: replace this monogram block with an approved
                  photograph, e.g. <img src="/team/vikram.jpg" alt="Vikram Nehra" className="h-28 w-28 rounded-full object-cover mx-auto" /> */}
              <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full border-2 border-gold/50 bg-navy shadow-[0_0_36px_rgba(214,181,116,0.18)]">
                <span className="font-display text-2xl font-extrabold tracking-widest text-gold">{leader.initials}</span>
                <div className="absolute inset-0 rounded-full border border-gold/20" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-white" data-testid={`leader-name-${i + 1}`}>{leader.name}</h3>
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

export default Leadership;
