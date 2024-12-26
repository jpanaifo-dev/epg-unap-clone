import { fetchWithHeader } from '@/api'
import { IFilterPublication } from '@/types'
import apiData from '@/utils/dataApi.json'

export function fetchPublicationList(filter: IFilterPublication) {
  const {
    created_at,
    created_at__gt,
    created_at__gte,
    created_at__lt,
    created_at__lte,
    is_active,
    is_banner,
    title__icontains,
    type,
    type__description__icontains
  } = filter
  const params = new URLSearchParams()
  //Created at
  if (created_at) params.append('created_at', created_at)
  //Mayor que
  if (created_at__gt) params.append('created_at__gt', created_at__gt)
  //Mayor o igual que
  if (created_at__gte) params.append('created_at__gte', created_at__gte)
  //Menor que
  if (created_at__lt) params.append('created_at__lt', created_at__lt)
  //Menor o igual que
  if (created_at__lte) params.append('created_at__lte', created_at__lte)
  if (is_active !== undefined) params.append('is_active', is_active.toString())
  if (is_banner !== undefined) params.append('is_banner', is_banner.toString())
  if (title__icontains) params.append('title__icontains', title__icontains)
  if (type) params.append('type', type.toString())
  if (type__description__icontains)
    params.append('type__description__icontains', type__description__icontains)

  const url = `${apiData.portal.PublicationList}?${params.toString()}`

  return fetchWithHeader(url, { method: 'GET' })
}

export function fetchPublicationById(id: number) {
  return fetchWithHeader(`${apiData.portal.Publication}${id}/`, { method: 'GET' })
}
export function fetchPublicationListById(id: number) {
  return fetchWithHeader(`${apiData.portal.PublicationList}?id=${id}`, {
    method: 'GET'
  })
}
