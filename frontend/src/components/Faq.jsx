import Reveal from "@/components/Reveal";
import { FAQS } from "@/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Faq = () => (
  <section id="faqs" className="relative overflow-hidden bg-navy py-24 lg:py-32" data-testid="faq-section">
    <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-royal/40 blur-[130px]" aria-hidden="true" />
    <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
      <Reveal className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">FAQs</p>
        <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl" data-testid="faq-headline">
          Questions, <span className="text-gold-gradient">Answered Honestly.</span>
        </h1>
      </Reveal>

      <Reveal delay={0.15}>
        <Accordion type="single" collapsible className="mt-12 space-y-4" data-testid="faq-accordion">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${i}`}
              className="overflow-hidden rounded-2xl border border-ivory/10 bg-royal/30 px-6 transition-colors duration-300 data-[state=open]:border-gold/40 data-[state=open]:bg-royal/50"
              data-testid={`faq-item-${i + 1}`}
            >
              <AccordionTrigger
                className="py-5 font-display text-base font-bold text-ivory hover:no-underline hover:text-gold [&>svg]:text-gold"
                data-testid={`faq-trigger-${i + 1}`}
              >
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-mist" data-testid={`faq-content-${i + 1}`}>
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-10 rounded-2xl border border-gold/25 bg-royal/20 p-6" data-testid="compensation-note">
          <p className="text-sm leading-relaxed text-ivory/85">
            Compensation varies by role and project. Applicable rates, performance conditions, payment schedules, and eligibility requirements will be explained before work begins.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-mist/80">
            Any earning examples are illustrative, not guaranteed. Actual earnings depend on available work, completed and approved tasks, applicable terms, and individual performance.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Faq;
