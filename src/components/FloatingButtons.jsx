import { Headphones, ArrowUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function FloatingButtons() {
  const { t } = useLanguage();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <button type="button" className="floating-help" aria-label={t.needHelp.title}>
        <span className="dot" aria-hidden="true" />
        <Headphones size={20} />
        {t.floating.need}
        <br />
        {t.floating.help}
      </button>
      <button type="button" className="scroll-top" aria-label={t.floating.scrollTop} onClick={scrollTop}>
        <ArrowUp size={19} />
      </button>
    </>
  );
}

