

import './Portfolio.css'

const PROJECTS = [
  {
    title:   'Weather Forecast App',
    desc:    'Responsive app providing real-time weather for any city via public Weather API — shows temperature, humidity, wind speed, and location-based forecasts.',
    tags:    ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Fetch API'],
    liveUrl: 'https://github.com/pratiklipane/Weather-App.git',
    codeUrl: 'https://github.com/pratiklipane/Weather-App',
    icon:    'bi-cloud-sun',
    color:   '#f6c90e',
    num:     '01',
  },
  {
    title:   'Restaurant Website',
    desc:    'Modern responsive restaurant website showcasing menu items, special offers, and details with smooth navigation and interactive UI components.',
    tags:    ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://github.com/',
    codeUrl: 'https://github.com/',
    icon:    'bi-shop',
    color:   '#ff6b6b',
    num:     '02',
  },
  {
    title:   'Portfolio Website',
    desc:    'This personal portfolio — built with React + Vite, dark editorial design, smooth animations, and EmailJS-powered contact form.',
    tags:    ['React', 'Vite', 'CSS3', 'EmailJS'],
    liveUrl: '#',
    codeUrl: 'https://github.com/',
    icon:    'bi-person-badge',
    color:   '#00f5d4',
    num:     '03',
  },
]

export default function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="portfolio__header">
          <span className="tag-label">My Work</span>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-subtitle">A selection of things I've built.</p>
        </div>

        <div className="portfolio__grid">
          {PROJECTS.map((p) => (
            <article key={p.title} className="project-card">
              <div className="project-card__thumb" style={{ '--project-color': p.color }}>
                <span className="project-card__num">{p.num}</span>
                <i className={`bi ${p.icon} project-card__icon`} />
                <div className="project-card__overlay">
                  <a href={p.liveUrl} target="_blank" rel="noreferrer"
                     className="project-card__ov-btn">
                    <i className="bi bi-box-arrow-up-right" /> Live Demo
                  </a>
                  <a href={p.codeUrl} target="_blank" rel="noreferrer"
                     className="project-card__ov-btn project-card__ov-btn--ghost">
                    <i className="bi bi-github" /> Code
                  </a>
                </div>
              </div>

              <div className="project-card__body">
                <div className="project-card__tags">
                  {p.tags.map(t => (
                    <span key={t} className="project-card__tag">{t}</span>
                  ))}
                </div>
                <h3 className="project-card__title">{p.title}</h3>
                <p  className="project-card__desc">{p.desc}</p>
                <div className="project-card__links">
                  <a href={p.liveUrl} target="_blank" rel="noreferrer"
                     className="project-card__link">
                    Live <i className="bi bi-arrow-up-right" />
                  </a>
                  <a href={p.codeUrl} target="_blank" rel="noreferrer"
                     className="project-card__link project-card__link--muted">
                    <i className="bi bi-github" /> Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
