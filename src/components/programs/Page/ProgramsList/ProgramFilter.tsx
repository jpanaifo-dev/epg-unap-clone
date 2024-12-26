/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from 'react'
import {
  Button,
  ButtonGroup,
  Input,
  Select,
  SelectItem,
  Selection
} from '@nextui-org/react'
import {
  IconSearch,
  IconLayoutGrid,
  IconListDetails
} from '@tabler/icons-react'
import { useFilterFromUrl, useFaculties } from '@/hooks'
import { IFacultad } from '@/types'
import { usePathname } from 'next/navigation'
import { OrderFilter } from './OrderFilter'
import { ProgramNotContinueFilter } from './ProgramNotContinueFilter'

function getFacultiesWithAllOption(faculties: IFacultad[]) {
  return [
    { value: 'all', label: 'TODAS LAS FACULTADES' },
    ...faculties?.map((faculty) => ({
      value: faculty?.id,
      label: `${faculty?.nombre} - ${faculty?.sigla}`
    }))
  ]
}

function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: NodeJS.Timeout
  return (...args: any[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export const ProgramFilter = () => {
  const [searchValue, setSearchValue] = useState('')
  const { getParams, updateFilter } = useFilterFromUrl()
  const { facultiesApi, getFacultiesApi } = useFaculties()
  const pathname = usePathname()

  // const searchValue = getParams('search', '')
  const view = getParams('view', 'grid')
  const faculty = getParams('facultad', '')

  const isContinue = pathname === '/programas/formacion-continua'

  useEffect(() => {
    getFacultiesApi({})
  }, [])

  const faculties = getFacultiesWithAllOption(facultiesApi)

  const handleFacultiesChange = (val: Selection) => {
    const value = Object.values(val)[0]

    if (value === 'all') {
      updateFilter('facultad', '')
    } else {
      updateFilter('facultad', value)
    }
  }

  useEffect(() => {
    const debounced = debounce(() => {
      updateFilter('search', searchValue)
    }, 500)

    debounced()
  }, [searchValue])

  return (
    <main className="bg-white sticky top-[76px] lg:top-[108px] z-50">
      <section className="container pt-4 pb-6 sm:py-4 ">
        <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center gap-4">
          <div className="w-full flex flex-col sm:flex-row items-center gap-4">
            <div className="w-full sm:max-w-lg">
              <Input
                label="Buscar programa"
                labelPlacement="outside"
                placeholder="Buscar por nombre ..."
                radius="sm"
                variant="bordered"
                size="lg"
                startContent={<IconSearch size={20} />}
                value={searchValue}
                onValueChange={(searchValue) => setSearchValue(searchValue)}
              />
            </div>
            <div className="w-full sm:w-72">
              <Select
                aria-label="Facultad"
                radius="sm"
                variant="bordered"
                size="lg"
                label="Facultad"
                placeholder="Seleccionar facultad"
                labelPlacement="outside"
                disallowEmptySelection
                defaultSelectedKeys={['all']}
                classNames={{
                  popoverContent: 'rounded-md z-40'
                }}
                selectedKeys={[faculty || 'all']}
                onSelectionChange={handleFacultiesChange}
              >
                {faculties?.map((faculty) => (
                  <SelectItem key={faculty.value} value={faculty.value}>
                    {faculty.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            {isContinue && <ProgramNotContinueFilter />}
          </div>
          <section className="flex gap-4 items-center">
            <OrderFilter />
            <ButtonGroup radius="sm">
              <Button
                isIconOnly
                variant={view === 'grid' ? 'solid' : 'bordered'}
                onPress={() => updateFilter('view', '')}
              >
                <IconLayoutGrid size={20} />
              </Button>
              <Button
                isIconOnly
                variant={view === 'list' ? 'solid' : 'bordered'}
                onPress={() => updateFilter('view', 'list')}
              >
                <IconListDetails size={20} />
              </Button>
            </ButtonGroup>
          </section>
        </div>
      </section>
    </main>
  )
}
