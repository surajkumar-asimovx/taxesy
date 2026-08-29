import { useState } from "react";
import { FileText, FileEdit, Search, FileCheck, FolderOpen, TrendingUp, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const panelMetadata = {
  "e-File": [
    { icon: FileText, bg: "bg-green" },
    { icon: FileEdit, bg: "bg-green" },
    { icon: FileText, bg: "bg-blue" },
    { icon: FileCheck, bg: "bg-blue" },
    { icon: Search, bg: "bg-orange" },
    { icon: TrendingUp, bg: "bg-red" },
  ],
  "e-Pay": [
    { icon: FileText, bg: "bg-orange" },
    { icon: FileCheck, bg: "bg-blue" },
    { icon: FolderOpen, bg: "bg-green" },
    { icon: FileEdit, bg: "bg-purple" },
    { icon: Search, bg: "bg-blue" },
    { icon: TrendingUp, bg: "bg-red" },
  ],
  "e-Verify": [
    { icon: FileCheck, bg: "bg-purple" },
    { icon: FileEdit, bg: "bg-blue" },
    { icon: Search, bg: "bg-green" },
    { icon: FolderOpen, bg: "bg-orange" },
    { icon: FileText, bg: "bg-blue" },
    { icon: TrendingUp, bg: "bg-red" },
  ],
  "Other Services": [
    { icon: FileText, bg: "bg-blue" },
    { icon: FileEdit, bg: "bg-purple" },
    { icon: Search, bg: "bg-green" },
    { icon: FolderOpen, bg: "bg-orange" },
    { icon: FileCheck, bg: "bg-blue" },
    { icon: TrendingUp, bg: "bg-red" },
  ],
};

export default function ServiceTabs() {
  const { t } = useLanguage();
  const [active, setActive] = useState("e-File");

  const items = t.serviceTabs.panels[active] || [];
  const meta = panelMetadata[active] || [];

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2>{t.serviceTabs.heading}</h2>
        </div>

        <div className="tabs-row" role="tablist" aria-label="Service categories">
          {t.serviceTabs.tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active === tab.id}
              className={`tab-btn${active === tab.id ? " active" : ""}`}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tab-panel" role="tabpanel">
          {items.map((item, idx) => {
            const Icon = meta[idx]?.icon || FileText;
            const bg = meta[idx]?.bg || "bg-blue";
            return (
              <button key={idx} type="button" className="tab-item">
                <div className={`tab-item-icon ${bg}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <div className="tab-item-title">{item.title}</div>
                  <div className="tab-item-desc">{item.desc}</div>
                </div>
                <ChevronRight size={17} className="tab-item-arrow" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

