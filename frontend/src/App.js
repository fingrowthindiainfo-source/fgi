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
    // Share-card image follows whatever domain serves the app (absolute URL required by scrapers)
    const ogImage = window.location.origin + "/assets/og-image.jpg";
    const setMeta = (selector, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        if (selector.includes("property=")) {
          el.setAttribute("property", "og:image");
        } else {
          el.setAttribute("name", "twitter:image");
        }
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };
    setMeta("meta[property='og:image']", ogImage);
    setMeta("meta[name='twitter:image']", ogImage);
  }, [pathname]);
  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

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
