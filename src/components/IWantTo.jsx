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

const primary = [
  {
    icon: FileText,
    bg: "bg-green",
    title: "File Income Tax Return (ITR)",
    desc: "File your ITR online",
  },
  {
    icon: ShieldCheck,
    bg: "bg-blue",
    title: "Check Refund Status",
    desc: "Track your refund status",
  },
  {
    icon: CreditCard,
    bg: "bg-orange",
    title: "Pay Tax Online",
    desc: "Pay tax, advance tax and self assessment",
  },
  {
    icon: CheckCircle2,
    bg: "bg-purple",
    title: "e-Verify Return",
    desc: "Verify your return electronically",
  },
];

const secondary = [
  { icon: Fingerprint, bg: "bg-purple", title: "Link Aadhaar", desc: "Link your Aadhaar with PAN" },
  { icon: Download, bg: "bg-blue", title: "Download ITR Forms", desc: "Download applicable ITR forms" },
  { icon: Landmark, bg: "bg-blue", title: "Get PAN", desc: "Apply for new PAN or changes" },
  { icon: Users, bg: "bg-purple", title: "View Form 26AS", desc: "View your tax credit statement" },
  { icon: UserCog, bg: "bg-teal", title: "Update Profile", desc: "Update your contact details" },
  { icon: FileWarning, bg: "bg-red", title: "Respond to Notice", desc: "View and respond to notices" },
];

export default function IWantTo() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>I want to...</h2>
            <div className="sub">Choose your task. We&apos;ll guide you step by step.</div>
          </div>
          <button type="button" className="view-all">
            View All Services <ArrowRight size={15} />
          </button>
        </div>

        <div className="iwant-primary">
          {primary.map(({ icon: Icon, bg, title, desc }) => (
            <button key={title} type="button" className="task-card">
              <div className={`task-icon ${bg}`}>
                <Icon size={20} />
              </div>
              <div className="task-title">{title}</div>
              <div className="task-desc">{desc}</div>
              <ChevronRight size={17} className="task-arrow" />
            </button>
          ))}
        </div>

        <div className="iwant-secondary">
          {secondary.map(({ icon: Icon, bg, title, desc }) => (
            <button key={title} type="button" className="task-card small">
              <div className={`task-icon ${bg}`}>
                <Icon size={17} />
              </div>
              <div className="task-title">{title}</div>
              <div className="task-desc">{desc}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
