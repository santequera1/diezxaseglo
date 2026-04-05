import { motion } from "framer-motion";
import { Shield, Car, MapPin, Building, GraduationCap, Search, Star } from "lucide-react";
import { Link } from "react-router-dom";

import securityImg from "@/assets/security-service.jpg";
import transportImg from "@/assets/transport-service.jpg";
import tourImg from "@/assets/tour-vip-service.jpg";
import hospedajeImg from "@/assets/hospedaje-service.jpg";
import trainingImg from "@/assets/training-service.jpg";
import detectiveImg from "@/assets/detective-service.jpg";

const services = [
  {
    icon: Shield,
    title: "Seguridad",
    description: "Escoltas privados de alto rendimiento con formación estricta y gran capacidad. Protección ejecutiva de primer nivel.",
    image: securityImg,
    featured: true,
  },
  {
    icon: Car,
    title: "Transporte",
    description: "Flota de autos luxury para comodidad, eficacia y seguridad. Viajes confortables con total garantía.",
    image: transportImg,
    featured: true,
    link: "/transporte",
  },
  {
    icon: MapPin,
    title: "Tour V.I.P",
    description: "Soluciones integrales: hospedaje, turismo, transporte, seguridad y diversión los 365 días del año.",
    image: tourImg,
    featured: true,
  },
  {
    icon: Building,
    title: "Hospedaje",
    description: "Hospedaje exclusivo en Colombia adaptado a tu viaje: romántico, de negocios o familiar.",
    image: hospedajeImg,
    featured: false,
  },
  {
    icon: GraduationCap,
    title: "Entrenamiento y Capacitación",
    description: "Formación profesional para escoltas privados. Cursos de actualización y reciclaje profesional.",
    image: trainingImg,
    featured: false,
  },
  {
    icon: Search,
    title: "Detective Privado",
    description: "Investigación con total profesionalidad, confidencialidad y rigor. Informes completos y válidos.",
    image: detectiveImg,
    featured: false,
  },
];

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=573044946469&text=Hola%2C%20me%20interesa%20el%20servicio%20de%20";

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background" id="servicios">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">Nuestros Servicios</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Protección <span className="text-gradient-gold">Integral</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            10XASEGLO S.A.S ofrece soluciones de seguridad globales para la protección de la integridad física de bienes, inmuebles y personas.
          </p>
        </motion.div>

        {/* Featured Services - Large Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {services.filter(s => s.featured).map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
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
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <service.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
                <div className="flex items-center gap-3">
                  <a
                    href={`${WHATSAPP_URL}${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-2.5 text-xs font-bold tracking-wider uppercase hover:shadow-gold transition-all"
                  >
                    Solicitar Servicio
                  </a>
                  {"link" in service && service.link && (
                    <Link
                      to={service.link as string}
                      className="text-primary text-xs font-bold tracking-wider uppercase hover:underline"
                    >
                      Ver Flota →
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Services - Cards with Images */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.filter(s => !s.featured).map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
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
                  <h3 className="font-display text-lg font-bold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
                <a
                  href={`${WHATSAPP_URL}${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-2.5 text-xs font-bold tracking-wider uppercase hover:shadow-gold transition-all"
                >
                  Solicitar Servicio
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
