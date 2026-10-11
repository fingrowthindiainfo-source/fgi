import { BadgeCheck, Handshake } from "lucide-react";
import { CERTIFICATIONS, PLATFORM_NETWORK } from "@/content";

const MarqueeRow = ({ items, direction, renderItem, label, icon: Icon, testid }) => {
  // Render the list 4 times so a short list still fills the loop seamlessly
  const loop = [...items, ...items, ...items, ...items];
  const Row = ({ hidden }) => (
    <div className="flex shrink-0 items-center gap-4 pr-4" aria-hidden={hidden || undefined}>
      {loop.map((item, i) => renderItem(item, i))}
    </div>
  );
  return (
    <div data-testid={testid}>
      <div className="mb-5 flex items-center justify-center gap-2.5">
        <Icon size={15} className="text-gold" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">{label}</p>
      </div>
      <div className="marquee-paused-hover relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className={`flex w-max ${direction === "ltr" ? "marquee-track-ltr" : "marquee-track-rtl"}`}>
          <Row />
          <Row hidden />
        </div>
      </div>
    </div>
  );
};

const TrustStrip = () => (
  <section className="border-t border-gold/10 bg-navy py-14" data-testid="trust-strip">
    <div className="mx-auto max-w-7xl space-y-10 px-5 lg:px-8">
      <MarqueeRow
        items={CERTIFICATIONS}
        direction="rtl"
        label="Registrations & Certifications"
        icon={BadgeCheck}
        testid="certifications-marquee"
        renderItem={(cert, i) => (
          <div
            key={i}
            className="flex items-center gap-3.5 rounded-2xl border border-gold/25 bg-royal/40 px-7 py-4 backdrop-blur-sm"
            data-testid={i === 0 ? "cert-badge-msme" : undefined}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/40 bg-navy/70 font-display text-xs font-extrabold tracking-wide text-gold">
              {cert.name}
            </div>
            <div className="text-left">
              <p className="font-display text-sm font-bold text-white">{cert.name} {cert.sub}</p>
              <p className="text-[11px] text-mist">{cert.note}</p>
            </div>
          </div>
        )}
      />
      <MarqueeRow
        items={PLATFORM_NETWORK}
        direction="ltr"
        label="Campaign & Platform Network"
        icon={Handshake}
        testid="platforms-marquee"
        renderItem={(name, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-full border border-ivory/15 bg-royal/30 px-8 py-3.5"
            data-testid={i === 0 ? "platform-badge-first" : undefined}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            <span className="font-display text-sm font-bold tracking-wide text-ivory">{name}</span>
          </div>
        )}
      />
      <p className="text-center text-[11px] leading-relaxed text-mist/60">
        All names and marks belong to their respective owners and are shown to indicate business associations.
      </p>
    </div>
  </section>
);

export default TrustStrip;
