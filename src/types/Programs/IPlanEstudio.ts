import { ICurso } from './ICurso'

export interface IPlanEstudio {
  id: number
  nombre: string
  is_active: boolean
  costo: null | number
  comision: null | number
  cuotas: number
  matriculas: number
  modalidad: string
  sede: null | string
  duracion_academica: number
  programa: number
}

export interface ICiclo {
  ciclo: number
  cursos: ICurso[]
}

export interface IPlanEstudioListApi {
  plan_estudio: IPlanEstudio
  ciclos: ICiclo[]
  horas_totales: number
  creditos_totales: number
}

export interface IPlanEstudioApiFilter {
  id?: number
  nombre__icontains?: string
  nombre?: string
  is_active?: boolean
  programa: number
  programa__nombre__icontains?: string
  programa__nombre?: string
  programa__facultad?: number
  programa__facultad__nombre__icontains?: string
  programa__facultad__nombre?: string
  programa__tipo?: number
  programa__tipo__nombre__icontains?: string
  programa__tipo__nombre?: string
  programa__tipo__is_continua?: boolean
  modalidad?: number
  sede?: number
}
