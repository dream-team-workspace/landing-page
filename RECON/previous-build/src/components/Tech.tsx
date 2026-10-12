import { TECH } from "../content";
import { IcoSpark } from "./Icons";
import { onAnchorClick } from "../anchors";

export function Tech() {
  return (
    <section className="sec-tight" data-od-id="tech">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-badge"><b>006</b><i />Stack</span>
          <h2 className="h2" data-od-id="tech-title">Runs On The Device</h2>
          <p className="lede">Our apps connect the camera, the model and the interface into one system that grows with the phone you already own.</p>
        </div>

        <div className="stack-grid">
          <div className="chips">
            {TECH.slice(0, 6).map((t) => (
              <span className="chip" key={t.id} data-od-id={t.id}><i>{t.icon}</i>{t.label}</span>
            ))}
          </div>
          <a className="chip-hub" href="#download" data-od-id="tech-hub"
             onClick={(e) => onAnchorClick(e, "download")}>
            <span style={{ display: "grid", gap: 6, placeItems: "center" }}>
              <IcoSpark size={20} /> Try our apps
            </span>
          </a>
          <div className="chips">
            {TECH.slice(6).map((t) => (
              <span className="chip" key={t.id} data-od-id={t.id}><i>{t.icon}</i>{t.label}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
