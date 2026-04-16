import "../SectionBase.css";
import "./ProblemSection.css";

export function ProblemSection() {
  return (
    <section className="section" id="problem">
      <div className="container">
        <div className="section-head anim">
          <div className="section-label">The Challenge</div>
          <h2 className="section-title">Why State Boards Need Standardized Question Papers</h2>
          <p className="section-desc">
            PARAKH&apos;s study of question papers across Indian school boards identified critical gaps that undermine
            educational equity and assessment validity.
          </p>
        </div>
        <div className="problem-grid">
          <div className="problem-card anim">
            <div className="p-icon" style={{ background: "var(--crimson-pale)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2">
                <path d="M3 3v18h18" />
                <path d="M18 17V9" />
                <path d="M13 17V5" />
                <path d="M8 17v-3" />
              </svg>
            </div>
            <h3>Inconsistent Distribution of Marks</h3>
            <p>
              Marks are not aligned to the cognitive demands of content, leading to papers that fail to accurately
              measure student learning across different abilities.
            </p>
          </div>
          <div className="problem-card anim">
            <div className="p-icon" style={{ background: "var(--gold-pale)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
              </svg>
            </div>
            <h3>Uneven Allocation Across Question Types</h3>
            <p>
              No systematic approach to distributing marks across objective, short answer, and long answer questions
              relative to their difficulty levels and content weight.
            </p>
          </div>
          <div className="problem-card anim">
            <div className="p-icon" style={{ background: "var(--blue-soft)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--blue-accent)" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="9" y1="15" x2="15" y2="15" />
              </svg>
            </div>
            <h3>Lack of Blueprint-Based Paper Design</h3>
            <p>
              Without structured blueprints, paper setters create assessments that vary widely in content coverage,
              ability testing, and difficulty — compromising equivalence across boards.
            </p>
          </div>
        </div>
        <div className="solution-note anim">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <p>
            <strong>PARAKH ITMS solves this</strong> by digitising the complete PARAKH 7-step framework — ensuring
            every question paper is balanced across abilities (Awareness, Sensitivity, Creativity), content areas,
            question types, and difficulty levels, with full blueprint traceability.
          </p>
        </div>
      </div>
    </section>
  );
}
