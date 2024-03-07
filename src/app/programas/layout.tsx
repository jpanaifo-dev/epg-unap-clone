'use client'
import { ProgramsProvider } from '@/providers/programsProvider'

export default function StudentLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return <ProgramsProvider>{children}</ProgramsProvider>
}
