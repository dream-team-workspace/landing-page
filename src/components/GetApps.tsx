import { APPS } from "../content";
import { IcoArrowR } from "./Icons";
import { onAnchorClick } from "../anchors";

export function GetApps() {
  return (
    <section className="sec" id="download" data-od-id="download">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-badge"><b>008</b><i />Download</span>
          <h2 className="h2" data-od-id="download-title">Get the Apps</h2>
          <p className="lede">Free to download. No account, no subscription, no ads.</p>
        </div>

        <div className="plans">
          {APPS.map((a, i) => (
            <article className={"plan" + (a.featured ? " plan-featured" : "") + " reveal reveal-d" + i}
                     key={a.id} data-od-id={"plan-" + a.id}>
              <div className="plan-head">
                <div className="plan-app">
                  <img src={a.icon} alt={a.name + " app icon"} width={54} height={54} />
                  <div>
                    <h3 className="h4">{a.name}</h3>
                    <p className="tiny" style={{ marginTop: 2 }}>{a.tagline}</p>
                  </div>
                </div>
                {a.featured ? <span className="tag">Most popular</span> : null}
              </div>

              <div className="price">{a.price} <small>to download</small></div>

              <div className="spec">
                {a.spec.map((s) => <span key={s}>{s}</span>)}
              </div>

              <div className="plan-sep" />

              <div>
                <p className="small" style={{ color: "var(--ink)", marginBottom: 10 }}>What you get:</p>
                <ul className="bullets">
                  {a.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </div>

              <a className={"btn btn-block " + (a.featured ? "btn-primary" : "btn-light")}
                 href={a.url} target="_blank" rel="noopener noreferrer" data-od-id={"plan-cta-" + a.id}>
                {a.cta} <IcoArrowR size={16} />
              </a>
            </article>
          ))}
        </div>

        <div className="cta-card reveal" style={{ marginTop: 20, flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 24 }}
             data-od-id="download-cta">
          <span className="cta-orb"><img src="assets/img/app-zeta-avatar.jpg" alt="" width={452} height={300} /></span>
          <div style={{ flex: "1 1 260px" }}>
            <h3 className="h3">Not sure which app to open first?</h3>
            <p className="small" style={{ marginTop: 8 }}>Book a 30-minute call and we will point you at the right one — or tell you honestly that you need none of them.</p>
          </div>
          <a className="btn btn-primary" href="#contact" data-od-id="download-cta-button"
             onClick={(e) => onAnchorClick(e, "contact")}>Book a call <IcoArrowR size={16} /></a>
        </div>
      </div>
    </section>
  );
}
