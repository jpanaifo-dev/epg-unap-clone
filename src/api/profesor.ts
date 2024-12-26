import { API_URL } from '@/utils/constants'

const endpoint = `${API_URL}/escuela/`

export const getListProfesoresApi = async () => {
  return await fetch(`${endpoint}profesores`)
}
