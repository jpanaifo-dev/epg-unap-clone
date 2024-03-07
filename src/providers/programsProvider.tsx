import { createContext, useContext, useEffect, useState } from 'react'
import { useFilterFromUrl } from '@/hooks/useFilterFromUrl'
import { type IProgramForList, type IProgramFilter } from '@/types/IPrograms'
import { usePrograms } from '@/hooks/usePrograms'

export const ProgramsContext = createContext<{
  programsList: IProgramForList[]
  filters: IProgramFilter
  setFilters: (filter: string, value: string) => void
  setTypeProgram: (value: string) => void
  setIsFContinue: (value: string) => void
  count: number
}>({
  programsList: [],
  filters: {
    sizePage: '10',
    currentPage: '1',
    search: '',
    type: '',
    isActive: '0',
    faculty: '',
    modality: '',
    isFcontinue: ''
  },
  setFilters: () => {},
  setTypeProgram: () => {},
  setIsFContinue: () => {},
  count: 0
})

export const ProgramsProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const { getParams, updateFilter } = useFilterFromUrl()
  const { getListPrograms, programsList, programs } = usePrograms()
  const [typeProgram, setTypeProgramSelected] = useState('')
  const [isFContinue, setIsFcontinue] = useState('')

  const filters = {
    sizePage: getParams('sizePage', '10'),
    currentPage: getParams('currentPage', '1'),
    search: getParams('search', ''),
    type: typeProgram ?? getParams('type_program', ''),
    isActive: getParams('en_convocatoria', ''),
    faculty: getParams('faculty', ''),
    modality: getParams('modality', ''),
    isFcontinue: isFContinue
  }

  const count = Math.ceil(programs.count / parseInt(filters.sizePage)) ?? 0

  const getListProgramsData = () => {
    getListPrograms(
      parseInt(filters.sizePage),
      parseInt(filters.currentPage),
      filters.search,
      filters.type,
      filters.isActive,
      filters.faculty,
      filters.modality,
      filters.isFcontinue
    )
  }

  useEffect(() => {
    getListProgramsData()
  }, [
    filters.sizePage,
    filters.currentPage,
    filters.search,
    filters.type,
    filters.isActive,
    filters.faculty,
    filters.modality,
    isFContinue
  ])

  const setFilters = (filter: string, value: string) => {
    updateFilter(filter, value)
  }

  const setTypeProgram = (value: string) => {
    setTypeProgramSelected(value)
  }

  const setIsFContinue = (value: string) => {
    setIsFcontinue(value)
  }

  return (
    <ProgramsContext.Provider
      value={{
        programsList,
        filters,
        setFilters,
        setTypeProgram,
        setIsFContinue,
        count
      }}
    >
      {children}
    </ProgramsContext.Provider>
  )
}

export const useLogicPrograms = () => useContext(ProgramsContext)
