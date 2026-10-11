import { createContext, useCallback, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const InquiryContext = createContext(null);

export const InquiryProvider = ({ children }) => {
  const [flipped, setFlipped] = useState(false);
  const audienceRef = useRef(null);
  const navigate = useNavigate();

  const openInquiry = useCallback(
    (audience) => {
      if (audience) audienceRef.current = audience;
      if (window.location.pathname !== "/start-work") {
        navigate("/start-work");
      } else {
        document.getElementById("start-work")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      // Flip shortly after navigation/scroll so the animation is visible
      window.setTimeout(() => setFlipped(true), 500);
    },
    [navigate]
  );

  const closeInquiry = useCallback(() => setFlipped(false), []);

  return (
    <InquiryContext.Provider value={{ flipped, openInquiry, closeInquiry, audienceRef }}>
      {children}
    </InquiryContext.Provider>
  );
};

export const useInquiry = () => useContext(InquiryContext);
