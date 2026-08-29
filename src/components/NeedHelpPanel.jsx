import { Phone, MessageCircle, HelpCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function NeedHelpPanel() {
  const { t } = useLanguage();

  return (
    <section className="container">
      <div className="needhelp-panel">
        <div className="needhelp-title">
          {t.needHelp.title}
          <span>{t.needHelp.sub}</span>
        </div>

        <div className="needhelp-item">
          <div className="needhelp-icon"><Phone size={16} /></div>
          <div>
            <div className="nh-title">{t.needHelp.phone}</div>
            <div className="nh-desc">{t.needHelp.phoneDesc}</div>
          </div>
        </div>

        <div className="needhelp-item">
          <div className="needhelp-icon"><MessageCircle size={16} /></div>
          <div>
            <div className="nh-title">{t.needHelp.chatTitle}</div>
            <div className="nh-desc">{t.needHelp.chatDesc}</div>
          </div>
        </div>

        <div className="needhelp-item">
          <div className="needhelp-icon"><HelpCircle size={16} /></div>
          <div>
            <div className="nh-title">{t.needHelp.faqTitle}</div>
            <div className="nh-desc">{t.needHelp.faqDesc}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

