'use client'

import { CardStaff } from '@/components'
import { useStaff } from '@/hooks/useStaff'
import { type IStaff } from '@/types'
// import FilterAdminsSection from './sections/filterAdminsSection'
// import ListAdminsSection from './sections/listAdminsSection'
import { Input, Pagination } from '@nextui-org/react'
import { useEffect, useMemo, useState } from 'react'

export default function AdminStaffPage () {
  const { staff, getStaffList } = useStaff()
  useEffect(() => {
    getStaffList()
  }, [])

  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSearch = (e: string) => {
    setSearchTerm(e)
    setCurrentPage(1)
  }

  const filteredData = useMemo(() => {
    return staff.filter((staff) => {
      const nameMatch = staff.persona.full_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
      return nameMatch
    })
  }, [searchTerm, staff])

  // For pagination
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 12
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const currentPageData = filteredData.slice(startIndex, endIndex)

  return (
    <>
      {/* TODO: Cambiar esto por un filtro de personas que tengan el rol de algun personal administrativo en la institucion de epg */}
      {/* <FilterAdminsSection />
      <ListAdminsSection /> */}
      <div className="flex flex-col">
        <div className="grid md:flex gap-3 pb-6">
          <Input
            isClearable
            type="text"
            variant="bordered"
            size="lg"
            placeholder="Buscar por nombre"
            value={searchTerm}
            className="w-full rounded-none"
            onClear={() => {
              handleSearch('')
            }}
            onChange={(e) => {
              handleSearch(e.target.value)
            }}
          />
        </div>
        {/* No results message */}
        {currentPageData.length === 0 && searchTerm !== '' && (
          <div className="text-center text-gray-500 my-6">
            No hay resultados para mostrar
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPageData.map((staff: IStaff) => (
            <CardStaff
              key={staff.id}
              name={staff.persona.full_name}
              role={staff.cargo}
              hasImage={false}
              profileUrl="#"
            />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            total={totalPages}
            page={currentPage}
            onChange={(newPage) => {
              setCurrentPage(newPage)
            }}
            className="my-6 mx-auto"
          />
        )}
      </div>
    </>
  )
}
