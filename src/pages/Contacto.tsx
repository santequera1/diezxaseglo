import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=573044946469&text=Hola%2C%20necesito%20información%20sobre%20sus%20servicios";

const Contacto = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">Contacto</span>
                <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                  Contáctanos <span className="text-gradient-gold">Hoy</span>
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Nuestro equipo técnico y comercial desarrolla proyectos de seguridad a medida de cada cliente. Déjanos tus datos y un Asesor Comercial se pondrá en contacto contigo.
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-foreground">+57 304 494 6469</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-foreground">10xaseglo@gmail.com</span>
                  </div>
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-10 py-4 text-sm font-bold tracking-wider uppercase hover:shadow-gold transition-all"
                >
                  Escribir por WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                className="bg-card border border-border p-10"
              >
                <h3 className="font-display text-2xl font-bold mb-6">Solicitar Cotización</h3>
                <form onSubmit={(e) => { e.preventDefault(); window.open(WHATSAPP_URL, '_blank'); }} className="space-y-5">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Nombre</label>
                    <input type="text" className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Email</label>
                    <input type="email" className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Servicio de Interés</label>
                    <select className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors">
                      <option>Seguridad</option>
                      <option>Transporte</option>
                      <option>Tour V.I.P</option>
                      <option>Hospedaje</option>
                      <option>Entrenamiento y Capacitación</option>
                      <option>Detective Privado</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Mensaje</label>
                    <textarea rows={4} className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Cuéntanos qué necesitas..." />
                  </div>
                  <button type="submit" className="w-full bg-gradient-gold text-primary-foreground py-3 text-sm font-bold tracking-wider uppercase hover:shadow-gold transition-all">
                    Enviar Solicitud
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contacto;
