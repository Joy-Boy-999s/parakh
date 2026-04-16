import "./HeroSection.css";

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-content" style={{ animation: "fadeUp .8s ease both" }}>
          <div className="hero-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Aligned with PARAKH Guidelines &amp; NEP 2020
          </div>
          <h1 className="hero-title">
            Balanced, <em>Competency-Based</em> Question Papers for Every State Board
          </h1>
          <p className="hero-desc">
            A complete examination management system that implements the <strong>PARAKH 7-step framework</strong> —
            from assessment design and blueprint creation to question writing, paper assembly, and secure printing.
            Supports <strong>AI-powered and manual generation</strong> in 16 languages.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              📞 Request a Demo
            </a>
            <a href="#features" className="btn btn-secondary">
              ▶ Explore Features
            </a>
          </div>
        </div>
        <div className="hero-visual" style={{ animation: "fadeLeft 1s .3s ease both" }}>
          <div
            className="hero-app"
            style={{ transform: "perspective(1200px) rotateY(-3deg) rotateX(1deg)", transition: "transform .5s" }}
          >
            <div className="app-bar">
              <div className="app-dot" style={{ background: "#FF5F57" }} />
              <div className="app-dot" style={{ background: "#FFBD2E" }} />
              <div className="app-dot" style={{ background: "#28C840" }} />
              <span style={{ fontSize: ".5rem", color: "var(--g500)", marginLeft: "8px" }}>PARAKH ITMS — Dashboard</span>
            </div>
            <div className="app-body">
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    background: "var(--crimson)",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: ".5rem",
                    fontWeight: 800,
                    color: "white",
                  }}
                >
                  P
                </div>
                <div style={{ fontSize: ".7rem", fontWeight: 700, color: "var(--navy)" }}>PARAKH ITMS</div>
              </div>
              <div className="app-stats">
                <div className="app-stat">
                  <b style={{ color: "var(--crimson)" }}>52,693</b>
                  <small>Total Questions</small>
                </div>
                <div className="app-stat">
                  <b style={{ color: "var(--green)" }}>52,117</b>
                  <small>Active Questions</small>
                </div>
                <div className="app-stat">
                  <b style={{ color: "var(--blue-accent)" }}>184</b>
                  <small>Papers Generated</small>
                </div>
                <div className="app-stat">
                  <b style={{ color: "var(--gold-bright)" }}>137</b>
                  <small>Active Blueprints</small>
                </div>
              </div>
              <div className="app-charts">
                <div className="app-chart">
                  <div className="chart-title">Subject-wise Distribution</div>
                  <div className="bars">
                    <div className="bar" style={{ height: "92%", background: "var(--crimson)" }} />
                    <div className="bar" style={{ height: "72%", background: "var(--blue-accent)" }} />
                    <div className="bar" style={{ height: "58%", background: "var(--gold-bright)" }} />
                    <div className="bar" style={{ height: "48%", background: "var(--green)" }} />
                    <div className="bar" style={{ height: "38%", background: "var(--purple)" }} />
                    <div className="bar" style={{ height: "62%", background: "var(--orange)" }} />
                  </div>
                </div>
                <div className="app-chart">
                  <div className="chart-title">Language Split</div>
                  <div className="pie" />
                </div>
              </div>
              <div className="app-flow">
                <div className="app-flow-step">
                  <div className="app-flow-dot" style={{ background: "var(--crimson)" }}>
                    QB
                  </div>
                  <div className="app-flow-text">Question Bank</div>
                </div>
                <span style={{ color: "var(--g300)", fontSize: ".6rem" }}>→</span>
                <div className="app-flow-step">
                  <div className="app-flow-dot" style={{ background: "var(--blue-accent)" }}>
                    BP
                  </div>
                  <div className="app-flow-text">Blueprint</div>
                </div>
                <span style={{ color: "var(--g300)", fontSize: ".6rem" }}>→</span>
                <div className="app-flow-step">
                  <div className="app-flow-dot" style={{ background: "var(--green)" }}>
                    PG
                  </div>
                  <div className="app-flow-text">Paper Gen</div>
                </div>
                <span style={{ color: "var(--g300)", fontSize: ".6rem" }}>→</span>
                <div className="app-flow-step">
                  <div className="app-flow-dot" style={{ background: "var(--gold-bright)" }}>
                    SP
                  </div>
                  <div className="app-flow-text">Secure Print</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
