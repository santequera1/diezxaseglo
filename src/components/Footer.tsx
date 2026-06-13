import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=573044946469&text=Hola%2C%20necesito%20información";

const navHrefs = ["/", "/servicios", "/nosotros", "/contacto"];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-xl font-bold text-gradient-gold mb-4">10X ASEGLO</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.footer.brandDesc}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-wider uppercase mb-4 text-primary">{t.footer.navTitle}</h4>
            <ul className="space-y-2">
              {t.footer.nav.map((item, i) => (
                <li key={item}>
                  <a href={navHrefs[i]} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-wider uppercase mb-4 text-primary">{t.footer.servicesTitle}</h4>
            <ul className="space-y-2">
              {t.footer.services.map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-wider uppercase mb-4 text-primary">{t.footer.contactTitle}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                +57 304 494 6469
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                10xaseglo@gmail.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                Medellín, Colombia
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a href="https://www.instagram.com/10xaseglo_agencia" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/@10xaseglo" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@10xaseglo" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-muted-foreground text-xs tracking-wider">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
