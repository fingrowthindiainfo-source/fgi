// Placeholder brand mark — replace with the official Fin Growth India logo
// by swapping this component's contents (kept isolated so no other file changes).
const Logo = ({ compact = false }) => (
  <div className="flex items-center gap-3" data-testid="fgi-logo">
    {/* LOGO PLACEHOLDER: insert the official FGI logo image here, e.g.
        <img src="/logo.png" alt="Fin Growth India" className="h-10 w-auto" /> */}
    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/60 bg-navy-800 shadow-[0_0_24px_rgba(214,181,116,0.15)]">
      <span className="font-display text-sm font-800 font-extrabold tracking-wide text-gold">FGI</span>
    </div>
    {!compact && (
      <div className="leading-tight">
        <div className="font-display text-base font-bold text-white">Fin Growth India</div>
        <div className="text-[10px] uppercase tracking-[0.28em] text-gold/90">Your Growth Partner</div>
      </div>
    )}
  </div>
);

export default Logo;
