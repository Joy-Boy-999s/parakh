import Image from "next/image";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Image src="/logo-parakh.png" alt="PARAKH" width={136} height={34} style={{ height: "34px", width: "auto" }} />
              <span style={{ color: "var(--white)", fontSize: "1.05rem", fontWeight: 700 }}>ITMS</span>
            </div>
            <p className="footer-about">
              A product by{" "}
              <a href="https://www.schemaxtech.com" target="_blank" rel="noreferrer" style={{ color: "var(--gold-bright)" }}>
                Schemax Expert Techno Craft Pvt. Ltd
              </a>{" "}
              — 15+ years of IT expertise, serving government and enterprise clients across India and the USA.
              Deployed on-premise for maximum examination security.
            </p>
          </div>
          <div>
            <h4>Platform</h4>
            <ul className="footer-links">
              <li><a href="#problem">Why PARAKH ITMS</a></li>
              <li><a href="#compliance">7-Step Compliance</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#workflow">How It Works</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="#">User Manual</a></li>
              <li><a href="#">PARAKH Guidelines PDF</a></li>
              <li><a href="https://parakh.ncert.gov.in/" target="_blank" rel="noreferrer">PARAKH Official Website</a></li>
              <li><a href="#">NEP 2020</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div className="fc">
              <div className="fc-i">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>info@schemaxtech.com</span>
              </div>
              <div className="fc-i">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>+91 7702621117</span>
              </div>
              <div className="fc-i">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  Schemax Expert Techno Craft Pvt. Ltd, 3rd Floor, VUDA Shopping Complex, Seethammadhara,
                  Visakhapatnam, AP - 530013
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © 2026 PARAKH ITMS — Question Paper Generator. A Product by{" "}
            <a href="https://www.schemaxtech.com" target="_blank" rel="noreferrer" style={{ color: "var(--gold-bright)", textDecoration: "none" }}>
              Schemax Expert Techno Craft Pvt. Ltd
            </a>
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <Image src="/logo-moe.png" alt="MoE" width={52} height={22} style={{ height: "22px", width: "auto", opacity: 0.4 }} />
            <Image src="/logo-ncert.png" alt="NCERT" width={56} height={20} style={{ height: "20px", width: "auto", opacity: 0.35 }} />
            <Image src="/logo-parakh.png" alt="PARAKH" width={80} height={20} style={{ height: "20px", width: "auto", opacity: 0.35 }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
