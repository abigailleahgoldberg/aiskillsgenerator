import { posts } from '../data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.seoDescription,
  };
}

function renderContent(content: string) {
  const paragraphs = content.split('\n\n');
  return paragraphs.map((para, i) => {
    if (para.startsWith('**') && para.endsWith('**')) {
      return (
        <h3
          key={i}
          style={{ fontSize: '1.2rem', fontWeight: 700, color: '#F8FAFC', margin: '2rem 0 0.75rem' }}
        >
          {para.replace(/\*\*/g, '')}
        </h3>
      );
    }
    // Handle inline bold and links
    const parts = para.split(/(\*\*[^*]+\*\*|\[([^\]]+)\]\(([^)]+)\))/g);
    const rendered = parts.filter(Boolean).map((part, j) => {
      const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
      if (boldMatch) {
        return <strong key={j}>{boldMatch[1]}</strong>;
      }
      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        return (
          <a key={j} href={linkMatch[2]} style={{ color: '#00C896', textDecoration: 'underline' }}>
            {linkMatch[1]}
          </a>
        );
      }
      return part;
    });
    return (
      <p key={i} style={{ color: 'rgba(248,250,252,0.8)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
        {rendered}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main style={{ background: '#07090F', minHeight: '100vh', color: '#F8FAFC' }}>
      {/* Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid rgba(67,56,202,0.25)' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, #2563EB, #84CC16)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
            ◎
          </div>
          <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#F8FAFC', letterSpacing: '-0.02em' }}>AI Skills Generator</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a href="/blog" style={{ color: '#00C896', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>← All Posts</a>
          <a href="https://thevoiceofcash.com/consultation" style={{ background: 'linear-gradient(135deg, #4338CA, #3730A3)', color: '#F8FAFC', padding: '0.5rem 1.25rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
            Get Early Access
          </a>
        </div>
      </nav>

      {/* Article */}
      <article style={{ maxWidth: 740, margin: '0 auto', padding: '3.5rem 2rem 5rem' }}>
        {/* Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <span style={{ background: 'rgba(67,56,202,0.2)', color: '#818CF8', padding: '0.3rem 0.85rem', borderRadius: 100, fontSize: '0.78rem', fontWeight: 600 }}>
            {post.category}
          </span>
          <span style={{ color: 'rgba(248,250,252,0.4)', fontSize: '0.85rem' }}>{post.date}</span>
          <span style={{ color: 'rgba(248,250,252,0.4)', fontSize: '0.85rem' }}>{post.readTime}</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
          {post.title}
        </h1>

        {/* Excerpt */}
        <p style={{ fontSize: '1.15rem', color: 'rgba(248,250,252,0.6)', lineHeight: 1.65, marginBottom: '2.5rem', borderLeft: '3px solid #4338CA', paddingLeft: '1.25rem', fontStyle: 'italic' }}>
          {post.excerpt}
        </p>

        {/* Divider */}
        <hr style={{ border: 'none', borderTop: '1px solid rgba(67,56,202,0.25)', marginBottom: '2.5rem' }} />

        {/* Content */}
        <div>{renderContent(post.content)}</div>
      </article>

      {/* CTA Footer */}
      <section style={{ background: 'linear-gradient(135deg, rgba(67,56,202,0.15), rgba(0,200,150,0.08))', borderTop: '1px solid rgba(67,56,202,0.2)', padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
          Ready to build AI skills that pay?
        </h2>
        <p style={{ color: 'rgba(248,250,252,0.65)', fontSize: '1rem', marginBottom: '2rem', maxWidth: 460, margin: '0 auto 2rem' }}>
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
