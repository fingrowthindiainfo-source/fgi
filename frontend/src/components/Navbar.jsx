import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/content";
import { useInquiry } from "@/context/InquiryContext";
import Logo from "@/components/Logo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openInquiry } = useInquiry();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header
      data-testid="main-navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${
        scrolled || location.pathname !== "/"
          ? "border-b border-gold/15 bg-navy/85 shadow-[0_8px_32px_rgba(7,20,38,0.5)] backdrop-blur-xl"
          : "border-b border-transparent bg-navy/40 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation">
        <Link to="/" aria-label="Fin Growth India — home" className="gold-ring-focus rounded-lg" data-testid="nav-logo-link">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-7 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                data-testid={`nav-link-${link.path === "/" ? "home" : link.path.slice(1)}`}
                aria-current={isActive(link.path) ? "page" : undefined}
                className={`gold-ring-focus relative rounded px-1 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                  isActive(link.path) ? "text-gold" : "text-ivory/80 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-[width] duration-300 ${
                    isActive(link.path) ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => openInquiry()}
            data-testid="nav-start-work-btn"
            className="gold-ring-focus hidden rounded-full border border-gold/70 bg-gold/10 px-6 py-2.5 font-display text-[13px] font-bold tracking-wide text-gold transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-navy hover:shadow-[0_8px_28px_rgba(214,181,116,0.35)] sm:block"
          >
            Start Your Work
          </button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            data-testid="mobile-menu-toggle"
            className="gold-ring-focus rounded-lg border border-gold/30 p-2.5 text-ivory xl:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-b border-gold/15 bg-navy/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 xl:hidden ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
        data-testid="mobile-menu"
      >
        <ul className="space-y-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                data-testid={`mobile-nav-link-${link.path === "/" ? "home" : link.path.slice(1)}`}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-300 ${
                  isActive(link.path) ? "bg-royal/60 text-gold" : "text-ivory/80 hover:bg-royal/40 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <button
              type="button"
              onClick={() => { setOpen(false); openInquiry(); }}
              data-testid="mobile-start-work-btn"
              className="w-full rounded-full border border-gold/70 bg-gold/10 px-6 py-3 font-display text-sm font-bold text-gold transition-colors duration-300 hover:bg-gold hover:text-navy"
            >
              Start Your Work
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
