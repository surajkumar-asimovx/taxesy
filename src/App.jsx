import { useState } from "react";
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

export default function App() {
  const [textSize, setTextSize] = useState("A");

  return (
    <div style={{ fontSize: textSize === "A-" ? "14px" : textSize === "A+" ? "17px" : "15px" }}>
      <AccessibilityBar textSize={textSize} setTextSize={setTextSize} />
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
