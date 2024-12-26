export interface IPublicationType {
  id: number
  description: string
  is_active: boolean
  color: string
}

export interface IPublicationTypeFilter {
  query?: string
  isActive?: boolean
}
