import { APPS } from "../content";
import { scrollToTop } from "../anchors";

export function Footer() {
  return (
    <footer className="footer" data-od-id="footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#top" data-od-id="footer-brand" onClick={scrollToTop}>Dream Team</a>
        <nav className="footer-links" aria-label="Apps">
          {APPS.map((a) => (
            <a className="footer-link" key={a.id} href={a.url} target="_blank" rel="noopener noreferrer"
               data-od-id={"footer-" + a.id}>{a.name}</a>
          ))}
        </nav>
        <a className="footer-note" href="https://dream-team.works" target="_blank" rel="noopener noreferrer"
           data-od-id="footer-studio">dream-team.works</a>
      </div>
    </footer>
  );
}
