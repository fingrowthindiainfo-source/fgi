import { createContext, useCallback, useContext, useRef, useState } from "react";

const InquiryContext = createContext(null);

export const InquiryProvider = ({ children }) => {
  const [flipped, setFlipped] = useState(false);
  const audienceRef = useRef(null);

  const openInquiry = useCallback((audience) => {
    if (audience) audienceRef.current = audience;
    const el = document.getElementById("start-work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    // Flip shortly after scrolling starts so the animation is visible
    window.setTimeout(() => setFlipped(true), 500);
  }, []);

  const closeInquiry = useCallback(() => setFlipped(false), []);

  return (
    <InquiryContext.Provider value={{ flipped, openInquiry, closeInquiry, audienceRef }}>
      {children}
    </InquiryContext.Provider>
  );
};

export const useInquiry = () => useContext(InquiryContext);
