import { useEffect, useState } from 'react'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/blog`)
        if (!res.ok) throw new Error('Failed to load posts')
        const data = await res.json()
        setPosts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-sky-50/40 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">From the blog</h2>
          <p className="mt-3 text-slate-700">Insights on fintech, subscriptions, and growing your SaaS.</p>
        </div>

        {loading ? (
          <p className="mt-12 text-center text-slate-600">Loading posts…</p>
        ) : posts.length === 0 ? (
          <p className="mt-12 text-center text-slate-600">No posts yet. Check back soon.</p>
        ) : (
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p.slug} className="rounded-2xl bg-white/80 backdrop-blur border border-slate-200 p-6 hover:shadow-md transition">
                {p.cover_image && (
                  <img src={p.cover_image} alt={p.title} className="w-full h-40 object-cover rounded-xl mb-4" />
                )}
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-slate-700 text-sm">{p.excerpt}</p>
                <div className="mt-4 text-slate-600 text-sm">By {p.author}</div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
