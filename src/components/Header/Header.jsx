

import { useState, useEffect } from 'react'
import './Header.css'

const NAV_LINKS = [
  { label: 'Home',      href: '#home'      },
  { label: 'About',     href: '#about'     },
  { label: 'Services',  href: '#services'  },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact',   href: '#contact'   },
]

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeNav, setActiveNav] = useState('#home')

  /* Detect scroll for shadow & blur effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Track active section via IntersectionObserver */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveNav(`#${entry.target.id}`)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach(s => observer.observe(s))
    return () => sections.forEach(s => observer.unobserve(s))
  }, [])

  /* Close mobile menu on link click */
  const handleNavClick = (href) => {
    setActiveNav(href)
    setMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        {/* Logo */}
        <a href="#home" className="header__logo" onClick={() => handleNavClick('#home')}>
          PL<span>.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="header__nav">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`header__nav-link ${activeNav === link.href ? 'active' : ''}`}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA button */}
        <a href="#contact" className="btn btn-primary header__cta">
          Hire Me
        </a>

        {/* Hamburger toggle */}
        <button
          className={`header__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`header__mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={`header__mobile-link ${activeNav === link.href ? 'active' : ''}`}
            onClick={() => handleNavClick(link.href)}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary" style={{ marginTop: '1rem' }}
          onClick={() => setMenuOpen(false)}>
          Hire Me
        </a>
      </div>
    </header>
  )
}
