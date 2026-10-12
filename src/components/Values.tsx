import { VALUES } from "../content";

export function Values() {
  return (
    <section className="sec" id="values" data-od-id="values">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-badge"><b>002</b><i />Value</span>
          <h2 className="h2" data-od-id="values-title">Why Dream Team?</h2>
          <p className="lede">We build mobile-specific, AI-powered applications that keep working when the network does not.</p>
        </div>
        <div className="grid-3" style={{ marginTop: 48 }}>
          {VALUES.map((v, i) => (
            <article className={"value-card reveal reveal-d" + i} key={v.n} data-od-id={"value-card-" + v.n}>
              <div className="value-tile">
                <span className="value-orb">{v.icon}</span>
                <span className="value-num">{v.n}</span>
              </div>
              <div className="value-body">
                <h3 className="h3">{v.title}</h3>
                <p className="small">{v.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
