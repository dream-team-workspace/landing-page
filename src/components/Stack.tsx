import { SECURE } from "../content";
import { onAnchorClick } from "../anchors";

export function Stack() {
  return (
    <section className="sec" id="apps" data-od-id="stack">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-badge"><b>003</b><i />Capabilities</span>
          <h2 className="h2" data-od-id="stack-title">Our AI-Driven Stack</h2>
          <p className="lede">What we actually build with — from the camera pipeline to the model runtime on the phone.</p>
        </div>

        <div className="bento" style={{ marginTop: 48 }}>
          <article className="card b1 reveal" data-od-id="card-inference">
            <h3 className="h3">On-Device Inference</h3>
            <p className="small">Vision, text and speech models running locally — no round-trip, no queue, no metered data.</p>
            <ul className="bullets">
              <li>Quantised for mid-range phones</li>
              <li>No network required</li>
              <li>Runs in airplane mode</li>
            </ul>
            <div className="card-art" style={{ marginTop: "auto" }}>
              <img src="assets/img/bento-inference.png" width={750} height={780}
                   alt="Diagram of a model branching into storage, profile and action nodes" loading="lazy" />
            </div>
          </article>

          <article className="card b2 reveal reveal-d1" data-od-id="card-conversation">
            <h3 className="h3">Conversational Apps</h3>
            <p className="small">Chat, voice and avatar interfaces that keep their context between sessions.</p>
            <div className="card-art">
              <img src="assets/img/bento-chat.png" width={648} height={288}
                   alt="Two chat bubbles, one asking about pricing and one greeting the user" loading="lazy" />
            </div>
          </article>

          <article className="card b3 reveal reveal-d2" data-od-id="card-interfaces">
            <h3 className="h3">Mobile-First Interfaces</h3>
            <p className="small">Native-feel UI built for one hand, one thumb and a six-inch screen.</p>
            <div className="card-art">
              <img src="assets/img/bento-mobile.png" width={580} height={367}
                   alt="Profile card UI with a ranked score row" loading="lazy" />
            </div>
          </article>

          <article className="card b2 reveal" data-od-id="card-retrieval">
            <h3 className="h3">On-Device Retrieval</h3>
            <p className="small">Answers grounded in your photo roll and the live web — with sources, storing nothing.</p>
            <div className="card-art">
              <img src="assets/img/bento-retrieval.png" width={600} height={327}
                   alt="Concentric network arcs connecting mail, web and phone icons" loading="lazy" />
            </div>
          </article>

          <article className="card b2 reveal reveal-d1" data-od-id="card-memory">
            <h3 className="h3">Memory &amp; Context</h3>
            <p className="small">Running context, retrieval and personalisation that never leave the phone.</p>
            <div className="card-art">
              <img src="assets/img/bento-memory.png" width={600} height={257}
                   alt="An area chart tracking total sessions" loading="lazy" />
            </div>
          </article>

          <article className="cta-card b2 reveal reveal-d2" data-od-id="card-cta">
            <span className="cta-orb"><img src="assets/img/portrait-3.jpg" alt="" width={200} height={200} /></span>
            <div>
              <h3 className="h3">Not sure what runs on a phone?</h3>
              <p className="small" style={{ marginTop: 8 }}>Send us the idea. In 30 minutes we will tell you what fits on-device and what still needs a server.</p>
            </div>
            <a className="btn btn-primary" href="#contact" data-od-id="card-cta-button"
               onClick={(e) => onAnchorClick(e, "contact")}>Book a review</a>
          </article>

          <article className="card secure reveal" data-od-id="card-security">
            <h3 className="h3">Your Data. Stays Yours.</h3>
            <p className="small">No account, no cloud sync, no telemetry. The app is the whole system.</p>
            <div className="secure-tiles">
              {SECURE.map((s) => (
                <div className="secure-tile" key={s.id} data-od-id={"secure-" + s.id}>
                  <span className="secure-icon">{s.icon}</span>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
