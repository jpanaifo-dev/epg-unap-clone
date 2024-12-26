import { fetchWithHeader } from '@/api'
import { IProgramFilter } from '@/types'
import apiData from '@/utils/dataApi.json'

type apiType = 'list' | 'default'

export function fetchProgramsList(filter: IProgramFilter, type?: apiType) {
  const {
    codigo,
    codigo__icontains,
    facultad,
    nombre,
    nombre__icontains,
    page,
    tipo,
    tipo__nombre,
    tipo__nombre__icontains,
    tipo__is_continua
  } = filter

  const params = new URLSearchParams()

  if (codigo) params.append('codigo', codigo)
  if (codigo__icontains) params.append('codigo__icontains', codigo__icontains)
  if (facultad) params.append('facultad', facultad.toString())
  if (nombre) params.append('nombre', nombre)
  if (nombre__icontains) params.append('nombre__icontains', nombre__icontains)
  if (page) params.append('page', page.toString())
  if (tipo) params.append('tipo', tipo.toString())
  if (tipo__nombre) params.append('tipo__nombre', tipo__nombre)
  if (tipo__nombre__icontains)
    params.append('tipo__nombre__icontains', tipo__nombre__icontains)
  if (tipo__is_continua !== undefined)
    params.append('tipo__is_continua', tipo__is_continua.toString())

  const apiPath =
    type === 'list'
      ? apiData.academicos.programasList
      : apiData.academicos.programas

  const url = `${apiPath}?${params.toString()}`

  return fetchWithHeader(url, { method: 'GET' })
}

export function fetchProgramDetail(id: number) {
  return fetchWithHeader(`${apiData.academicos.programasList}?id=${id}`, {
    method: 'GET'
  })
}
