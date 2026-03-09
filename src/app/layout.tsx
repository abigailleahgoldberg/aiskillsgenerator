import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Skills Generator -- Your Custom AI Learning Roadmap',
  description: 'Answer 3 questions. Get a custom AI learning plan built for your role, industry, and goals.',
  openGraph: {
    title: 'AI Skills Generator -- Your Custom AI Learning Roadmap',
    description: 'Answer 3 questions. Get a custom AI learning plan built for your role, industry, and goals.',
    url: 'https://aiskillsgenerator.com',
    siteName: 'AI Skills Generator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Skills Generator -- Your Custom AI Learning Roadmap',
    description: 'Answer 3 questions. Get a custom AI learning plan built for your role, industry, and goals.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: '#080C14', color: '#F8FAFC' }}>
        {children}
      </body>
    </html>
  )
}
