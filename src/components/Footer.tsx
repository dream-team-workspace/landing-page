import { IcoArrowR, IcoGlobe, IcoSpark } from "./Icons";
import { onAnchorClick, scrollToTop } from "../anchors";

export function Footer() {
  const cols = [
    { label: "MemeChat AI", href: "https://memechat.dream-team.works" },
    { label: "Zeta AI Assistant", href: "https://zeta.dream-team.works" },
    { label: "CoBatik", href: "https://cobatik.dream-team.works" }
  ];

  const links: [string, string][] = [
    ["studio", "Studio"], ["apps", "Capabilities"], ["work", "Work"], ["process", "Process"],
    ["download", "Download"], ["faq", "FAQ"], ["contact", "Contact"],
  ];

  return (
    <footer className="footer" data-od-id="footer">
      <div className="footer-veil" aria-hidden="true" />
      <div className="wrap footer-inner">
        <div className="footer-top">
          {cols.map((c) => (
            <a className="social" key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" data-od-id={"footer-" + c.label.replace(/\s+/g, "-").toLowerCase()}>
              <i><IcoSpark size={16} /></i>
              <span style={{ flex: 1 }}>{c.label}</span>
              <IcoArrowR size={16} />
            </a>
          ))}
          <a className="social" href="https://dream-team.works" target="_blank" rel="noopener noreferrer" data-od-id="footer-studio">
            <i><IcoGlobe size={16} /></i>
            <span style={{ flex: 1 }}>dream-team.works</span>
            <IcoArrowR size={16} />
          </a>
        </div>

        <div className="footer-links">
          {links.map(([id, label]) => (
            <a key={id} href={"#" + id} onClick={(e) => onAnchorClick(e, id)}>{label}</a>
          ))}
        </div>

        <div className="wordmark" aria-hidden="true">Dream Team</div>

        <div className="footer-bottom">
          <span className="small">© Dream Team 2026</span>
          <a className="small" href="#home" onClick={scrollToTop}>Back to top</a>
        </div>
      </div>
    </footer>
  );
}
