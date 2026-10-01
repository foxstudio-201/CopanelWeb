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
        const fx = (evt.clientX - r.left) / r.width
        const fy = (evt.clientY - r.top) / r.height
        bg.style.setProperty('--mx', (fx * 100).toFixed(1) + '%')
        bg.style.setProperty('--my', (fy * 100).toFixed(1) + '%')
        // gentle parallax of the app window + chips while the pointer is around the hero
        const inside = evt.clientY >= r.top - 140 && evt.clientY <= r.bottom + 140
        const cx = inside ? Math.max(-0.6, Math.min(0.6, fx - 0.5)) : 0
        const cy = inside ? Math.max(-0.6, Math.min(0.6, fy - 0.5)) : 0
        hero.style.setProperty('--wx', (cx * 16).toFixed(1) + 'px')
        hero.style.setProperty('--wy', (cy * 11).toFixed(1) + 'px')
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
