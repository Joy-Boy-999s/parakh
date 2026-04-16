export function GovStrip() {
  return (
    <div className="gov-strip">
      <div className="container" style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <div className="gov-flag" />
        <span>Government of India</span>
        <div style={{ width: "1px", height: "14px", background: "rgba(255,255,255,.15)" }} />
        <span style={{ opacity: 0.7 }}>Ministry of Education | NCERT</span>
      </div>
    </div>
  );
}
