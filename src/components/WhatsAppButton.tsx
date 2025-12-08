import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "2349014486093";
  const message = "Hello! I'm interested in TGDE Foods & Farms products.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5C] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
};

export default WhatsAppButton;
