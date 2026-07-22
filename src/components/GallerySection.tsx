import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

import escoltaSuv from "@/assets/galeria-escolta-suv.webp";
import guatapePiedra from "@/assets/galeria-guatape-piedra.webp";
import clienteFitness from "@/assets/galeria-cliente-fitness.webp";
import tahoeCasa from "@/assets/galeria-tahoe-casa.webp";
import clientePuente from "@/assets/galeria-cliente-puente.webp";
import clientesAeropuerto from "@/assets/galeria-clientes-aeropuerto.webp";
import suvEscolta from "@/assets/galeria-suv-escolta.webp";
import guatapeVista from "@/assets/galeria-guatape-vista.webp";

const images = [
  { src: escoltaSuv, span: "md:col-span-2" },
  { src: guatapePiedra, span: "md:row-span-2" },
  { src: clienteFitness, span: "md:row-span-2" },
  { src: tahoeCasa, span: "md:row-span-2" },
  { src: clientePuente, span: "md:row-span-2" },
  { src: clientesAeropuerto, span: "md:row-span-2" },
  { src: suvEscolta, span: "md:row-span-2" },
  { src: guatapeVista, span: "md:col-span-2" },
];

const GallerySection = () => {
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
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">{t.gallery.badge}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            {t.gallery.title} <span className="text-gradient-gold">{t.gallery.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] grid-flow-dense gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative overflow-hidden border border-border group ${img.span}`}
            >
              <img
                src={img.src}
                alt={t.gallery.imgAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
