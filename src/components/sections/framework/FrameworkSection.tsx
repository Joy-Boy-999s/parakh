import type { CSSProperties } from "react";

function CheckIcon() {
  return (
    <div className="check">
      <svg viewBox="0 0 24 24" className="chk">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );
}

export function FrameworkSection() {
  return (
    <>
      <section className="section section-alt" id="compliance">
        <div className="container">
          <div className="section-head anim">
            <div className="section-label">PARAKH 7-Step Framework</div>
            <h2 className="section-title">Every Step of the Guidelines — Digitised</h2>
            <p className="section-desc">
              PARAKH ITMS implements each step from the official &quot;Guidelines for Setting Balanced Question Papers to
              Promote Equivalence in Assessment Practices of School Boards.&quot;
            </p>
          </div>
          <div className="steps-grid">
            <div className="step-card anim">
              <div className="step-num">
                <div className="step-circle" style={{ background: "var(--crimson)" }}>01</div>
                <div className="step-ref">PARAKH Section 2.1</div>
              </div>
              <h3>Preparation of an Assessment Design</h3>
              <div className="step-guide">
                Weightage to objectives/abilities, major content areas, types of questions, estimated difficulty levels,
                scheme of sections
              </div>
              <div className="step-feat">
                <CheckIcon />
                <span>
                  Map every question to <strong>Awareness</strong> (Knowledge, Understanding of Construct/Process),{" "}
                  <strong>Sensitivity</strong> (Conflict Resolution, Open Mindedness, Collaboration), and{" "}
                  <strong>Creativity</strong> (Innovative Ideas, Flexibility, Fluency, Exploration)
                </span>
              </div>
              <div className="step-feat">
                <CheckIcon />
                <span>
                  Easy / Moderate / Difficult classification with Competency Codes (C-1.1, C-1.2) and estimated
                  answering time
                </span>
              </div>
            </div>

            <div className="step-card anim">
              <div className="step-num">
                <div className="step-circle" style={{ background: "var(--orange)" }}>02</div>
                <div className="step-ref">PARAKH Section 2.3</div>
              </div>
              <h3>Preparation of an Assessment Blueprint</h3>
              <div className="step-guide">
                Distribution of marks across abilities/objectives, content units, question types, and a summary section
              </div>
              <div className="step-feat">
                <CheckIcon />
                <span>
                  Full blueprint generator: section-wise chapter weightage, ability mapping, marks allocation, and
                  language-specific instructions
                </span>
              </div>
              <div className="step-feat">
                <CheckIcon />
                <span>Detailed format view — chapter × ability matrix with model paper preview and PDF export</span>
              </div>
            </div>

            <div className="step-card anim">
              <div className="step-num">
                <div className="step-circle" style={{ background: "var(--green)" }}>03</div>
                <div className="step-ref">PARAKH Section 2.4</div>
              </div>
              <h3>Writing Questions</h3>
              <div className="step-guide">
                Clear, fair, competency-based questions with characteristics of effective items, stimulus material,
                inclusivity, and accessibility
              </div>
              <div className="step-feat">
                <CheckIcon />
                <span>
                  Rich editor: Objective, Short Answer, Long Answer types with <strong>stimulus inclusion</strong>,
                  estimated time, and competency code mapping
                </span>
              </div>
              <div className="step-feat">
                <CheckIcon />
                <span>
                  Simultaneous multilingual authoring — English, Telugu, Hindi, Tamil, Bengali, and 11 more with
                  per-language preview
                </span>
              </div>
            </div>

            <div className="step-card anim">
              <div className="step-num">
                <div className="step-circle" style={{ background: "var(--blue-accent)" }}>04</div>
                <div className="step-ref">PARAKH Section 2.5</div>
              </div>
              <h3>Assembling Questions into a Question Paper</h3>
              <div className="step-guide">
                Logical sequencing, balanced content and difficulty, section-wise structuring with clear instructions
              </div>
              <div className="step-feat">
                <CheckIcon />
                <span>
                  <strong>AI Generation</strong> — automatic assembly with difficulty distribution control
                  (Easy/Moderate/Difficult percentages), multiple sets
                </span>
              </div>
              <div className="step-feat">
                <CheckIcon />
                <span>
                  <strong>Manual Generation</strong> — chapter-by-chapter question selection with real-time validation
                  against blueprint requirements
                </span>
              </div>
            </div>

            <div className="step-card anim">
              <div className="step-num">
                <div className="step-circle" style={{ background: "var(--purple)" }}>05</div>
                <div className="step-ref">PARAKH Section 2.6</div>
              </div>
              <h3>Preparing Scoring Key / Marking Scheme</h3>
              <div className="step-guide">
                Alignment of marks with specific ability and content; proportional allocation of marks to valid value
                points
              </div>
              <div className="step-feat">
                <CheckIcon />
                <span>
                  Per-question marks assignment with section-level weightage validation against the blueprint total
                </span>
              </div>
            </div>

            <div className="step-card anim">
              <div className="step-num">
                <div className="step-circle" style={{ background: "var(--gold)" }}>06</div>
                <div className="step-ref">PARAKH Section 2.7</div>
              </div>
              <h3>Carrying Out Question-wise Analysis</h3>
              <div className="step-guide">
                Comprehensive checklists ensuring alignment of each question with abilities, content, and quality
                standards
              </div>
              <div className="step-feat">
                <CheckIcon />
                <span>
                  Analytics dashboard — subject-wise distribution, language breakdown, difficulty audit, Class XI vs
                  XII comparison, AI vs Manual trends
                </span>
              </div>
            </div>

            <div className="step-card anim">
              <div className="step-num">
                <div className="step-circle" style={{ background: "var(--navy)" }}>07</div>
                <div className="step-ref">PARAKH Section 2.8</div>
              </div>
              <h3>Moderation of a Question Paper</h3>
              <div className="step-guide">
                Final review ensuring the paper meets all design specifications, blueprint alignment, and quality
                standards before printing
              </div>
              <div className="step-feat">
                <CheckIcon />
                <span>
                  Model Paper Preview — multilingual side-by-side review with print-ready formatting and font size
                  control
                </span>
              </div>
              <div className="step-feat">
                <CheckIcon />
                <span>
                  Active/Inactive toggle — exclude any question from generation without deleting it from the bank
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="abilities">
        <div className="container">
          <div className="section-head anim">
            <div className="section-label">PARAKH Abilities Framework</div>
            <h2 className="section-title">Three Core Abilities — Every Question is Mapped</h2>
            <p className="section-desc">
              The PARAKH guidelines define three primary abilities that every question must assess. Our system enforces
              this mapping at the point of question creation, ensuring no question enters the bank without proper
              classification.
            </p>
          </div>
          <div className="abilities-grid anim">
            <div className="ability-card" style={{ "--ac": "var(--blue-accent)", "--ac-bg": "var(--blue-soft)" } as CSSProperties}>
              <div className="ability-header">
                <div className="ability-icon" style={{ background: "var(--blue-accent)" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                </div>
                <h3>Awareness</h3>
                <div className="ability-pct">50%</div>
              </div>
              <p className="ability-desc">Questions testing factual recall, conceptual understanding, and procedural fluency</p>
              <div className="ability-subs">
                <div className="ability-sub">
                  <span className="ability-sub-dot" style={{ background: "var(--blue-accent)" }} />
                  <span>
                    <strong>Knowledge</strong> — Recall of facts, terms, concepts
                  </span>
                </div>
                <div className="ability-sub">
                  <span className="ability-sub-dot" style={{ background: "var(--blue-accent)" }} />
                  <span>
                    <strong>Understanding of the Construct</strong> — Grasp of principles and theories
                  </span>
                </div>
                <div className="ability-sub">
                  <span className="ability-sub-dot" style={{ background: "var(--blue-accent)" }} />
                  <span>
                    <strong>Understanding of the Process</strong> — Steps, methods, procedures
                  </span>
                </div>
              </div>
            </div>

            <div className="ability-card" style={{ "--ac": "var(--gold)", "--ac-bg": "var(--gold-pale)" } as CSSProperties}>
              <div className="ability-header">
                <div className="ability-icon" style={{ background: "var(--gold)" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <h3>Sensitivity</h3>
                <div className="ability-pct">25%</div>
              </div>
              <p className="ability-desc">Questions testing interpersonal skills, ethical reasoning, and collaborative thinking</p>
              <div className="ability-subs">
                <div className="ability-sub">
                  <span className="ability-sub-dot" style={{ background: "var(--gold)" }} />
                  <span>
                    <strong>Conflict Resolution</strong> — Evaluating perspectives, finding solutions
                  </span>
                </div>
                <div className="ability-sub">
                  <span className="ability-sub-dot" style={{ background: "var(--gold)" }} />
                  <span>
                    <strong>Open Mindedness</strong> — Accepting diverse viewpoints
                  </span>
                </div>
                <div className="ability-sub">
                  <span className="ability-sub-dot" style={{ background: "var(--gold)" }} />
                  <span>
                    <strong>Collaboration</strong> — Working together, team-based problem solving
                  </span>
                </div>
              </div>
            </div>

            <div className="ability-card" style={{ "--ac": "var(--green)", "--ac-bg": "var(--green-pale)" } as CSSProperties}>
              <div className="ability-header">
                <div className="ability-icon" style={{ background: "var(--green)" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
                  </svg>
                </div>
                <h3>Creativity</h3>
                <div className="ability-pct">25%</div>
              </div>
              <p className="ability-desc">
                Questions testing higher-order thinking, innovation, and original application of concepts
              </p>
              <div className="ability-subs">
                <div className="ability-sub">
                  <span className="ability-sub-dot" style={{ background: "var(--green)" }} />
                  <span>
                    <strong>Generation of Innovative Ideas</strong> — Novel approaches and solutions
                  </span>
                </div>
                <div className="ability-sub">
                  <span className="ability-sub-dot" style={{ background: "var(--green)" }} />
                  <span>
                    <strong>Flexibility &amp; Fluency</strong> — Multiple solution paths, speed of ideation
                  </span>
                </div>
                <div className="ability-sub">
                  <span className="ability-sub-dot" style={{ background: "var(--green)" }} />
                  <span>
                    <strong>Exploration</strong> — Investigating beyond the given, curiosity-driven
                  </span>
                </div>
                <div className="ability-sub">
                  <span className="ability-sub-dot" style={{ background: "var(--green)" }} />
                  <span>
                    <strong>Combining Ideas &amp; Concepts</strong> — Cross-domain synthesis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
