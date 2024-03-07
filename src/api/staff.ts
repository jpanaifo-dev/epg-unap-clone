import { API_URL } from '@/utils/constants'
import axios from 'axios'

const edpoint = `${API_URL}/escuela/`

export const getListStaffApi = async () => {
  const response = await axios
    .get(`${edpoint}staff/`)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.status === 404) {
        console.error('Staff not found')
        return []
      }
      throw error
    })

  return response
}

export const getListAutoridadesApi = async () => {
  const response = await axios
    .get(`${edpoint}autoridades/`)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.status === 404) {
        console.error('Autoridades not found')
        return []
      }
      throw error
    })
  return response
}

export const getDirectorioFacultadesApi = async () => {
  const response = await axios
    .get(`${edpoint}directorio-facultades/`)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.status === 404) {
        console.error('Facultades not found')
        return []
      }
      throw error
    })
  return response
}
