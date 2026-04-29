

import './About.css'

const SKILLS = [
  'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js',
  'Bootstrap', 'Responsive Design', 'REST API Integration',
  'Git & GitHub', 'VS Code', 'Figma', 'Chrome DevTools', 'Cross-Browser Testing',
]

const STATS = [
  { value: '2+',  label: 'Internships'    },
  { value: '5+',  label: 'Projects Built' },
  { value: '7.41', label: 'CGPA (B.E.)'  },
]

const EXPERIENCE = [
  {
    role:    'Frontend Developer Intern',
    company: 'Cloud Infotech IT HUB',
    loc:     'Pune, Maharashtra',
    period:  'Jan 2025 – Mar 2025',
    points: [
      'Designed and developed responsive websites using HTML, CSS, and JavaScript.',
      'Enhanced problem-solving and debugging skills through real-world project challenges.',
      'Implemented mobile-first design and optimized performance for better UX.',
    ],
  },
  {
    role:    'Frontend Developer Intern',
    company: 'Kanak Digifex Pvt. Ltd.',
    loc:     'Ahmednagar, Maharashtra',
    period:  'Jan 2024 – Feb 2024',
    points: [
      'Developed and maintained responsive web applications using HTML, CSS, and JavaScript.',
      'Worked with React.js and Bootstrap frameworks for scalable UI development.',
      'Collaborated with team to improve project delivery and user experience.',
    ],
  },
]

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__inner">

        {/* Left — card */}
        <div className="about__visual">
          <div className="about__img-card">
            <div className="about__img-avatar">PL</div>
            <div className="about__stats">
              {STATS.map(s => (
                <div key={s.label} className="about__stat">
                  <span className="about__stat-value">{s.value}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education quick-card */}
          <div className="about__edu-card">
            <p className="about__edu-label">
              <i className="bi bi-mortarboard-fill" /> Education
            </p>
            <p className="about__edu-degree">B.E. Computer Engineering</p>
            <p className="about__edu-college">SCSMCOE, Nepti, Ahmednagar</p>
            <p className="about__edu-year">Graduating June 2025 · CGPA 7.41</p>
          </div>
        </div>

        {/* Right — text */}
        <div className="about__content">
          <span className="tag-label">About Me</span>
          <h2 className="section-title">Passionate about <span>great UX</span></h2>
          <p className="section-subtitle">Building the web, one pixel at a time.</p>

          <p className="about__bio">
            I'm <strong>Pratik Lipane</strong>, an aspiring Frontend Developer from
            Ahmednagar, Maharashtra, currently completing my B.E. in Computer Engineering.
            I specialise in building responsive, cross-browser compatible web applications
            with clean code and intuitive user interfaces.
          </p>

          <p className="about__bio">
            With hands-on internship experience at two companies and a growing
            portfolio of real-world projects, I'm eager to contribute technical
            expertise and problem-solving skills to impactful digital products.
          </p>

          {/* Experience timeline */}
          <div className="about__exp-title">Work Experience</div>
          <div className="about__timeline">
            {EXPERIENCE.map(e => (
              <div key={e.company} className="about__timeline-item">
                <div className="about__timeline-dot" />
                <div className="about__timeline-body">
                  <p className="about__tl-role">{e.role}</p>
                  <p className="about__tl-company">
                    {e.company} · <span>{e.loc}</span>
                  </p>
                  <p className="about__tl-period">{e.period}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="about__skills-title">Tech I work with</div>
          <div className="about__skill-grid">
            {SKILLS.map(skill => (
              <span key={skill} className="about__skill-tag">
                <i className="bi bi-check2" /> {skill}
              </span>
            ))}
          </div>

          <a href="#contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>
            Let's Collaborate <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  )
}
