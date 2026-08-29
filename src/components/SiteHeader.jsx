import { Search, Mic, User, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import logoImg from "../assets/logo.png";

export default function SiteHeader() {
  const { t } = useLanguage();

  return (
    <header className="site-header">
      <div className="container">
        <a href="/" className="brand" aria-label="Income Tax Department e-Filing Portal Home">
          <img
            src={logoImg}
            alt="Income Tax Department - e-Filing Anywhere Anytime, Government of India"
            className="site-logo-img"
          />
        </a>

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


