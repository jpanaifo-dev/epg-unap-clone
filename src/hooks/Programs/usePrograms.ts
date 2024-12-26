// import {
//   getPrograms,
//   getProgramById,
//   getCountPrograms
// } from '@/api/client/programs'
import { type IProgram, type IProgramList } from '@/types'
import { useState } from 'react'

interface IResponse {
  count: number
  next?: string
  previous?: string
  results: IProgram[]
}

interface ICountPrograms {
  name: string
  count: number
}
const convertToList = (data: IProgram[]) => {
  return data?.map((program) => {
    return {
      id: program?.id,
      image:
        'https://img.freepik.com/foto-gratis/jovenes-estudiantes-aprendiendo-bibliotecas-estanterias_1150-10544.jpg?w=1380&t=st=1702485524~exp=1702486124~hmac=bde4f5219885392872846381bf28226966bf44e43e7f781344ab4c2af426eea6',
      title: program?.nombre,
      // modality: program?.modalidad?.nombre,
      // programType: program?.tipo_programa,
      isActive: program?.is_active,
      // en_convocatoria: program?.en_convocatoria,
      faculty: program?.facultad
    }
  })
}

export function usePrograms() {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [programs, setPrograms] = useState<IResponse>({
    count: 0,
    results: []
  })
  const [programsList, setProgramsList] = useState<IProgramList[]>([])
  const [program, setProgram] = useState<IProgram>()
  const [countPrograms, setCountPrograms] = useState<ICountPrograms[]>([])

  // const getListPrograms = async (
  //   sizePage: number,
  //   currentPage: number,
  //   search: string,
  //   typePrograma: string,
  //   isActive: string,
  //   faculty: string,
  //   modality: string,
  //   isFcontinue: string
  // ) => {
  //   try {
  //     setLoading(true)
  //     const response = await getPrograms(
  //       sizePage,
  //       currentPage,
  //       search,
  //       typePrograma,
  //       isActive,
  //       faculty,
  //       modality,
  //       isFcontinue
  //     )
  //     setPrograms(response)
  //     setLoading(false)
  //   } catch (error) {
  //     setLoading(false)
  //     setError(true)
  //   }
  // }

  // const getDataProgramById = async (id: number) => {
  //   try {
  //     setLoading(true)
  //     const response = await getProgramById(id)
  //     setLoading(false)
  //     setProgram(response)
  //     // return response
  //   } catch (error) {
  //     setLoading(false)
  //     setError(true)
  //   }
  // }

  // const getListCountPrograms = async () => {
  //   try {
  //     setLoading(true)
  //     const response = await getCountPrograms()
  //     setCountPrograms(response)
  //     setLoading(false)
  //   } catch (error) {
  //     setLoading(false)
  //     setError(true)
  //   }
  // }

  return {
    loading,
    error,
    programs,
    // getListPrograms,
    programsList,
    // getDataProgramById,
    // getListCountPrograms,
    program,
    countPrograms
  }
}
