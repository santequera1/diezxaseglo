import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import logoHorizontal from "@/assets/logo-horizontal.png";

import { WHATSAPP_URL } from "@/lib/whatsapp";

const navHrefs = ["/", "/servicios", "/nosotros", "/contacto"];
const serviceHrefs = [
  "/servicios#seguridad",
  "/transporte",
  "/servicios#tour",
  "/servicios#hospedaje",
  "/servicios#entrenamiento",
  "/servicios#detective",
];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src={logoHorizontal}
              alt="10X ASEGLO - Agencia de Seguridad Global"
              className="h-10 w-auto mb-4"
              loading="lazy"
            />
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
                  <Link to={navHrefs[i]} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-wider uppercase mb-4 text-primary">{t.footer.servicesTitle}</h4>
            <ul className="space-y-2">
              {t.footer.services.map((item, i) => (
                <li key={item}>
                  <Link to={serviceHrefs[i]} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-wider uppercase mb-4 text-primary">{t.footer.contactTitle}</h4>
            <ul className="space-y-3">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  +57 304 494 6469
                </a>
              </li>
              <li>
                <a href="mailto:10xaseglo@gmail.com" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  10xaseglo@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                Medellín, Colombia
              </li>
            </ul>
            {/* TODO: restaurar iconos de redes sociales cuando envíen los nuevos links (las cuentas anteriores ya no existen) */}
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
