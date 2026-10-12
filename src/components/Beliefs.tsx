import { PRINCIPLES } from "../content";
import { IcoArrowL, IcoArrowR } from "./Icons";
import { useScroller } from "../hooks";

export function Beliefs() {
  const { ref, page, pages, go } = useScroller("dt.belief.index");
  const pct = ((page + 1) / pages) * 100;

  return (
    <section className="sec" data-od-id="beliefs">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-badge"><b>009</b><i />Studio</span>
          <h2 className="h2" data-od-id="beliefs-title">What We Believe</h2>
          <p className="lede">Four rules that decide what we build, what we drop, and what we refuse to ship.</p>
        </div>

        <div className="principles" role="group" aria-roledescription="carousel" aria-label="Studio principles">
          <div className="p-track" ref={ref}>
            {PRINCIPLES.map((p) => (
              <article className="p-card" key={p.id} data-od-id={p.id}>
                <span className="n">{p.n}</span>
                <span className="p-ring" aria-hidden="true" />
                <div>
                  <h3 className="h3">{p.title}</h3>
                  <p className="small" style={{ marginTop: 8 }}>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="p-foot">
          <div className="p-bar" aria-hidden="true"><i style={{ width: pct + "%" }} /></div>
          <span className="tiny">{String(page + 1).padStart(2, "0")} / {String(pages).padStart(2, "0")}</span>
          <div className="carousel-nav">
            <button className="icon-btn" onClick={() => go(-1)} disabled={page === 0} aria-label="Previous principle" data-od-id="belief-prev"><IcoArrowL size={17} /></button>
            <button className="icon-btn" onClick={() => go(1)} disabled={page >= pages - 1} aria-label="Next principle" data-od-id="belief-next"><IcoArrowR size={17} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
