import { ArrowRight } from "lucide-react";

const items = [
  { emoji: "📝", bg: "#eaf1fd", title: "FAQs on ITR Filing for AY 2024-25", date: "20 May 2024" },
  { emoji: "✅", bg: "#fdedde", title: "Guide to e-Verify your Income Tax Return", date: "18 May 2024" },
  { emoji: "🔗", bg: "#e6f7ee", title: "How to Link Aadhaar with PAN", date: "15 May 2024" },
  { emoji: "🌱", bg: "#e6f7f5", title: "Benefits of Filing ITR Early", date: "10 May 2024" },
];

export default function WhatsNew() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2>What&apos;s New</h2>
          <button type="button" className="view-all">
            View All <ArrowRight size={15} />
          </button>
        </div>

        <div className="whatsnew-grid">
          {items.map(({ emoji, bg, title, date }) => (
            <div className="wn-card" key={title}>
              <div className="wn-thumb" style={{ background: bg }}>{emoji}</div>
              <div className="wn-body">
                <div className="wn-title">{title}</div>
                <div className="wn-date">{date}</div>
              </div>
            </div>
          ))}
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
