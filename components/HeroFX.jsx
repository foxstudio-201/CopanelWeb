'use client'

import { useEffect } from 'react'

/** Soft violet spotlight in the hero that follows the cursor. */
export default function HeroFX() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const hero = document.querySelector('.hero')
    const bg = document.querySelector('.hero-bg')
    if (!hero || !bg) return
    let raf = 0
    const onMove = (e) => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const r = hero.getBoundingClientRect()
        bg.style.setProperty('--mx', (((e.clientX - r.left) / r.width) * 100).toFixed(1) + '%')
        bg.style.setProperty('--my', (((e.clientY - r.top) / r.height) * 100).toFixed(1) + '%')
      })
    }
    hero.addEventListener('mousemove', onMove)
    return () => {
      hero.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return null
}
