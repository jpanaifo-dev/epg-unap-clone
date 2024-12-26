import { BannerHome } from '@/components'
import { IResApi, IPublicationFileList } from '@/types'
import { fetchPublicationFileList } from '@/api'

export default async function BannerSection() {
  const listInitial: IResApi<IPublicationFileList> = {
    count: 0,
    next: null,
    previous: null,
    results: []
  }

  let dataList = listInitial

  try {
    const response = await fetchPublicationFileList({
      isBanner: true,
      isFrontPage: true,
      isActive: true
    })

    if (response.ok) {
      dataList = await response.json()
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }

  return <BannerHome dataPublication={dataList.results} />
}
