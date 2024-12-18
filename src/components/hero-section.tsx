import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-4xl">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          A Start-Up Accelerator for{' '}
          <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Globally Impactful Ideas.
          </span>
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl">
          We are in the process of creating a studio office with space to accommodate our team and a cohort of 3 startups to ideate, test & delivery with us fall time.
        </p>
        <div className="flex items-center gap-4">
          <Button className="bg-black text-white rounded-full">
            Let&apos;s Join Now
          </Button>
          <ArrowRight className="w-6 h-6" />
        </div>
      </div>
    </section>
  )
}

