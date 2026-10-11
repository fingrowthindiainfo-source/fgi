import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/Logo";
import useTitle from "@/hooks/useTitle";

const NotFound = () => {
  useTitle("Page Not Found | Fin Growth India");
  return (
  <div className="hero-grid flex min-h-screen flex-col items-center justify-center bg-navy px-5 text-center" data-testid="not-found-page">
    <Logo />
    <p className="mt-12 font-display text-7xl font-extrabold text-gold-gradient sm:text-8xl">404</p>
    <h1 className="mt-4 font-display text-xl font-bold text-white sm:text-2xl">This page has moved on — like a good opportunity.</h1>
    <p className="mt-3 max-w-md text-sm leading-relaxed text-mist">
      The page you are looking for does not exist. Let us take you back to familiar ground.
    </p>
    <Link
      to="/"
      data-testid="not-found-home-btn"
      className="gold-ring-focus mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 font-display text-sm font-bold text-navy shadow-[0_10px_32px_rgba(214,181,116,0.3)] transition-[background-color,box-shadow] duration-300 hover:bg-gold-light"
    >
      <ArrowLeft size={15} />
      Back to Home
    </Link>
  </div>
  );
};

export default NotFound;
