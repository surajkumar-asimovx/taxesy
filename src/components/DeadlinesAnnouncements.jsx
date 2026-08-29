import { Calendar, AlertTriangle, Smartphone, FileEdit, Landmark, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function DeadlinesAnnouncements() {
  const { t } = useLanguage();

  const deadlineIcons = [Calendar, AlertTriangle];
  const deadlineBgs = ["bg-green", "bg-orange"];

  const announcementIcons = [Smartphone, FileEdit, Landmark];
  const announcementBgs = ["bg-purple", "bg-purple", "bg-purple"];

  return (
    <section className="section">
      <div className="container">
        <div className="two-col">
          <div className="panel">
            <div className="panel-head">
              <h3>
                {t.deadlines.deadlinesTitle} <span className="tag-danger">{t.deadlines.actionRequired}</span>
              </h3>
              <button type="button" className="view-all">
                {t.deadlines.viewAll} <ArrowRight size={14} />
              </button>
            </div>

            {t.deadlines.deadlines.map((item, idx) => {
              const Icon = deadlineIcons[idx] || Calendar;
              const bg = deadlineBgs[idx] || "bg-green";
              return (
                <div className="list-item" key={idx}>
                  <div className={`list-icon ${bg}`}>
                    <Icon size={16} />
                  </div>
                  <div className="list-body">
                    <div className="list-title">{item.title}</div>
                    <div className="list-desc">{item.desc}</div>
                  </div>
                  <div className="list-meta">
                    <span className="list-date">{item.date}</span>
                    <span className="badge-danger">
                      {item.badgeCount}<br />{item.badgeText}
                    </span>
                  </div>
                </div>
              );
            })}

            <button type="button" className="view-all-deadlines-btn">
              {t.deadlines.viewAllDeadlines} <ArrowRight size={15} />
            </button>
          </div>

          <div className="panel">
            <div className="panel-head">
              <h3>{t.deadlines.announcementsTitle}</h3>
              <button type="button" className="view-all">
                {t.deadlines.viewAll} <ArrowRight size={14} />
              </button>
            </div>

            {t.deadlines.announcements.map((item, idx) => {
              const Icon = announcementIcons[idx] || Smartphone;
              const bg = announcementBgs[idx] || "bg-purple";
              return (
                <div className="list-item" key={idx}>
                  <div className={`list-icon ${bg}`}>
                    <Icon size={16} />
                  </div>
                  <div className="list-body">
                    <div className="list-title">{item.title}</div>
                    <div className="list-desc">{item.desc}</div>
                    <div className="list-date">{item.date}</div>
                  </div>
                  <div className="list-meta">
                    <span className="badge-new">{t.deadlines.badgeNew}</span>
                  </div>
                </div>
              );
            })}

            <div className="carousel-dots">
              <span className="active" />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

