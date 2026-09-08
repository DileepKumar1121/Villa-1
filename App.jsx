import Hero from './components/Hero.jsx'
import SpecStrip from './components/SpecStrip.jsx'
import Story from './components/Story.jsx'
import Gallery from './components/Gallery.jsx'
import Features from './components/Features.jsx'
import Location from './components/Location.jsx'
import InquiryForm from './components/InquiryForm.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Hero />
      <SpecStrip />
      <Story />
      <Gallery />
      <Features />
      <Location />

      <section className="inquiry" id="inquire">
        <div className="section inquiry__grid">
          <div>
            <p className="eyebrow">05 &mdash; Enquire</p>
            <h2 className="inquiry__title">Arrange a viewing</h2>
            <p className="inquiry__lead">
              Viewings are by appointment, arranged directly with the listing agent.
              Tell us a little about your timeline and we'll follow up within one
              business day.
            </p>
          </div>
          <InquiryForm />
        </div>
      </section>

      <Footer />
    </div>
  )
}
