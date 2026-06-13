import { motion } from "framer-motion";
import { Clock, Phone, Car, AlertTriangle, Cpu, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Clock, Phone, Car, AlertTriangle, Cpu, BadgeCheck];

const WhyUsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">{t.whyUs.badge}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">
            {t.whyUs.title} <span className="text-gradient-gold">{t.whyUs.titleHighlight}</span>{t.whyUs.titleEnd}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.whyUs.items.map((reason, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 p-6 bg-background/50 border border-border hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 shrink-0 bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
