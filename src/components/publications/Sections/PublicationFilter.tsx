'use client'
// import { useState } from 'react'
import { Input } from '@nextui-org/react'
import { IconSearch } from '@tabler/icons-react'
import { useFilterFromUrl } from '@/hooks'

export const PublicationFilter = () => {
  const { getParams, updateFilter } = useFilterFromUrl()
  // const [searQuery, setSearchQuery] = useState('')
  const search = getParams('search', '')
  const dateStart = getParams('dateStart', '')
  const dateEnd = getParams('dateEnd', '')

  const handleSearch = (value: string) => {
    updateFilter('search', value)
  }

  return (
    <main className="w-full flex items-start justify-between">
      <section className="w-full max-w-xl">
        <Input
          aria-label="Buscar publicación"
          placeholder="Buscar publicación..."
          radius="sm"
          variant="bordered"
          size="lg"
          startContent={<IconSearch size={20} />}
          value={search}
          onValueChange={handleSearch}
          // value={searQuery}
          // onValueChange={(value) => setSearchQuery(value)}
        />
      </section>
      <section className="flex items-center gap-3">
        <Input
          aria-label="Desde"
          type="date"
          variant="bordered"
          label="Desde"
          labelPlacement="outside-left"
          radius="sm"
          size="lg"
          value={dateStart}
          onValueChange={(value) => updateFilter('dateStart', value)}
        />
        <Input
          aria-label="Hasta"
          type="date"
          variant="bordered"
          label="Hasta"
          labelPlacement="outside-left"
          radius="sm"
          size="lg"
          value={dateEnd}
          onValueChange={(value) => updateFilter('dateEnd', value)}
        />
      </section>
    </main>
  )
}
