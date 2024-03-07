import { type IFacultad, type IModality, type IProgramType } from '.'

export interface IProgram {
  id: number
  nombre: string
  codigo?: string
  is_active: boolean
  en_convocatoria: boolean
  costo?: string
  cuotas?: number
  cantidad_matriculas?: number
  facultad: IFacultad
  tipo_programa: IProgramType
  modalidad: IModality
}

export interface IProgramForList {
  id?: number
  image: string
  title: string
  modality: string
  programType: IProgramType
  isActive?: boolean
  en_convocatoria?: boolean
  faculty?: IFacultad
  link?: string
}

export interface IProgramFilter {
  sizePage: string
  currentPage: string
  search: string
  type: string
  isActive: string
  faculty: string
  modality: string
  isFcontinue: string
}

// "id": 42,
// "nombre": "DOCTORADO EN EDUCACIÓN",
// "codigo": "D006",
// "is_active": false,
// "costo": "421.00",
// "cuotas": 36,
// "cantidad_matriculas": 6,
// "facultad": 7,
// "tipo_programa": 2
