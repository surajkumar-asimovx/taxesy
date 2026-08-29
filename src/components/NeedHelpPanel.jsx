import { Phone, MessageCircle, HelpCircle } from "lucide-react";

export default function NeedHelpPanel() {
  return (
    <section className="container">
      <div className="needhelp-panel">
        <div className="needhelp-title">
          Need Help?
          <span>We&apos;re here for you 24x7</span>
        </div>

        <div className="needhelp-item">
          <div className="needhelp-icon"><Phone size={16} /></div>
          <div>
            <div className="nh-title">1800 103 0025</div>
            <div className="nh-desc">Call Us (Toll Free)</div>
          </div>
        </div>

        <div className="needhelp-item">
          <div className="needhelp-icon"><MessageCircle size={16} /></div>
          <div>
            <div className="nh-title">Live Chat</div>
            <div className="nh-desc">Chat with our expert</div>
          </div>
        </div>

        <div className="needhelp-item">
          <div className="needhelp-icon"><HelpCircle size={16} /></div>
          <div>
            <div className="nh-title">Help Center</div>
            <div className="nh-desc">Browse FAQs</div>
          </div>
        </div>
      </div>
    </section>
  );
}
