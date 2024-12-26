import { type IStaffFacultad, type IStaff } from '@/types'
import { useState } from 'react'

export function useStaff() {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [staff, setStaff] = useState<IStaff[]>([])
  const [directorioFacultades, setDirectorioFacultades] = useState<
    IStaffFacultad[]
  >([])

  const getStaffList = async () => {
    try {
      setLoading(true)
      // const response = await getListStaffApi()
      // setStaff(response)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }

  const getAutoridadesList = async () => {
    try {
      setLoading(true)
      // const response = await getListAutoridadesApi()
      // setStaff(response)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }

  const getDirectorioFacultades = async () => {
    try {
      setLoading(true)
      // const response = await getDirectorioFacultadesApi()
      // setDirectorioFacultades(response)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }

  return {
    loading,
    error,
    staff,
    directorioFacultades,
    getStaffList,
    getAutoridadesList,
    getDirectorioFacultades
  }
}
