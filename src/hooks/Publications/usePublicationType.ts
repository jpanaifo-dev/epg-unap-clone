import { useState } from 'react'
import { fetchPublicationType } from '@/api'
import { IPublicationType, IPublicationTypeFilter, IResApi } from '@/types'

export function usePublicationTypes() {
  const [loading, setLoading] = useState<boolean>(true)
  const [publicationTypes, setPublicationTypes] =
    useState<IResApi<IPublicationType> | null>(null)

  const getListPublicationTypes = async (query: IPublicationTypeFilter) => {
    try {
      setLoading(true)
      const response = await fetchPublicationType(query)
      if (response.status === 200) {
        const data = await response.json()
        setPublicationTypes(data)
      } else {
        setPublicationTypes(null)
      }

      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  return {
    loading,
    publicationTypes,
    getListPublicationTypes
  }
}
