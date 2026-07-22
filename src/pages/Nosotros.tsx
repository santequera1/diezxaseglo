import { motion } from "framer-motion";
import { Target, Eye, MapPin, Users, Award, Heart, Handshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/i18n/LanguageContext";
import heroBg from "@/assets/team-fleet.jpg";
import equipoSeguridad from "@/assets/seguridad-escoltas.webp";
import equipoTahoes from "@/assets/equipo-tahoes.webp";
import equipoMarriott from "@/assets/equipo-marriott.webp";
import equipoNoche from "@/assets/equipo-noche.webp";
import conductor10x from "@/assets/conductor-10x.webp";
import equipoPrado from "@/assets/equipo-prado.webp";

const valueIcons = [Award, Handshake, Heart];

const Nosotros = () => {
  const { t } = useLanguage();

  const teamImages = [
    { src: equipoSeguridad, span: "md:col-span-2 md:row-span-2" },
    { src: equipoTahoes, span: "" },
    { src: equipoMarriott, span: "" },
    { src: equipoNoche, span: "" },
    { src: conductor10x, span: "" },
    { src: equipoPrado, span: "md:col-span-2" },
  ];

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
              <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">{t.nosotros.badge}</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-4">
                {t.nosotros.title} <span className="text-gradient-gold">{t.nosotros.titleHighlight}</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
                {t.nosotros.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Nuestra Historia */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">{t.nosotros.historyBadge}</span>
                </div>
                <h2 className="font-display text-3xl font-bold mb-6">
                  {t.nosotros.historyTitle} <span className="text-gradient-gold">{t.nosotros.historyHighlight}</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t.nosotros.p1}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t.nosotros.p2pre}<span className="text-foreground font-semibold">{t.nosotros.p2strong}</span>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t.nosotros.p3}
                </p>
                <div className="mt-6 p-4 border-l-4 border-primary bg-primary/5">
                  <p className="text-foreground font-display font-bold text-lg italic">
                    {t.nosotros.quote}
                  </p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  {t.nosotros.stats.map((s) => (
                    <div key={s.label} className="bg-card border border-border p-8 text-center">
                      <div className="font-display text-3xl font-bold text-primary">{s.num}</div>
                      <div className="text-muted-foreground text-xs tracking-wider uppercase mt-2">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Valores */}
                <div className="grid grid-cols-3 gap-4">
                  {t.nosotros.values.map((label, i) => {
                    const Icon = valueIcons[i];
                    return (
                      <div key={label} className="bg-card border border-border p-5 text-center">
                        <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                        <span className="text-sm font-bold tracking-wider uppercase">{label}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Equipo Real */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">{t.nosotros.teamBadge}</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
                {t.nosotros.teamTitle} <span className="text-gradient-gold">{t.nosotros.teamHighlight}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t.nosotros.teamSubtitle}</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-4">
              {teamImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`relative overflow-hidden border border-border group ${img.span}`}
                >
                  <img
                    src={img.src}
                    alt={t.nosotros.teamAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-card border border-border p-10"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{t.nosotros.missionTitle}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.nosotros.missionText}
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="bg-card border border-border p-10"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{t.nosotros.visionTitle}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.nosotros.visionText}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h2 className="font-display text-3xl font-bold mb-4">{t.nosotros.sedesTitle} <span className="text-gradient-gold">{t.nosotros.sedesHighlight}</span></h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-10">{t.nosotros.sedesText}</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t.nosotros.cities.map((city) => (
                <div key={city} className="bg-background border border-border p-6">
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
