

import { useState, useEffect } from 'react'
import './Footer.css'

const NAV_LINKS = ['Home','About','Services','Portfolio','Contact']

export default function Footer() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">PL<span>.</span></a>
          <p className="footer__tagline">
            Aspiring Frontend Developer from Ahilyanagar , Maharashtra.
          </p>
          <p className="footer__contact-quick">
            <i className="bi bi-envelope" /> pratiklipane2@gmail.com
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="footer__nav-link">{l}</a>
          ))}
        </nav>

        <div className="footer__socials">
          {[
            { icon: 'bi-github',   href: 'https://github.com/'                        },
            { icon: 'bi-linkedin', href: 'https://www.linkedin.com/in/pratik-lipane/' },
            { icon: 'bi-envelope', href: 'mailto:pratiklipane2@gmail.com'             },
          ].map(s => (
            <a key={s.icon} href={s.href} target="_blank" rel="noreferrer"
               className="footer__social-icon">
              <i className={`bi ${s.icon}`} />
            </a>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {new Date().getFullYear()} <strong>Pratik Lipane</strong>. All rights reserved.
          </p>
          <p className="footer__made">
            Made with <i className="bi bi-heart-fill footer__heart" /> using React &amp; Vite
          </p>
        </div>
      </div>

      <button className={`scroll-top-btn ${visible ? 'visible' : ''}`}
              onClick={scrollTop} aria-label="Scroll to top">
        <i className="bi bi-arrow-up" />
      </button>
    </footer>
  )
}
