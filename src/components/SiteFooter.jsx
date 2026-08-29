import { useLanguage } from "../context/LanguageContext";

const socials = [
  { label: "YouTube", initial: "YT" },
  { label: "Twitter", initial: "X" },
  { label: "Facebook", initial: "f" },
  { label: "Instagram", initial: "IG" },
  { label: "LinkedIn", initial: "in" },
];

export default function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        {t.footer.columns.map((col, idx) => (
          <div className="footer-col" key={idx}>
            <h4>{col.title}</h4>
            {col.links.map((l) => (
              <a href="#" key={l}>{l}</a>
            ))}
          </div>
        ))}

        <div className="footer-col">
          <h4>{t.footer.followUs}</h4>
          <div className="footer-social">
            {socials.map((s) => (
              <a href="#" aria-label={s.label} key={s.label} style={{ fontSize: 11, fontWeight: 700 }}>
                {s.initial}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <div>
          <div className="india-gov">india.gov.in</div>
          <div>{t.footer.nationalPortal}</div>
        </div>
        <div>
          {t.footer.disclaimer}
          <br />
          {t.footer.copyright}
        </div>
        <div className="digital-india">{t.footer.digitalIndia}<br />{t.footer.powerToEmpower}</div>
      </div>
    </footer>
  );
}

