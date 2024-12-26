import { IDocument, IDocumentFilters, IResApi } from '@/types'
import { fetchWithHeader } from '../core'
import apiurl from '@/utils/dataApi.json'

const endpoint = `${apiurl.portal.Document}`

export const fetchDocuments = async (filters: IDocumentFilters) => {
  const { description, categoryName } = filters
  const params = new URLSearchParams()

  if (description) params.append('description__icontains', description)
  if (categoryName)
    params.append('category__description__icontains', categoryName)

  const url = `${endpoint}?${params.toString()}`

  try {
    const response = await fetchWithHeader(url, { method: 'GET' })

    if (!response.ok) {
      const errorDetails = await response.text()
      throw new Error(
        `Error fetching data: ${response.status} - ${errorDetails}`
      )
    }

    const data: IResApi<IDocument> = await response.json()

    return data
  } catch (error) {
    console.error('Failed to fetch documents:', (error as Error).message)
    throw new Error('Failed to fetch documents')
  }
}
