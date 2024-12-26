import { IPublicationType } from './IPublicationType'

export interface IPublication {
  id: number
  title: string
  content: string
  is_active: boolean
  is_banner: boolean
  created_at: string
  updated_at: string
  type: number
}

export interface IPublicationList {
  id: number
  title: string
  content: string
  is_active: boolean
  is_banner: boolean
  created_at: string
  updated_at: string
  type: IPublicationType
}

export interface IFilterPublication {
  type?: number
  type__description__icontains?: string
  is_active?: boolean
  is_banner?: boolean
  created_at?: string
  created_at__lt?: string
  created_at__lte?: string
  created_at__gt?: string
  created_at__gte?: string
  title__icontains?: string
}
