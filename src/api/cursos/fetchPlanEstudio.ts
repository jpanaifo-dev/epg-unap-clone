import { fetchWithHeader } from '@/api'
import { IPlanEstudioApiFilter } from '@/types'
import apiData from '@/utils/dataApi.json'

export function fetchPlanEstudio(filter: IPlanEstudioApiFilter) {
  const {
    programa,
    nombre,
    id,
    is_active,
    modalidad,
    nombre__icontains,
    programa__facultad,
    programa__facultad__nombre,
    programa__facultad__nombre__icontains,
    programa__nombre,
    programa__nombre__icontains,
    programa__tipo,
    programa__tipo__is_continua,
    programa__tipo__nombre,
    programa__tipo__nombre__icontains,
    sede
  } = filter

  const params = new URLSearchParams()

  if (nombre) params.append('description', nombre)
  if (id) params.append('id', id.toString())
  if (is_active !== undefined) params.append('is_active', is_active.toString())
  if (programa) params.append('programa', programa.toString())
  if (nombre__icontains)
    params.append('description__icontains', nombre__icontains)
  if (programa__facultad)
    params.append('programa__facultad', programa__facultad.toString())
  if (programa__facultad__nombre)
    params.append('programa__facultad__nombre', programa__facultad__nombre)
  if (programa__facultad__nombre__icontains)
    params.append(
      'programa__facultad__nombre__icontains',
      programa__facultad__nombre__icontains
    )
  if (programa__nombre) params.append('programa__nombre', programa__nombre)
  if (programa__nombre__icontains)
    params.append('programa__nombre__icontains', programa__nombre__icontains)
  if (programa__tipo) params.append('programa__tipo', programa__tipo.toString())
  if (programa__tipo__is_continua !== undefined)
    params.append(
      'programa__tipo__is_continua',
      programa__tipo__is_continua.toString()
    )
  if (programa__tipo__nombre)
    params.append('programa__tipo__nombre', programa__tipo__nombre)
  if (programa__tipo__nombre__icontains)
    params.append(
      'programa__tipo__nombre__icontains',
      programa__tipo__nombre__icontains
    )
  if (modalidad) params.append('modalidad', modalidad.toString())
  if (sede) params.append('sede', sede.toString())

  const url = `${apiData.academicos.plan_estudio}?${params.toString()}`

  return fetchWithHeader(url, { method: 'GET' })
}
