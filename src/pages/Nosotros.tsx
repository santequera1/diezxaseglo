import { motion } from "framer-motion";
import { Shield, Target, Eye, MapPin, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import heroBg from "@/assets/hero-bg.jpg";

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroBg} alt="10X ASEGLO" className="w-full h-full object-cover opacity-30" width={1920} height={1080} loading="lazy" />
            <div className="absolute inset-0 bg-background/80" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">Sobre Nosotros</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-4">
                10X Agency <span className="text-gradient-gold">Security Global</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">Quiénes Somos</span>
                </div>
                <h2 className="font-display text-3xl font-bold mb-6">
                  Una Agencia de Seguridad <span className="text-gradient-gold">de Élite</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  10XASEGLO es una Agencia de seguridad y vigilancia Global joven que se va posicionando como una empresa referente gracias a su constancia, garantías, profesionalidad y rápida capacidad de organización.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Dotamos a todos nuestros profesionales de formación estricta y profesional adaptada a cada servicio con tecnología de punta en ciberseguridad, entrenamiento físico, técnico, táctico, conocimientos en DDHH, DICA.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { num: "10+", label: "Años" },
                  { num: "500+", label: "Clientes" },
                  { num: "108", label: "Oficinas" },
                  { num: "2K+", label: "Activos" },
                ].map((s) => (
                  <div key={s.label} className="bg-card border border-border p-8 text-center">
                    <div className="font-display text-3xl font-bold text-primary">{s.num}</div>
                    <div className="text-muted-foreground text-xs tracking-wider uppercase mt-2">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-background border border-border p-10"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Misión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Brindar soluciones integrales de seguridad, transporte y protección con los más altos estándares de calidad, profesionalismo y tecnología avanzada, garantizando la tranquilidad y bienestar de nuestros clientes en cada momento.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="bg-background border border-border p-10"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Visión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser la agencia de seguridad global más reconocida en Colombia y Latinoamérica, posicionándonos como el socio estratégico preferido para empresas y particulares que buscan protección, confianza y excelencia operativa.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h2 className="font-display text-3xl font-bold mb-4">Nuestras <span className="text-gradient-gold">Sedes</span></h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-10">Operamos en las principales ciudades de Colombia con cobertura nacional e internacional.</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Medellín", "Bogotá", "Cali", "Cartagena"].map((city) => (
                <div key={city} className="bg-card border border-border p-6">
                  <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
                  <span className="font-display font-bold">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Nosotros;
