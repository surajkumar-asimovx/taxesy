import { FileText, User, UserPlus, CreditCard, IndianRupee, ShieldCheck, Users, UserCog, Lock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-text">
            <h1>{t.hero.title1}<br />{t.hero.title2}</h1>
            <p>{t.hero.desc}</p>
            <div className="hero-buttons">
              <button type="button" className="btn-white">
                <FileText size={17} />
                {t.hero.fileReturn}
              </button>
              <button type="button" className="btn-outline">
                <User size={17} />
                {t.hero.loginEFiling}
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <span className="hero-plant" aria-hidden="true">🪴</span>
            <div className="laptop-mock">
              <div className="laptop-screen">
                <div className="screen-title">{t.hero.dashboardTitle}</div>
                <div className="refund-card">
                  <div className="label">{t.hero.refundIssued}</div>
                  <div className="amount">₹ 12,450</div>
                  <button type="button" className="view-details-btn">{t.hero.viewDetails}</button>
                </div>
                <div className="screen-icons">
                  <div className="icon-box"><Users size={16} /></div>
                  <div className="icon-box"><UserCog size={16} /></div>
                  <div className="icon-box"><UserPlus size={16} /></div>
                  <div className="icon-box"><User size={16} /></div>
                </div>
              </div>
              <div className="laptop-base" />
            </div>
            <Lock size={40} className="hero-shield" aria-hidden="true" />
          </div>
        </div>
      </section>

      <div className="quick-strip">
        <div className="container">
          {t.hero.quickStrip.map((item, index) => {
            const icons = [UserPlus, CreditCard, IndianRupee, ShieldCheck];
            const Icon = icons[index] || UserPlus;
            return (
              <div className="quick-strip-item" key={index}>
                <Icon size={26} className="qs-icon" />
                <div>
                  <div className="qs-title">{item.title}</div>
                  <span className="qs-link">{item.link}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

