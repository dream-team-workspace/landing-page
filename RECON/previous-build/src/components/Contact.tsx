import { useState, type ChangeEvent, type FormEvent } from "react";
import { IcoArrowR, IcoCheck, IcoSpark } from "./Icons";

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", company: "", brief: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof values) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) next.email = "Please add a valid email address.";
    if (values.brief.trim().length < 12) next.brief = "Tell us a little more — a sentence is enough.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  return (
    <section className="sec contact-sec" id="contact" data-od-id="contact">
      <div className="contact-veil" aria-hidden="true" />
      <div className="wrap" style={{ position: "relative" }}>
        <div className="contact-card reveal">
          <span className="contact-orb"><IcoSpark size={26} /></span>
          <div>
            <h2 className="h2" style={{ fontSize: "clamp(28px, 3.4vw, 44px)" }} data-od-id="contact-title">
              Your next app should<br />run on the phone.
            </h2>
            <p className="small" style={{ marginTop: 14, maxWidth: 420, marginLeft: "auto", marginRight: "auto" }}>
              Tell us what the model needs to do. We will tell you what fits on a device.
            </p>
          </div>

          {sent ? (
            <div className="form-ok" role="status" data-od-id="contact-success">
              <IcoCheck size={22} />
              <h3 className="h4">That is in.</h3>
              <p className="small" style={{ margin: 0 }}>Thanks {values.name.split(" ")[0] || "there"} — we will reply from the studio within two working days.</p>
            </div>
          ) : (
            <form className="form" onSubmit={submit} noValidate>
              <div className="field">
                <label className="sr" htmlFor="f-name">Your name</label>
                <input id="f-name" placeholder="Your name*" value={values.name} onChange={set("name")}
                       aria-invalid={!!errors.name} data-od-id="field-name" />
                {errors.name ? <span className="field-err">{errors.name}</span> : null}
              </div>
              <div className="field">
                <label className="sr" htmlFor="f-email">Your email</label>
                <input id="f-email" type="email" placeholder="Your email*" value={values.email} onChange={set("email")}
                       aria-invalid={!!errors.email} data-od-id="field-email" />
                {errors.email ? <span className="field-err">{errors.email}</span> : null}
              </div>
              <div className="field">
                <label className="sr" htmlFor="f-company">Company</label>
                <input id="f-company" placeholder="Company" value={values.company} onChange={set("company")} data-od-id="field-company" />
              </div>
              <div className="field">
                <label className="sr" htmlFor="f-brief">What should the app do?</label>
                <textarea id="f-brief" placeholder="What should the app do?*" value={values.brief} onChange={set("brief")}
                          aria-invalid={!!errors.brief} data-od-id="field-brief" />
                {errors.brief ? <span className="field-err">{errors.brief}</span> : null}
              </div>
              <button className="btn btn-primary" type="submit" data-od-id="contact-submit">
                Send your request <IcoArrowR size={16} />
              </button>
              <p className="form-note">We read every message ourselves. No sales sequence, no drip campaign.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
