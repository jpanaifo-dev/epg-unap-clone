import { IDocCategoryFilters, IDocumentCategory, IResApi } from '@/types'
import apiurl from '@/utils/dataApi.json'
import { fetchWithHeader } from '../core'

const endpoint = `/${apiurl.portal.DocumentCategory}`

export const fetchDocumentCategories = async (
  filters: IDocCategoryFilters
): Promise<IResApi<IDocumentCategory>> => {
  const { description } = filters
  const params = new URLSearchParams()

  if (description) params.append('description__icontains', description)
  const path = `${endpoint}?${params.toString()}`

  try {
    const response = await fetchWithHeader(path, { method: 'GET' })

    if (response.status !== 200) {
      throw new Error('Error fetching data')
    }

    const data: IResApi<IDocumentCategory> = await response.json()
    return data
  } catch (error) {
    throw new Error('Failed to fetch document categories')
  }
}
