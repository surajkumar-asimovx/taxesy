import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function TickerBar() {
  const { t } = useLanguage();

  return (
    <div className="ticker-bar">
      <div className="container">
        <span className="ticker-badge">{t.ticker.badge}</span>
        <div className="ticker-items">
          {t.ticker.updates.map((u, i) => (
            <span key={i}>
              {i > 0 && <span className="ticker-dot"> &bull; </span>}
              {u}
            </span>
          ))}
        </div>
        <a href="#updates" className="ticker-view-all">
          {t.ticker.viewAll} <ArrowRight size={15} />
        </a>
      </div>
    </div>
  );
}

