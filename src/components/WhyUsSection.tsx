import { motion } from "framer-motion";
import { Clock, Phone, Car, AlertTriangle, Cpu, BadgeCheck } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Perfección en Cualquier Momento",
    description: "Servicio 100% adaptado y adaptable a cada cliente.",
  },
  {
    icon: Phone,
    title: "Comunicación 24/7",
    description: "Empresa joven, referente por constancia, garantías y profesionalidad.",
  },
  {
    icon: Car,
    title: "Nuestra Flota",
    description: "La mejor flota de vehículos luxury con todas las garantías.",
  },
  {
    icon: AlertTriangle,
    title: "Ayuda de Emergencias",
    description: "Rápida cobertura en caso de servicios de urgencia.",
  },
  {
    icon: Cpu,
    title: "Tecnología Avanzada",
    description: "Ciberseguridad, entrenamiento físico, técnico y táctico de punta.",
  },
  {
    icon: BadgeCheck,
    title: "Oficiales Autorizados",
    description: "Ex militares de Fuerzas Especiales aprobados por el Gobierno Nacional.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">Diferenciadores</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">
            ¿Por Qué <span className="text-gradient-gold">Elegirnos</span>?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 p-6 bg-background/50 border border-border hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 shrink-0 bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
