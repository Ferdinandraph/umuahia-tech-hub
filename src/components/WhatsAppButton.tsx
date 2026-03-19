import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "2348084562109";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Imperium%20Systems%2C%20I%27m%20interested%20in%20your%20products`;

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg shadow-whatsapp/30 transition-transform hover:scale-110 active:scale-95"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="h-7 w-7 text-whatsapp-foreground" />
  </a>
);

export { WHATSAPP_URL };
export default WhatsAppButton;
