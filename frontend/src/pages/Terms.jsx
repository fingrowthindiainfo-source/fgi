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

const Terms = () => {
  useTitle(
    "Terms and Conditions | Fin Growth India",
    "Terms and conditions for using the Fin Growth India website and inquiry form, including inquiry, compensation, and acceptable-use terms."
  );
  return (
  <div className="min-h-screen bg-navy" data-testid="terms-page">
    <header className="border-b border-gold/15 bg-navy/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-4xl items-center justify-between px-5">
        <Link to="/" aria-label="Back to Fin Growth India home"><Logo /></Link>
        <Link to="/" className="gold-ring-focus inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2 text-xs font-semibold text-gold transition-colors duration-300 hover:bg-gold/10" data-testid="terms-back-home">
          <ArrowLeft size={14} /> Back to Home
        </Link>
      </div>
    </header>
    <main className="mx-auto max-w-4xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Legal</p>
      <h1 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">Terms and Conditions</h1>
      <p className="mt-3 text-sm text-mist">Fin Growth India · {SITE.address}</p>

      <Section title="About These Terms">
        <p>These terms govern your use of the Fin Growth India website and the inquiry form. By submitting an inquiry, you confirm that the information you provide is accurate and that you are at least 18 years old.</p>
      </Section>
      <Section title="Nature of the Inquiry">
        <p>The inquiry form is an expression of interest only. Submitting an inquiry does not create an employment relationship, and it does not guarantee selection, work allocation, or earnings. Suitable opportunities may be offered based on eligibility, skills, communication, performance, and project requirements.</p>
      </Section>
      <Section title="Compensation">
        <p>Compensation varies by role and project. Applicable rates, performance conditions, payment schedules, and eligibility requirements will be explained before any work begins. Any earning examples discussed are illustrative, not guaranteed; actual earnings depend on available work, completed and approved tasks, applicable terms, and individual performance.</p>
      </Section>
      <Section title="Acceptable Use">
        <p>You agree not to misuse this website, submit false or misleading information, or attempt to disrupt its operation. We may decline or disregard inquiries that are incomplete, inaccurate, or abusive.</p>
      </Section>
      <Section title="No Professional or Financial Advice">
        <p>Content on this website is general information about business-support opportunities. Fin Growth India is not a bank or a regulated financial institution, and nothing on this website constitutes financial, investment, or legal advice.</p>
      </Section>
      <Section title="Changes and Contact">
        <p>We may update these terms from time to time; the version published on this page applies. Questions may be sent to <a href={`mailto:${SITE.email}`} className="text-gold underline-offset-2 hover:underline">{SITE.email}</a> or {SITE.phoneDisplay}.</p>
      </Section>
    </main>
  </div>
  );
};

export default Terms;
