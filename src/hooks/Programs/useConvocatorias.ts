import { useState } from 'react'
// import {
//   getConvocatoriasAbiertas,
//   getConvocatorias
// } from '@/api/client/convocatorias'
import { type IConvocatoria } from '@/types'

export function useConvocatorias () {
  const [loading, setLoading] = useState<boolean>(false)
  const [convocatorias, setConvocatorias] = useState<IConvocatoria[]>([])
  const [convocatoriasAbiertas, setConvocatoriasAbiertas] = useState<IConvocatoria[]>([])

  // const fetchConvocatorias = async () => {
  //   try {
  //     setLoading(true)
  //     const response = await getConvocatorias()
  //     setConvocatorias(response.results)
  //     setLoading(false)
  //   } catch (error) {
  //     setLoading(false)
  //   }
  // }

  // const fetchConvocatoriasAbiertas = async () => {
  //   try {
  //     setLoading(true)
  //     const response = await getConvocatoriasAbiertas()
  //     setConvocatoriasAbiertas(response)
  //     setLoading(false)
  //   } catch (error) {
  //     setLoading(false)
  //   }
  // }

  return {
    convocatorias,
    convocatoriasAbiertas,
    // fetchConvocatorias,
    // fetchConvocatoriasAbiertas,
    loading
  }
}
