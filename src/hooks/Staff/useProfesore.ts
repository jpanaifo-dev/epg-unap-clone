import { getListProfesoresApi } from '@/api/profesor'
import { type IProfesor } from '@/types'
import { useState } from 'react'

export function useProfesor() {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [profesores, setProfesores] = useState<IProfesor[]>([])

  // const getListProfesores = async () => {
  //   try {
  //     setLoading(true)
  //     const response = await getListProfesoresApi()
  //     setProfesores(response)
  //     setLoading(false)
  //   } catch (error) {
  //     setLoading(false)
  //     setError(true)
  //   }
  // }

  return { loading, error, profesores }
}
