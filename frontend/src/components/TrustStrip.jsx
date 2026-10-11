import { BadgeCheck, Landmark, CandlestickChart } from "lucide-react";
import { CERTIFICATIONS, BANKING_NETWORK, PLATFORM_NETWORK } from "@/content";

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

const LogoChip = ({ item, testid }) => (
  <div
    className="flex h-16 items-center justify-center rounded-2xl bg-white px-7 py-3 shadow-[0_6px_20px_rgba(7,20,38,0.35)]"
    data-testid={testid}
  >
    <img
      src={item.logo}
      alt={`${item.name} logo`}
      loading="lazy"
      className="h-9 w-auto max-w-[150px] object-contain"
    />
  </div>
);

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
        items={BANKING_NETWORK}
        direction="ltr"
        label="Banking Network"
        icon={Landmark}
        testid="banking-marquee"
        renderItem={(bank, i) => (
          <LogoChip key={i} item={bank} testid={i === 0 ? "banking-chip-first" : undefined} />
        )}
      />
      <MarqueeRow
        items={PLATFORM_NETWORK}
        direction="rtl"
        label="Trading Platform Network"
        icon={CandlestickChart}
        testid="platforms-marquee"
        renderItem={(platform, i) => (
          <LogoChip key={i} item={platform} testid={i === 0 ? "platform-chip-first" : undefined} />
        )}
      />
      <p className="text-center text-[11px] leading-relaxed text-mist/60">
        All names and marks belong to their respective owners and are shown to indicate business associations.
      </p>
    </div>
  </section>
);

export default TrustStrip;
