import { motion } from "framer-motion";
import { Eye, Shield, Radio } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import ContactButton from "@/components/ContactButton";

import surveillanceImg from "@/assets/equipo-tahoes.webp";

const icons = [Eye, Shield, Radio];

const OperationsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-body font-semibold tracking-[0.3em] uppercase">{t.operations.badge}</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4">
            {t.operations.title} <span className="text-gradient-gold">{t.operations.titleHighlight}</span>
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
              alt="Escolta 10X ASEGLO con camionetas blindadas"
              className="w-full h-[400px] object-cover object-[center_55%] border border-border"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 text-primary font-body text-xs font-bold tracking-widest uppercase">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {t.operations.realtime}
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
              {t.operations.items.map((item, i) => {
                const Icon = icons[i];
                return (
                  <div key={item.title} className="flex gap-4 p-5 bg-card border border-border">
                    <Icon className="w-8 h-8 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

          </div>
        </div>

        <div className="text-center mt-14">
          <ContactButton />
        </div>
      </div>
    </section>
  );
};

export default OperationsSection;
