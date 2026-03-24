import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Fue increíble mi experiencia en Medellín Colombia, muy hermoso, agradezco a la Agencia de seguridad porque fueron geniales y me sentí en familia, logré grabar mis videos y al tiempo disfrutar.",
    name: "Tony Hawk",
    role: "Music entrepreneur, USA",
  },
  {
    quote: "Soy muy afortunada de haber contactado a 10X, espectacular mi viaje con mi familia, me sentí como una artista. Un auto increíble solo para nosotros, conductor y un esquema de seguridad profesional y encantador.",
    name: "Julia Miles",
    role: "International Business, Alemania",
  },
  {
    quote: "10XASEGLO me brindó mi estadía de trabajo como si fuesen vacaciones. Me acompañaron por Medellín, Cali, Cartagena, Bogotá y fue monumental la seguridad que me brindaron.",
    name: "John Goodman",
    role: "Empresario Internacional",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">Testimonios</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">
            Lo Que Dicen <span className="text-gradient-gold">Nuestros Clientes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border p-8 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">
                «{t.quote}»
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-display font-bold text-primary">{t.name}</div>
                <div className="text-muted-foreground text-xs tracking-wider uppercase">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center p-12 bg-card border border-primary/20"
        >
          <p className="font-display text-xl md:text-2xl italic text-foreground/80 max-w-3xl mx-auto">
            Cuando otras empresas dicen: <span className="text-muted-foreground">"Lo tenemos que estudiar."</span>
          </p>
          <p className="font-display text-xl md:text-2xl font-bold mt-3">
            En <span className="text-gradient-gold">10X AGENCY SECURITY GLOBAL</span> decimos:{" "}
            <span className="text-primary">"El servicio ya está operativo."</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
