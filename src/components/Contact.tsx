import { useState, type FormEvent } from 'react'
import { api } from '../api/client'

export function Contact() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setStatus('loading')

    try {
      await api.submitConsultation({ fullName, email, message })
      setStatus('success')
      setFullName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-navy py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-widest text-gold">GET IN TOUCH</p>
          <p className="mt-4 max-w-md leading-relaxed text-white/80">
            Our consultants are ready to answer your questions and help you plan your future.
            Schedule a meeting today.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-dark">
                <span className="text-gold">✉</span>
              </div>
              <div>
                <p className="font-bold text-white">Email Us</p>
                <p className="text-sm text-white/60">info@gradeaide.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-dark">
                <span className="text-gold">☎</span>
              </div>
              <div>
                <p className="font-bold text-white">Call Us</p>
                <p className="text-sm text-white/60">+95 9 1234 5678</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-8 shadow-xl"
        >
          <h3 className="text-sm font-bold tracking-widest text-navy">CONSULTATION REQUEST</h3>

          <label className="mt-6 block">
            <span className="text-xs font-semibold tracking-widest text-muted">FULL NAME</span>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-navy outline-none focus:border-navy"
            />
          </label>

          <label className="mt-4 block">
            <span className="text-xs font-semibold tracking-widest text-muted">EMAIL ADDRESS</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="info@gradeaide.com"
              className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-navy outline-none focus:border-navy"
            />
          </label>

          <label className="mt-4 block">
            <span className="text-xs font-semibold tracking-widest text-muted">MESSAGE</span>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your goals..."
              className="mt-2 w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-navy outline-none focus:border-navy"
            />
          </label>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-6 w-full rounded-lg bg-navy py-3 font-medium text-white transition hover:bg-navy-dark disabled:opacity-60"
          >
            {status === 'loading' ? 'Sending...' : 'Send Request'}
          </button>

          {status === 'success' && (
            <p className="mt-4 text-sm text-green-600">Request sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm text-red-600">
              Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
