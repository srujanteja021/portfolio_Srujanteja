import './App.css'
import ContactSection from './components/ContactSection'
import CppSection from './components/CppSection'
import EducationSection from './components/EducationSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import SkillsSection from './components/SkillsSection'
import WorkSection from './components/WorkSection'

function App() {
  return (
    <main className="portfolio-shell">
      <Navbar />
      <HeroSection />
      <CppSection />
      <SkillsSection />
      <EducationSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
