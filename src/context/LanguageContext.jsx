import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../i18n/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [textSize, setTextSize] = useState("A");

  useEffect(() => {
    // Apply font size adjustment to root html document for universal scaling
    const root = document.documentElement;
    if (textSize === "A-") {
      root.style.fontSize = "13.5px";
    } else if (textSize === "A+") {
      root.style.fontSize = "16.5px";
    } else {
      root.style.fontSize = "15px";
    }
  }, [textSize]);

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        textSize,
        setTextSize,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
