import { useEffect, useRef } from "react";
import { IcoArrowR, IcoChip, IcoDevice, IcoKey, IcoSpark } from "./Icons";
import { onAnchorClick } from "../anchors";

function Platforms() {
  const words = ["Android", "iOS", "On-device", "Offline-first", "No account", "Private by default", "Local-friendly"];
  const group = (
    <div className="platforms-group" aria-hidden="true">
      {words.map((w, i) => <span className="platform" key={w + i}>{w}</span>)}
    </div>
  );
  return (
    <div className="platforms" data-od-id="hero-platforms">
      <div className="platforms-track">{group}{group}</div>
    </div>
  );
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const played = v.play();
    if (played && typeof played.catch === "function") played.catch(() => {});
  }, []);

  return (
    <section className="hero" id="home" data-od-id="hero">
      <div className="hero-media" aria-hidden="true">
        <video ref={videoRef} src="assets/media/hero-blob.mp4" autoPlay loop muted playsInline preload="metadata" />
      </div>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-frame" aria-hidden="true" />

      <div className="hero-inner">
        <span className="badge reveal"><IcoSpark size={13} /> Mobile AI Studio</span>
        <h1 className="display reveal reveal-d1" data-od-id="hero-title">
          Intelligent{" "}<br /><span className="gradient-text">in your hand</span>
        </h1>
        <p className="lede reveal reveal-d2" data-od-id="hero-sub">
          We build mobile-specific, AI-powered applications that run on your device —
          private, fast, and always with you.
        </p>
        <div className="hero-cta reveal reveal-d3">
          <a className="btn btn-light" href="#download" data-od-id="hero-cta-primary" onClick={(e) => onAnchorClick(e, "download")}>
            Explore the apps <IcoArrowR size={16} />
          </a>
          <a className="btn btn-glass" href="#contact" data-od-id="hero-cta-secondary" onClick={(e) => onAnchorClick(e, "contact")}>
            Work with us
          </a>
        </div>
        <div className="hero-meta reveal reveal-d3">
          <span><IcoDevice size={15} /> Android &amp; iOS</span>
          <span><IcoChip size={15} /> Models on the device</span>
          <span><IcoKey size={15} /> No account</span>
        </div>
      </div>

      <div className="hero-foot">
        <Platforms />
        <div className="scroll-cue" aria-hidden="true"><span>Scroll</span><i /></div>
      </div>
    </section>
  );
}
