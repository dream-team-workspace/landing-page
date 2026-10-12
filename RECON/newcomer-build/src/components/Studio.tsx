import { PRINCIPLES } from "../content";
import { IcoArrowR } from "./Icons";
import { onAnchorClick } from "../anchors";

export function Studio() {
  const group = (hidden: boolean) => (
    <div className="ticker-group" aria-hidden={hidden || undefined}>
      {PRINCIPLES.map((p) => (
        <article className="update-card" key={p.n} data-od-id={"studio-card-" + p.n}>
          <span className="update-badge"><span className="update-dot" />{p.n}</span>
          <p className="small update-meta">{p.meta}</p>
          <div className="update-body">
            <h3 className="h3-corm">{p.title}</h3>
            <p className="lede">{p.text}</p>
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <section className="sec" id="studio" data-od-id="studio">
      <div className="wrap">
        <div className="sec-head sec-head-center reveal">
          <h2 className="h2" data-od-id="studio-title">How we build</h2>
          <p className="lede">Four rules that decide what we ship — and what we leave out.</p>
        </div>
      </div>
      <div className="ticker reveal" data-od-id="studio-ticker">
        <div className="ticker-track">{group(false)}{group(true)}</div>
      </div>
      <div className="wrap">
        <div className="sec-foot">
          <a className="sec-link" href="#apps" data-od-id="studio-link" onClick={(e) => onAnchorClick(e, "apps")}>
            See the apps <IcoArrowR size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
