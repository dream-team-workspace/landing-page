import { QUOTES } from "../content";
import { IcoArrowR } from "./Icons";
import { onAnchorClick } from "../anchors";

export function Inside() {
  return (
    <section className="sec" id="inside" data-od-id="inside">
      <div className="wrap">
        <div className="inside-grid">
          <div className="inside-copy reveal">
            <h2 className="h2" data-od-id="inside-title">Inside the apps</h2>
            <p className="lede" style={{ maxWidth: 400 }}>
              The parts you notice on day one — and the parts you keep relying on in month six.
            </p>
            <a className="sec-link" href="#download" data-od-id="inside-link" onClick={(e) => onAnchorClick(e, "download")}>
              Get the apps <IcoArrowR size={15} />
            </a>
          </div>
          <div className="quote-stack reveal reveal-d1">
            {QUOTES.map((q) => (
              <a className="quote-card" key={q.id} href={q.url} target="_blank" rel="noopener noreferrer" data-od-id={q.id}>
                <div className="quote-head">
                  <span className="quote-avatar"><img src={q.avatar} alt="" width={88} height={88} /></span>
                  <div>
                    <p className="quote-name">{q.name}</p>
                    <p className="quote-handle">{q.handle}</p>
                  </div>
                  <span className="quote-arrow"><IcoArrowR size={16} /></span>
                </div>
                <p className="lede quote-text">{q.text}</p>
                <p className="quote-meta">{q.meta}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
