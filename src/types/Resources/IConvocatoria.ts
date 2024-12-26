import { type IProgram } from '@/types'
export interface IConvocatoria {
  id: number
  fecha_inicio: string
  fecha_fin: string
  ano_convocatoria?: number
  is_active: boolean
  is_open: boolean
  is_formacion_continua?: boolean
  programas: IProgram[]
}
