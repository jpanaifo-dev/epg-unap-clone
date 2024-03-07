import { createContext, useContext, useEffect } from 'react'
import { useConvocatorias } from '@/hooks/useConvocatorias'
// import { useFilterFromUrl } from '@/hooks/useFilterFromUrl'

import { type IConvocatoria } from '@/types'

export const ConvocatoriaContext = createContext<{
  convocatoriasList: IConvocatoria[]
  convocatoriasAbiertas: IConvocatoria[]
  loading?: boolean
}>({
  convocatoriasList: [],
  convocatoriasAbiertas: [],
  loading: false
})

export const ConvocatoriaProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const {
    fetchConvocatorias,
    fetchConvocatoriasAbiertas,
    convocatorias,
    convocatoriasAbiertas,
    loading
  } = useConvocatorias()

  useEffect(() => {
    fetchConvocatoriasAbiertas()
    fetchConvocatorias()
  }, [])

  return (
    <ConvocatoriaContext.Provider
      value={{
        convocatoriasList: convocatorias,
        convocatoriasAbiertas,
        loading
      }}
    >
      {children}
    </ConvocatoriaContext.Provider>
  )
}

export const useLogicConvocatorias = () => useContext(ConvocatoriaContext)
