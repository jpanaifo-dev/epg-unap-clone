'use client'

import { CardStaff } from '@/components'
import { useStaff } from '@/hooks/useStaff'
import { useEffect } from 'react'

export default function AuthoritiesSection () {
  const { staff, getAutoridadesList } = useStaff()

  useEffect(() => {
    getAutoridadesList()
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* TODO: Cambiar por datos reales de la base de datos */}
      {staff.map((item) => (
        <CardStaff
          key={item.id}
          name={item.persona.full_name}
          role={item.cargo}
          image={item.persona.foto}
          // TODO: Add profile urls
          profileUrl="#"
          hasImage={true}
        />
      ))}
    </div>
  )
}
