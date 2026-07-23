import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/i18n/LanguageContext";

import escoltaSuv from "@/assets/galeria-escolta-suv.webp";
import guatapePiedra from "@/assets/galeria-guatape-piedra.webp";
import clienteFitness from "@/assets/galeria-cliente-fitness.webp";
import tahoeCasa from "@/assets/galeria-tahoe-casa.webp";
import clientePuente from "@/assets/galeria-cliente-puente.webp";
import clientesAeropuerto from "@/assets/galeria-clientes-aeropuerto.webp";
import suvEscolta from "@/assets/galeria-suv-escolta.webp";
import guatapeVista from "@/assets/galeria-guatape-vista.webp";

const extraImages = Object.entries(
  import.meta.glob("../assets/galeria/*.webp", { eager: true, import: "default" })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src as string);

const allImages: string[] = [
  escoltaSuv,
  guatapePiedra,
  clienteFitness,
  tahoeCasa,
  clientePuente,
  clientesAeropuerto,
  suvEscolta,
  guatapeVista,
  ...extraImages,
];

const Galeria = () => {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + allImages.length - 1) % allImages.length)),
    []
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % allImages.length)),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, prev, next]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <section className="py-20 border-b border-border">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">{t.gallery.badge}</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-4">
                {t.gallery.pageTitle} <span className="text-gradient-gold">{t.gallery.pageHighlight}</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
                {t.gallery.pageSubtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Masonry */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
              {allImages.map((src, i) => (
                <motion.button
                  key={src}
                  type="button"
                  onClick={() => setLightbox(i)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "100px" }}
                  className="relative mb-4 block w-full break-inside-avoid overflow-hidden border border-border group cursor-zoom-in"
                >
                  <img
                    src={src}
                    alt={`${t.gallery.imgAlt} ${i + 1}`}
                    className="w-full transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </div>
      <Footer />
      <WhatsAppButton />

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              aria-label={t.gallery.close}
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 z-10 w-11 h-11 flex items-center justify-center bg-card border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Anterior"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 md:left-6 z-10 w-11 h-11 flex items-center justify-center bg-card/80 border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Siguiente"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 md:right-6 z-10 w-11 h-11 flex items-center justify-center bg-card/80 border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <motion.img
              key={lightbox}
              src={allImages[lightbox]}
              alt={`${t.gallery.imgAlt} ${lightbox + 1}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="max-h-[85vh] max-w-[92vw] object-contain border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-muted-foreground text-sm tracking-widest font-body">
              {lightbox + 1} / {allImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galeria;
