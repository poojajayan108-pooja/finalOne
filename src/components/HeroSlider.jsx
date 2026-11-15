import { useEffect, useState } from 'react'
import { heroSlides } from '../data.js'

// Full-bleed, auto-sliding photo background for the hero. Slides cross-fade
// with a slow zoom. A photo that fails to load is skipped silently, and the
// teal gradient behind it always shows through.
export default function HeroSlider() {
  const [i, setI] = useState(0)
  const [bad, setBad] = useState({})
  const good = heroSlides.filter((s) => !bad[s.src])

  useEffect(() => {
    if (good.length < 2) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setI((n) => n + 1), 5500)
    return () => clearInterval(id)
  }, [good.length])

  const current = good.length ? i % good.length : 0

  return (
    <div className="hero-slider" aria-hidden="true">
      {good.map((s, n) => (
        <img
          key={s.src}
          src={s.src}
          alt=""
          className={n === current ? 'on' : ''}
          referrerPolicy="no-referrer"
          loading={n === 0 ? 'eager' : 'lazy'}
          onError={() => setBad((b) => ({ ...b, [s.src]: true }))}
        />
      ))}
      <div className="hero-slider-shade" />
      {good.length > 1 && (
        <div className="hero-dots" aria-hidden="false">
          {good.map((s, n) => (
            <button key={s.src} className={n === current ? 'on' : ''} aria-label={`Show slide ${n + 1}`} onClick={() => setI(n)} />
          ))}
        </div>
      )}
    </div>
  )
}
