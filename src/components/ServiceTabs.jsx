import { useState } from "react";
import { FileText, FileEdit, Search, FileCheck, FolderOpen, TrendingUp, ChevronRight } from "lucide-react";

const tabs = ["e-File", "e-Pay", "e-Verify", "Other Services"];

const panels = {
  "e-File": [
    { icon: FileText, bg: "bg-green", title: "Income Tax Return (ITR)", desc: "File your return of income" },
    { icon: FileEdit, bg: "bg-green", title: "Rectification Request", desc: "Request for rectification of order" },
    { icon: FileText, bg: "bg-blue", title: "Income Tax Forms", desc: "View and download income tax forms" },
    { icon: FileCheck, bg: "bg-blue", title: "View Filed Returns", desc: "View returns / forms filed" },
    { icon: Search, bg: "bg-orange", title: "Track Application Status", desc: "Track your application status" },
    { icon: TrendingUp, bg: "bg-red", title: "Tax Credit Mismatch", desc: "View and resolve tax credit mismatch" },
  ],
  "e-Pay": [
    { icon: FileText, bg: "bg-orange", title: "Pay Tax Online", desc: "Pay advance tax and self assessment tax" },
    { icon: FileCheck, bg: "bg-blue", title: "Payment History", desc: "View your past tax payments" },
    { icon: FolderOpen, bg: "bg-green", title: "Challan Status", desc: "Check status of your challan" },
    { icon: FileEdit, bg: "bg-purple", title: "Correction Request", desc: "Request correction in challan details" },
    { icon: Search, bg: "bg-blue", title: "Reprint Challan", desc: "Download a copy of paid challan" },
    { icon: TrendingUp, bg: "bg-red", title: "Outstanding Demand", desc: "View and pay outstanding tax demand" },
  ],
  "e-Verify": [
    { icon: FileCheck, bg: "bg-purple", title: "Verify Return", desc: "e-Verify your filed income tax return" },
    { icon: FileEdit, bg: "bg-blue", title: "Verify Notice/Order", desc: "Authenticate a notice or order" },
    { icon: Search, bg: "bg-green", title: "Verify Service Request", desc: "Verify a submitted service request" },
    { icon: FolderOpen, bg: "bg-orange", title: "Verify PAN Status", desc: "Check status of your PAN card" },
    { icon: FileText, bg: "bg-blue", title: "Verify TAN Details", desc: "Confirm your registered TAN details" },
    { icon: TrendingUp, bg: "bg-red", title: "Verify Digital Signature", desc: "Check DSC registration status" },
  ],
  "Other Services": [
    { icon: FileText, bg: "bg-blue", title: "Know Your AO", desc: "Find your jurisdictional Assessing Officer" },
    { icon: FileEdit, bg: "bg-purple", title: "Grievance Redressal", desc: "Lodge or track a grievance" },
    { icon: Search, bg: "bg-green", title: "Tax Calculator", desc: "Estimate your tax liability" },
    { icon: FolderOpen, bg: "bg-orange", title: "Download CSI File", desc: "Download challan status inquiry file" },
    { icon: FileCheck, bg: "bg-blue", title: "Report Account Misuse", desc: "Report unauthorised use of your PAN" },
    { icon: TrendingUp, bg: "bg-red", title: "Tax Information & Services", desc: "Browse guides and FAQs" },
  ],
};

export default function ServiceTabs() {
  const [active, setActive] = useState("e-File");
  const items = panels[active];

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2>e-File / e-Pay / e-Verify / Other Services</h2>
        </div>

        <div className="tabs-row" role="tablist" aria-label="Service categories">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={active === t}
              className={`tab-btn${active === t ? " active" : ""}`}
              onClick={() => setActive(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="tab-panel" role="tabpanel">
          {items.map(({ icon: Icon, bg, title, desc }) => (
            <button key={title} type="button" className="tab-item">
              <div className={`tab-item-icon ${bg}`}>
                <Icon size={18} />
              </div>
              <div>
                <div className="tab-item-title">{title}</div>
                <div className="tab-item-desc">{desc}</div>
              </div>
              <ChevronRight size={17} className="tab-item-arrow" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
