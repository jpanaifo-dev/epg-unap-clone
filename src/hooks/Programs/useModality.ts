// import { getModalitiesApi } from '@/api/modality'
import { type IModality } from '@/types'
import { useState } from 'react'

export function useModality () {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [modalities, setModalities] = useState<IModality[]>([])

  // const getModalities = async () => {
  //   try {
  //     setLoading(true)
  //     const response = await getModalitiesApi()
  //     // setModalities([{ id: 0, nombre: 'todas' }, ...response])
  //     setModalities(response)
  //     setLoading(false)
  //   } catch (error) {
  //     setLoading(false)
  //     setError(true)
  //   }
  // }

  return {
    loading,
    error,
    modalities,
    // getModalities
  }
}
