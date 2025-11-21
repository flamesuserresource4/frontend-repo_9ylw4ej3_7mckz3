import { Shield, CreditCard, Zap, Globe } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Bank‑grade security',
    desc: 'Protected by encryption and continuous monitoring for complete peace of mind.'
  },
  {
    icon: CreditCard,
    title: 'Cards and subscriptions',
    desc: 'Flexible billing for trials, seats, metered usage, and more.'
  },
  {
    icon: Zap,
    title: 'Fast integration',
    desc: 'Simple APIs and docs so you can ship in days, not months.'
  },
  {
    icon: Globe,
    title: 'Global scale',
    desc: 'Multi-currency support and localization built in from day one.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-pink-50/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Everything you need</h2>
          <p className="mt-3 text-slate-700">Thoughtfully designed tools to run payments for modern SaaS, wrapped in a soft pastel theme.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white/80 backdrop-blur border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-100 to-violet-100 flex items-center justify-center">
                <f.icon className="w-6 h-6 text-slate-800" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-700 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
