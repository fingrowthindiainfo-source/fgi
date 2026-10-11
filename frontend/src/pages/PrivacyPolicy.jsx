import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/Logo";
import useTitle from "@/hooks/useTitle";
import { SITE } from "@/content";

const Section = ({ title, children }) => (
  <section className="mt-10">
    <h2 className="font-display text-xl font-bold text-white">{title}</h2>
    <div className="mt-3 space-y-3 text-sm leading-relaxed text-mist">{children}</div>
  </section>
);

const PrivacyPolicy = () => {
  useTitle("Privacy Policy | Fin Growth India");
  return (
  <div className="min-h-screen bg-navy" data-testid="privacy-policy-page">
    <header className="border-b border-gold/15 bg-navy/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-4xl items-center justify-between px-5">
        <Link to="/" aria-label="Back to Fin Growth India home"><Logo /></Link>
        <Link to="/" className="gold-ring-focus inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2 text-xs font-semibold text-gold transition-colors duration-300 hover:bg-gold/10" data-testid="privacy-back-home">
          <ArrowLeft size={14} /> Back to Home
        </Link>
      </div>
    </header>
    <main className="mx-auto max-w-4xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Legal</p>
      <h1 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">Privacy Policy</h1>
      <p className="mt-3 text-sm text-mist">Fin Growth India · {SITE.address}</p>

      <Section title="What We Collect">
        <p>Our website inquiry form collects only five details: your full name, city, email address, phone number, and age. We do not request or collect Aadhaar numbers, PAN numbers, OTPs, bank details, UPI PINs, passwords, or document uploads through this website.</p>
      </Section>
      <Section title="How We Use It">
        <p>The information you submit is used solely to respond to your inquiry — for example, to contact you about a suitable business-support opportunity. Submitting the form sends your details to our team by email.</p>
      </Section>
      <Section title="What We Do Not Do">
        <p>We do not sell your information. We do not use your details for unrelated marketing lists. This website does not maintain a public database of inquiries, and we do not store your submission in your browser.</p>
      </Section>
      <Section title="Sensitive Documents">
        <p>If a legitimate project ever requires identity or banking documents, those are requested separately through appropriate, secure, and authorized channels — never through the public inquiry form.</p>
      </Section>
      <Section title="Your Choices">
        <p>You may ask us to stop contacting you or to delete the details you shared by writing to us at <a href={`mailto:${SITE.email}`} className="text-gold underline-offset-2 hover:underline">{SITE.email}</a> or calling {SITE.phoneDisplay}.</p>
      </Section>
      <Section title="Contact">
        <p>For any privacy question, contact Fin Growth India at <a href={`mailto:${SITE.email}`} className="text-gold underline-offset-2 hover:underline">{SITE.email}</a>.</p>
      </Section>
    </main>
  </div>
  );
};

export default PrivacyPolicy;
