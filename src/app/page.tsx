import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import About from '@/components/About'
import Links from '@/components/Links'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackgroundVideo from '@/components/BackgroundVideo'

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* 背景视频 */}
      <BackgroundVideo />

      {/* 内容区域 */}
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <Links />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}