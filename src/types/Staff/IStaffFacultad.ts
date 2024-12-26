import { type IStaff } from '.'
import { type IFacultad } from '@/types'

export interface IStaffFacultad {
  id: number
  staff: IStaff
  facultad: IFacultad
}
