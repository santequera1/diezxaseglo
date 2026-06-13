import { useLanguage } from "@/i18n/LanguageContext";

const LanguageToggle = ({ className = "" }: { className?: string }) => {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center border border-border overflow-hidden text-xs font-bold tracking-wider uppercase ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={`px-2.5 py-1 transition-colors ${
          lang === "es"
            ? "bg-primary text-primary-foreground"
            : "text-foreground/60 hover:text-primary"
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-2.5 py-1 transition-colors ${
          lang === "en"
            ? "bg-primary text-primary-foreground"
            : "text-foreground/60 hover:text-primary"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
