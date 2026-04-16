import Image from "next/image";
import "../SectionBase.css";
import "./FeaturesSection.css";

export function FeaturesSection() {
  return (
    <>
      <section className="section section-alt" id="features">
        <div className="container">
          <div className="section-head anim">
            <div className="section-label">Platform Features</div>
            <h2 className="section-title">Every Tool Your Board Needs</h2>
            <p className="section-desc">
              From building a competency-mapped question bank to generating balanced papers in 16 languages —
              AI-powered and manual, all in one system.
            </p>
          </div>

          <div className="feat anim">
            <div className="feat-text">
              <div className="feat-eye" style={{ color: "var(--crimson)" }}>Competency-Based Question Bank</div>
              <h3>50,000+ Questions Mapped to Abilities, Difficulty &amp; Curriculum Standards</h3>
              <p>
                Create and manage questions with PARAKH-defined ability categories (Awareness, Sensitivity,
                Creativity), sub-abilities (Knowledge, Collaboration, Fluency), three difficulty levels, competency
                codes, estimated answering time, and stimulus material — authored simultaneously in multiple languages
                with a live preview.
              </p>
              <div className="pills">
                <span className="pill">Awareness · Sensitivity · Creativity</span>
                <span className="pill">Easy / Moderate / Difficult</span>
                <span className="pill">Competency Codes</span>
                <span className="pill">Stimulus Material</span>
                <span className="pill">16 Languages</span>
                <span className="pill">Active / Inactive</span>
              </div>
            </div>
            <div className="feat-visual">
              <div className="fscreen">
                <div className="fscreen-bar">
                  <div className="fdot" style={{ background: "#FF5F57" }} />
                  <div className="fdot" style={{ background: "#FFBD2E" }} />
                  <div className="fdot" style={{ background: "#28C840" }} />
                </div>
                <div className="fscreen-body">
                  <div className="fs-h">
                    Question Bank View <span className="fs-badge" style={{ background: "var(--crimson)" }}>+ Create Question</span>
                  </div>
                  <div className="fs-filters">
                    <div className="fs-filter">Class: XI</div>
                    <div className="fs-filter">Subject: Botany</div>
                    <div className="fs-filter">Ability: All</div>
                    <div className="fs-filter">Difficulty: All</div>
                  </div>
                  <div className="fs-table">
                    <div className="fs-th c5">
                      <div>#</div>
                      <div>Question (Telugu / English / Urdu)</div>
                      <div>Chapter</div>
                      <div>Marks</div>
                      <div>Status</div>
                    </div>
                    <div className="fs-tr c5">
                      <div>1</div>
                      <div>Two kingdom classification was given by…</div>
                      <div style={{ fontSize: ".52rem" }}>Biological Classification</div>
                      <div>1</div>
                      <div><span className="tog" /></div>
                    </div>
                    <div className="fs-tr c5">
                      <div>2</div>
                      <div>Bacteria that live in harsh habitats are…</div>
                      <div style={{ fontSize: ".52rem" }}>Biological Classification</div>
                      <div>1</div>
                      <div><span className="tog" /></div>
                    </div>
                    <div className="fs-tr c5">
                      <div>3</div>
                      <div>Give salient features of Chrysophytes…</div>
                      <div style={{ fontSize: ".52rem" }}>Biological Classification</div>
                      <div>4</div>
                      <div><span className="tog" /></div>
                    </div>
                    <div className="fs-tr c5">
                      <div>4</div>
                      <div>Write the role of Fungi in our daily life…</div>
                      <div style={{ fontSize: ".52rem" }}>Biological Classification</div>
                      <div>4</div>
                      <div><span className="tog" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feat rev anim">
            <div className="feat-text">
              <div className="feat-eye" style={{ color: "var(--blue-accent)" }}>Blueprint-Driven Paper Design</div>
              <h3>Define the Complete Assessment Structure Before Picking a Single Question</h3>
              <p>
                Create structured blueprints specifying sections (MCQ, Short Answer, Long Answer), chapter-wise
                weightage, ability-to-question mapping, mandatory vs optional questions, marks distribution, and
                language-specific instructions. The system validates that sufficient questions exist in the bank.
              </p>
              <div className="pills">
                <span className="pill">Section Configuration</span>
                <span className="pill">Chapter × Ability Matrix</span>
                <span className="pill">Question Count Validation</span>
                <span className="pill">Model Paper Preview</span>
                <span className="pill">Blueprint PDF</span>
              </div>
            </div>
            <div className="feat-visual">
              <div className="fscreen">
                <div className="fscreen-bar">
                  <div className="fdot" style={{ background: "#FF5F57" }} />
                  <div className="fdot" style={{ background: "#FFBD2E" }} />
                  <div className="fdot" style={{ background: "#28C840" }} />
                </div>
                <div className="fscreen-body">
                  <div className="fs-h">
                    Blueprint Generator <span className="fs-badge" style={{ background: "var(--blue-accent)" }}>Preview</span>
                  </div>
                  <div className="fs-form">
                    <div className="fs-field"><div className="fs-fl">*Class</div><div className="fs-fv">XI</div></div>
                    <div className="fs-field"><div className="fs-fl">*Subject</div><div className="fs-fv">Botany</div></div>
                    <div className="fs-field"><div className="fs-fl">*Total Marks</div><div className="fs-fv">60</div></div>
                  </div>
                  <div className="fs-sec">
                    <div className="fs-sec-h" style={{ background: "var(--crimson)" }}>Section 1 — Multiple Choice (5 × 1 = 5)</div>
                    <div className="fs-sec-b">
                      <div className="fs-sec-r"><span>Biological Classification</span><span>2 Qs · Knowledge</span></div>
                      <div className="fs-sec-r"><span>Plant Kingdom</span><span>2 Qs · Knowledge</span></div>
                      <div className="fs-sec-r"><span>Morphology of Flowering Plants</span><span>1 Q · Awareness</span></div>
                    </div>
                  </div>
                  <div className="fs-sec">
                    <div className="fs-sec-h" style={{ background: "var(--blue-accent)" }}>Section 2 — Very Short Answer (5 × 2 = 10)</div>
                    <div className="fs-sec-b">
                      <div className="fs-sec-r"><span>Cell: Unit of Life</span><span>2 Qs · Sensitivity</span></div>
                      <div className="fs-sec-r"><span>Cell Cycle &amp; Division</span><span>1 Q · Creativity</span></div>
                    </div>
                  </div>
                  <div className="fs-sec">
                    <div className="fs-sec-h" style={{ background: "var(--green)" }}>Section 3 — Short Answer (4 × 4 = 16)</div>
                    <div className="fs-sec-b">
                      <div className="fs-sec-r"><span>Anatomy of Flowering Plants</span><span>2 Qs · Knowledge</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feat anim">
            <div className="feat-text">
              <div className="feat-eye" style={{ color: "var(--green)" }}>AI-Powered Paper Generation</div>
              <h3>Balanced Papers in Seconds — Set Difficulty, Let AI Assemble</h3>
              <p>
                Select a blueprint, define the Easy / Moderate / Difficult distribution percentages, choose the number
                of sets, and generate. The AI engine picks questions satisfying the blueprint&apos;s ability mapping,
                chapter coverage, and difficulty balance. Generate all language versions in a single click.
              </p>
              <div className="pills">
                <span className="pill">Difficulty % Control</span>
                <span className="pill">Multiple Sets</span>
                <span className="pill">Auto Language Versions</span>
                <span className="pill">Blueprint Adherence</span>
              </div>
            </div>
            <div className="feat-visual">
              <div className="fscreen">
                <div className="fscreen-bar">
                  <div className="fdot" style={{ background: "#FF5F57" }} />
                  <div className="fdot" style={{ background: "#FFBD2E" }} />
                  <div className="fdot" style={{ background: "#28C840" }} />
                </div>
                <div className="fscreen-body">
                  <div className="fs-ai"><b>AI-Based Question Paper Generator</b><small>Botany · Class XII · 4 Sets</small></div>
                  <div className="fs-diff">
                    <div className="fs-d"><small>Easy</small><b style={{ color: "var(--green)" }}>30%</b></div>
                    <div className="fs-d"><small>Moderate</small><b style={{ color: "var(--gold)" }}>50%</b></div>
                    <div className="fs-d"><small>Difficult</small><b style={{ color: "var(--crimson)" }}>20%</b></div>
                  </div>
                  <div className="fs-sec">
                    <div className="fs-sec-h" style={{ background: "var(--green)" }}>Auto-Mapped Section Structure</div>
                    <div className="fs-sec-b">
                      <div className="fs-sec-r"><span>Plants, Microbes &amp; Human Welfare</span><span>2 Qs · 8 marks</span></div>
                      <div className="fs-sec-r"><span>Molecular Biology</span><span>1 Q · 2 marks</span></div>
                      <div className="fs-sec-r"><span>Genetics</span><span>1 Q · 2 marks</span></div>
                    </div>
                  </div>
                  <div className="fs-gen">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10" />
                    </svg>
                    Generate 4 Set(s)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feat rev anim">
            <div className="feat-text">
              <div className="feat-eye" style={{ color: "var(--blue-accent)" }}>Manual Paper Generation</div>
              <h3>Full Control — Pick Every Question, Validated by the Blueprint</h3>
              <p>
                For paper setters who want hands-on control: select a blueprint, then pick questions chapter-by-chapter.
                The system shows available questions per section, lets you review each before selection, and validates
                picks against blueprint requirements. Exceeding the allowed count triggers an immediate alert.
              </p>
              <div className="pills">
                <span className="pill">Chapter-by-Chapter Selection</span>
                <span className="pill">Question Preview</span>
                <span className="pill">Blueprint Validation</span>
                <span className="pill">Count Limit Alerts</span>
                <span className="pill">Multi-Language Output</span>
              </div>
            </div>
            <div className="feat-visual">
              <div className="fscreen">
                <div className="fscreen-bar">
                  <div className="fdot" style={{ background: "#FF5F57" }} />
                  <div className="fdot" style={{ background: "#FFBD2E" }} />
                  <div className="fdot" style={{ background: "#28C840" }} />
                </div>
                <div className="fscreen-body">
                  <div className="fs-manual"><b>Manual Question Paper Generation</b><small>Commerce · Class XI · Section 1</small></div>
                  <div style={{ fontSize: ".6rem", color: "var(--g500)", marginBottom: "8px", fontWeight: 600 }}>Select Chapter → Review Questions → Submit</div>
                  <div className="fs-ch">
                    <div className="fs-ch-item"><span className="fs-ch-name">9. Hydrocarbons</span><span className="fs-ch-badge">29 Available</span></div>
                    <div className="fs-ch-item"><span className="fs-ch-name">8. Organic Chemistry — Basics</span><span className="fs-ch-badge">18 Available</span></div>
                    <div className="fs-ch-item"><span className="fs-ch-name">7. Redox Reactions</span><span className="fs-ch-badge">14 Available</span></div>
                    <div className="fs-ch-item"><span className="fs-ch-name">6. Equilibrium</span><span className="fs-ch-badge">22 Available</span></div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".6rem", color: "var(--g600)", fontWeight: 600 }}>
                    <span>Section 1 Progress</span><span style={{ color: "var(--blue-accent)" }}>4 / 6 Selected</span>
                  </div>
                  <div className="fs-prog"><div className="fs-prog-bar" style={{ width: "66%", background: "var(--blue-accent)" }} /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="feat anim">
            <div className="feat-text">
              <div className="feat-eye" style={{ color: "var(--purple)" }}>Merge Question Papers</div>
              <h3>Combine Multiple Subjects into a Single Examination Paper</h3>
              <p>
                For boards running combined papers — merge Botany + Zoology into Biology, Commerce + Accountancy into a
                single paper. Define the part ordering, and the system generates a unified paper with combined
                instructions, section labels (A through H), and correct numbering across all language versions.
              </p>
              <div className="pills">
                <span className="pill">Multi-Subject Merge</span>
                <span className="pill">Part Ordering</span>
                <span className="pill">Unified Instructions</span>
                <span className="pill">Cross-Language</span>
                <span className="pill">Print Ready</span>
              </div>
            </div>
            <div className="feat-visual">
              <div className="fscreen">
                <div className="fscreen-bar">
                  <div className="fdot" style={{ background: "#FF5F57" }} />
                  <div className="fdot" style={{ background: "#FFBD2E" }} />
                  <div className="fdot" style={{ background: "#28C840" }} />
                </div>
                <div className="fscreen-body">
                  <div className="fs-h">Combine Question Papers <span className="fs-badge" style={{ background: "var(--purple)" }}>Create</span></div>
                  <div style={{ fontSize: ".6rem", color: "var(--g500)", marginBottom: "10px" }}>Class: XI · Parts: 2</div>
                  <div className="fs-merge-subs">
                    <div className="fs-merge-sub"><b>Part I: Botany</b><small>20 Qs · 60 Marks</small></div>
                    <div className="fs-merge-sub"><b>Part II: Zoology</b><small>19 Qs · 25 Marks</small></div>
                  </div>
                  <div className="fs-merge-arrow">▼ Merged Output</div>
                  <div className="fs-merge-result"><b>BIOLOGY — PAPER-I</b><small>39 Questions · 85 Marks · 3 Hours · English / Telugu / Urdu</small></div>
                  <div className="fs-gen" style={{ background: "var(--purple)", marginTop: "10px", fontSize: ".65rem" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 6 2 18 2 18 9" />
                      <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
                      <rect x="6" y="14" width="12" height="8" />
                    </svg>
                    Print Merged Paper
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feat rev anim">
            <div className="feat-text">
              <div className="feat-eye" style={{ color: "var(--gold)" }}>Analytics Dashboard</div>
              <h3>Real-Time Insights Across Your Examination Ecosystem</h3>
              <p>
                Monitor everything: question distribution by class, subject, language, and difficulty; Class XI vs XII
                comparisons; AI vs Manual paper generation trends; blueprint usage tracking; recent paper history with
                status; and user activity metrics — all with monthly growth indicators.
              </p>
              <div className="pills">
                <span className="pill">Class-wise Summary</span>
                <span className="pill">Subject Distribution</span>
                <span className="pill">Language Analytics</span>
                <span className="pill">Difficulty Audit</span>
                <span className="pill">AI vs Manual Trends</span>
                <span className="pill">Recent Papers Log</span>
              </div>
            </div>
            <div className="feat-visual">
              <div className="fscreen">
                <div className="fscreen-bar">
                  <div className="fdot" style={{ background: "#FF5F57" }} />
                  <div className="fdot" style={{ background: "#FFBD2E" }} />
                  <div className="fdot" style={{ background: "#28C840" }} />
                </div>
                <div className="fscreen-body">
                  <div className="fs-h">Dashboard — Overview</div>
                  <div className="fs-dash">
                    <div className="fs-dash-c"><b style={{ color: "var(--crimson)" }}>52,693</b><small>Total Questions</small></div>
                    <div className="fs-dash-c"><b style={{ color: "var(--green)" }}>52,117</b><small>Active</small></div>
                    <div className="fs-dash-c"><b style={{ color: "var(--blue-accent)" }}>184</b><small>Papers</small></div>
                    <div className="fs-dash-c"><b style={{ color: "var(--gold)" }}>137</b><small>Blueprints</small></div>
                  </div>
                  <div className="fs-dash">
                    <div className="fs-dash-c"><b style={{ color: "var(--purple)", fontSize: ".72rem" }}>54</b><small>AI Papers</small></div>
                    <div className="fs-dash-c"><b style={{ color: "var(--orange)", fontSize: ".72rem" }}>130</b><small>Manual Papers</small></div>
                    <div className="fs-dash-c"><b style={{ color: "var(--navy)", fontSize: ".72rem" }}>184</b><small>Secure Prints</small></div>
                    <div className="fs-dash-c"><b style={{ color: "var(--crimson)", fontSize: ".72rem" }}>297</b><small>Total Users</small></div>
                  </div>
                  <div style={{ background: "var(--white)", border: "1px solid var(--g200)", borderRadius: "5px", padding: "8px", marginTop: "4px" }}>
                    <div className="chart-title">Class XI vs XII — Subject Comparison</div>
                    <div className="bars" style={{ height: "50px" }}>
                      <div className="bar" style={{ height: "95%", background: "var(--crimson)" }} />
                      <div className="bar" style={{ height: "60%", background: "rgba(139,26,26,.3)" }} />
                      <div className="bar" style={{ height: "80%", background: "var(--blue-accent)" }} />
                      <div className="bar" style={{ height: "50%", background: "rgba(46,107,198,.3)" }} />
                      <div className="bar" style={{ height: "65%", background: "var(--green)" }} />
                      <div className="bar" style={{ height: "45%", background: "rgba(29,122,74,.3)" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head anim">
            <div className="section-label">Watch PARAKH ITMS</div>
            <h2 className="section-title">See the Platform in Action</h2>
          </div>
          <div
            className="anim"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 16px 50px rgba(0,0,0,.1)",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg,var(--off-white),var(--crimson-pale))",
                minHeight: "320px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px",
                cursor: "pointer",
              }}
              className="vid-player"
            >
              <Image src="/logo-parakh.png" alt="PARAKH" width={224} height={56} style={{ height: "56px", width: "auto", opacity: 0.8 }} />
              <div style={{ fontSize: ".78rem", color: "var(--g500)", maxWidth: "240px", textAlign: "center", lineHeight: 1.5, fontStyle: "italic" }}>
                Performance Assessment, Review, and Analysis of Knowledge for Holistic Development
              </div>
              <div className="vid-play-btn">▶</div>
            </div>
            <div
              style={{
                background: "linear-gradient(135deg,#E87B35,#D4961C)",
                padding: "44px 36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "var(--white)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: "-30%", right: "-20%", width: "200px", height: "200px", border: "3px solid rgba(255,255,255,.1)", borderRadius: "50%" }} />
              <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: "150px", height: "150px", border: "3px solid rgba(255,255,255,.07)", borderRadius: "50%" }} />
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.7rem", fontWeight: 700, lineHeight: 1.3, marginBottom: "14px", position: "relative", zIndex: 1 }}>
                Want to know more about PARAKH ITMS?
              </h3>
              <p style={{ fontSize: ".92rem", opacity: 0.85, lineHeight: 1.7, marginBottom: "22px", position: "relative", zIndex: 1 }}>
                See how state boards use the platform to generate balanced, competency-based question papers from start
                to finish.
              </p>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "var(--white)",
                  color: "var(--navy)",
                  padding: "11px 26px",
                  borderRadius: "6px",
                  fontWeight: 700,
                  fontSize: ".86rem",
                  textDecoration: "none",
                  alignSelf: "flex-start",
                  position: "relative",
                  zIndex: 1,
                  transition: "all .2s",
                }}
              >
                Request a Live Demo →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="workflow">
        <div className="container">
          <div className="section-head anim">
            <div className="section-label">Platform Workflow</div>
            <h2 className="section-title">How It Works — End to End</h2>
            <p className="section-desc">A streamlined five-stage process from user setup to secure paper printing.</p>
          </div>
          <div className="wf-flow anim">
            <div className="wf-line" />
            <div className="wf-step"><div className="wf-num" style={{ background: "var(--crimson)" }}>1</div><h4>Create Users</h4><p>Admin assigns subject-specific logins with role-based access</p></div>
            <div className="wf-step"><div className="wf-num" style={{ background: "var(--orange)" }}>2</div><h4>Build Question Bank</h4><p>Add competency-mapped multilingual questions</p></div>
            <div className="wf-step"><div className="wf-num" style={{ background: "var(--blue-accent)" }}>3</div><h4>Define Blueprint</h4><p>Structure sections, chapters, abilities, marks</p></div>
            <div className="wf-step"><div className="wf-num" style={{ background: "var(--green)" }}>4</div><h4>Generate Paper</h4><p>AI or Manual — balanced papers in all languages</p></div>
            <div className="wf-step"><div className="wf-num" style={{ background: "var(--purple)" }}>5</div><h4>Secure Print</h4><p>Print directly — zero database storage, zero leak risk</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head anim">
            <div className="section-label">Multilingual Support</div>
            <h2 className="section-title">Question Papers in 16 Languages</h2>
            <p className="section-desc">
              Generate the same question paper simultaneously across all configured languages — each with its own
              instructions, content, and formatting. Supporting India&apos;s linguistic diversity for true assessment
              equivalence.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(130px,1fr))", gap: "12px" }} className="anim">
            <div className="lang-card"><span className="lang-glyph">A</span><strong>English</strong></div>
            <div className="lang-card"><span className="lang-glyph">తె</span><strong>Telugu</strong></div>
            <div className="lang-card"><span className="lang-glyph">হি</span><strong>Hindi</strong></div>
            <div className="lang-card"><span className="lang-glyph">বা</span><strong>Bengali</strong></div>
            <div className="lang-card"><span className="lang-glyph">த</span><strong>Tamil</strong></div>
            <div className="lang-card"><span className="lang-glyph">ಕ</span><strong>Kannada</strong></div>
            <div className="lang-card"><span className="lang-glyph">മ</span><strong>Malayalam</strong></div>
            <div className="lang-card"><span className="lang-glyph">मा</span><strong>Marathi</strong></div>
            <div className="lang-card"><span className="lang-glyph">ગુ</span><strong>Gujarati</strong></div>
            <div className="lang-card"><span className="lang-glyph">ଓ</span><strong>Odia</strong></div>
            <div className="lang-card"><span className="lang-glyph">ਪੰ</span><strong>Punjabi</strong></div>
            <div className="lang-card"><span className="lang-glyph">অ</span><strong>Assamese</strong></div>
            <div className="lang-card"><span className="lang-glyph">कों</span><strong>Konkani</strong></div>
            <div className="lang-card"><span className="lang-glyph">ꯃ</span><strong>Meitei</strong></div>
            <div className="lang-card"><span className="lang-glyph">Mi</span><strong>Mizo</strong></div>
            <div className="lang-card"><span className="lang-glyph">ने</span><strong>Nepali</strong></div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item anim"><div className="stat-num">52,693</div><div className="stat-lbl">Questions in Bank</div></div>
            <div className="stat-item anim"><div className="stat-num">137</div><div className="stat-lbl">Active Blueprints</div></div>
            <div className="stat-item anim"><div className="stat-num">184</div><div className="stat-lbl">Papers Generated</div></div>
            <div className="stat-item anim"><div className="stat-num">16</div><div className="stat-lbl">Languages Supported</div></div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head anim">
            <div className="section-label">Security &amp; Access Control</div>
            <h2 className="section-title">Built for Examination Confidentiality</h2>
            <p className="section-desc">Every layer of the system protects question paper integrity.</p>
          </div>
          <div className="sec-grid">
            <div className="sec-card anim">
              <div className="sec-icon" style={{ background: "var(--crimson-pale)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3>Secure Print Mode</h3>
              <p>Papers are printed directly without database storage — eliminating digital leak risks entirely.</p>
            </div>
            <div className="sec-card anim">
              <div className="sec-icon" style={{ background: "var(--blue-soft)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--blue-accent)" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3>Role-Based Access Control</h3>
              <p>Admin, Question Bank Editor, and Paper Setter — each user sees only what they are authorised to access.</p>
            </div>
            <div className="sec-card anim">
              <div className="sec-icon" style={{ background: "var(--green-pale)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
              </div>
              <h3>Subject-Level Isolation</h3>
              <p>Each paper setter accesses only their assigned subject — complete isolation at the login level.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "linear-gradient(165deg,#FDF8F4 0%,#FAF0EA 100%)" }}>
        <div className="container">
          <div className="section-head anim">
            <div className="section-label">Ministry of Education</div>
            <h2 className="section-title">Endorsement from Government Leadership</h2>
            <p className="section-desc">
              The PARAKH Guidelines for Standardisation of Question Paper Templates have been endorsed at the highest
              levels of the Ministry of Education.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
            <div className="anim" style={{ background: "var(--white)", border: "1px solid var(--g200)", borderRadius: "12px", padding: "32px 28px", position: "relative" }}>
              <div style={{ fontSize: "2.5rem", color: "var(--crimson)", opacity: 0.15, fontFamily: "Georgia", position: "absolute", top: "16px", left: "20px", lineHeight: 1 }}>&quot;</div>
              <p style={{ fontSize: ".9rem", color: "var(--g600)", lineHeight: 1.8, marginBottom: "20px", position: "relative", zIndex: 1 }}>
                The design of a question paper must reflect not only curricular intent but also a calibrated balance of
                cognitive demand, item diversity, and inclusivity. The PARAKH Guidelines offer a blueprint-driven
                approach to harmonise assessment design across Boards, promoting structural equivalence while preserving
                contextual flexibility.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", borderTop: "1px solid var(--g200)", paddingTop: "16px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg,var(--crimson-pale),rgba(139,32,32,.12))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".8rem", fontWeight: 700, color: "var(--crimson)" }}>SK</div>
                <div>
                  <div style={{ fontSize: ".88rem", fontWeight: 700, color: "var(--navy)" }}>Shri Sanjay Kumar</div>
                  <div style={{ fontSize: ".72rem", color: "var(--g500)" }}>Secretary, Dept. of School Education &amp; Literacy</div>
                  <div style={{ fontSize: ".68rem", color: "var(--crimson)", fontWeight: 600 }}>Ministry of Education, Government of India</div>
                </div>
              </div>
            </div>
            <div className="anim" style={{ background: "var(--white)", border: "1px solid var(--g200)", borderRadius: "12px", padding: "32px 28px", position: "relative" }}>
              <div style={{ fontSize: "2.5rem", color: "var(--crimson)", opacity: 0.15, fontFamily: "Georgia", position: "absolute", top: "16px", left: "20px", lineHeight: 1 }}>&quot;</div>
              <p style={{ fontSize: ".9rem", color: "var(--g600)", lineHeight: 1.8, marginBottom: "20px", position: "relative", zIndex: 1 }}>
                These Guidelines for Standardisation of Question Paper Templates provide a robust mechanism to support
                School Boards in constructing balanced, outcome-aligned question papers. By institutionalising
                blueprint-based design, the guidelines enable structural parity across diverse Boards and enhance the
                credibility of student performance data.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", borderTop: "1px solid var(--g200)", paddingTop: "16px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg,var(--crimson-pale),rgba(139,32,32,.12))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".8rem", fontWeight: 700, color: "var(--crimson)" }}>AP</div>
                <div>
                  <div style={{ fontSize: ".88rem", fontWeight: 700, color: "var(--navy)" }}>Shri Anandrao V Patil</div>
                  <div style={{ fontSize: ".72rem", color: "var(--g500)" }}>Additional Secretary, Dept. of School Education &amp; Literacy</div>
                  <div style={{ fontSize: ".68rem", color: "var(--crimson)", fontWeight: 600 }}>Ministry of Education, Government of India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="output">
        <div className="container">
          <div className="section-head anim">
            <div className="section-label">Generated Output</div>
            <h2 className="section-title">What the Final Paper Looks Like</h2>
            <p className="section-desc">
              Every generated paper follows a standardized format with QR code, registration fields, section-wise
              instructions, and proper question numbering — ready for secure printing.
            </p>
          </div>
          <div className="sample-paper anim">
            <div className="sample-paper-head">
              <div className="sample-paper-qr">QR</div>
              <div style={{ fontSize: ".65rem", color: "var(--g500)", marginBottom: "6px" }}>Total No. of Questions: 20 &nbsp;·&nbsp; Total No. of Printed Pages: —</div>
              <div style={{ display: "flex", gap: "4px", justifyContent: "center", marginBottom: "10px" }}>
                <div style={{ width: "20px", height: "28px", border: "1.5px solid var(--g300)", borderRadius: "2px" }} />
                <div style={{ width: "20px", height: "28px", border: "1.5px solid var(--g300)", borderRadius: "2px" }} />
                <div style={{ width: "20px", height: "28px", border: "1.5px solid var(--g300)", borderRadius: "2px" }} />
                <div style={{ width: "20px", height: "28px", border: "1.5px solid var(--g300)", borderRadius: "2px" }} />
                <div style={{ width: "20px", height: "28px", border: "1.5px solid var(--g300)", borderRadius: "2px" }} />
                <div style={{ width: "20px", height: "28px", border: "1.5px solid var(--g300)", borderRadius: "2px" }} />
              </div>
              <div className="sample-paper-title">BOTANY — PAPER-I</div>
              <div className="sample-paper-sub">ENGLISH Version</div>
            </div>
            <div className="sample-paper-meta"><span>Time: 1.5 Hours</span><span>Max. Marks: 43</span></div>
            <div className="sample-paper-body">
              <div className="sample-section-label">SECTION — A</div>
              <div className="sample-instruction">(i) Answer ALL the questions. (ii) Each question carries 1 mark.</div>
              <div className="sample-q" data-num="1.">Two kingdom classification was given by<br /><span className="sample-q-options"><span>1) Whittaker</span><span>2) Linnaeus</span><span>3) Aristotle</span><span>4) Theophrastus</span></span></div>
              <div className="sample-q" data-num="2.">Bacteria that live in most harsh habitats are<br /><span className="sample-q-options"><span>1) Bacteria</span><span>2) Cyanobacteria</span><span>3) Mycoplasma</span><span>4) Archaebacteria</span></span></div>
              <div className="sample-section-label">SECTION — B</div>
              <div className="sample-instruction">(i) Answer any SIX questions. (ii) Each question carries 2 marks.</div>
              <div className="sample-q" data-num="6.">Give the salient features and importance of Chrysophytes.</div>
              <div className="sample-q" data-num="7.">Write the role of Fungi in our daily life.</div>
              <div style={{ textAlign: "center", padding: "16px 0", color: "var(--g300)", fontSize: ".75rem", borderTop: "1px dashed var(--g200)", marginTop: "12px" }}>
                — Paper continues with Sections C and D —
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="faq">
        <div className="container">
          <div className="section-head anim">
            <div className="section-label">Frequently Asked Questions</div>
            <h2 className="section-title">Common Questions from State Boards</h2>
          </div>
          <div style={{ maxWidth: "740px", margin: "0 auto" }} id="faq-container" />
        </div>
      </section>
    </>
  );
}
