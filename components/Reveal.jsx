'use client'

import { useEffect } from 'react'

/** Adds `.in` to every `.reveal` element as it scrolls into view. */
export default function Reveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
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
            if (en.isIntersecting) {
              en.target.classList.add('in')
              io.unobserve(en.target)
            }
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
