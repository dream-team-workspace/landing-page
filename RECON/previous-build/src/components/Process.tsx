import { STEPS } from "../content";
import { IcoChip, IcoCompass, IcoEye, IcoGrid, IcoSpark } from "./Icons";

const STEP_ICONS = [<IcoCompass size={22} />, <IcoGrid size={22} />, <IcoChip size={22} />, <IcoEye size={22} />, <IcoSpark size={22} />];

export function Process() {
  return (
    <section className="sec" id="process" data-od-id="process">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-badge"><b>004</b><i />Process</span>
          <h2 className="h2" data-od-id="process-title">How We Work</h2>
          <p className="lede">A five-step loop for getting a model off the server and onto a phone.</p>
        </div>

        <div className="steps">
          <div className="steps-rail" aria-hidden="true" />
          {STEPS.map((s, i) => {
            const on = i === 0;
            const left = i % 2 === 0;
            const card = (
              <div className={"step-card" + (left ? "" : " step-right") + (on ? " on" : "")}>
                <span className="step-node">{STEP_ICONS[i]}</span>
                <div style={{ textAlign: left ? "left" : "right" }}>
                  <h3 className="h4">{s.title}</h3>
                  <p className="small" style={{ marginTop: 4 }}>{s.text}</p>
                </div>
              </div>
            );
            return (
              <div className="step" key={s.n} data-od-id={"step-" + s.n}>
                {left ? card : <div className="step-empty" />}
                <div className={"step-dot" + (on ? " on" : "")} aria-hidden="true"><i /></div>
                {left ? <div className="step-empty" /> : card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
