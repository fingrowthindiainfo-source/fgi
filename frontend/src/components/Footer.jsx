import { Link } from "react-router-dom";
import { NAV_LINKS, SITE } from "@/content";
import Logo from "@/components/Logo";
import { useInquiry } from "@/context/InquiryContext";

const Footer = () => {
  const year = new Date().getFullYear();
  const { openInquiry } = useInquiry();

  const goTo = (e, href) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-gold/15 bg-navy" data-testid="site-footer">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-mist">
              Fin Growth India provides business-support opportunities and professional development guidance. Availability, eligibility, responsibilities, and compensation vary by project.
            </p>
            <p className="mt-4 text-sm italic text-gold/80">“{SITE.brandMessage}”</p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">Quick Links</h3>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.slice(1, 6).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => goTo(e, link.href)}
                    className="gold-ring-focus rounded text-sm text-mist transition-colors duration-300 hover:text-gold"
                    data-testid={`footer-link-${link.href.slice(1)}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">Get Started</h3>
            <ul className="mt-5 space-y-2.5">
              <li>
                <button
                  type="button"
                  onClick={() => openInquiry()}
                  className="gold-ring-focus rounded text-sm font-semibold text-gold transition-colors duration-300 hover:text-gold-light"
                  data-testid="footer-start-work-btn"
                >
                  Start Your Work
                </button>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="gold-ring-focus rounded text-sm text-mist transition-colors duration-300 hover:text-gold" data-testid="footer-email-link">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.phoneHref} className="gold-ring-focus rounded text-sm text-mist transition-colors duration-300 hover:text-gold" data-testid="footer-phone-link">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="gold-ring-focus rounded text-sm text-mist transition-colors duration-300 hover:text-gold" data-testid="footer-privacy-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="gold-ring-focus rounded text-sm text-mist transition-colors duration-300 hover:text-gold" data-testid="footer-terms-link">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-ivory/10 pt-8">
          <p className="text-xs leading-relaxed text-mist/70">
            Fin Growth India is a business-support and professional-development organization. It is not a bank or a regulated financial institution, and it does not claim endorsement by any government body. Submitting an inquiry does not guarantee selection, work allocation, or earnings.
          </p>
          <p className="mt-4 text-xs text-mist/60" data-testid="footer-copyright">
            © {year} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
