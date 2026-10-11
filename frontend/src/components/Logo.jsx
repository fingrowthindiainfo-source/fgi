// Official Fin Growth India logo (supplied by the company).
// mix-blend-screen makes the logo's black background blend into dark surfaces.
const Logo = ({ compact = false }) => (
  <div className="flex items-center gap-3" data-testid="fgi-logo">
    <img
      src="/assets/fgi-logo.jpg"
      alt="Fin Growth India — Grow Together, Earn Together"
      className="h-12 w-auto rounded-lg mix-blend-screen"
      data-testid="fgi-logo-image"
    />
  </div>
);

export default Logo;
