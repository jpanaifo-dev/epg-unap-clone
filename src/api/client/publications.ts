import { API_URL } from '@/utils/constants'
import axios from 'axios'

const endpoint = `${API_URL}/publicaciones/`

export const getPublications = async (
  sizePage: number,
  currentPage: number,
  search: string,
  typePublication: string,
  isComunicado: string
) => {
  try {
    const response = await axios.get(
      `${endpoint}?sizePage=${sizePage}&page=${currentPage}&search=${search}&type_publication=${typePublication}&is_comunicado=${isComunicado}`
    )
    return response.data
  } catch (error) {
    // console.error(error)
    return []
  }
}

export const getPublicationById = async (id: number) => {
  try {
    const response = await axios.get(`${endpoint}${id}`)
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}
