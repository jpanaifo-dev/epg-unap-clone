/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { Suspense, useEffect, useState } from 'react'
import { CardStaff } from '@/components/staff'
import { IDirectoryList, IResApi } from '@/types'
import { Input, Pagination } from '@nextui-org/react'
import { IconSearch } from '@tabler/icons-react'
import { useFilterFromUrl } from '@/hooks'
interface IProps {
  data: IResApi<IDirectoryList> | null
}

function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: NodeJS.Timeout
  return (...args: any[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export const AdministrativosList = (props: IProps) => {
  const [search, setSearch] = useState('')
  const { data } = props
  const { updateFilter, getParams } = useFilterFromUrl()

  const total = data ? Math.ceil(data?.count / 10) || 0 : 0
  const pageValue = getParams('page', '1')
  const page = Number(pageValue)

  useEffect(() => {
    const debounced = debounce(() => {
      updateFilter('search', search)
    }, 500)

    debounced()
  }, [search])

  const handleIdProfile = (id: string) => {
    updateFilter('detalle', id)
  }

  return (
    <main className="flex flex-col gap-6">
      <header className="flex justify-between">
        <div></div>
        <div className="w-96">
          <Input
            placeholder="Buscar..."
            variant="bordered"
            radius="sm"
            size="lg"
            startContent={<IconSearch />}
            onValueChange={(value) => setSearch(value)}
          />
        </div>
      </header>
      <Suspense fallback={<div>Cargando...</div>}>
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data &&
            data.results.length > 0 &&
            data.results.map((item) => (
              <CardStaff
                id={item.id.toString()}
                disabledImage
                key={item.id}
                fullName={item.person.full_name}
                email={item.person.correo}
                role={item.charge.nombre}
                onPress={handleIdProfile}
              />
            ))}
        </main>
        <main>
          {!data ||
            (data && data?.results?.length === 0 && (
              <div>No se encontraron resultados</div>
            ))}
        </main>
      </Suspense>
      <footer className="flex items-center justify-between">
        <div></div>
        <div>
          <Pagination total={total} page={page} radius="sm" showControls />
        </div>
      </footer>
    </main>
  )
}
