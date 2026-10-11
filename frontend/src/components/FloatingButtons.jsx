import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/content";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3" data-testid="floating-contact-buttons">
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Fin Growth India on WhatsApp"
      data-testid="whatsapp-float-btn"
      className="gold-ring-focus flex items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_8px_28px_rgba(37,211,102,0.35)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(37,211,102,0.5)]"
    >
      <MessageCircle size={22} />
    </a>
    <a
      href={SITE.phoneHref}
      aria-label="Call Fin Growth India"
      data-testid="call-float-btn"
      className="gold-ring-focus flex items-center justify-center rounded-full border border-gold/60 bg-royal p-3.5 text-gold shadow-[0_8px_28px_rgba(214,181,116,0.25)] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-1 hover:bg-gold hover:text-navy hover:shadow-[0_12px_36px_rgba(214,181,116,0.4)]"
    >
      <Phone size={22} />
    </a>
  </div>
);

export default FloatingButtons;
