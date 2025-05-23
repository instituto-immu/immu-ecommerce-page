import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface FloatingWhatsappButtonProps {
  whatsappNumber?: string;
}

const formatWhatsappUrl = (number: string) => {
  // Remove caracteres não numéricos
  const clean = number.replace(/\D/g, "");
  return `https://wa.me/${clean}`;
};

const FloatingWhatsappButton: React.FC<FloatingWhatsappButtonProps> = ({
  whatsappNumber = "+5527992575998"
}) => (
  <a
    href={formatWhatsappUrl(whatsappNumber)}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Conversar no WhatsApp"
    className="fixed z-50 right-8 bottom-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center animate-fade-in transition-all"
    style={{
      boxShadow: "0 2px 24px rgba(39, 174, 96, 0.24)",
      animation: "pulse 2.0s infinite",
    }}
  >
    <FaWhatsapp size={28} />
  </a>
);

export default FloatingWhatsappButton;
