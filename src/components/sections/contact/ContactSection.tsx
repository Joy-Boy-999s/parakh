import "../SectionBase.css";
import "./ContactSection.css";

export function ContactSection() {
  return (
    <>
      <section className="section" id="contact">
        <div className="container">
          <div className="section-head anim">
            <div className="section-label">Get Started</div>
            <h2 className="section-title">Request a Demo for Your Board</h2>
            <p className="section-desc">
              Schedule a live walkthrough of PARAKH ITMS with your team. We&apos;ll show you how the system maps to
              your board&apos;s specific needs.
            </p>
          </div>
          <div className="contact-grid anim">
            <div className="contact-info">
              <h3>Let&apos;s Bring PARAKH Compliance to Your State</h3>
              <p>
                Whether you&apos;re exploring options or ready to deploy, our team will walk you through the entire
                system — from question bank setup to your first generated paper.
              </p>
              <div
                style={{
                  background: "var(--gold-pale)",
                  border: "1px solid rgba(232,163,23,.2)",
                  borderRadius: "10px",
                  padding: "18px 20px",
                  marginBottom: "22px",
                }}
              >
                <div style={{ fontSize: ".78rem", fontWeight: 700, color: "var(--navy)", marginBottom: "6px" }}>
                  A Product by Schemax Expert Techno Craft Pvt. Ltd
                </div>
                <div style={{ fontSize: ".82rem", color: "var(--g500)", lineHeight: 1.6 }}>
                  With 15+ years of IT expertise and global presence across India and the USA, Schemax delivers
                  enterprise-grade technology solutions to government and private sector organisations. PARAKH ITMS is
                  deployed on-premise within your board&apos;s infrastructure for maximum security.
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <strong>Email</strong>
                  <span>info@schemaxtech.com</span>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <strong>Phone</strong>
                  <span>+91 7702621117</span>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <strong>India Office</strong>
                  <span>
                    3rd Floor, VUDA Shopping Complex, Seethammadhara, Visakhapatnam, AP - 530013
                  </span>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <strong>USA Office</strong>
                  <span>Schemax Americas LLC, 7171 Nolensville Rd Ste 105, Pmb 524, Nolensville, TN 37135</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", marginTop: "18px" }}>
                <a
                  href="https://www.schemaxtech.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: ".78rem",
                    color: "var(--crimson)",
                    textDecoration: "none",
                    fontWeight: 600,
                    border: "1px solid var(--crimson)",
                    padding: "6px 14px",
                    borderRadius: "4px",
                    transition: "all .2s",
                  }}
                >
                  Visit schemaxtech.com →
                </a>
              </div>
            </div>
            <div className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input className="form-input" type="text" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Designation *</label>
                  <input className="form-input" type="text" placeholder="e.g. Secretary, Director" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">State Board / Organisation *</label>
                  <input className="form-input" type="text" placeholder="e.g. Board of Secondary Education, Karnataka" />
                </div>
                <div className="form-group">
                  <label className="form-label">State *</label>
                  <select className="form-select" defaultValue="">
                    <option value="">Select State</option>
                    <option>Andhra Pradesh</option>
                    <option>Bihar</option>
                    <option>Chhattisgarh</option>
                    <option>Delhi</option>
                    <option>Gujarat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jharkhand</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Madhya Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Odisha</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Tamil Nadu</option>
                    <option>Telangana</option>
                    <option>Uttar Pradesh</option>
                    <option>West Bengal</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input className="form-input" type="email" placeholder="you@board.gov.in" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input className="form-input" type="tel" placeholder="+91-XXXXX XXXXX" />
                </div>
              </div>
              <div className="form-group full" style={{ marginBottom: "14px" }}>
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  placeholder="Tell us about your board's needs — number of subjects, classes, languages, timeline, etc."
                />
              </div>
              <button className="form-submit" type="button">Submit Demo Request</button>
            </div>
          </div>
        </div>
      </section>

      <section className="schemax-section">
        <div className="container">
          <div className="schemax-grid anim">
            <div className="schemax-content">
              <div
                style={{
                  fontSize: ".72rem",
                  fontWeight: 700,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--crimson)",
                  marginBottom: "12px",
                }}
              >
                A Product By
              </div>
              <h2>Schemax Expert Techno Craft Pvt. Ltd</h2>
              <p>
                With over 20 years of combined global leadership and domain expertise, Schemax delivers enterprise-grade
                technology solutions to government and private sector organisations. Headquartered in Visakhapatnam,
                India with a US office in Tennessee, we serve clients across 8 multinational strategic business units.
              </p>
              <p>
                PARAKH ITMS is deployed <strong style={{ color: "var(--crimson)" }}>on-premise within your board&apos;s infrastructure</strong> —
                ensuring maximum examination security with zero external data exposure.
              </p>
              <div className="schemax-stats">
                <div className="schemax-stat"><b>15+</b><span>Years of IT Expertise</span></div>
                <div className="schemax-stat"><b>13+</b><span>Enterprise Products</span></div>
                <div className="schemax-stat"><b>2</b><span>Global Offices</span></div>
              </div>
              <a href="https://www.schemaxtech.com/about-us.php" target="_blank" rel="noreferrer" className="schemax-link">
                Visit schemaxtech.com →
              </a>
            </div>
            <div className="schemax-values">
              <div className="schemax-value">
                <h4>🎯 Vision</h4>
                <p>
                  To be a partner in innovative technology solutions, driving transformation and sustainable growth for
                  businesses and communities worldwide.
                </p>
              </div>
              <div className="schemax-value">
                <h4>🚀 Mission</h4>
                <p>To deliver cutting-edge technology solutions that empower businesses to thrive in the digital era.</p>
              </div>
              <div className="schemax-value">
                <h4>💡 Innovation</h4>
                <p>
                  Our commitment to innovation ensures we remain at the forefront of technology, delivering unmatched
                  value to our clients.
                </p>
              </div>
              <div className="schemax-value">
                <h4>🤝 Customer Centricity</h4>
                <p>
                  Our customers are at the heart of our business. We listen, understand challenges, and provide tailored
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Bring PARAKH Compliance to Your State Board?</h2>
          <p>Join the growing number of boards adopting standardized, competency-based question paper generation.</p>
          <a href="mailto:info@schemaxtech.com" className="btn btn-gold">
            Request a Demo{" "}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
