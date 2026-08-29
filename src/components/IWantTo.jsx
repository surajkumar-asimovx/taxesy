import {
  FileText,
  ShieldCheck,
  CreditCard,
  CheckCircle2,
  Fingerprint,
  Download,
  Landmark,
  Users,
  UserCog,
  FileWarning,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function IWantTo() {
  const { t } = useLanguage();

  const primaryIcons = [FileText, ShieldCheck, CreditCard, CheckCircle2];
  const primaryBgs = ["bg-green", "bg-blue", "bg-orange", "bg-purple"];

  const secondaryIcons = [Fingerprint, Download, Landmark, Users, UserCog, FileWarning];
  const secondaryBgs = ["bg-purple", "bg-blue", "bg-blue", "bg-purple", "bg-teal", "bg-red"];

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>{t.iWantTo.title}</h2>
            <div className="sub">{t.iWantTo.sub}</div>
          </div>
          <button type="button" className="view-all">
            {t.iWantTo.viewAll} <ArrowRight size={15} />
          </button>
        </div>

        <div className="iwant-primary">
          {t.iWantTo.primary.map((item, idx) => {
            const Icon = primaryIcons[idx] || FileText;
            const bg = primaryBgs[idx] || "bg-blue";
            return (
              <button key={idx} type="button" className="task-card">
                <div className={`task-icon ${bg}`}>
                  <Icon size={20} />
                </div>
                <div className="task-title">{item.title}</div>
                <div className="task-desc">{item.desc}</div>
                <ChevronRight size={17} className="task-arrow" />
              </button>
            );
          })}
        </div>

        <div className="iwant-secondary">
          {t.iWantTo.secondary.map((item, idx) => {
            const Icon = secondaryIcons[idx] || Fingerprint;
            const bg = secondaryBgs[idx] || "bg-blue";
            return (
              <button key={idx} type="button" className="task-card small">
                <div className={`task-icon ${bg}`}>
                  <Icon size={17} />
                </div>
                <div className="task-title">{item.title}</div>
                <div className="task-desc">{item.desc}</div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

