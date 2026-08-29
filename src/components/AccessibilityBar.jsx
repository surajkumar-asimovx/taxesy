import { MoveDiagonal, Volume2, Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function AccessibilityBar({ highContrast, setHighContrast }) {
  const { textSize, setTextSize, language, setLanguage, t } = useLanguage();
  const sizes = ["A-", "A", "A+"];
  const languages = [
    { id: "en", label: "English" },
    { id: "hi", label: "हिंदी" },
    { id: "ta", label: "தமிழ்" },
  ];

  return (
    <div className="a11y-bar">
      <div className="container">
        <a href="#main-content" className="a11y-item">
          <MoveDiagonal size={16} />
          {t.a11y.skipToMain}
        </a>

        <div className="a11y-sep" />

        <div className="textsize-group">
          <span className="textsize-label">{t.a11y.textSize}</span>
          <div className="textsize-buttons">
            {sizes.map((s) => (
              <button
                key={s}
                type="button"
                className={`ts-btn${textSize === s ? " active" : ""}`}
                aria-pressed={textSize === s}
                onClick={() => setTextSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="a11y-sep" />

        <button type="button" className="a11y-item">
          <Volume2 size={17} />
          {t.a11y.readAloud}
        </button>

        <div className="a11y-sep" />

        <button
          type="button"
          className={`a11y-item hc-btn${highContrast ? " active" : ""}`}
          aria-pressed={highContrast}
          onClick={() => setHighContrast && setHighContrast((prev) => !prev)}
        >
          <span className="hc-icon" aria-hidden="true" />
          {t.a11y.highContrast} {highContrast ? "(On)" : ""}
        </button>


        <div className="lang-group">
          <span className="lang-label">
            <Languages size={15} style={{ marginRight: 4, verticalAlign: -3 }} />
            {t.a11y.languageLabel}
          </span>
          <div className="lang-pills">
            {languages.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`lang-pill${language === item.id ? " active" : ""}`}
                onClick={() => setLanguage(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

