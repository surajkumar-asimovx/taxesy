import { Search, Mic, User, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function SiteHeader() {
  const { t } = useLanguage();

  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">
          <svg className="brand-emblem" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="24" cy="24" r="23" fill="#fff" stroke="#0b3d91" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="15" fill="none" stroke="#0b3d91" strokeWidth="1.2" />
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i * 360) / 24;
              const rad = (angle * Math.PI) / 180;
              const x1 = 24 + 15 * Math.cos(rad);
              const y1 = 24 + 15 * Math.sin(rad);
              const x2 = 24 + 19 * Math.cos(rad);
              const y2 = 24 + 19 * Math.sin(rad);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0b3d91" strokeWidth="1.2" />;
            })}
            <circle cx="24" cy="24" r="4" fill="#ff8a1e" />
          </svg>
          <div>
            <div className="brand-title">{t.header.brandTitle}</div>
            <div className="brand-subtitle">{t.header.brandSubtitle}</div>
          </div>
        </div>

        <div className="search-wrap">
          <div className="search-bar">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder={t.header.searchPlaceholder} aria-label="Search" />
            <Mic size={18} className="mic-icon" />
            <button type="button" className="search-btn">{t.header.searchBtn}</button>
          </div>
          <div className="popular-searches">
            <span className="label">{t.header.popularLabel}</span>
            {t.header.popularSearches.map((s) => (
              <button key={s} type="button" className="chip">{s}</button>
            ))}
          </div>
        </div>

        <div className="header-actions">
          <button type="button" className="login-btn">
            <User size={17} />
            {t.header.login}
          </button>
          <span className="secure-caption">
            <ShieldCheck size={13} />
            {t.header.secureCaption}
          </span>
        </div>
      </div>
    </header>
  );
}

