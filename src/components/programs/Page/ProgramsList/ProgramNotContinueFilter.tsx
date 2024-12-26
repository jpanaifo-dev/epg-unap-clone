/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect } from 'react'
import { Select, SelectItem, Selection } from '@nextui-org/react'
import { useProgramTypes, useFilterFromUrl } from '@/hooks'
import { IProgramType } from '@/types'

function getProgramsTypesWithAllOption(programs: IProgramType[]) {
  return [
    { value: 'all', label: 'TODOS LOS TIPOS' },
    ...programs?.map((program) => ({
      value: program?.nombre,
      label: `${program?.nombre}`
    }))
  ]
}

export const ProgramNotContinueFilter = () => {
  const { fcProgramTypes, getFcProgramTypes, loading } = useProgramTypes()
  const { getParams, updateFilter } = useFilterFromUrl()

  const tipo = getParams('continua', '')

  useEffect(() => {
    getFcProgramTypes()
  }, [])

  const programTypes = getProgramsTypesWithAllOption(fcProgramTypes)

  const handleFacultiesChange = (val: Selection) => {
    const value = Object.values(val)[0]
    const valueLowerCase = value.toLowerCase()

    if (value === 'all') {
      updateFilter('continua', '')
    } else {
      updateFilter('continua', valueLowerCase)
    }
  }

  return (
    <div className="w-full sm:w-56">
      <Select
        aria-label="Facultad"
        radius="sm"
        variant="bordered"
        size="lg"
        label="Tipo de programa"
        placeholder="Seleccionar tipo"
        labelPlacement="outside"
        disallowEmptySelection
        defaultSelectedKeys={['all']}
        classNames={{
          popoverContent: 'rounded-md z-40'
        }}
        selectedKeys={[tipo.toUpperCase() || 'all']}
        onSelectionChange={handleFacultiesChange}
      >
        {programTypes?.map((faculty) => (
          <SelectItem key={faculty.value} value={faculty.value}>
            {faculty.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}
