import { useEffect } from "react";
import Layout from "@/components/Layout";
import Faq from "@/components/Faq";
import useTitle from "@/hooks/useTitle";
import { FAQS } from "@/content";

const FaqPage = () => {
  useTitle(
    "FAQs | Fin Growth India",
    "Answers about FGI opportunities: who can inquire, remote work, device needs, time commitments, compensation transparency, and what the inquiry form collects."
  );

  useEffect(() => {
    // FAQPage structured data — mirrors the questions and answers visible on this page
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.faqLd = "true";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    });
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <Layout>
      <Faq />
    </Layout>
  );
};

export default FaqPage;
