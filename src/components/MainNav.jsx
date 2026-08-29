import { useState, useRef, useEffect } from "react";
import { Home, ChevronDown, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function MainNav() {
  const { t } = useLanguage();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const navRef = useRef(null);

  const navItems = [
    { id: "home", label: t.nav.home, icon: true, active: true },
    { id: "individual", label: t.nav.individual, dropdown: true },
    { id: "company", label: t.nav.company, dropdown: true },
    { id: "nonCompany", label: t.nav.nonCompany, dropdown: true },
    { id: "taxPros", label: t.nav.taxPros, dropdown: true },
    { id: "downloads", label: t.nav.downloads },
    { id: "help", label: t.nav.help, dropdown: true },
  ];

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleToggle = (itemId) => {
    if (openDropdown === itemId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(itemId);
      setActiveCategoryIndex(0);
    }
  };

  const handleMouseEnter = (itemId, hasDropdown) => {
    if (hasDropdown) {
      setOpenDropdown(itemId);
      setActiveCategoryIndex(0);
    } else {
      setOpenDropdown(null);
    }
  };

  return (
    <nav className="main-nav" aria-label="Primary" ref={navRef}>
      <div className="container">
        {navItems.map((item) => {
          const isOpen = openDropdown === item.id;
          const dropdownData = item.dropdown ? t.nav.dropdowns?.[item.id] : null;
          const categories = dropdownData || [];
          const currentCategory = categories[activeCategoryIndex] || categories[0];

          return (
            <div
              key={item.id}
              className="nav-item-wrapper"
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.id, true)}
            >
              <button
                type="button"
                className={`nav-link${item.active ? " active" : ""}${isOpen ? " open" : ""}`}
                aria-expanded={item.dropdown ? isOpen : undefined}
                aria-haspopup={item.dropdown ? "menu" : undefined}
                onClick={() => (item.dropdown ? handleToggle(item.id) : setOpenDropdown(null))}
              >
                {item.icon && <Home size={15} />}
                {item.label}
                {item.dropdown && <ChevronDown size={14} className="nav-link-chevron" />}
              </button>

              {isOpen && dropdownData && dropdownData.length > 0 && (
                <div
                  className="nav-dropdown-menu"
                  role="menu"
                  aria-label={`${item.label} Menu`}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="nav-dropdown-categories" role="group" aria-label="Categories">
                    {categories.map((cat, catIdx) => (
                      <button
                        key={cat.id || catIdx}
                        type="button"
                        className={`nav-dropdown-cat-btn${activeCategoryIndex === catIdx ? " active" : ""}`}
                        onMouseEnter={() => setActiveCategoryIndex(catIdx)}
                        onFocus={() => setActiveCategoryIndex(catIdx)}
                        onClick={() => setActiveCategoryIndex(catIdx)}
                        role="menuitem"
                        aria-current={activeCategoryIndex === catIdx ? "true" : undefined}
                      >
                        <span>{cat.label}</span>
                        <ChevronRight size={16} className="cat-arrow" />
                      </button>
                    ))}
                  </div>

                  <div className="nav-dropdown-items" role="group" aria-label="Services & Resources">
                    {currentCategory?.items?.map((subItem, subIdx) => (
                      <a
                        key={subIdx}
                        href="#"
                        className="nav-dropdown-sub-link"
                        role="menuitem"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenDropdown(null);
                        }}
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}


