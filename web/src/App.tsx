import SkipLink from './components/SkipLink'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Outside from './components/Outside'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Education />
        <Outside />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App