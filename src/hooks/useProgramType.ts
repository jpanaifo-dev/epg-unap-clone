import { getProgramTypesApi } from '@/api/programType'
import { type IProgramType } from '@/types'
import { useState } from 'react'

export function useProgramTypes () {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [programTypes, setProgramTypes] = useState<IProgramType[]>([])
  const [pgTypesNotContinue, setPgTypesNotContinue] = useState<IProgramType[]>(
    []
  )

  const getFCProgramTypes = async () => {
    try {
      setLoading(true)
      const response = await getProgramTypesApi()
      setPgTypesNotContinue(
        response.filter(
          (programType: IProgramType) =>
            programType.is_formacion_continua === false
        )
      )
      setProgramTypes([
        // { id: 0, nombre: 'todos' },
        ...response.filter(
          (programType: IProgramType) => programType.is_formacion_continua
        )
      ])
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }

  return { loading, error, programTypes, getFCProgramTypes, pgTypesNotContinue }
}
