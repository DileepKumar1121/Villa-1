export default function Hero() {
  const scrollToInquiry = () => {
    document.getElementById('inquire')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="hero">
      <div className="hero__image" role="img" aria-label="Villa Aurelio at dusk, viewed from the olive terrace">
        <img src="https://picsum.photos/seed/villa-hero/1800/1400" alt="" />
      </div>

      <nav className="hero__nav">
        <span className="hero__mark">Villa Aurelio</span>
        <div className="hero__nav-links">
          <a href="#story">The Estate</a>
          <a href="#gallery">Gallery</a>
          <a href="#features">Features</a>
          <a href="#location">Location</a>
          <button className="hero__nav-cta" onClick={scrollToInquiry}>Enquire</button>
        </div>
      </nav>

      <div className="hero__content">
        <p className="eyebrow hero__eyebrow">For sale &mdash; Ligurian coast, Italy</p>
        <h1 className="hero__title">Villa Aurelio</h1>
        <p className="hero__sub">
          Six bedrooms, a working olive grove, and a private mooring, held on a single
          clifftop parcel above the Golfo Paradiso since 1932.
        </p>
        <button className="hero__cta" onClick={scrollToInquiry}>Request a viewing</button>
      </div>

      <svg className="hero__plan" viewBox="0 0 300 120" aria-hidden="true">
        <polyline points="10,100 10,40 70,40 70,10 160,10 160,55 220,55 220,90 290,90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
      </svg>
    </header>
  )
}
