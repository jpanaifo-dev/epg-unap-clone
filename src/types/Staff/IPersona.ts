export interface IPersona {
  id: number
  created_at: string
  updated_at: string
  numero_documento: string
  nombres: string
  apellido_paterno: string
  apellido_materno: string
  sexo: string
  fecha_nacimiento: string
  correo: string
  is_active: boolean
  foto: null
  celular: null
  full_name: string
  tipo_documento: IDocumentoTipo
  pais: IPais
  user: IUser
}

export interface IDocumentoTipo {
  id: number
  nombre: string
  is_active: boolean
}

export interface IPais {
  id: number
  nombre: string
  is_active: boolean
}

export interface IUser {
  id: number
  password: string
  last_login: null
  is_superuser: boolean
  username: string
  first_name: string
  last_name: string
  email: string
  is_staff: boolean
  is_active: boolean
  date_joined: string
  groups: IGroup[]
  user_permissions: any[]
}

export interface IGroup {
  id: number
  name: string
  permissions: any[]
}
