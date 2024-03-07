import { createContext, useContext, useEffect, useState } from 'react'
import { usePublications } from '@/hooks/usePublications'
import { useFilterFromUrl } from '@/hooks/useFilterFromUrl'
import { usePublicationTypes } from '@/hooks/usePublicationType'
import {
  type IPublicationForList,
  type IPublicationFilter,
  type IPublicationType
} from '@/types'

export const PublicationsContext = createContext<{
  publicationsList: IPublicationForList[]
  filters: IPublicationFilter
  setFilters: (filter: string, value: string) => void
  setTypePublication: (type: string) => void
  count: number
  publicationTypes: IPublicationType[]
  comunicados: IPublicationForList[]
  loading?: boolean
}>({
  publicationsList: [],
  filters: {
    sizePage: '10',
    currentPage: '1',
    search: '',
    type: ''
  },
  setFilters: () => {},
  setTypePublication: () => {},
  count: 0,
  publicationTypes: [],
  comunicados: [],
  loading: false
})

export const PublicationsProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const { getParams, updateFilter } = useFilterFromUrl()
  const {
    getListPublications,
    getComunicados,
    publicationsList,
    publications,
    comunicados,
    loading
  } = usePublications()
  const { publicationTypes, getListPublicationTypes } = usePublicationTypes()
  const [typePublication, setTypePublication] = useState('' as string)
  const filters = {
    sizePage: getParams('sizePage', '10'),
    currentPage: getParams('currentPage', '1'),
    search: getParams('search', ''),
    type: typePublication
  }

  const count = Math.ceil(publications.count / parseInt(filters.sizePage)) ?? 0

  const getListPublicationsData = () => {
    getListPublications(
      parseInt(filters.sizePage),
      parseInt(filters.currentPage),
      filters.search,
      filters.type
    )
  }

  useEffect(() => {
    getListPublicationTypes()
  }, [])

  useEffect(() => {
    getComunicados()
  }, [])

  useEffect(() => {
    getListPublicationsData()
  }, [filters.currentPage, filters.sizePage, filters.search, typePublication])

  const setFilters = (filter: string, value: string) => {
    updateFilter(filter, value)
  }

  return (
    <PublicationsContext.Provider
      value={{
        publicationsList,
        filters,
        setFilters,
        count,
        setTypePublication,
        publicationTypes,
        comunicados,
        loading
      }}
    >
      {children}
    </PublicationsContext.Provider>
  )
}

export const useLogicPublications = () => useContext(PublicationsContext)
