import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=573044946469&text=Hola%2C%20necesito%20una%20cotización";

const CTASection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(43,74%,49%)_0%,transparent_70%)]" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">Contacto</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Solicitar <span className="text-gradient-gold">Información</span>
          </h2>
          <p className="text-muted-foreground mb-4">
            Nuestro equipo técnico y comercial desarrolla proyectos de seguridad a medida, comprometiéndonos a optimizar el coste de sus partidas destinadas a seguridad.
          </p>
          <div className="flex items-center justify-center gap-2 text-primary font-bold text-lg mb-10">
            <Phone className="w-5 h-5" />
            +57 304 494 6469
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-10 py-4 text-sm font-bold tracking-wider uppercase hover:shadow-gold transition-all"
          >
            Solicitar Cotización
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
