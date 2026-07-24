import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

import bodyguardMale from "@/assets/equipo-marriott.webp";
import bodyguardFemale from "@/assets/escolta-suit-suv.jpg";

import { WHATSAPP_URL } from "@/lib/whatsapp";

const EliteTeamSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[500px]">
          {/* Images Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3 h-full">
              <div className="relative overflow-hidden">
                <img
                  src={bodyguardMale}
                  alt={t.eliteTeam.imgAlt1}
                  className="w-full h-full object-cover object-top aspect-[3/4] lg:aspect-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
              </div>
              <div className="relative overflow-hidden">
                <img
                  src={bodyguardFemale}
                  alt={t.eliteTeam.imgAlt2}
                  className="w-full h-full object-cover object-top aspect-[3/4] lg:aspect-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
              </div>
            </div>
            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm border border-border p-4 flex items-center justify-between">
              <div>
                <div className="font-display text-lg font-bold text-primary">{t.eliteTeam.overlayTitle}</div>
                <div className="text-muted-foreground text-xs font-body">{t.eliteTeam.overlaySub}</div>
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
            <span className="text-primary text-sm font-body font-semibold tracking-[0.3em] uppercase mb-4">{t.eliteTeam.badge}</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t.eliteTeam.title} <span className="text-gradient-gold">{t.eliteTeam.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.eliteTeam.p1}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t.eliteTeam.p2}
            </p>
            <ul className="space-y-3 mb-8">
              {t.eliteTeam.list.map((item) => (
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
              {t.eliteTeam.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EliteTeamSection;
