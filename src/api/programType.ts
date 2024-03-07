import { type IProgramType } from '@/types'
import { API_URL } from '@/utils/constants'
import axios from 'axios'

// const endpoint = `${API_URL}/program_type/`
const endpoint = `${API_URL}/tipos-programa/`

export const getProgramTypesApi = async () => {
  const response: IProgramType[] = await axios
    .get(endpoint)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.status === 404) {
        // console.error('ProgramTypes not found')
        return []
      }
      throw error
    })

  return response
}
