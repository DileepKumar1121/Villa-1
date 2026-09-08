export default function Footer() {
  return (
    <footer className="footer">
      <div className="section footer__grid">
        <div>
          <span className="hero__mark hero__mark--light">Villa Aurelio</span>
          <p className="footer__address">Via dei Ulivi 14, San Rocco, 16032 Camogli GE, Italy</p>
        </div>
        <div className="footer__agent">
          <p className="eyebrow" style={{ color: 'var(--brass-light)' }}>Listing agent</p>
          <p>Elena Marchetti &mdash; Marchetti &amp; Rossi Real Estate</p>
          <p>+39 0185 555 0142 &nbsp;&middot;&nbsp; elena@marchettirossi.example</p>
        </div>
      </div>
      <p className="footer__fine">&copy; {new Date().getFullYear()} Villa Aurelio. Listing details subject to verification.</p>
    </footer>
  )
}
