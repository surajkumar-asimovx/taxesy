import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function WhatsNew() {
  const { t } = useLanguage();

  const itemMeta = [
    { emoji: "📝", bg: "var(--blue-pale)" },
    { emoji: "✅", bg: "var(--orange-bg)" },
    { emoji: "🔗", bg: "var(--green-bg)" },
    { emoji: "🌱", bg: "var(--teal-bg)" },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2>{t.whatsNew.title}</h2>
          <button type="button" className="view-all">
            {t.whatsNew.viewAll} <ArrowRight size={15} />
          </button>
        </div>

        <div className="whatsnew-grid">
          {t.whatsNew.items.map((item, idx) => {
            const meta = itemMeta[idx] || { emoji: "📝", bg: "#eaf1fd" };
            return (
              <div className="wn-card" key={idx}>
                <div className="wn-thumb" style={{ background: meta.bg }}>{meta.emoji}</div>
                <div className="wn-body">
                  <div className="wn-title">{item.title}</div>
                  <div className="wn-date">{item.date}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="carousel-dots">
          <span className="active" />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}

