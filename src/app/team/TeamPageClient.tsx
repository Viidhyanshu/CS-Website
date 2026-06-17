'use client'

import { useEffect } from 'react'
import HeroSection from '@/app/team/HeroSection'
import MainContent from '@/app/team/MainContent'
import SmoothScrollProvider from '@/app/team/SmoothScrollProvider'
import dynamic from 'next/dynamic'
import type { TeamMember } from '@/data/teamData'

const StackedSections = dynamic(() => import('@/app/team/StackedSections'), { ssr: false })

export default function TeamPageClient({
  ecMembers,
  webMembers,
  coreMembers,
}: {
  ecMembers: TeamMember[]
  webMembers: TeamMember[]
  coreMembers: TeamMember[]
}) {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <SmoothScrollProvider>
      <main>
        <HeroSection ecMembers={ecMembers} />
        <MainContent />
        <StackedSections webMembers={webMembers} coreMembers={coreMembers} />
      </main>
    </SmoothScrollProvider>
  )
}
