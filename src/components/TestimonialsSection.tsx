import { motion } from "framer-motion";
import { Quote, BadgeCheck, PlayCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import ContactButton from "@/components/ContactButton";
import celebrityImg from "@/assets/cliente-artista.webp";

const videos = [
  { src: "/videos/testimonio-1.mp4", poster: "/videos/testimonio-1-poster.jpg" },
  { src: "/videos/testimonio-2.mp4", poster: "/videos/testimonio-2-poster.jpg" },
];

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">{t.testimonials.badge}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">
            {t.testimonials.title} <span className="text-gradient-gold">{t.testimonials.titleHighlight}</span>
          </h2>
        </motion.div>

        {/* Trusted by international figures */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-0 items-stretch mb-16 bg-card border border-primary/20 overflow-hidden"
        >
          <div className="relative min-h-[320px]">
            <img
              src={celebrityImg}
              alt={t.testimonials.trustedAlt}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/40 md:to-card/80" />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <div className="flex items-center gap-2 text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">
              <BadgeCheck className="w-5 h-5" />
              {t.testimonials.trustedBadge}
            </div>
            <p className="text-foreground/80 text-lg leading-relaxed">
              {t.testimonials.trustedText}
            </p>
          </div>
        </motion.div>

        {/* Video Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-primary text-sm font-bold tracking-[0.2em] uppercase mb-8">
            <PlayCircle className="w-5 h-5" />
            {t.testimonials.videosTitle}
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            {videos.map((video) => (
              <video
                key={video.src}
                src={video.src}
                poster={video.poster}
                controls
                playsInline
                preload="none"
                className="w-full max-w-[300px] aspect-[9/16] object-cover bg-card border border-border"
              />
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border p-8 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">
                «{item.quote}»
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-display font-bold text-primary">{item.role}</div>
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
            {t.testimonials.bannerOther}{" "}
            <span className="text-muted-foreground">{t.testimonials.bannerOtherQuote}</span>
          </p>
          <p className="font-display text-xl md:text-2xl font-bold mt-3">
            {t.testimonials.bannerWe}{" "}
            <span className="text-gradient-gold">10X AGENCY SECURITY GLOBAL</span>{" "}
            {t.testimonials.bannerWeSay}{" "}
            <span className="text-primary">{t.testimonials.bannerWeQuote}</span>
          </p>
          <div className="mt-8">
            <ContactButton />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
