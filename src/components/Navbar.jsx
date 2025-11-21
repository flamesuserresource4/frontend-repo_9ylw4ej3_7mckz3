import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar({ onOpenAuth }) {
  const [open, setOpen] = useState(false)

  const navItem = (label, href) => (
    <a href={href} className="text-slate-700 hover:text-slate-900 transition-colors">
      {label}
    </a>
  )

  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-200 via-sky-200 to-violet-200 shadow-inner" />
          <span className="text-xl font-semibold tracking-tight text-slate-900">PastelPay</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItem('Features', '#features')}
          {navItem('Pricing', '#pricing')}
          {navItem('Blog', '#blog')}
          {navItem('Contact', '#contact')}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => onOpenAuth('login')} className="px-4 py-2 text-slate-700 hover:text-slate-900">Sign in</button>
          <button onClick={() => onOpenAuth('signup')} className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">Get started</button>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="grid gap-4">
            <a href="#features" className="py-2 border-b border-slate-200">Features</a>
            <a href="#pricing" className="py-2 border-b border-slate-200">Pricing</a>
            <a href="#blog" className="py-2 border-b border-slate-200">Blog</a>
            <a href="#contact" className="py-2 border-b border-slate-200">Contact</a>
            <div className="flex gap-3 pt-2">
              <button onClick={() => onOpenAuth('login')} className="flex-1 px-4 py-2 rounded-lg border border-slate-300">Sign in</button>
              <button onClick={() => onOpenAuth('signup')} className="flex-1 px-4 py-2 rounded-lg bg-slate-900 text-white">Get started</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
