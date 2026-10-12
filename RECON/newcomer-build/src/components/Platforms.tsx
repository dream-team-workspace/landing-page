import { PLATFORMS } from "../content";
import { Phone } from "./Phone";

export function Platforms() {
  return (
    <section className="sec" id="platforms" data-od-id="platforms">
      <div className="wrap">
        <div className="platforms-grid">
          <div className="platforms-copy reveal">
            <h2 className="h2" data-od-id="platforms-title">One studio, every screen</h2>
            <p className="lede" style={{ maxWidth: 420 }}>
              Our apps run where you already are — Android and iOS first, with
              Zeta AI Assistant also on macOS, Windows and Linux.
            </p>
            <div className="chips">
              {PLATFORMS.map((p) => (
                <span className="chip" key={p.id} data-od-id={"platform-" + p.id}><i>{p.icon}</i>{p.label}</span>
              ))}
            </div>
          </div>
          <div className="reveal reveal-d1">
            <Phone src="assets/img/app-cobatik-screen.webp" alt="CoBatik app screen" />
          </div>
        </div>
      </div>
    </section>
  );
}
