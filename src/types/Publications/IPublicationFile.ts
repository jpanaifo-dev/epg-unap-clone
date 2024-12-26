import { IPublicationList } from './IPublication'

export interface IPublicationFile {
  id: number
  description: string
  link: string
  file: string
  is_active: boolean
  is_frontpage: boolean
  uploaded_at: string
  publication: number
}

export interface IPublicationFileList {
  id: number
  description: string
  link: string
  file: string
  is_active: boolean
  is_frontpage: boolean
  uploaded_at: string
  publication: IPublicationList
}

export interface IFilterPublicationFile {
  descriptionQuery?: string
  titleQuery?: string
  publication?: number
  isActive?: boolean
  isFrontPage?: boolean
  isBanner?: boolean
  uploadedAt?: string
  uploadedAt__gte?: string
  uploadedAt__lte?: string
  publication__type?: string
  publication__is_active?: boolean
}
