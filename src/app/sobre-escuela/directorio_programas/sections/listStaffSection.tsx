'use client'
import { Pagination } from '@nextui-org/react'
import { CardStaff } from '@/components'
import { useStaff } from '@/hooks/useStaff'
import { useEffect } from 'react'

export default function ListSection () {
  const { directorioFacultades, getDirectorioFacultades } = useStaff()

  useEffect(() => {
    getDirectorioFacultades()
  }, [])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {directorioFacultades.map((item) => (
          <CardStaff
            key={item.id}
            name={item.staff.persona.full_name}
            role={item.staff.cargo}
            hasImage={false}
            faculty={item.facultad.nombre}
            profileUrl={''}
          />
        ))}
        {/* {dataStaff.staffProgram.map((staff) => (
          <CardStaff
            key={staff.id}
            name={staff.name}
            role={staff.role}
            hasImage={false}
            faculty={staff.faculty}
            profileUrl={staff.urlProfile}
          />
        ))} */}
      </div>
      <div className="items-center justify-center flex w-full mt-4">
        <Pagination total={10} initialPage={1} />
      </div>
    </>
  )
}
