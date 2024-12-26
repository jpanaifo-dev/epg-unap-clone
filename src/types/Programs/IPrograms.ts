import { type IFacultad, type IProgramType } from '.'

export interface IProgram {
  id: number
  codigo: string
  nombre: string
  is_active: boolean
  description: string
  objective: string
  applicant_profile: string
  graduate_profile: string
  background: string
  costo: string
  cantidad_matriculas: number
  cuotas: number
  horas_academicas: number
  tipo: number
  facultad: number
}

export interface IProgramList {
  id: number
  codigo: string
  nombre: string
  is_active: boolean
  description: string
  objective: string
  applicant_profile: string
  graduate_profile: string
  background: string
  costo: string
  cantidad_matriculas: number
  cuotas: number
  horas_academicas: number
  tipo: IProgramType
  facultad: IFacultad
}
export interface IProgramFilter {
  page?: number
  nombre__icontains?: string
  nombre?: string
  codigo__icontains?: string
  codigo?: string
  facultad?: number
  tipo?: number
  tipo__nombre__icontains?: string
  tipo__nombre?: string
  tipo__is_continua?: boolean
  ordering?: string
}
