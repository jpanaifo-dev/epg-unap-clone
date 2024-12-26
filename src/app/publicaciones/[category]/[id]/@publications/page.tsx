import { IResApi, IPublicationList } from '@/types'

import { Divider } from '@nextui-org/react'
import { MorePublication } from '@/components'
import { fetchPublicationList } from '@/api/portal/publication'

interface IProps {
  params: {
    id: string
  }
}

export default async function Page(props: IProps) {
  const { id } = props.params

  let dataList: IResApi<IPublicationList> = {
    count: 0,
    next: null,
    previous: null,
    results: []
  }

  try {
    const response = await fetchPublicationList({
      is_active: true,
      created_at__lte: new Date().toISOString()
    })

    if (response.ok) {
      dataList = await response.json()

      dataList = {
        ...dataList,
        results: dataList.results.filter((item) => item.id !== Number(id))
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }
  return (
    <main className="flex flex-col gap-4">
      <header className="flex flex-col gap-1">
        <h1 className="text-xl font-bold uppercase">
          También te puede interesar
        </h1>
        <Divider className="bg-warning-500 pt-1 max-w-xs" />
      </header>
      <article>
        <MorePublication dataList={dataList.results} />
      </article>
    </main>
  )
}
