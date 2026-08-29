import { ArrowRight } from "lucide-react";

const updates = [
  "No extension of due date for filing of ITR",
  "New e-Pay Tax service is now available",
  "Verify your Return to avoid processing delays",
];

export default function TickerBar() {
  return (
    <div className="ticker-bar">
      <div className="container">
        <span className="ticker-badge">Latest Updates</span>
        <div className="ticker-items">
          {updates.map((u, i) => (
            <span key={u}>
              {i > 0 && <span className="ticker-dot"> &bull; </span>}
              {u}
            </span>
          ))}
        </div>
        <a href="#updates" className="ticker-view-all">
          View All Updates <ArrowRight size={15} />
        </a>
      </div>
    </div>
  );
}
