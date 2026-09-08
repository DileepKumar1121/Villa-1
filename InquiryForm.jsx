import { useState } from 'react'

const initialValues = { name: '', email: '', phone: '', date: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (values.phone && !/^[\d\s()+-]{6,}$/.test(values.phone)) {
    errors.phone = 'Enter a valid phone number, or leave this blank.'
  }
  if (!values.message.trim()) errors.message = 'Let us know what you\u2019d like to ask.'
  return errors
}

export default function InquiryForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate({ ...values }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setTouched({ name: true, email: true, phone: true, message: true })

    if (Object.keys(validationErrors).length > 0) return

    // NOTE: there is no backend wired up yet. This simulates a network call so the
    // form's states (submitting / success / error) work end to end. Replace this
    // block with a real request (fetch, an API route, a form service like Formspree,
    // etc.) when you're ready to receive live enquiries.
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
    }, 900)
  }

  if (status === 'success') {
    return (
      <div className="inquiry__success" role="status">
        <h3>Thank you, {values.name.split(' ')[0]}.</h3>
        <p>
          Your enquiry about Villa Aurelio has been recorded. The listing agent will
          reply to {values.email} within one business day.
        </p>
      </div>
    )
  }

  return (
    <form className="inquiry__form" onSubmit={handleSubmit} noValidate>
      <div className="inquiry__row">
        <div className="inquiry__field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(touched.name && errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {touched.name && errors.name && <span className="inquiry__error" id="name-error">{errors.name}</span>}
        </div>

        <div className="inquiry__field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(touched.email && errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {touched.email && errors.email && <span className="inquiry__error" id="email-error">{errors.email}</span>}
        </div>
      </div>

      <div className="inquiry__row">
        <div className="inquiry__field">
          <label htmlFor="phone">Phone <span className="inquiry__optional">(optional)</span></label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(touched.phone && errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {touched.phone && errors.phone && <span className="inquiry__error" id="phone-error">{errors.phone}</span>}
        </div>

        <div className="inquiry__field">
          <label htmlFor="date">Preferred viewing date <span className="inquiry__optional">(optional)</span></label>
          <input
            id="date"
            name="date"
            type="date"
            value={values.date}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="inquiry__field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(touched.message && errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {touched.message && errors.message && <span className="inquiry__error" id="message-error">{errors.message}</span>}
      </div>

      <button type="submit" className="inquiry__submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending\u2026' : 'Send enquiry'}
      </button>
    </form>
  )
}
