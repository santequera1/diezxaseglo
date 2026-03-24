import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=573044946469&text=Hola%2C%20necesito%20una%20cotización";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="10X ASEGLO Seguridad" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">
              Protección de élite
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Soluciones de{" "}
            <span className="text-gradient-gold">Seguridad</span>{" "}
            a tu Medida
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            La vigilancia y seguridad es una gran responsabilidad. Nuestro equipo analiza cada caso para ofrecer un servicio sin fisuras, con profesionales cualificados preparados para cada situación.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-4 text-sm font-bold tracking-wider uppercase hover:shadow-gold transition-all"
            >
              Pedir Cotización
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 border border-primary/30 text-foreground px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:border-primary hover:text-primary transition-all"
            >
              Ver Servicios
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 bg-card/80 backdrop-blur-md border-t border-border"
      >
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "10+", label: "Años de Experiencia" },
              { num: "500+", label: "Clientes Satisfechos" },
              { num: "108", label: "Oficinas con Licencia" },
              { num: "2K+", label: "Activos Protegidos" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl md:text-3xl font-bold text-primary">{stat.num}</div>
                <div className="text-muted-foreground text-xs tracking-wider uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
