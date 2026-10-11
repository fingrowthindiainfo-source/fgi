import { Landmark, FileCheck, TrendingUp, CreditCard, Headset, Database, Handshake, LayoutDashboard } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SERVICES } from "@/content";

const ICONS = { Landmark, FileCheck, TrendingUp, CreditCard, Headset, Database, Handshake };

const Services = () => (
  <section id="services" className="relative overflow-hidden bg-navy py-24 lg:py-32" data-testid="services-section">
    <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-royal/40 blur-[130px]" aria-hidden="true" />
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Services</p>
        <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl" data-testid="services-headline">
          Business Support, <span className="text-gold-gradient">Delivered with Care.</span>
        </h1>
        <p className="mt-5 text-base leading-relaxed text-mist md:text-lg">
          We work across business-support areas such as banking, broking, credit card operations, KYC-related activities, customer support, data entry, and data management.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {SERVICES.map((service, i) => {
          const Icon = ICONS[service.icon];
          return (
            <Reveal key={service.title} delay={0.08 * (i % 3)}>
              <article
                className={`group relative h-full overflow-hidden rounded-2xl border p-7 backdrop-blur-sm transition-[transform,border-color,box-shadow,background-color] duration-500 hover:-translate-y-2 hover:border-gold/40 hover:bg-royal/60 hover:shadow-[0_20px_48px_rgba(7,20,38,0.5)] ${
                  service.featured ? "border-gold/40 bg-royal/60" : "border-ivory/10 bg-royal/40"
                }`}
                data-testid={`service-card-${i + 1}`}
              >
                {service.featured && (
                  <span className="absolute right-5 top-5 rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
                    Featured
                  </span>
                )}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-navy/60 text-gold transition-[background-color,transform] duration-500 group-hover:bg-gold group-hover:text-navy">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{service.description}</p>
                <div className="mt-6 h-px w-10 bg-gold/50 transition-[width] duration-500 group-hover:w-20" aria-hidden="true" />
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Working dashboard feature */}
      <Reveal delay={0.15}>
        <div className="mt-10 grid items-stretch gap-0 overflow-hidden rounded-3xl border border-gold/30 bg-royal/40 backdrop-blur-sm lg:grid-cols-5" data-testid="dashboard-feature">
          <div className="flex flex-col justify-center p-8 lg:col-span-2 lg:p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-navy/60 text-gold">
              <LayoutDashboard size={22} />
            </div>
            <h3 className="mt-6 font-display text-2xl font-extrabold text-white">
              Your Own <span className="text-gold-gradient">Working Dashboard</span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-mist md:text-base">
              Active participants also get access to a working dashboard — track assigned tasks, monitor progress, and follow payout status in one clean workspace.
            </p>
            <ul className="mt-6 space-y-3">
              {["Task allocation and progress tracking", "Payout status at a glance", "Guidance and updates from the team"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-ivory/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative lg:col-span-3">
            <img
              src="/assets/dashboard-demo.jpg"
              alt="Fin Growth India working dashboard — demo preview"
              loading="lazy"
              className="h-full w-full object-cover"
              data-testid="dashboard-demo-image"
            />
            <span className="absolute bottom-4 right-4 rounded-full border border-gold/50 bg-navy/85 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-gold backdrop-blur-sm">
              Demo Preview
            </span>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Services;
