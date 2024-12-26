export interface IFacultad {
  id: number
  nombre: string
  sigla: string
}

export interface IFacultadFilter {
  id?: number
  nombre__icontains?: string
  nombre?: string
  sigla__icontains?: string
  sigla?: string
  page?: number
}
