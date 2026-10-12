import { HERO_AVATARS } from "../content";
import { Phone } from "./Phone";
import { onAnchorClick } from "../anchors";

export function Hero() {
  return (
    <section className="hero" id="top" data-od-id="hero">
      <div className="wrap">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="display reveal" data-od-id="hero-title">Intelligent in your hand</h1>
            <p className="lede hero-sub reveal reveal-d1" data-od-id="hero-sub">
              We build mobile-specific, AI-powered applications that run on your device —
              private, fast and always with you.
            </p>
            <div className="hero-cta reveal reveal-d2">
              <a className="btn btn-dark" href="#download" data-od-id="hero-cta"
                 onClick={(e) => onAnchorClick(e, "download")}>Get the apps</a>
            </div>
            <div className="avatars reveal reveal-d3" data-od-id="hero-proof">
              <span className="avatar-stack" aria-hidden="true">
                {HERO_AVATARS.map((a, i) => (
                  <span className="avatar" key={a.src + i}><img src={a.src} alt="" width={56} height={56} /></span>
                ))}
              </span>
              <span className="small">Three apps, all shipping today</span>
            </div>
          </div>
          <div className="hero-media reveal reveal-d1">
            <Phone src="assets/img/app-memechat-home.webp" alt="MemeChat AI home screen" tilt />
          </div>
        </div>
      </div>
    </section>
  );
}
