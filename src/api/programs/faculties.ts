import { fetchWithHeader } from '@/api'
import { IFacultadFilter } from '@/types'
import apiData from '@/utils/dataApi.json'

export function fetchFaculties(filter: IFacultadFilter) {
  const { nombre, id, nombre__icontains, page, sigla, sigla__icontains } =
    filter

  const params = new URLSearchParams()

  if (id) params.append('id', id.toString())
  if (nombre) params.append('description', nombre)
  if (nombre__icontains) params.append('nombre__icontains', nombre__icontains)
  if (sigla) params.append('sigla', sigla)
  if (sigla__icontains) params.append('sigla__icontains', sigla__icontains)
  if (page) params.append('page', page.toString())

  const url = `${apiData.academicos.tipo_programa}?${params.toString()}`

  return fetchWithHeader(url, { method: 'GET' })
}

export function fetchFacultiesApi(filter: IFacultadFilter) {
  const { nombre, id, nombre__icontains, sigla, sigla__icontains } = filter

  const params = new URLSearchParams()

  if (id) params.append('id', id.toString())
  if (nombre) params.append('description', nombre)
  if (nombre__icontains) params.append('nombre__icontains', nombre__icontains)
  if (sigla) params.append('sigla', sigla)
  if (sigla__icontains) params.append('sigla__icontains', sigla__icontains)

  const url = `${apiData.academicos.facultadList}?${params.toString()}`

  return fetchWithHeader(url, { method: 'GET' })
}
