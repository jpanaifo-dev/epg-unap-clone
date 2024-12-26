import { fetchWithHeader } from '@/api'
import { IFilterPublicationFile } from '@/types'
import apiData from '@/utils/dataApi.json'

export function fetchPublicationFileList(filter: IFilterPublicationFile) {
  const {
    descriptionQuery,
    titleQuery,
    publication,
    isActive,
    isFrontPage,
    isBanner,
    uploadedAt,
    uploadedAt__gte,
    uploadedAt__lte,
    publication__type,
    publication__is_active
  } = filter
  const params = new URLSearchParams()
  if (descriptionQuery)
    params.append('description__icontains', descriptionQuery)
  if (titleQuery) params.append('publication__title__icontains', titleQuery)
  if (publication) params.append('publication', publication.toString())
  if (isActive !== undefined) params.append('is_active', isActive.toString())
  if (isFrontPage !== undefined)
    params.append('is_frontpage', isFrontPage.toString())
  if (uploadedAt) params.append('uploaded_at', uploadedAt)
  //Maio ou igual a
  if (uploadedAt__gte) params.append('uploaded_at__gte', uploadedAt__gte)
  //Menor ou igual a
  if (uploadedAt__lte) params.append('uploaded_at__lte', uploadedAt__lte)
  if (publication__type)
    params.append(
      'publication__type__description__icontains',
      publication__type
    )
  if (publication__is_active !== undefined)
    params.append('publication__is_active', publication__is_active.toString())
  if (isBanner !== undefined)
    params.append('publication__is_banner', isBanner.toString())

  const url = `${apiData.portal.PublicationFileList}?${params.toString()}`

  return fetchWithHeader(url, { method: 'GET' })
}
