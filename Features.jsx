import { features } from '../data.js'

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="section">
        <p className="eyebrow">03 &mdash; Features</p>
        <h2 className="features__title">What stays with the house</h2>

        <div className="features__grid">
          {features.map((f) => (
            <article className="features__card" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
