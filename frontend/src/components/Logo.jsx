// Official Fin Growth India logo (supplied by the company, background made transparent).
const Logo = ({ compact = false }) => (
  <div className="flex flex-col items-start gap-1" data-testid="fgi-logo">
    <img
      src="/assets/fgi-logo-wide.png"
      alt="Fin Growth India — Grow Together, Earn Together"
      className={`w-auto ${compact ? "h-10" : "h-11"}`}
      data-testid="fgi-logo-image"
    />
    {!compact && (
      <span className="pl-0.5 text-[9px] font-medium uppercase tracking-[0.3em] text-gold/90">
        Grow Together · Earn Together
      </span>
    )}
  </div>
);

export default Logo;
