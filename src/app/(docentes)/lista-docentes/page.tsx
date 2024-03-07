'use client'

import { MainSection } from '@/components'
import FilterTeacherSection from './sections/filterSection'
import ListTeachersSection from './sections/listTeacherSection'
import { useProfesor } from '@/hooks/useProfesore'
import { useEffect } from 'react'

export default function ListTeachersPage () {
  const { profesores, getListProfesores } = useProfesor()

  useEffect(() => {
    getListProfesores()
  }, [])

  console.log(profesores)

  return (
    <>
      <MainSection>
        <h2 className="text-black text-lg font-bold leading-7">
          Nuestros docentes
        </h2>

        {/* TODO: Add a PersonFilter component where to pass a person array object to be filtered and rendered */}
        <FilterTeacherSection />
        <ListTeachersSection />
      </MainSection>
    </>
  )
}
