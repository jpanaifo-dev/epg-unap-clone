import { API_URL } from '@/utils/constants'
import axios from 'axios'

const endpoint = `${API_URL}/slides/`

export const getSliders = async () => {
  try {
    const response = await axios.get(endpoint)
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}
