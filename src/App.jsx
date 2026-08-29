import { useState, useEffect } from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import AccessibilityBar from "./components/AccessibilityBar";
import TickerBar from "./components/TickerBar";
import SiteHeader from "./components/SiteHeader";
import MainNav from "./components/MainNav";
import Hero from "./components/Hero";
import IWantTo from "./components/IWantTo";
import ServiceTabs from "./components/ServiceTabs";
import DeadlinesAnnouncements from "./components/DeadlinesAnnouncements";
import WhatsNew from "./components/WhatsNew";
import NeedHelpPanel from "./components/NeedHelpPanel";
import SiteFooter from "./components/SiteFooter";
import FloatingButtons from "./components/FloatingButtons";

function PortalContent() {
  const { textSize } = useLanguage();
  const [highContrast, setHighContrast] = useState(() => {
    try {
      return localStorage.getItem("highContrast") === "true";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("highContrast", String(highContrast));
    } catch {
      // Ignore storage errors
    }
    if (highContrast) {
      document.documentElement.setAttribute("data-contrast", "high");
    } else {
      document.documentElement.setAttribute("data-contrast", "normal");
    }
  }, [highContrast]);

  return (
    <div
      style={{
        fontSize: textSize === "A-" ? "13.5px" : textSize === "A+" ? "16.5px" : "15px",
        zoom: textSize === "A-" ? 0.92 : textSize === "A+" ? 1.08 : 1,
      }}
    >
      <AccessibilityBar highContrast={highContrast} setHighContrast={setHighContrast} />
      <TickerBar />
      <SiteHeader />
      <MainNav />

      <main id="main-content">
        <Hero />
        <IWantTo />
        <ServiceTabs />
        <DeadlinesAnnouncements />
        <WhatsNew />
        <NeedHelpPanel />
      </main>

      <SiteFooter />
      <FloatingButtons />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortalContent />
    </LanguageProvider>
  );
}


