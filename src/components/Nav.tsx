import { useEffect, useState, type MouseEvent } from "react";
import { NAV_ITEMS } from "../content";
import { IcoClose, IcoMenu, IcoSpark } from "./Icons";
import { onAnchorClick, scrollToTop } from "../anchors";
import { useStickyNav } from "../hooks";

export function Nav() {
  const solid = useStickyNav();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const jump = (e: MouseEvent, id: string) => { setOpen(false); onAnchorClick(e, id); };

  return (
    <>
      <header className={"nav" + (solid ? " nav-solid" : "")} data-od-id="site-nav">
        <div className="nav-shell">
          <a className="brand" href="#home" data-od-id="nav-brand" onClick={scrollToTop}>
            <span className="brand-mark"><IcoSpark size={16} /></span>
            <span className="brand-name">Dream Team</span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            {NAV_ITEMS.slice(0, 5).map((i) => (
              <a key={i.id} className="nav-link" href={"#" + i.id} data-od-id={"nav-" + i.id}
                 onClick={(e) => onAnchorClick(e, i.id)}>{i.label}</a>
            ))}
          </nav>
          <button className="btn btn-quiet nav-toggle" data-od-id="nav-menu-toggle"
                  aria-expanded={open} aria-controls="menu-sheet" onClick={() => setOpen(true)}>
            <IcoMenu size={17} /> Menu
          </button>
          <a className="btn btn-primary" href="#download" data-od-id="nav-cta" onClick={(e) => onAnchorClick(e, "download")}>
            Get the apps
          </a>
        </div>
      </header>

      <div id="menu-sheet" className={"menu-sheet" + (open ? " open" : "")} role="dialog" aria-modal="true"
           aria-label="Site menu" onClick={() => setOpen(false)}>
        <div className="menu-card" onClick={(e) => e.stopPropagation()}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 8px 12px" }}>
            <span className="tiny" style={{ letterSpacing: "0.18em", textTransform: "uppercase" }}>Menu</span>
            <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Close menu"><IcoClose size={17} /></button>
          </div>
          {NAV_ITEMS.map((i) => (
            <button key={i.id} className="menu-item" data-od-id={"menu-" + i.id} onClick={(e) => jump(e, i.id)}>
              {i.label} <span>{i.n}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
