'use client'
import { Pagination } from '@nextui-org/react'
import { CardStaff } from '@/components'
import dataTeachers from '@/utils/dataTeachers.json'

export default function ListTeachersSection () {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {dataTeachers.map((teacher) => (
          <CardStaff
            key={teacher.id}
            name={teacher.name}
            hasImage={true}
            image="https://img.freepik.com/foto-gratis/sonriente-sosteniendo-libros-joven-profesor-pie-frente-pizarra-aula_141793-136547.jpg?w=996&t=st=1697041699~exp=1697042299~hmac=129dfbe23eb81521e06fb0fdc1f45ded7eb4b350ffe85851022f3ae291dcc742"
            profileUrl="#"
          />
        ))}
      </div>
      <div
      className='items-center justify-center flex w-full mt-4'
      >
        <Pagination total={10} initialPage={1} />
      </div>
    </>
  )
}
