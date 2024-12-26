'use client'

import FilterTeacherSection from './sections/filterSection'
import ListTeachersSection from './sections/listTeacherSection'
import { useProfesor } from '@/hooks'
import { useEffect } from 'react'

export default function ListTeachersPage() {
  // const { getListProfesores } = useProfesor()

  // useEffect(() => {
  //   getListProfesores()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <main className="flex flex-col gap-6">
      <FilterTeacherSection />
      <ListTeachersSection />
    </main>
  )
}
