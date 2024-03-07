export interface IPersona {
  id: number
  numero_documento: string
  nombres: string
  apellido_paterno: string
  apellido_materno: string
  sexo: string
  fecha_nacimiento: string
  is_active: boolean
  correo: string
  foto: string | null
  celular: string
  full_name: string
  tipo_documento: string
  pais: string
}
