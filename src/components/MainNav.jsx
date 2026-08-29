import { Home, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", icon: true, active: true },
  { label: "Individual/HUF", dropdown: true },
  { label: "Company", dropdown: true },
  { label: "Non-Company", dropdown: true },
  { label: "Tax Professionals", dropdown: true },
  { label: "Downloads" },
  { label: "Help", dropdown: true },
];

export default function MainNav() {
  return (
    <nav className="main-nav" aria-label="Primary">
      <div className="container">
        {navItems.map((item) => (
          <button
            key={item.label}
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
