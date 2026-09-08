import { useEffect, useCallback, useState } from 'react'
import { galleryImages } from '../data.js'

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null

  const close = useCallback(() => setActiveIndex(null), [])
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length),
    []
  )
  const showNext = useCallback(
    () => setActiveIndex((i) => (i + 1) % galleryImages.length),
    []
  )

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, close, showPrev, showNext])

  return (
    <section className="gallery" id="gallery">
      <div className="section">
        <p className="eyebrow">02 &mdash; Gallery</p>
        <h2 className="gallery__title">Around the property</h2>

        <div className="gallery__grid">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              className="gallery__thumb"
              onClick={() => setActiveIndex(i)}
              aria-label={`Open image: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={close}
        >
          <button className="lightbox__close" onClick={close} aria-label="Close image viewer">
            &times;
          </button>

          <button
            className="lightbox__arrow lightbox__arrow--prev"
            onClick={(e) => { e.stopPropagation(); showPrev() }}
            aria-label="Previous image"
          >
            &#8249;
          </button>

          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={galleryImages[activeIndex].src} alt={galleryImages[activeIndex].alt} />
            <figcaption>
              {galleryImages[activeIndex].alt}
              <span className="lightbox__count">
                {activeIndex + 1} / {galleryImages.length}
              </span>
            </figcaption>
          </figure>

          <button
            className="lightbox__arrow lightbox__arrow--next"
            onClick={(e) => { e.stopPropagation(); showNext() }}
            aria-label="Next image"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  )
}
