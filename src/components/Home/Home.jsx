
import './Home.css'

const SOCIAL_LINKS = [
  { icon: 'bi-github',   href: 'https://github.com/',                        label: 'GitHub'   },
  { icon: 'bi-linkedin', href: 'https://www.linkedin.com/in/pratik-lipane/', label: 'LinkedIn' },
  { icon: 'bi-envelope', href: 'mailto:pratiklipane2@gmail.com',             label: 'Email'    },
]

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__bg" aria-hidden="true">
        <div className="home__orb home__orb--1" />
        <div className="home__orb home__orb--2" />
        <div className="home__grid" />
      </div>

      <div className="container home__inner">
        <div className="home__content">
          <span className="tag-label fade-up delay-1">
            <i className="bi bi-circle-fill" style={{ fontSize: '0.45rem' }} />
            &nbsp;Available for work
          </span>

          <h1 className="home__name fade-up delay-2">
            Hi, I'm <br />
            <span>Pratik</span> Lipane
          </h1>

          <p className="home__title fade-up delay-3">
            <span className="home__title-prefix">// </span>
            Frontend Developer
          </p>

          <p className="home__desc fade-up delay-4">
            I build responsive, user-friendly web apps with HTML, CSS, JavaScript
            and React.js — turning ideas into pixel-perfect digital experiences.
          </p>

          <div className="home__actions fade-up delay-5">
            <a href="#portfolio" className="btn btn-primary">
              View My Work <i className="bi bi-arrow-right" />
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>

          <div className="home__socials fade-up delay-5">
            {SOCIAL_LINKS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                 className="home__social-icon" aria-label={s.label}>
                <i className={`bi ${s.icon}`} />
              </a>
            ))}
          </div>
        </div>

        <div className="home__visual fade-up delay-3">
          <div className="home__avatar-wrap">
            <div className="home__avatar-ring" />
            <div className="home__avatar"><span>PL</span></div>
            <div className="home__badge home__badge--tl">
              <i className="bi bi-code-slash" /> React.js
            </div>
            <div className="home__badge home__badge--br">
              <i className="bi bi-geo-alt" /> Ahilyanagar, MH-16
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="home__scroll-hint" aria-label="Scroll to About">
        <span />
      </a>
    </section>
  )
}
