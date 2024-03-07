import { type IStaff } from '.'
import { type IFacultad } from './IFacultad'

export interface IStaffFacultad {
  id: number
  staff: IStaff
  facultad: IFacultad
}
