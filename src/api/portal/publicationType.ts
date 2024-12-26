import { fetchWithHeader } from '@/api'
import { IPublicationTypeFilter } from '@/types'
import apiData from '@/utils/dataApi.json'

export function fetchPublicationType(filter: IPublicationTypeFilter) {
  const { query, isActive } = filter

  const params = new URLSearchParams()

  //   portal/publicationType/?description__icontains=&is_active=true

  if (query) params.append('description__icontains', query)
  if (isActive) params.append('is_active', isActive.toString())

  const url = `${apiData.portal.publicationType}?${params.toString()}`

  return fetchWithHeader(url, { method: 'GET' })
}
