import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Solution from './components/Solution'
import Specialties from './components/Specialties'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Newsletter from './components/Newsletter'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <Specialties />
        <Process />
        <Testimonials />
        <About />
        <Newsletter />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
