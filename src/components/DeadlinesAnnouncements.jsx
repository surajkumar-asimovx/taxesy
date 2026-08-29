import { Calendar, AlertTriangle, Smartphone, FileEdit, Landmark, ArrowRight } from "lucide-react";

const deadlines = [
  {
    icon: Calendar,
    bg: "bg-green",
    title: "No extension of due date for filing of ITR",
    desc: "The due date for filing ITR for AY 2024-25 remains unchanged.",
    date: "20 May 2024",
    badge: ["3", "days left"],
  },
  {
    icon: AlertTriangle,
    bg: "bg-orange",
    title: "Beware of Fake Emails and Calls",
    desc: "ITD does not send links or ask for personal information.",
    date: "18 May 2024",
    badge: ["1", "day left"],
  },
];

const announcements = [
  {
    icon: Smartphone,
    bg: "bg-purple",
    title: "New e-Pay Tax Service",
    desc: "e-Pay Tax service is now available with enhanced features.",
    date: "15 May 2024",
  },
  {
    icon: FileEdit,
    bg: "bg-purple",
    title: "New Facility - File Updated Return",
    desc: "You can now file an updated return online. Know more.",
    date: "12 May 2024",
  },
  {
    icon: Landmark,
    bg: "bg-purple",
    title: "TDS on Rent - New Section 194-IB",
    desc: "New TDS provision on rent above threshold limit.",
    date: "10 May 2024",
  },
];

export default function DeadlinesAnnouncements() {
  return (
    <section className="section">
      <div className="container">
        <div className="two-col">
          <div className="panel">
            <div className="panel-head">
              <h3>
                Your Deadlines <span className="tag-danger">(Action Required)</span>
              </h3>
              <button type="button" className="view-all">
                View All <ArrowRight size={14} />
              </button>
            </div>

            {deadlines.map(({ icon: Icon, bg, title, desc, date, badge }) => (
              <div className="list-item" key={title}>
                <div className={`list-icon ${bg}`}>
                  <Icon size={16} />
                </div>
                <div className="list-body">
                  <div className="list-title">{title}</div>
                  <div className="list-desc">{desc}</div>
                </div>
                <div className="list-meta">
                  <span className="list-date">{date}</span>
                  <span className="badge-danger">
                    {badge[0]}<br />{badge[1]}
                  </span>
                </div>
              </div>
            ))}

            <button type="button" className="view-all-deadlines-btn">
              View All Deadlines <ArrowRight size={15} />
            </button>
          </div>

          <div className="panel">
            <div className="panel-head">
              <h3>Announcements &amp; New Updates</h3>
              <button type="button" className="view-all">
                View All <ArrowRight size={14} />
              </button>
            </div>

            {announcements.map(({ icon: Icon, bg, title, desc, date }) => (
              <div className="list-item" key={title}>
                <div className={`list-icon ${bg}`}>
                  <Icon size={16} />
                </div>
                <div className="list-body">
                  <div className="list-title">{title}</div>
                  <div className="list-desc">{desc}</div>
                  <div className="list-date">{date}</div>
                </div>
                <div className="list-meta">
                  <span className="badge-new">New</span>
                </div>
              </div>
            ))}

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
