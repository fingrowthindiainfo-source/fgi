import { MapPin, Mail, Phone, ArrowRight, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SITE } from "@/content";
import { useInquiry } from "@/context/InquiryContext";

const Contact = () => {
  const { openInquiry } = useInquiry();

  return (
    <section id="contact" className="relative overflow-hidden bg-ivory py-24 lg:py-32" data-testid="contact-section">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">Contact</p>
            <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl" data-testid="contact-headline">
              Let’s Start a Conversation.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-navy/70 md:text-lg">
              Have questions about our services or work opportunities? We welcome your inquiry.
            </p>
            <button
              type="button"
              onClick={() => openInquiry()}
              data-testid="contact-start-work-btn"
              className="gold-ring-focus group mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 font-display text-sm font-bold text-gold transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(7,20,38,0.3)]"
            >
              Start Your Work
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl bg-navy p-8 shadow-[0_24px_64px_rgba(7,20,38,0.3)] lg:p-10" data-testid="contact-card">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" aria-hidden="true" />
              <h3 className="font-display text-xl font-bold text-white">{SITE.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.28em] text-gold">{SITE.tagline}</p>

              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-royal/60 text-gold">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-mist">Head Office</p>
                    <p className="mt-0.5 text-sm font-medium text-ivory" data-testid="contact-address">{SITE.address}</p>
                  </div>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="gold-ring-focus group/mail flex items-start gap-4 rounded-lg" data-testid="contact-email-link">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-royal/60 text-gold transition-colors duration-300 group-hover/mail:bg-gold group-hover/mail:text-navy">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-mist">Email</p>
                      <p className="mt-0.5 text-sm font-medium text-ivory transition-colors duration-300 group-hover/mail:text-gold">{SITE.email}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={SITE.phoneHref} className="gold-ring-focus group/tel flex items-start gap-4 rounded-lg" data-testid="contact-phone-link">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-royal/60 text-gold transition-colors duration-300 group-hover/tel:bg-gold group-hover/tel:text-navy">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-mist">Phone</p>
                      <p className="mt-0.5 text-sm font-medium text-ivory transition-colors duration-300 group-hover/tel:text-gold">{SITE.phoneDisplay}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="gold-ring-focus group/wa flex items-start gap-4 rounded-lg" data-testid="contact-whatsapp-link">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-royal/60 text-gold transition-colors duration-300 group-hover/wa:bg-gold group-hover/wa:text-navy">
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-mist">WhatsApp</p>
                      <p className="mt-0.5 text-sm font-medium text-ivory transition-colors duration-300 group-hover/wa:text-gold">Chat with our team</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
