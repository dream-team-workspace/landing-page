import { useState } from "react";
import { FAQS } from "../content";
import { IcoArrowR, IcoPlus } from "./Icons";
import { onAnchorClick } from "../anchors";

export function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="sec" id="faq" data-od-id="faq">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-badge"><b>010</b><i />FAQs</span>
          <h2 className="h2" data-od-id="faq-title">Common Questions</h2>
        </div>

        <div className="faq-list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={"faq-item" + (isOpen ? " open" : "")} key={f.q} data-od-id={"faq-" + (i + 1)}>
                <button className="faq-q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span className="faq-n">{i + 1}</span>
                  <span className="h4">{f.q}</span>
                  <span className="faq-sign"><IcoPlus size={16} /></span>
                </button>
                <div className="faq-a"><div><p>{f.a}</p></div></div>
              </div>
            );
          })}
        </div>

        <div className="faq-more reveal">
          <p className="small">Have any other questions?</p>
          <a className="btn btn-quiet" href="#contact" data-od-id="faq-contact" onClick={(e) => onAnchorClick(e, "contact")}>
            Contact us <IcoArrowR size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
