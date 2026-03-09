import { posts } from './data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Skills Blog | AI Skills Generator',
  description: 'Practical guides on building AI skills, advancing your career, and staying ahead in the age of artificial intelligence.',
};

export default function BlogPage() {
  return (
    <main style={{ background: '#07090F', minHeight: '100vh', color: '#F8FAFC' }}>
      {/* Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid rgba(67,56,202,0.25)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, #2563EB, #84CC16)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
              ◎
            </div>
            <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#F8FAFC', letterSpacing: '-0.02em' }}>AI Skills Generator</span>
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a href="/blog" style={{ color: '#00C896', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>Blog</a>
          <a href="https://thevoiceofcash.com/consultation" style={{ background: 'linear-gradient(135deg, #4338CA, #3730A3)', color: '#F8FAFC', padding: '0.5rem 1.25rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
            Get Early Access
          </a>
        </div>
      </nav>

      {/* Header */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem 3rem', maxWidth: 800, margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: 'rgba(67,56,202,0.15)', border: '1px solid rgba(67,56,202,0.4)', borderRadius: 100, padding: '0.4rem 1rem', marginBottom: '1.5rem', fontSize: '0.8rem', color: '#818CF8', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          AI Skills Blog
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
          Learn. Apply.{' '}
          <span style={{ color: '#00C896' }}>Get Hired.</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(248,250,252,0.65)', lineHeight: 1.7, maxWidth: 540, margin: '0 auto' }}>
          Practical guides on AI skills, career moves, and staying relevant in 2026.
        </p>
      </section>

      {/* Posts grid */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem 6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {posts.map((post) => (
            <article
              key={post.slug}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(67,56,202,0.2)',
                borderRadius: 16,
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.2s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ background: 'rgba(67,56,202,0.2)', color: '#818CF8', padding: '0.25rem 0.75rem', borderRadius: 100, fontSize: '0.75rem', fontWeight: 600 }}>
                  {post.category}
                </span>
                <span style={{ color: 'rgba(248,250,252,0.35)', fontSize: '0.78rem' }}>{post.readTime}</span>
              </div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '0.75rem', color: '#F8FAFC' }}>
                {post.title}
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'rgba(248,250,252,0.6)', lineHeight: 1.65, marginBottom: '1.25rem', flexGrow: 1 }}>
                {post.excerpt}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                <span style={{ fontSize: '0.78rem', color: 'rgba(248,250,252,0.35)' }}>{post.date}</span>
                <a
                  href={`/blog/${post.slug}`}
                  style={{ color: '#00C896', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none' }}
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, rgba(67,56,202,0.15), rgba(0,200,150,0.08))', borderTop: '1px solid rgba(67,56,202,0.2)', padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
          Ready to build AI skills that pay?
        </h2>
        <p style={{ color: 'rgba(248,250,252,0.65)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: 480, margin: '0 auto 2rem' }}>
          Get a personalized AI skills roadmap built for your role and goals.
        </p>
        <a
          href="https://thevoiceofcash.com/consultation"
          style={{ display: 'inline-block', background: '#00C896', color: '#07090F', padding: '0.9rem 2.25rem', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}
        >
          Book a Free Consultation
        </a>
      </section>
    </main>
  );
}
