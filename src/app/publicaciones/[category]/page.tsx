import { Banner, PublicationFilter, PublicationList } from '@/components'
import { IResApi, IPublicationFileList } from '@/types'
import { fetchPublicationFileList } from '@/api'
import { convertDateToLarge } from '@/utils'

interface IProps {
  params: {
    category: string
  }
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export default async function Page(props: IProps) {
  const { params, searchParams } = props
  const { category } = params as { category: string }
  const { search, dateStart, dateEnd } = searchParams as {
    search: string
    dateStart: string
    dateEnd: string
  }

  let dataList: IResApi<IPublicationFileList> = {
    count: 0,
    next: null,
    previous: null,
    results: []
  }

  try {
    const response = await fetchPublicationFileList({
      publication__type: category,
      titleQuery: search,
      uploadedAt__gte: dateStart ? convertDateToLarge(dateStart) : undefined,
      uploadedAt__lte: dateEnd ? convertDateToLarge(dateEnd) : undefined,
      isFrontPage: true,
      isActive: true
    })

    if (response.ok) {
      dataList = await response.json()
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }

  return (
    <>
      <Banner
        title={category}
        description="Manténgase informado con nuestras publicaciones y entérese de las últimas noticias"
        image="/images/banner-publication.webp"
      />
      <main className="container section flex flex-col gap-6 lg:gap-8">
        <PublicationFilter />
        <PublicationList dataList={dataList.results} />
      </main>
    </>
  )
}
