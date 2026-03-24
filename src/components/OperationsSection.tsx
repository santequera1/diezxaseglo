import { motion } from "framer-motion";
import { Eye, Shield, Radio } from "lucide-react";

import surveillanceImg from "@/assets/surveillance-room.png";
import monitorImg from "@/assets/security-monitor.png";

const OperationsSection = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-body font-semibold tracking-[0.3em] uppercase">Centro de Operaciones</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4">
            Vigilancia <span className="text-gradient-gold">24/7</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Large image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={surveillanceImg}
              alt="Centro de vigilancia y monitoreo 10X ASEGLO"
              className="w-full h-[400px] object-cover border border-border"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 text-primary font-body text-xs font-bold tracking-widest uppercase">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Monitoreo en tiempo real
              </div>
            </div>
          </motion.div>

          {/* Right - Content + smaller image */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex gap-4 p-5 bg-card border border-border">
                <Eye className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">Tecnología de Punta</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Sistemas de cámaras CCTV, drones de vigilancia y software de reconocimiento para garantizar la seguridad total.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-card border border-border">
                <Shield className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">Respuesta Inmediata</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Protocolos de reacción rápida con personal entrenado en Fuerzas Especiales, disponibles las 24 horas.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-card border border-border">
                <Radio className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">Comunicación Encriptada</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Canales de comunicación seguros y encriptados para la coordinación de operaciones en tiempo real.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={monitorImg}
                alt="Agente de seguridad monitoreando"
                className="w-full h-48 object-cover border border-border"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsSection;
