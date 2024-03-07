import { API_URL } from '@/utils/constants'
import axios from 'axios'

const endpoint = `${API_URL}/programas/`

export const getPrograms = async (
  sizePage: number,
  currentPage: number,
  search: string,
  typePrograma: string,
  isActive: string,
  faculty: string,
  modality: string,
  isFcontinue: string
) => {
  try {
    const response = await axios.get(
      `${endpoint}?sizePage=${sizePage}&page=${currentPage}&search=${search}&type_program=${typePrograma}&in_convocation=${isActive}&faculty=${faculty}&modality=${modality}&is_continue_formation=${isFcontinue}`
    )
    return response.data
  } catch (error) {
    // console.error(error)
    return []
  }
}

export async function getProgramById (id: number) {
  try {
    const res = await fetch(`${endpoint}${id}`)
    if (!res.ok) {
      throw new Error('Error fetching program')
    }
    const data = await res.json()
    // const data = await res.json().then((res) => res.data)
    return data
  } catch (error) {
    // console.log('Error fetching program: ', error)
  }
}

// export async function GetProgramById ({ id }: { id: any }) {
//   try {
//     const res = await fetch(`https://epg-api.onrender.com/api/programs/${id}`)
//     if (!res.ok) {
//       throw new Error('Error fetching program')
//     }
//     const data = await res.json().then((res) => res.data)
//     return data
//   } catch (error) {
//     console.log('Error fetching program: ', error)
//   }
// }

export async function getCountPrograms () {
  try {
    const res = await axios.get(`${endpoint}count_programas`)
    return res.data
  } catch (error) {
    // console.log('Error fetching program: ', error)
    return []
  }
}
