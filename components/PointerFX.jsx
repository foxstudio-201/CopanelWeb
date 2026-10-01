'use client'

import { useEffect } from 'react'

/**
 * Pointer-driven effects:
 *  - soft violet spotlight in the hero (--mx/--my on .hero-bg)
 *  - border bloom on cards / faq rows / gallery stage (--bx/--by per element)
 */
export default function PointerFX() {
  useEffect(() => {
    const BLOOM = '.card, .dl-card, .faq-item, .stage'
    const hero = document.querySelector('.hero')
    const bg = document.querySelector('.hero-bg')
    let raf = 0
    let evt = null

    const apply = () => {
      raf = 0
      if (!evt) return
      if (hero && bg) {
        const r = hero.getBoundingClientRect()
        bg.style.setProperty('--mx', (((evt.clientX - r.left) / r.width) * 100).toFixed(1) + '%')
        bg.style.setProperty('--my', (((evt.clientY - r.top) / r.height) * 100).toFixed(1) + '%')
      }
      const el = evt.target.closest ? evt.target.closest(BLOOM) : null
      if (el) {
        const r = el.getBoundingClientRect()
        el.style.setProperty('--bx', (((evt.clientX - r.left) / r.width) * 100).toFixed(1) + '%')
        el.style.setProperty('--by', (((evt.clientY - r.top) / r.height) * 100).toFixed(1) + '%')
      }
    }
    const onMove = (e) => {
      evt = e
      if (!raf) raf = requestAnimationFrame(apply)
    }
    document.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      document.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return null
}
