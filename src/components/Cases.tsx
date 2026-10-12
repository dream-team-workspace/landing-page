import { CASES } from "../content";
import { IcoArrowL, IcoArrowR, IcoSpark } from "./Icons";
import { useScroller } from "../hooks";

export function Cases() {
  const { ref, page, pages, go } = useScroller("dt.case.index");

  return (
    <section className="sec" id="work" data-od-id="cases">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-badge"><b>005</b><i />Case studies</span>
          <h2 className="h2" data-od-id="cases-title">What We’ve Built</h2>
          <p className="lede">Three products, all shipped, all three running on the device in your pocket.</p>
        </div>

        <div className="carousel" role="group" aria-roledescription="carousel" aria-label="Case studies">
          <div className="track" ref={ref}>
            {CASES.map((c) => (
              <div className="slide" key={c.id} data-od-id={c.id}>
                <article className="case">
                  <div className="case-visual">
                    <img src={c.art} width={762} height={720} alt={c.alt} loading="lazy" />
                    <span className="case-brand"><span className="mark"><IcoSpark size={13} /></span>{c.brand}</span>
                  </div>
                  <div className="case-body">
                    <h3 className="h2" style={{ fontSize: "clamp(26px, 2.9vw, 42px)" }}>{c.title}</h3>
                    <p className="lede">{c.body}</p>
                    <div className="case-metrics">
                      {c.metrics.map((m) => (
                        <div className="case-metric" key={m[1]}><b>{m[0]}</b><span>{m[1]}</span></div>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="case-foot">
          <div className="dots" role="tablist" aria-label="Choose a case study">
            {CASES.map((c, i) => (
              <button key={c.id} role="tab" aria-selected={i === page} aria-label={c.brand}
                      className={i === page ? "on" : ""} onClick={() => go(i - page)} />
            ))}
          </div>
          <div className="carousel-nav">
            <button className="icon-btn" onClick={() => go(-1)} disabled={page === 0} aria-label="Previous case study" data-od-id="case-prev"><IcoArrowL size={17} /></button>
            <button className="icon-btn" onClick={() => go(1)} disabled={page >= pages - 1} aria-label="Next case study" data-od-id="case-next"><IcoArrowR size={17} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
