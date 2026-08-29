import { FileText, User, UserPlus, CreditCard, IndianRupee, ShieldCheck, Users, UserCog, Lock } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-text">
            <h1>Your Taxes. Your Nation.<br />Easy. Secure. Accessible for Everyone.</h1>
            <p>File your return, pay taxes, track status and manage all your tax needs in one place.</p>
            <div className="hero-buttons">
              <button type="button" className="btn-white">
                <FileText size={17} />
                File Your Return
              </button>
              <button type="button" className="btn-outline">
                <User size={17} />
                Login to e-Filing
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <span className="hero-plant" aria-hidden="true">🪴</span>
            <div className="laptop-mock">
              <div className="laptop-screen">
                <div className="screen-title">e-Filing Dashboard</div>
                <div className="refund-card">
                  <div className="label">Refund Issued</div>
                  <div className="amount">₹ 12,450</div>
                  <button type="button" className="view-details-btn">View Details</button>
                </div>
                <div className="screen-icons">
                  <div className="icon-box"><Users size={16} /></div>
                  <div className="icon-box"><UserCog size={16} /></div>
                  <div className="icon-box"><UserPlus size={16} /></div>
                  <div className="icon-box"><User size={16} /></div>
                </div>
              </div>
              <div className="laptop-base" />
            </div>
            <Lock size={40} className="hero-shield" aria-hidden="true" />
          </div>
        </div>
      </section>

      <div className="quick-strip">
        <div className="container">
          <div className="quick-strip-item">
            <UserPlus size={26} className="qs-icon" />
            <div>
              <div className="qs-title">New to e-Filing?</div>
              <span className="qs-link">Register Yourself</span>
            </div>
          </div>
          <div className="quick-strip-item">
            <CreditCard size={26} className="qs-icon" />
            <div>
              <div className="qs-title">Know Your PAN</div>
              <span className="qs-link">Instant Access</span>
            </div>
          </div>
          <div className="quick-strip-item">
            <IndianRupee size={26} className="qs-icon" />
            <div>
              <div className="qs-title">Check Refund Status</div>
              <span className="qs-link">Track Your Refund</span>
            </div>
          </div>
          <div className="quick-strip-item">
            <ShieldCheck size={26} className="qs-icon" />
            <div>
              <div className="qs-title">Verify Return</div>
              <span className="qs-link">Secure &amp; Easy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
