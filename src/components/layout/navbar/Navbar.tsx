import Image from "next/image";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="nav" id="nav">
      <div className="container">
        <a href="#" className="nav-brand">
          <Image src="/logo-parakh.png" alt="PARAKH" width={160} height={40} style={{ height: "40px", width: "auto" }} />
          <div className="brand-sep" />
          <div className="brand-label">
            <div className="brand-label-main">ITMS</div>
            <div className="brand-label-sub">Question Paper Generator</div>
          </div>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#problem">Why PARAKH ITMS</a>
          </li>
          <li>
            <a href="#compliance">7-Step Compliance</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#workflow">How It Works</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#contact" className="nav-cta">
              Request Demo
            </a>
          </li>
        </ul>
        <button className="mobile-menu" type="button" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
