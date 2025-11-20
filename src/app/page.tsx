import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import About from '@/components/About'
import Links from '@/components/Links'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Nav />
      <main>
        <Hero />
        <About />
        <Links />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}