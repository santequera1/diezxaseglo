import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Instagram, Facebook, Youtube, CreditCard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=573044946469&text=Hola%2C%20necesito%20información";
// TODO: reemplazar con el link de pago real (pasarela / enlace de cobro)
const PAYMENT_URL = "#";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.inicio, href: "/" },
    { label: t.nav.servicios, href: "/servicios" },
    { label: t.nav.nosotros, href: "/nosotros" },
    { label: t.nav.contacto, href: "/contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-gradient-gold tracking-wider">
              10X ASEGLO
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-primary ${
                  location.pathname === item.href ? "text-primary" : "text-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={PAYMENT_URL}
              className="flex items-center gap-1.5 text-sm font-medium tracking-widest uppercase text-foreground/70 transition-colors hover:text-primary"
            >
              <CreditCard className="w-4 h-4" />
              {t.nav.pagar}
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <a href="https://www.instagram.com/10xaseglo_agencia" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center text-foreground/50 hover:text-primary transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/@10xaseglo" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center text-foreground/50 hover:text-primary transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/@10xaseglo" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center text-foreground/50 hover:text-primary transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-2.5 text-sm font-semibold tracking-wider uppercase transition-all hover:shadow-gold"
            >
              <Phone className="w-4 h-4" />
              {t.nav.cotizar}
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium tracking-widest uppercase py-2 ${
                    location.pathname === item.href ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={PAYMENT_URL}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-sm font-medium tracking-widest uppercase py-2 text-foreground/70"
              >
                <CreditCard className="w-4 h-4" />
                {t.nav.pagar}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-3 text-sm font-semibold tracking-wider uppercase mt-2"
              >
                <Phone className="w-4 h-4" />
                {t.nav.cotizar}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
