/** CSS device frame around an app screenshot — the reference site uses
 *  pre-rendered device images; this keeps every screen in one frame style. */
export function Phone({
  src,
  alt,
  tilt = false,
}: {
  src: string;
  alt: string;
  tilt?: boolean;
}) {
  return (
    <div className={"phone" + (tilt ? " phone-tilt" : "")}>
      <div className="phone-screen">
        <img src={src} alt={alt} loading="lazy" />
      </div>
    </div>
  );
}
