export interface IProgramType {
  id: number
  nombre: string
  is_continua?: boolean
  color?: string
}

// ?nombre__icontains=&nombre=&is_continua=true

export interface IProgramTypeFilter {
  query?: string
  nombre?: string
  is_continua?: boolean
}
