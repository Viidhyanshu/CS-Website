'use client'

import { useEffect } from 'react'
import HeroSection from '@/app/team/HeroSection'
import MainContent from '@/app/team/MainContent'
import SmoothScrollProvider from '@/app/team/SmoothScrollProvider'
import LineBackground from '@/components/LineBackground'
import dynamic from 'next/dynamic'

const StackedSections = dynamic(() => import('@/app/team/StackedSections'), { ssr: false })

export default function TeamPage() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <SmoothScrollProvider>
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <LineBackground
          lineColor="rgba(180, 140, 60, 0.75)"
          backgroundColor="#0d0d0d"
          lineCount={14}
          animated={true}
        />
      </div>
      <main className="relative z-10 bg-transparent">
        <HeroSection />
        <MainContent />
        <StackedSections />
      </main>
    </SmoothScrollProvider>
  )
}
