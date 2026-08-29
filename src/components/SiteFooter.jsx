const socials = [
  { label: "YouTube", initial: "YT" },
  { label: "Twitter", initial: "X" },
  { label: "Facebook", initial: "f" },
  { label: "Instagram", initial: "IG" },
  { label: "LinkedIn", initial: "in" },
];

const columns = [
  {
    title: "About the Department",
    links: [
      "About Us",
      "Citizen's Charter",
      "Taxpayer's Charter",
      "Right to Information",
      "Organization & Functions",
      "Media Reports",
      "Help",
    ],
  },
  {
    title: "Policies",
    links: ["Privacy Policy", "Terms & Conditions", "Hyperlinking Policy", "Disclaimer"],
  },
  {
    title: "Quick Links",
    links: ["e-Filing Login", "Know Your PAN", "Instant e-PAN", "TIN Facilitation Centers"],
  },
  {
    title: "Contact Us",
    links: ["Helpline Numbers", "Grievances", "View Grievance", "Feedback"],
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        {columns.map((col) => (
          <div className="footer-col" key={col.title}>
            <h4>{col.title}</h4>
            {col.links.map((l) => (
              <a href="#" key={l}>{l}</a>
            ))}
          </div>
        ))}

        <div className="footer-col">
          <h4>Follow Us</h4>
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
          <div>The National Portal of India</div>
        </div>
        <div>
          Site best viewed in 1024 x 768 resolution | Last reviewed and updated on: 20-May-2024
          <br />
          © Income Tax Department, Ministry of Finance, Government of India. All Rights Reserved
        </div>
        <div className="digital-india">Digital India<br />Power To Empower</div>
      </div>
    </footer>
  );
}
