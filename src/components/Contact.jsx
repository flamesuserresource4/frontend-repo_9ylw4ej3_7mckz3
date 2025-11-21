import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('sent')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-pink-50/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Get in touch</h2>
          <p className="mt-3 text-slate-700">Have questions about pricing or features? We’d love to help.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 max-w-2xl mx-auto grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" placeholder="Your name" required className="px-4 py-3 rounded-lg border border-slate-300 bg-white/80" />
            <input name="email" type="email" placeholder="Email address" required className="px-4 py-3 rounded-lg border border-slate-300 bg-white/80" />
          </div>
          <input name="subject" placeholder="Subject" required className="px-4 py-3 rounded-lg border border-slate-300 bg-white/80" />
          <textarea name="message" rows="5" placeholder="How can we help?" required className="px-4 py-3 rounded-lg border border-slate-300 bg-white/80" />
          <div className="flex items-center gap-3">
            <button className="px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">Send message</button>
            {status === 'sending' && <span className="text-slate-600">Sending…</span>}
            {status === 'sent' && <span className="text-emerald-600">Message sent!</span>}
            {status === 'error' && <span className="text-red-600">Something went wrong.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
