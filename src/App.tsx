import { NavBar } from './components/NavBar'
import { HeroSection } from './components/HeroSection'
import { StatsSection } from './components/StatsSection'
import { ChallengesSection } from './components/ChallengesSection'
import { ContactForm } from './components/ContactForm'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <HeroSection />
        <StatsSection />
        <ChallengesSection />
        <ContactForm />
      </main>
      <footer className="bg-gray-100 py-6 text-center text-gray-600">
        <p>&copy; 2023 StartBrite. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

