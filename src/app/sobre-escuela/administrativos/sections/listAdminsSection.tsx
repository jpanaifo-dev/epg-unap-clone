'use client'
import { Pagination } from '@nextui-org/react'
import { CardStaff } from '@/components'
import dataStaff from '@/utils/dataStaff.json'

export default function ListAdminsSection () {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataStaff.staffAdmin.map((staff) => (
          <CardStaff
            key={staff.id}
            name={staff.name}
            role={staff.role}
            hasImage={false}
            profileUrl={staff.urlProfile}
          />
        ))}
      </div>
      <div className="items-center justify-center flex w-full mt-4">
        <Pagination total={10} initialPage={1} />
      </div>
    </>
  )
}
