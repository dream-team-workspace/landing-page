import { Phone } from "./Phone";

export function Features() {
  return (
    <section className="sec" id="apps" data-od-id="features">
      <div className="wrap">
        <div className="cards">

          <article className="card card-hero reveal" data-od-id="feature-on-device">
            <h2 className="h3" data-od-id="feature-on-device-title">Everything runs on the device</h2>
            <p className="lede">Vision, text and speech models running locally — no round-trip, no queue, no metered data.</p>
            <div className="crop">
              <Phone src="assets/img/app-memechat-chat.webp" alt="MemeChat AI chat screen" />
            </div>
          </article>

          <div className="duo">
            <article className="card reveal" data-od-id="feature-memechat">
              <div className="crop crop-top">
                <Phone src="assets/img/app-memechat-home.webp" alt="MemeChat AI home screen" />
              </div>
              <div className="duo-copy">
                <h3 className="h3" data-od-id="feature-memechat-title">Meme Smarter, Not Harder</h3>
                <p className="lede">Ask, roast, caption and translate — a vision-language model that runs entirely on your phone.</p>
              </div>
            </article>

            <article className="card reveal reveal-d1" data-od-id="feature-zeta">
              <div className="duo-copy">
                <h3 className="h3" data-od-id="feature-zeta-title">Your offline companion</h3>
                <p className="lede">Chat, voice and an interactive avatar that keep working when the network does not.</p>
              </div>
              <div className="crop">
                <Phone src="assets/img/app-zeta-portrait.jpg" alt="Zeta AI Assistant avatar" />
              </div>
            </article>
          </div>

          <article className="card card-wide reveal" data-od-id="feature-cobatik">
            <div className="crop">
              <Phone src="assets/img/app-cobatik-screen.webp" alt="CoBatik virtual try-on screen" />
            </div>
            <div className="card-copy">
              <h3 className="h3" data-od-id="feature-cobatik-title">Kenakan arsipnya.</h3>
              <p className="lede">A batik virtual try-on studio with a real archive of hand-drawn cloth from Cirebon, Yogyakarta, Pekalongan and Lasem.</p>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
