import { useState } from 'react'
import { fetchFacultiesApi } from '@/api'
import { IFacultadFilter, IFacultad } from '@/types'

export function useFaculties() {
  const [loading, setLoading] = useState<boolean>(true)
  // const [faculties, setFaculties] = useState<IFacultad[]>([])
  const [facultiesApi, setFacultiesApi] = useState<IFacultad[]>([])

  // const getFaculties = async (filters: IFacultadFilter) => {
  //   try {
  //     setLoading(true)
  //     const response = await fetchFacultiesApi(filters)
  //   } catch (error) {
  //     setError(true)
  //   }
  //   setLoading(false)
  // }

  const getFacultiesApi = async (filters: IFacultadFilter) => {
    try {
      setLoading(true)
      const response = await fetchFacultiesApi(filters)

      if (response.ok) {
        const data = await response.json()
        setFacultiesApi(data)
      } else {
        setFacultiesApi([])
      }
    } catch (error) {
      setFacultiesApi([])
      console.error('Error fetching faculties', error)
    }
    setLoading(false)
  }

  return {
    loading,
    // getFaculties,
    getFacultiesApi,
    facultiesApi
  }
}
