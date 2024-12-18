import { NavBar } from '@/components/nav-bar'
import { HeroSection } from '@/components/hero-section'
import { StatsSection } from '@/components/stats-section'
import { ChallengesSection } from '@/components/challenges-section'
import { ContactForm } from '@/components/contact-form'

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <StatsSection />
      <ChallengesSection />
      <ContactForm />
    </main>
  )
}

