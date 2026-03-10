'use client'

import HeroSection from '@/src/app/team/HeroSection'
import MainContent from '@/src/app/team/MainContent'
import StackedSections from '@/src/components/common/StackedSections'
import SmoothScrollProvider from '@/src/app/team/SmoothScrollProvider'

export default function TeamPage() {
  return (
    <SmoothScrollProvider>
      <main>
        <HeroSection />
        <MainContent />
        <StackedSections />
      </main>
    </SmoothScrollProvider>
  )
}
