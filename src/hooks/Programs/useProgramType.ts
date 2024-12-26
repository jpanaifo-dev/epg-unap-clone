'use client'
import { IProgramType, IProgramTypeFilter, IResApi } from '@/types'
import { useState } from 'react'
import { fetchProgramsType } from '@/api'

export function useProgramTypes() {
  const [loading, setLoading] = useState<boolean>(true)
  const [fcProgramTypes, setFcProgramTypes] = useState<IProgramType[]>([])
  const [programTypes, setProgramTypes] = useState<IProgramType[]>([])

  const getFcProgramTypes = async () => {
    try {
      setLoading(true)
      const response = await fetchProgramsType({
        is_continua: true
      })
      const data: IResApi<IProgramType> =
        (await response.json()) as IResApi<IProgramType>
      setFcProgramTypes(data.results)
    } catch (error) {
      setFcProgramTypes([])
      console.error('Error fetching faculties', error)
    } finally {
      setLoading(false)
    }
  }

  const getProgramTypes = async () => {
    try {
      setLoading(true)
      const response = await fetchProgramsType({
        is_continua: false
      })
      const data: IResApi<IProgramType> =
        (await response.json()) as IResApi<IProgramType>
      setProgramTypes(data.results)
    } catch (error) {
      setProgramTypes([])
      console.error('Error fetching faculties', error)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    programTypes,
    getProgramTypes,
    getFcProgramTypes,
    fcProgramTypes
  }
}
