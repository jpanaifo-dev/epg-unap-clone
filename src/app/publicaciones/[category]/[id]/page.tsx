import type { Metadata } from 'next'
import { fetchPublicationFileList, fetchPublicationListById } from '@/api'
import { IPublicationFileList, IPublicationList, IResApi } from '@/types'
import { PublicationDetails } from '@/components'

interface IProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  // read route params
  const id = params.id

  const res = await fetchPublicationFileList({
    publication: Number(id)
  })

  let publicationFiles: IResApi<IPublicationFileList> = {
    count: 0,
    next: null,
    previous: null,
    results: []
  }

  let publication: IResApi<IPublicationList> = {
    count: 0,
    next: null,
    previous: null,
    results: []
  }

  const dataPublication = await fetchPublicationListById(Number(id))

  if (res.ok) {
    publicationFiles = (await res.json()) as IResApi<IPublicationFileList>
  }

  if (dataPublication.ok) {
    publication = (await dataPublication.json()) as IResApi<IPublicationList>
  }

  let meta = {
    title: `Publicacion | No encontrado`,
    description: 'Publicación no encontrada',
    openGraph: {
      title: `Publicacion | No encontrado`,
      description: 'Publicación no encontrada',
      type: 'website',
      locale: 'es_ES',
      images: ['']
    }
  }

  if (!dataPublication.ok) {
    return meta
  } else {
    if (publicationFiles?.results?.length > 0) {
      meta = {
        title: `${publication.results[0].title} | EPG-UNAP`,
        description: 'Conoce más sobre está publicación de EPG-UNAP',
        openGraph: {
          title: `${publication.results[0].title}`,
          type: 'website',
          locale: 'es_ES',
          description: publicationFiles.results[0].description,
          images: [publicationFiles.results[0].file]
        }
      }
    } else {
      return {
        title: `${publication?.results[0]?.title} | EPG-UNAP `,
        description: 'Conoce más sobre está publicación de EPG-UNAP'
      }
    }
    return meta
  }
}

export default async function Page({ params }: IProps) {
  // read route params
  const id = params.id
  const listInitial: IResApi<IPublicationFileList> = {
    count: 0,
    next: null,
    previous: null,
    results: []
  }

  let publication: IResApi<IPublicationList> = {
    count: 0,
    next: null,
    previous: null,
    results: []
  }

  let dataList = listInitial
  let dataPublication = publication

  //Obtener la lista de archivos de la publicación
  try {
    const response = await fetchPublicationFileList({
      publication: Number(id)
    })

    if (response.ok) {
      dataList = await response.json()
    } else {
      dataList = listInitial
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }

  //Obtener la publicación
  try {
    const response = await fetchPublicationListById(Number(id))

    if (response.ok) {
      dataPublication = await response.json()
      console.log('dataPublication', dataPublication)
    } else {
      dataPublication = publication
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }

  return (
    <main className="py-12 sm:py-16 lg:py-20">
      <PublicationDetails
        dataPublication={dataPublication.results[0]}
        dataList={dataList.results}
      />
    </main>
  )
}
