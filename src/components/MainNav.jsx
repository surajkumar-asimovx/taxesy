import { Home, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function MainNav() {
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.home, icon: true, active: true },
    { label: t.nav.individual, dropdown: true },
    { label: t.nav.company, dropdown: true },
    { label: t.nav.nonCompany, dropdown: true },
    { label: t.nav.taxPros, dropdown: true },
    { label: t.nav.downloads },
    { label: t.nav.help, dropdown: true },
  ];

  return (
    <nav className="main-nav" aria-label="Primary">
      <div className="container">
        {navItems.map((item, idx) => (
          <button
            key={idx}
            type="button"
            className={`nav-link${item.active ? " active" : ""}`}
          >
            {item.icon && <Home size={15} />}
            {item.label}
            {item.dropdown && <ChevronDown size={14} />}
          </button>
        ))}
      </div>
    </nav>
  );
}

