'use client'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const steps = [
    {
      number: '1',
      label: 'Answer Questions',
      desc: 'Tell us your role, industry, and AI experience level',
      color: '#2563EB',
    },
    {
      number: '2',
      label: 'Get Your Plan',
      desc: 'Receive a personalized AI skills roadmap in seconds',
      color: '#84CC16',
    },
    {
      number: '3',
      label: 'Start Learning',
      desc: 'Follow curated resources matched to your exact needs',
      color: '#2563EB',
    },
  ]

  return (
    <main>
      {/* Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid rgba(37,99,235,0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, #2563EB, #84CC16)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
            ◎
          </div>
          <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#F8FAFC', letterSpacing: '-0.02em' }}>AI Skills Generator</span>
        </div>
        <a href="https://thevoiceofcash.com/consultation" style={{ background: 'linear-gradient(135deg, #2563EB, #1D4ED8)', color: '#F8FAFC', padding: '0.5rem 1.25rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
          Get Early Access
        </a>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '6rem 2rem 5rem', maxWidth: 800, margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(132,204,22,0.12)', border: '1px solid rgba(132,204,22,0.35)', borderRadius: 100, padding: '0.4rem 1rem', marginBottom: '2rem', fontSize: '0.85rem', color: '#84CC16', fontWeight: 600, letterSpacing: '0.05em' }}>
          <span style={{ width: 6, height: 6, background: '#84CC16', borderRadius: '50%', display: 'inline-block' }} />
          COMING SOON
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em', color: '#F8FAFC' }}>
          Generate Your<br />
          <span style={{ background: 'linear-gradient(135deg, #2563EB, #84CC16)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AI Skills Roadmap</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'rgba(248,250,252,0.7)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 560, margin: '0 auto 2.5rem' }}>
          Answer 3 questions. Get a custom AI learning plan built for your role, industry, and goals.
        </p>
        <a href="https://thevoiceofcash.com/consultation" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #2563EB, #1D4ED8)', color: '#F8FAFC', padding: '1rem 2.5rem', borderRadius: 12, textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 8px 32px rgba(37,99,235,0.4)' }}>
          Join the Waitlist
        </a>
      </section>

      {/* 3-Step Visual */}
      <section style={{ padding: '4rem 2rem 5rem', maxWidth: 1000, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 700, color: 'rgba(248,250,252,0.6)', marginBottom: '3rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
          How It Works
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', position: 'relative' }}>
          {steps.map((step, i) => (
            <div key={step.label} style={{ position: 'relative', textAlign: 'center', padding: '2.5rem 2rem', background: 'rgba(248,250,252,0.04)', border: '1px solid rgba(248,250,252,0.08)', borderRadius: 20 }}>
              {/* Connector arrow (not last) */}
              {i < steps.length - 1 && (
                <div style={{ display: 'none' }} aria-hidden="true" />
              )}
              <div style={{ width: 64, height: 64, background: `linear-gradient(135deg, ${step.color}30, ${step.color}15)`, border: `2px solid ${step.color}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem', fontWeight: 900, color: step.color }}>
                {step.number}
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem', color: '#F8FAFC' }}>{step.label}</h3>
              <p style={{ color: 'rgba(248,250,252,0.55)', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Arrow connectors visual row */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          {steps.map((step, i) => (
            <div key={step.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: `${step.color}20`, border: `1px solid ${step.color}50`, borderRadius: 8, padding: '0.5rem 1rem', fontSize: '0.85rem', fontWeight: 600, color: step.color }}>
                Step {step.number}: {step.label}
              </div>
              {i < steps.length - 1 && (
                <span style={{ color: 'rgba(248,250,252,0.3)', fontSize: '1.2rem' }}>→</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Sample Plan Preview */}
      <section style={{ padding: '2rem 2rem 5rem', maxWidth: 700, margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(132,204,22,0.08))', border: '1px solid rgba(37,99,235,0.3)', borderRadius: 20, padding: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ width: 8, height: 8, background: '#84CC16', borderRadius: '50%' }} />
            <span style={{ fontSize: '0.8rem', color: 'rgba(248,250,252,0.5)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Sample Roadmap Preview</span>
          </div>
          <div style={{ fontSize: '1rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '1.25rem' }}>
            AI Roadmap for: Marketing Manager, SaaS, Intermediate
          </div>
          {[
            { week: 'Week 1-2', skill: 'Prompt Engineering Fundamentals', tag: 'Foundation' },
            { week: 'Week 3-4', skill: 'Content Generation Workflows', tag: 'Applied' },
            { week: 'Week 5-6', skill: 'Customer Research Automation', tag: 'Advanced' },
          ].map((item) => (
            <div key={item.skill} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.875rem 0', borderBottom: '1px solid rgba(248,250,252,0.07)' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(248,250,252,0.4)', marginBottom: '0.2rem' }}>{item.week}</div>
                <div style={{ fontSize: '0.95rem', color: '#F8FAFC', fontWeight: 500 }}>{item.skill}</div>
              </div>
              <div style={{ background: 'rgba(132,204,22,0.15)', border: '1px solid rgba(132,204,22,0.3)', borderRadius: 6, padding: '0.25rem 0.65rem', fontSize: '0.75rem', color: '#84CC16', fontWeight: 600 }}>
                {item.tag}
              </div>
            </div>
          ))}
          <p style={{ marginTop: '1.25rem', fontSize: '0.85rem', color: 'rgba(248,250,252,0.35)', margin: '1.25rem 0 0' }}>
            Your actual roadmap will be personalized based on your answers.
          </p>
        </div>
      </section>

      {/* Email Capture */}
      <section id="notify" style={{ padding: '4rem 2rem 6rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 520, margin: '0 auto', background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.25)', borderRadius: 24, padding: '3rem 2rem' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🗺</div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.75rem', color: '#F8FAFC' }}>
            Coming soon
          </h2>
          <p style={{ color: 'rgba(248,250,252,0.6)', marginBottom: '2rem', lineHeight: 1.6 }}>
            Be the first to generate your personalized AI skills roadmap when we launch.
          </p>
          {submitted ? (
            <div style={{ background: 'rgba(132,204,22,0.15)', border: '1px solid rgba(132,204,22,0.4)', borderRadius: 12, padding: '1rem', color: '#84CC16', fontWeight: 600 }}>
              You're on the waitlist! We'll notify you at launch.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={{ flex: '1 1 240px', padding: '0.875rem 1.25rem', borderRadius: 10, border: '1px solid rgba(248,250,252,0.15)', background: 'rgba(248,250,252,0.06)', color: '#F8FAFC', fontSize: '1rem', outline: 'none' }}
              />
              <button type="submit" style={{ padding: '0.875rem 1.75rem', background: 'linear-gradient(135deg, #2563EB, #1D4ED8)', color: '#F8FAFC', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
                Notify Me
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(248,250,252,0.08)', padding: '2rem', textAlign: 'center', color: 'rgba(248,250,252,0.4)', fontSize: '0.875rem' }}>
        <p style={{ margin: 0 }}>2026 AI Skills Generator. Your personalized path to AI proficiency.</p>
      </footer>
    </main>
  )
}
