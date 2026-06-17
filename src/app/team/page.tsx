import { getTeamMembers } from '@/lib/getTeamMembers'
import TeamPageClient from './TeamPageClient'

export default async function TeamPage() {
  const { ec, web, core } = await getTeamMembers()

  return (
    <TeamPageClient
      ecMembers={ec}
      webMembers={web}
      coreMembers={core}
    />
  )
}
