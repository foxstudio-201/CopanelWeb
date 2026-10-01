'use client'

import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'

const LINKS = [
  ['#tinh-nang', 'Tính năng'],
  ['#kho-do', 'Kho đồ'],
  ['#giao-dien', 'Giao diện'],
  ['#ho-tro', 'Hỗ trợ panel'],
  ['#faq', 'FAQ'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const progressRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const sections = LINKS.map(([href]) => document.querySelector(href)).filter(Boolean)
    const extras = [document.getElementById('top'), document.getElementById('tai-ve')].filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return
          if (extras.includes(en.target)) {
            setActive('')
            return
          }
          setActive('#' + en.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.concat(extras).forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const toggleTheme = () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('copanel-web-theme', next)
    } catch {
      /* private mode */
    }
  }

  return (
    <header className={'nav' + (scrolled ? ' scrolled' : '')} id="nav">
      <div className="nav-progress" ref={progressRef} />
      <div className="container nav-inner">
        <a className="brand" href="#top" aria-label="CoPanel — về đầu trang">
          <img src="/img/logo.png" alt="" width="34" height="34" />
          <span>CoPanel</span>
        </a>
        <nav className="nav-links" aria-label="Điều hướng chính">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} className={active === href ? 'is-active' : undefined}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" type="button" aria-label="Đổi giao diện sáng / tối" onClick={toggleTheme}>
            <Icon name="moon" className="ic theme-ic-moon" />
            <Icon name="sun" className="ic theme-ic-sun" />
          </button>
          <a className="btn btn-primary btn-sm nav-dl" href="#tai-ve">
            <Icon name="download" />
            Tải về
          </a>
          <button
            className="icon-btn burger"
            type="button"
            aria-label="Mở menu"
            aria-expanded={open}
            aria-controls="navMobile"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name="menu" className="ic burger-open" />
            <Icon name="close" className="ic burger-close" />
          </button>
        </div>
      </div>
      <div className="nav-mobile" id="navMobile" hidden={!open}>
        <nav aria-label="Điều hướng di động">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary" href="#tai-ve" onClick={() => setOpen(false)}>
          <Icon name="download" />
          Tải CoPanel
        </a>
      </div>
    </header>
  )
}
