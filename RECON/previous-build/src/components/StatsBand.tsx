export function StatsBand() {
  const group = (
    <div className="band-group" aria-hidden="true">
      <span className="band-num">100%</span><span className="band-label">on-device</span>
      <span className="band-pill"><img src="assets/img/studio-meeting.jpg" alt="" width={1200} height={800} /></span>
      <span className="band-num">3</span><span className="band-label">apps shipped</span>
      <span className="band-num">0</span><span className="band-label">uploads</span>
      <span className="band-pill"><img src="assets/img/batik-women.jpg" alt="" width={800} height={1014} /></span>
      <span className="band-num">504</span><span className="band-label">MB model</span>
    </div>
  );
  return (
    <div className="band" data-od-id="stats-band">
      <div className="band-track">{group}{group}</div>
      <p className="sr">100% on-device, 3 apps shipped, 0 uploads, the largest model is 504 MB.</p>
    </div>
  );
}
