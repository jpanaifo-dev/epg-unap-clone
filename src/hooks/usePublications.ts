import { useState } from 'react'
import { getPublications, getPublicationById } from '@/api/client/publications'
import { type IPublication, type IPublicationForList } from '@/types'

interface IResponse {
  count: number
  next?: string
  previous?: string
  results: IPublication[]
}

const convertToList = (data: IPublication[]) => {
  return data?.map((publication) => {
    return {
      id: publication?.id,
      image:
        'https://img.freepik.com/foto-gratis/jovenes-estudiantes-aprendiendo-bibliotecas-estanterias_1150-10544.jpg?w=1380&t=st=1702485524~exp=1702486124~hmac=bde4f5219885392872846381bf28226966bf44e43e7f781344ab4c2af426eea6',
      title: publication?.titulo,
      description: publication?.descripcion,
      typePublication: publication?.tipo_publicacion,
      hora: publication?.hora,
      fecha: publication?.fecha,
      lugar: publication?.lugar,
      link: `/publicaciones/${publication?.tipo_publicacion?.key}/${publication?.id}`
    }
  })
}

export function usePublications() {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [publications, setPublications] = useState<IResponse>({
    count: 0,
    results: []
  })
  const [publicationsList, setPublicationsList] = useState<
    IPublicationForList[]
  >([])
  const [publication, setPublication] = useState<IPublication>()
  const [comunicados, setComunicados] = useState<IPublicationForList[]>([])

  const getListPublications = async (
    sizePage: number,
    currentPage: number,
    search: string,
    typePublication: string
  ) => {
    try {
      setLoading(true)
      const response = await getPublications(
        sizePage,
        currentPage,
        search,
        typePublication,
        ''
      )
      setPublications(response)
      setPublicationsList(convertToList(response.results))
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const getComunicados = async () => {
    try {
      setLoading(true)
      const response = await getPublications(10, 1, '', '', '1')
      setComunicados(convertToList(response.results))
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const getPublication = async (id: number) => {
    try {
      setLoading(true)
      const response = await getPublicationById(id)
      setPublication(response)
    } catch (error) {
      setError(false)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    error,
    publications,
    publicationsList,
    publication,
    getListPublications,
    getPublication,
    getComunicados,
    comunicados
  }
}
