import { motion } from "framer-motion";
import { Shield, Car, MapPin, Building, GraduationCap, Search, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

import securityImg from "@/assets/seguridad-escoltas.webp";
import transportImg from "@/assets/team-fleet.jpg";
import tourImg from "@/assets/tour-clientes-guatape.webp";
import hospedajeImg from "@/assets/hospedaje-10x.webp";
import trainingImg from "@/assets/entrenamiento-10x.webp";
import detectiveImg from "@/assets/detective-10x.webp";

type ServiceKey = "seguridad" | "transporte" | "tour" | "hospedaje" | "entrenamiento" | "detective";

const services: {
  key: ServiceKey;
  icon: typeof Shield;
  image: string;
  featured: boolean;
  link?: string;
}[] = [
  { key: "seguridad", icon: Shield, image: securityImg, featured: true },
  { key: "transporte", icon: Car, image: transportImg, featured: true, link: "/transporte" },
  { key: "tour", icon: MapPin, image: tourImg, featured: true },
  { key: "hospedaje", icon: Building, image: hospedajeImg, featured: false },
  { key: "entrenamiento", icon: GraduationCap, image: trainingImg, featured: false },
  { key: "detective", icon: Search, image: detectiveImg, featured: false },
];

import { whatsappUrlFor } from "@/lib/whatsapp";

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background" id="servicios">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">{t.services.badge}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            {t.services.title} <span className="text-gradient-gold">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Featured Services - Large Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {services.filter(s => s.featured).map((service, i) => {
            const item = t.services.items[service.key];
            return (
              <motion.div
                key={service.key}
                id={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-500 scroll-mt-28"
              >
                {service.link ? (
                  <Link to={service.link} className="relative h-56 overflow-hidden block cursor-pointer">
                    <img
                      src={service.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                    </div>
                  </Link>
                ) : (
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon className="w-5 h-5 text-primary" />
                    {service.link ? (
                      <Link to={service.link} className="font-display text-xl font-bold hover:text-primary transition-colors">
                        {item.title}
                      </Link>
                    ) : (
                      <h3 className="font-display text-xl font-bold">{item.title}</h3>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{item.description}</p>
                  <div className="flex items-center gap-3">
                    <a
                      href={whatsappUrlFor(item.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-2.5 text-xs font-bold tracking-wider uppercase hover:shadow-gold transition-all"
                    >
                      {t.services.solicitar}
                    </a>
                    {service.link && (
                      <Link
                        to={service.link}
                        className="text-primary text-xs font-bold tracking-wider uppercase hover:underline"
                      >
                        {t.services.verFlota}
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other Services - Cards with Images */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.filter(s => !s.featured).map((service, i) => {
            const item = t.services.items[service.key];
            return (
              <motion.div
                key={service.key}
                id={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 scroll-mt-28"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon className="w-5 h-5 text-primary" />
                    <h3 className="font-display text-lg font-bold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{item.description}</p>
                  <a
                    href={whatsappUrlFor(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-2.5 text-xs font-bold tracking-wider uppercase hover:shadow-gold transition-all"
                  >
                    {t.services.solicitar}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
