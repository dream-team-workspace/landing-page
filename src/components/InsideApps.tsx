import { QUOTES } from "../content";
import { IcoBrain, IcoChat, IcoCloudOff, IcoEye, IcoGlobe, IcoGrid, IcoHand, IcoRoute } from "./Icons";

export function InsideApps() {
  return (
    <section className="sec" data-od-id="inside">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-badge"><b>007</b><i />Inside</span>
          <h2 className="h2" data-od-id="inside-title">Inside the Apps</h2>
          <p className="lede">The parts you notice on day one — and the parts you keep relying on in month six.</p>
        </div>

        <div className="masonry">
          <div className="mcol">
            <article className="m-card m-photo reveal" data-od-id="inside-batik">
              <img src="assets/img/batik-display.jpg" width={900} height={1258}
                   alt="Hand-drawn batik cloth displayed on a hanger with a Mega Mendung pattern" loading="lazy" />
              <div className="m-photo-body">
                <span className="m-badge"><IcoGrid size={14} /> CoBatik · Android</span>
                <h3 className="h3">Wear the archive.</h3>
                <p className="small">A real archive of hand-drawn cloth from Cirebon, Yogyakarta, Pekalongan and Lasem.</p>
              </div>
            </article>

            <article className="m-card m-quote reveal" data-od-id="inside-vision">
              <span className="qmark"><IcoEye size={22} /></span>
              <span className="tiny" style={{ letterSpacing: "0.14em", textTransform: "uppercase" }}>{QUOTES[0].tag}</span>
              <p>{QUOTES[0].text}</p>
              <div className="m-who"><b>{QUOTES[0].brand}</b><span>Vision + language, on device</span></div>
            </article>

            <article className="m-card m-quote reveal" data-od-id="inside-avatar">
              <span className="qmark"><IcoHand size={22} /></span>
              <span className="tiny" style={{ letterSpacing: "0.14em", textTransform: "uppercase" }}>{QUOTES[4].tag}</span>
              <p>{QUOTES[4].text}</p>
              <div className="m-who"><b>{QUOTES[4].brand}</b><span>Avatar, voice and chat</span></div>
            </article>
          </div>

          <div className="mcol">
            <article className="m-card m-quote reveal reveal-d1" data-od-id="inside-memory">
              <span className="qmark"><IcoBrain size={22} /></span>
              <span className="tiny" style={{ letterSpacing: "0.14em", textTransform: "uppercase" }}>{QUOTES[1].tag}</span>
              <p>{QUOTES[1].text}</p>
              <div className="m-head">
                <span className="m-avatar"><img src="assets/img/memechat-mascot.png" alt="" width={361} height={340} /></span>
                <div className="m-who" style={{ marginTop: 0 }}><b>{QUOTES[1].brand}</b><span>Private memory, on device</span></div>
              </div>
            </article>

            <article className="m-card m-quote reveal reveal-d2" data-od-id="inside-offline">
              <span className="qmark"><IcoCloudOff size={22} /></span>
              <span className="tiny" style={{ letterSpacing: "0.14em", textTransform: "uppercase" }}>{QUOTES[2].tag}</span>
              <p>{QUOTES[2].text}</p>
              <div className="m-head">
                <span className="m-avatar"><img src="assets/img/memechat-mascot.png" alt="" width={361} height={340} /></span>
                <div className="m-who" style={{ marginTop: 0 }}><b>{QUOTES[2].brand}</b><span>Airplane-mode ready</span></div>
              </div>
            </article>

            <article className="m-card m-quote reveal reveal-d3" data-od-id="inside-platforms">
              <span className="qmark"><IcoGlobe size={22} /></span>
              <span className="tiny" style={{ letterSpacing: "0.14em", textTransform: "uppercase" }}>{QUOTES[5].tag}</span>
              <p>{QUOTES[5].text}</p>
              <div className="m-who"><b>{QUOTES[5].brand}</b><span>Five platforms, one companion</span></div>
            </article>
          </div>

          <div className="mcol">
            <article className="m-card m-photo m-phone reveal reveal-d1" data-od-id="inside-memechat">
              <img src="assets/img/app-memechat-home.webp" width={695} height={1568}
                   alt="MemeChat AI home screen showing the assistant greeting the user" loading="lazy" />
              <div className="m-photo-body">
                <span className="m-badge"><IcoChat size={14} /> MemeChat AI · Android</span>
                <h3 className="h3">Meme Smarter, Not Harder</h3>
                <p className="small">Ask, roast, caption, translate — a vision-language model that runs entirely on your phone.</p>
              </div>
            </article>

            <article className="m-card m-quote reveal reveal-d2" data-od-id="inside-sources">
              <span className="qmark"><IcoRoute size={22} /></span>
              <span className="tiny" style={{ letterSpacing: "0.14em", textTransform: "uppercase" }}>{QUOTES[3].tag}</span>
              <p>{QUOTES[3].text}</p>
              <div className="m-head">
                <span className="m-avatar"><img src="assets/img/app-zeta-portrait.jpg" alt="" width={188} height={338} /></span>
                <div className="m-who" style={{ marginTop: 0 }}><b>ZetaAI</b><span>Retrieval, sourced and stored nowhere</span></div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
