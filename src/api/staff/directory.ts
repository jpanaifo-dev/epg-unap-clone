import { fetchWithHeader } from '@/api'
import apiData from '@/utils/dataApi.json'
import { IDirectoryFilter } from '@/types'

export function fetchDirectory(filter: IDirectoryFilter) {
  const {
    id,
    person,
    charge,
    is_active,
    is_authority,
    faculty,
    program,
    page,
    person__apellido_materno__icontains,
    person__apellido_paterno__icontains
  } = filter

  const params = new URLSearchParams()

  if (id) params.append('id', id)
  if (person) params.append('person', person)
  if (charge) params.append('charge', charge)
  if (is_active) params.append('is_active', is_active.toString())
  if (is_authority) params.append('is_authority', is_authority.toString())
  if (faculty) params.append('faculty', faculty)
  if (program) params.append('program', program)
  if (page) params.append('page', page.toString())
  if (person__apellido_materno__icontains)
    params.append(
      'person__apellido_materno__icontains',
      person__apellido_materno__icontains
    )
  if (person__apellido_paterno__icontains) {
    params.append(
      'person__apellido_paterno__icontains',
      person__apellido_paterno__icontains
    )
  }

  const url = `${apiData.core.directorioList}?${params.toString()}`

  return fetchWithHeader(url, { method: 'GET' })
}
