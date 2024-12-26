import { IResApi, IPublicationFileList } from '@/types'
import { fetchPublicationFileList } from '@/api'
import { CardPublication } from '@/components'
import { Button, Divider } from '@nextui-org/react'
import Link from 'next/link'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import Image from 'next/image'

export const NewsSection = async () => {
  const listInitial: IResApi<IPublicationFileList> = {
    count: 0,
    next: null,
    previous: null,
    results: []
  }

  let dataList = listInitial

  try {
    const response = await fetchPublicationFileList({
      publication__type: 'noticia',
      publication__is_active: true,
      isFrontPage: true
    })

    if (response.ok) {
      dataList = await response.json()
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }

  return (
    <section className="bg-blueEpg-50">
      <main className="container section-home">
        <div className="mb-4 w-full">
          <h3 className="text-xl xl:text-2xl font-bold pb-7">
            Últimas noticias
          </h3>
          <Divider />
          <div className="w-full flex justify-end mt-2">
            <Button
              variant="light"
              color="primary"
              endContent={<IconArrowNarrowRight size={24} stroke={1} />}
              as={Link}
              href="/publicaciones/noticia"
            >
              Ver todos las noticias
            </Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
          {dataList?.results?.length > 0 &&
            dataList?.results
              ?.slice(0, 4)
              ?.map((item, index) => (
                <CardPublication key={index} data={item} />
              ))}
        </div>
        {dataList && dataList?.results.length === 0 && (
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col">
              <Image
                src="/svg/news-amico.svg"
                alt="Not found"
                width={300}
                height={300}
              />
            </div>
            <p className="font-medium text-sm max-w-xs text-center">
              No hay eventos disponibles en este momento.
            </p>
          </div>
        )}
      </main>
    </section>
  )
}
