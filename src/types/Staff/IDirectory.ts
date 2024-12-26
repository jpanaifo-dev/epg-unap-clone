import { IFacultad } from '../Programs'
import { IProgram } from '../types'
import { IPersona } from './IPersona'

export interface IDirectory {
  id: number
  is_authority: boolean
  is_active: boolean
  person: number
  charge: number
  faculty: number | null
  program: number | null
}

export interface ICharge {
  id: number
  nombre: string
  is_active: boolean
}

export interface IDirectoryList {
  id: number
  is_authority: boolean
  is_active: boolean
  charge: ICharge
  person: IPersona
  faculty: IFacultad | null
  program: IProgram | null
}

export interface IDirectoryFilter {
  id?: string
  person?: string
  charge?: string
  is_active?: boolean
  is_authority?: boolean
  faculty?: string
  program?: string
  person__id?: string
  person__apellido_paterno__icontains?: string
  person__apellido_materno__icontains?: string
  page?: number
}
