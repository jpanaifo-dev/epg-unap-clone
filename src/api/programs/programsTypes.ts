import { fetchWithHeader } from '@/api'
import { IProgramTypeFilter } from '@/types'
import apiData from '@/utils/dataApi.json'

export function fetchProgramsType(filter: IProgramTypeFilter) {
  const { is_continua, nombre, query } = filter

  const params = new URLSearchParams()

  if (query) params.append('description__icontains', query)
  if (nombre) params.append('description', nombre)
  if (is_continua !== undefined)
    params.append('is_continua', is_continua.toString())

  const url = `${apiData.academicos.tipo_programa}?${params.toString()}`

  return fetchWithHeader(url, { method: 'GET' })
}
