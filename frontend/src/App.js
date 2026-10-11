import { useEffect, useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { InquiryProvider } from "@/context/InquiryContext";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import OpportunitiesPage from "@/pages/OpportunitiesPage";
import HowItWorksPage from "@/pages/HowItWorksPage";
import LeadershipPage from "@/pages/LeadershipPage";
import FaqPage from "@/pages/FaqPage";
import ContactPage from "@/pages/ContactPage";
import StartWorkPage from "@/pages/StartWorkPage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";

const ScrollAndMeta = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // Canonical URL derived from the live origin so it works on any domain
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.origin + pathname);
  }, [pathname]);
  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Organization structured data (facts supplied by the company)
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Fin Growth India",
      alternateName: "FGI",
      description: "Business-support opportunities, skill development, and professional growth.",
      email: "fingrowthindia.info@gmail.com",
      telephone: "+91 9785868775",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mansarovar, Jaipur",
        addressRegion: "Rajasthan",
        postalCode: "302020",
        addressCountry: "IN",
      },
      foundingDate: "2022-05",
      url: window.location.origin,
    });
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <div className="App bg-navy min-h-screen">
      {loading && <Loader onDone={() => setLoading(false)} />}
      <CustomCursor />
      <BrowserRouter>
        <InquiryProvider>
          <ScrollAndMeta />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/opportunities" element={<OpportunitiesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/faqs" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/start-work" element={<StartWorkPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </InquiryProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
