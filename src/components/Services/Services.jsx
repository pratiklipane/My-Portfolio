

import './Services.css'

const SERVICES = [
  {
    icon:  'bi-code-slash',
    title: 'Web Development',
    desc:  'End-to-end web applications built with React, clean architecture, and performance-first approach. From landing pages to complex SPAs.',
    tags:  ['React', 'Next.js', 'Node.js'],
  },
  {
    icon:  'bi-vector-pen',
    title: 'UI/UX Design',
    desc:  'User-centred interface design using Figma — wireframes, prototypes, and polished design systems that turn visitors into customers.',
    tags:  ['Figma', 'Wireframing', 'Prototyping'],
    highlight: true,
  },
  {
    icon:  'bi-phone',
    title: 'App Development',
    desc:  'Cross-platform mobile apps using React Native. Native feel, shared codebase, seamless integration with backends and REST APIs.',
    tags:  ['React Native', 'Expo', 'REST API'],
  },
]

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services__header">
          <span className="tag-label">What I Do</span>
          <h2 className="section-title">My <span>Services</span></h2>
          <p className="section-subtitle">
            From concept to deployment — I've got you covered.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`service-card ${s.highlight ? 'service-card--highlight' : ''}`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="service-card__icon">
                <i className={`bi ${s.icon}`} />
              </div>
              <h3 className="service-card__title">{s.title}</h3>
              <p  className="service-card__desc">{s.desc}</p>
              <div className="service-card__tags">
                {s.tags.map(t => (
                  <span key={t} className="service-card__tag">{t}</span>
                ))}
              </div>
              <div className="service-card__arrow">
                <i className="bi bi-arrow-up-right" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
