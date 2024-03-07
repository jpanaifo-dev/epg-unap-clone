import { API_URL } from '@/utils/constants'
import axios from 'axios'

const endpoint = `${API_URL}/escuela/`

export const getListProfesoresApi = async () => {
  const response = await axios
    .get(`${endpoint}profesores/`)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.status === 404) {
        console.log('Profesores not found.')
        return []
      }
      throw error
    })

  return response
}
