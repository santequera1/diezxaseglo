import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=573044946469&text=Hola%2C%20necesito%20información";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-xl font-bold text-gradient-gold mb-4">10X ASEGLO</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Agency Security Global S.A.S — Soluciones de seguridad integrales en Colombia y el mundo.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-wider uppercase mb-4 text-primary">Navegación</h4>
            <ul className="space-y-2">
              {["Inicio", "Servicios", "Sobre Nosotros", "Contacto"].map((item) => (
                <li key={item}>
                  <a href={`/${item === "Inicio" ? "" : item.toLowerCase().replace(/ /g, "-")}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-wider uppercase mb-4 text-primary">Servicios</h4>
            <ul className="space-y-2">
              {["Seguridad", "Transporte", "Tour V.I.P", "Hospedaje", "Entrenamiento", "Detective Privado"].map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-wider uppercase mb-4 text-primary">Contacto</h4>
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
            Copyright © 2026 10X Agency Security Global S.A.S — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
