

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

/* ── Replace with your EmailJS credentials ──
   https://emailjs.com/account           */
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'

const CONTACT_INFO = [
  { icon: 'bi-telephone',   label: 'Phone',    value: '+91 7499340060'                         },
  { icon: 'bi-envelope-at', label: 'Email',    value: 'pratiklipane2@gmail.com'                },
  { icon: 'bi-linkedin',    label: 'LinkedIn', value: 'linkedin.com/in/pratik-lipane'          },
  { icon: 'bi-geo-alt',     label: 'Location', value: 'Ahmednagar, Maharashtra, India'         },
]

export default function Contact() {
  const formRef  = useRef()
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const validate = (data) => {
    const e = {}
    if (!data.user_name.trim())  e.user_name  = 'Name is required.'
    if (!data.user_email.trim()) e.user_email = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(data.user_email)) e.user_email = 'Enter a valid email.'
    if (!data.message.trim())    e.message    = 'Message cannot be empty.'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {
      user_name:  formRef.current.user_name.value,
      user_email: formRef.current.user_email.value,
      message:    formRef.current.message.value,
    }
    const validationErrors = validate(formData)
    if (Object.keys(validationErrors).length) { setErrors(validationErrors); return }
    setErrors({})
    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
    } catch { setStatus('error') }
  }

  return (
    <section className="contact section" id="contact">
      <div className="container contact__inner">

        <div className="contact__info">
          <span className="tag-label">Get in Touch</span>
          <h2 className="section-title">Let's Work <span>Together</span></h2>
          <p className="contact__lead">
            Have a project in mind or want to hire a frontend developer?
            Drop me a message — I usually respond within 24 hours.
          </p>

          <div className="contact__details">
            {CONTACT_INFO.map(item => (
              <div key={item.label} className="contact__detail-item">
                <div className="contact__detail-icon">
                  <i className={`bi ${item.icon}`} />
                </div>
                <div>
                  <p className="contact__detail-label">{item.label}</p>
                  <p className="contact__detail-value">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact__form-wrap">
          <form ref={formRef} onSubmit={handleSubmit} className="contact__form" noValidate>

            <div className={`form-group ${errors.user_name ? 'form-group--error' : ''}`}>
              <label htmlFor="user_name" className="form-label">Full Name</label>
              <input type="text" id="user_name" name="user_name"
                     className="form-input" placeholder="John Doe" autoComplete="name" />
              {errors.user_name && (
                <span className="form-error"><i className="bi bi-exclamation-circle" /> {errors.user_name}</span>
              )}
            </div>

            <div className={`form-group ${errors.user_email ? 'form-group--error' : ''}`}>
              <label htmlFor="user_email" className="form-label">Email Address</label>
              <input type="email" id="user_email" name="user_email"
                     className="form-input" placeholder="john@example.com" autoComplete="email" />
              {errors.user_email && (
                <span className="form-error"><i className="bi bi-exclamation-circle" /> {errors.user_email}</span>
              )}
            </div>

            <div className={`form-group ${errors.message ? 'form-group--error' : ''}`}>
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" className="form-input form-textarea"
                        placeholder="Tell me about your project..." rows={5} />
              {errors.message && (
                <span className="form-error"><i className="bi bi-exclamation-circle" /> {errors.message}</span>
              )}
            </div>

            <button type="submit"
              className={`btn btn-primary contact__submit ${status === 'sending' ? 'sending' : ''}`}
              disabled={status === 'sending'}>
              {status === 'sending'
                ? <><i className="bi bi-arrow-repeat contact__spin" /> Sending…</>
                : <><i className="bi bi-send" /> Send Message</>}
            </button>

            {status === 'success' && (
              <p className="contact__status contact__status--success">
                <i className="bi bi-check-circle-fill" /> Message sent! I'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact__status contact__status--error">
                <i className="bi bi-x-circle-fill" /> Oops, something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  )
}
