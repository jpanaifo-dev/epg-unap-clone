'use client'
import { useEffect } from 'react'
import {
  Autocomplete,
  AutocompleteItem,
  Checkbox,
  Divider,
  Select,
  SelectItem
} from '@nextui-org/react'
import { useFilterFromUrl } from '@/hooks/useFilterFromUrl'
import { useFaculties } from '@/hooks/useFaculties'
import { useModality } from '@/hooks/useModality'
import { useProgramTypes } from '@/hooks/useProgramType'
import { useLogicPrograms } from '@/providers/programsProvider'
export const FiltersSection = ({ isFContinue }: { isFContinue: boolean }) => {
  const { getParams, updateFilter } = useFilterFromUrl()
  const isActived = getParams('en_convocatoria', '')
  const { filters } = useLogicPrograms()
  const { getFaculties, faculties } = useFaculties()
  const { getModalities, modalities } = useModality()
  const { getFCProgramTypes, programTypes } = useProgramTypes()

  const changeActive = (value: string) => {
    if (value === '0') {
      updateFilter('en_convocatoria', '')
    } else {
      updateFilter('en_convocatoria', value)
    }
  }

  useEffect(() => {
    getFaculties()
    getModalities()
  }, [])

  useEffect(() => {
    if (isFContinue) {
      getFCProgramTypes()
    }
  }, [isFContinue])

  return (
    <div className="space-y-4 ">
      <div>
        <h2 className="text-sm mb-3">Facultad</h2>
        <Autocomplete
          variant="bordered"
          placeholder="Seleccionar facultad"
          aria-label="Facultad"
          selectedKey={getParams('faculty', '')}
          defaultItems={faculties}
          value={filters?.faculty}
          onSelectionChange={(value) => {
            updateFilter('faculty', value ? value.toString() : '')
          }}
        >
          {faculties?.length > 0
            ? faculties?.map((option) => (
                <AutocompleteItem
                  key={option.id}
                  value={option.id}
                  aria-label="Facultad"
                >
                  {option.nombre}
                </AutocompleteItem>
              ))
            : []}
        </Autocomplete>
      </div>
      <div>
        <h2 className="text-sm mb-3">Modalidad</h2>
        <Select
          placeholder="Seleccionar modalidad"
          aria-label="modality"
          variant="bordered"
          value={filters?.modality}
          onChange={(value) => {
            updateFilter('modality', value ? value.target.value.toString() : '')
          }}
        >
          {modalities?.length > 0
            ? modalities?.map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  {option.nombre}
                </SelectItem>
              ))
            : []}
        </Select>
      </div>
      <div>
        {isFContinue === true && (
          <div>
            <h2 className="text-sm mb-3">Categorias</h2>
            <Select
              placeholder="Seleccionar modalidad"
              aria-label="modality"
              variant="bordered"
              value={filters?.type}
              onChange={(value) => {
                updateFilter(
                  'type_program',
                  value ? value.target.value.toString() : ''
                )
              }}
            >
              {programTypes?.length > 0
                ? programTypes?.map((option) => (
                    <SelectItem
                      key={option?.key ? option?.key : ''}
                      value={option.key}
                    >
                      {option.nombre}
                    </SelectItem>
                  ))
                : []}
            </Select>
          </div>
        )}
      </div>
      <Divider />
      <Checkbox
        size="sm"
        isSelected={isActived === '1' ? true : false}
        value={filters?.isActive}
        onValueChange={(value) => {
          changeActive(value ? '1' : '0')
        }}
      >
        Solo en convocatoria
      </Checkbox>
    </div>
  )
}
