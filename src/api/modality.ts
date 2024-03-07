import { type IModality } from '@/types'
import { API_URL } from '@/utils/constants'
import axios from 'axios'

const endpoint = `${API_URL}/modalidades/`

export const getModalitiesApi = async () => {
  const response: IModality[] = await axios
    .get(endpoint)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.status === 404) {
        console.error('Modalities not found')
        return []
      }
      throw error
    })

  return response
}
