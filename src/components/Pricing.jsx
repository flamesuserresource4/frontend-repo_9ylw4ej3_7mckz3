const tiers = [
  {
    name: 'Starter',
    price: '$9',
    period: 'mo',
    features: ['Up to 1k payments', 'Basic analytics', 'Community support'],
    cta: 'Start free trial'
  },
  {
    name: 'Growth',
    highlight: true,
    price: '$29',
    period: 'mo',
    features: ['Up to 10k payments', 'Subscriptions & coupons', 'Priority support'],
    cta: 'Choose Growth'
  },
  {
    name: 'Scale',
    price: '$99',
    period: 'mo',
    features: ['Unlimited payments', 'Advanced reporting', 'Dedicated manager'],
    cta: 'Talk to sales'
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-pink-50/40 to-sky-50/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Simple, honest pricing</h2>
          <p className="mt-3 text-slate-700">Transparent plans that grow with you.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`${t.highlight ? 'ring-2 ring-slate-900' : 'border border-slate-200'} rounded-2xl bg-white/80 backdrop-blur p-6 shadow-sm`}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
                {t.highlight && <span className="text-xs px-2 py-1 rounded-full bg-slate-900 text-white">Popular</span>}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-semibold text-slate-900">{t.price}</span>
                <span className="text-slate-600">/{t.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-slate-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 block text-center px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">{t.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
