import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/i18n/LanguageContext";

import { WHATSAPP_URL } from "@/lib/whatsapp";

const Contacto = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">{t.contacto.badge}</span>
                <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                  {t.contacto.title} <span className="text-gradient-gold">{t.contacto.titleHighlight}</span>
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t.contacto.desc}
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
                  {t.contacto.whatsappBtn}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                className="bg-card border border-border p-10"
              >
                <h3 className="font-display text-2xl font-bold mb-6">{t.contacto.formTitle}</h3>
                <form onSubmit={(e) => { e.preventDefault(); window.open(WHATSAPP_URL, '_blank'); }} className="space-y-5">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">{t.contacto.name}</label>
                    <input type="text" className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors" placeholder={t.contacto.namePlaceholder} />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">{t.contacto.email}</label>
                    <input type="email" className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors" placeholder={t.contacto.emailPlaceholder} />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">{t.contacto.serviceInterest}</label>
                    <select className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors">
                      {t.contacto.serviceOptions.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">{t.contacto.message}</label>
                    <textarea rows={4} className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none" placeholder={t.contacto.messagePlaceholder} />
                  </div>
                  <button type="submit" className="w-full bg-gradient-gold text-primary-foreground py-3 text-sm font-bold tracking-wider uppercase hover:shadow-gold transition-all">
                    {t.contacto.submit}
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
