export default function Location() {
  return (
    <section className="location" id="location">
      <div className="section location__grid">
        <div>
          <p className="eyebrow" style={{ color: 'var(--brass-light)' }}>04 &mdash; Location</p>
          <h2 className="location__title">Golfo Paradiso, Liguria</h2>
          <p className="location__text">
            The estate sits above the fishing village of San Rocco, twelve minutes by
            car from Camogli and forty minutes from Genoa's airport. The nearest deep-water
            marina is a short boat ride along the coast.
          </p>
          <ul className="location__list">
            <li><span>Camogli town centre</span><span>12 min drive</span></li>
            <li><span>Genoa Cristoforo Colombo Airport</span><span>40 min drive</span></li>
            <li><span>Portofino</span><span>25 min by boat</span></li>
          </ul>
        </div>
        <div className="location__map" aria-hidden="true">
          <svg viewBox="0 0 200 200">
            <path d="M10,140 Q50,100 40,60 Q80,40 100,10 Q140,40 160,20 Q190,60 180,110 Q160,160 110,180 Q60,190 10,140 Z"
              fill="none" stroke="var(--brass-light)" strokeWidth="1" strokeDasharray="2 5" />
            <circle cx="120" cy="70" r="4" fill="var(--brass-light)" />
            <text x="130" y="74" fontFamily="IBM Plex Mono" fontSize="8" fill="var(--brass-light)">Villa Aurelio</text>
          </svg>
        </div>
      </div>
    </section>
  )
}
