import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Contact from './components/Contact'
import AuthModal from './components/AuthModal'

function App() {
  const [authOpen, setAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState('login')

  const openAuth = (mode) => {
    setAuthMode(mode)
    setAuthOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50/40 to-sky-50/40 text-slate-900">
      <Navbar onOpenAuth={openAuth} />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <footer className="py-10 border-t border-slate-200 bg-white/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-700">
          <p>© {new Date().getFullYear()} PastelPay. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#pricing">Pricing</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>

      <AuthModal open={authOpen} mode={authMode} onClose={() => setAuthOpen(false)} />
    </div>
  )
}

export default App
