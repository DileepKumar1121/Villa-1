import { specs } from '../data.js'

export default function SpecStrip() {
  return (
    <section className="spec-strip" aria-label="Property specifications">
      <div className="spec-strip__inner">
        {specs.map((spec) => (
          <div className="spec-strip__item" key={spec.label}>
            <span className="spec-strip__label">{spec.label}</span>
            <span className="spec-strip__leader" aria-hidden="true" />
            <span className="spec-strip__value">{spec.value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
