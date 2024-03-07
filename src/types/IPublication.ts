import { type IPublicationType } from '.'

export interface IPublication {
  id: number
  titulo: string
  hora: string
  fecha: string
  lugar: string
  descripcion: string
  tipo_publicacion: IPublicationType
}

export interface IPublicationForList {
  id?: number
  image: string
  title: string
  description?: string
  typePublication: IPublicationType
  hora?: string
  fecha: string
  lugar?: string
  link?: string
}

export interface IPublicationFilter {
  sizePage: string
  currentPage: string
  search: string
  type: string
}
