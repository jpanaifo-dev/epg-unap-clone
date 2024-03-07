import { useState } from 'react'
import { getFacultiesApi } from '@/api/faculties'
import { type IFacultad } from '@/types'

export function useFaculties () {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [faculties, setFaculties] = useState<IFacultad[]>([])

  const getFaculties = async () => {
    try {
      setLoading(true)
      const response = await getFacultiesApi()
      setFaculties(response)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }

  return {
    loading,
    error,
    faculties,
    getFaculties
  }
}
