import { Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=573044946469&text=Hola%2C%20necesito%20información";

const ContactButton = ({ className = "" }: { className?: string }) => {
  const { t } = useLanguage();

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-3.5 text-sm font-bold tracking-wider uppercase hover:shadow-gold transition-all ${className}`}
    >
      <Phone className="w-4 h-4" />
      {t.common.contactar}
    </a>
  );
};

export default ContactButton;
