import { type IFacultad } from '@/types'
import { API_URL } from '@/utils/constants'
import axios from 'axios'

const endpoint = `${API_URL}/facultades/`

export const getFacultiesApi = async () => {
  const response: IFacultad[] = await axios
    .get(endpoint)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.status === 404) {
        console.error('Faculties not found')
        return []
      }
      throw error
    })

  return response
}
