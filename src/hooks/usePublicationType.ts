import { getPublicationTypes } from '@/api/client/publicationTypes'
import { type IPublicationType } from '@/types'
import { useState } from 'react'

export function usePublicationTypes () {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [publicationTypes, setPublicationTypes] = useState<IPublicationType[]>(
    []
  )

  const getListPublicationTypes = async () => {
    try {
      setLoading(true)
      const response = await getPublicationTypes()
      setPublicationTypes(
        response.filter(
          (publicationType: IPublicationType) => publicationType.is_active
        )
      )
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }

  return {
    loading,
    error,
    publicationTypes,
    getListPublicationTypes
  }
}
