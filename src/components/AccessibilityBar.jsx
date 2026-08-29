import { MoveDiagonal, Volume2, Languages } from "lucide-react";

export default function AccessibilityBar({ textSize, setTextSize }) {
  const sizes = ["A-", "A", "A+"];

  return (
    <div className="a11y-bar">
      <div className="container">
        <a href="#main-content" className="a11y-item">
          <MoveDiagonal size={16} />
          Skip to main content
        </a>

        <div className="a11y-sep" />

        <div className="textsize-group">
          <span className="textsize-label">Text Size</span>
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
          Read Aloud
        </button>

        <div className="a11y-sep" />

        <button type="button" className="a11y-item">
          <span className="hc-icon" aria-hidden="true" />
          High Contrast
        </button>

        <div className="lang-group">
          <span className="lang-label">
            <Languages size={15} style={{ marginRight: 4, verticalAlign: -3 }} />
            Language / भाषा
          </span>
          <div className="lang-pills">
            <button type="button" className="lang-pill active">English</button>
            <button type="button" className="lang-pill">हिंदी</button>
            <button type="button" className="lang-pill">தமிழ்</button>
          </div>
        </div>
      </div>
    </div>
  );
}
