import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import bodyguardMale from "@/assets/bodyguard-male.jpg";
import bodyguardFemale from "@/assets/bodyguard-female.png";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=573044946469&text=Hola%2C%20necesito%20una%20cotización";

const EliteTeamSection = () => {
  return (
    <section className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[500px]">
          {/* Images Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-2 gap-3"
          >
            <div className="relative overflow-hidden">
              <img
                src={bodyguardMale}
                alt="Escolta profesional masculino"
                className="w-full h-full object-cover min-h-[350px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
            </div>
            <div className="relative overflow-hidden">
              <img
                src={bodyguardFemale}
                alt="Escolta profesional femenina"
                className="w-full h-full object-cover min-h-[350px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
            </div>
            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm border border-border p-4 flex items-center justify-between">
              <div>
                <div className="font-display text-lg font-bold text-primary">Escoltas de Élite</div>
                <div className="text-muted-foreground text-xs font-body">Ex-militares certificados</div>
              </div>
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <span className="font-display text-primary-foreground font-bold text-lg">10X</span>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center p-8 lg:p-14 bg-background border border-border"
          >
            <span className="text-primary text-sm font-body font-semibold tracking-[0.3em] uppercase mb-4">Equipo Profesional</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Protección Ejecutiva de <span className="text-gradient-gold">Alto Nivel</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nuestros agentes son ex-militares de las Fuerzas Especiales del Ejército Nacional de Colombia, aprobados por el Gobierno Nacional con todas las licencias vigentes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Cada escolta recibe entrenamiento continuo en protección ejecutiva, manejo defensivo, primeros auxilios tácticos y protocolos de seguridad internacional.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Licencia de seguridad vigente",
                "Entrenamiento en protección VIP",
                "Manejo táctico y defensivo",
                "Cobertura nacional e internacional",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 text-sm font-bold tracking-wider uppercase hover:shadow-gold transition-all self-start"
            >
              Solicitar Escolta
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EliteTeamSection;
