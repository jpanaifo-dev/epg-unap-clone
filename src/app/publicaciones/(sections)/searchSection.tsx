'use client'
import { useEffect, useState } from 'react'
import { Input } from '@nextui-org/react'
import { IconSearch } from '@tabler/icons-react'
import { useFilterFromUrl } from '@/hooks/useFilterFromUrl'
import { useLogicPublications } from '@/providers/publicationProvider'

export const SearchSection = () => {
  const { getParams } = useFilterFromUrl()
  const { setFilters } = useLogicPublications()

  const [search, setSearch] = useState('')
  const textSearch = getParams('search', '')

  const handleSearch = () => {
    setFilters('search', search)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  useEffect(() => {
    setSearch(textSearch)
  }, [textSearch])

  return (
    <div className="mb-6">
      <Input
        variant="bordered"
        size="sm"
        placeholder="Buscar publicación"
        startContent={<IconSearch size={20} />}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        // isClearable
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}
