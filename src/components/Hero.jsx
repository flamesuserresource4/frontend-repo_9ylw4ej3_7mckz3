import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative">
      <div className="h-[70vh] md:h-[80vh] w-full">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="max-w-3xl px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 drop-shadow-sm">
            Modern payments for digital businesses
          </h1>
          <p className="mt-4 text-slate-700 text-lg md:text-xl">
            A clean, minimalist suite to accept cards, manage subscriptions, and scale your SaaS with confidence.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#pricing" className="pointer-events-auto px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">See pricing</a>
            <a href="#features" className="pointer-events-auto px-5 py-3 rounded-lg bg-white/80 backdrop-blur border border-slate-200 hover:bg-white transition">Explore features</a>
          </div>
        </div>
      </div>
    </section>
  )
}
