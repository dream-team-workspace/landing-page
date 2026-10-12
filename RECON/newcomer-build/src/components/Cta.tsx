import { APPS, HERO_AVATARS } from "../content";
import { IcoArrowR } from "./Icons";
import { Phone } from "./Phone";

export function Cta() {
  return (
    <section className="sec" id="download" data-od-id="download">
      <div className="wrap">
        <div className="cta-card reveal">
          <div className="cta-copy">
            <h2 className="h2" data-od-id="download-title">Start with any of them.</h2>
            <p className="lede" style={{ maxWidth: 420 }}>
              All three apps are free to download — no account, no ads, and the model runs on your phone.
            </p>
            <div className="cta-actions">
              {APPS.map((a) => (
                <a className="btn btn-outline" key={a.id} href={a.url} target="_blank" rel="noopener noreferrer"
                   data-od-id={"download-" + a.id}>
                  {a.name} <IcoArrowR size={15} />
                </a>
              ))}
            </div>
            <div className="avatars">
              <span className="avatar-stack" aria-hidden="true">
                {HERO_AVATARS.map((a, i) => (
                  <span className="avatar" key={a.src + i}><img src={a.src} alt="" width={56} height={56} /></span>
                ))}
              </span>
              <span className="small">Free · No account · Android &amp; iOS</span>
            </div>
          </div>
          <Phone src="assets/img/app-memechat-chat.webp" alt="MemeChat AI chat screen" />
        </div>
      </div>
    </section>
  );
}
