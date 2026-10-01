'use client'

import { useEffect } from 'react'

/** Adds `.in` to every `.reveal` element as it scrolls into view (and removes it
 *  again once fully out of view, so scrolling back replays the animation). */
export default function Reveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))
    if ('IntersectionObserver' in window) {
      const byParent = new Map()
      els.forEach((el) => {
        const arr = byParent.get(el.parentElement) || []
        arr.push(el)
        byParent.set(el.parentElement, arr)
      })
      byParent.forEach((arr) => arr.forEach((el, i) => el.style.setProperty('--d', i * 70 + 'ms')))

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            en.target.classList.toggle('in', en.isIntersecting)
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -36px 0px' }
      )
      els.forEach((el) => io.observe(el))
      return () => io.disconnect()
    }
    els.forEach((el) => el.classList.add('in'))
  }, [])

  return null
}
