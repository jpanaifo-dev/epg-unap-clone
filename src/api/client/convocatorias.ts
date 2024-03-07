import { API_URL } from '@/utils/constants'
import axios from 'axios'

const endpoint = `${API_URL}/convocatorias/`

export const getConvocatorias = async () => {
  try {
    const response = await axios.get(endpoint)
    return response.data
  } catch (error) {
    // console.error(error)
    return []
  }
}

export const getConvocatoriasAbiertas = async () => {
  try {
    const response = await axios.get(`${endpoint}convocatorias_abiertas/`)
    return response.data
  } catch (error) {
    // console.error(error)
    return []
  }
}

export const getConvocatoria = async (id: string) => {
  try {
    const response = await axios.get(`${endpoint}${id}`)
    return response.data
  } catch (error) {
    // console.error(error)
    return {}
  }
}
