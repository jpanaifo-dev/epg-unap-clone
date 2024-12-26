import { IPublicationFileList } from '@/types'
import { CardPublication } from '@/components'
import Image from 'next/image'

interface IProps {
  dataList: IPublicationFileList[]
}

export const PublicationList = (props: IProps) => {
  const { dataList } = props
  return (
    <main className="">
      {dataList && dataList?.length === 0 && (
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col">
            <Image
              src="/svg/post-bro.svg"
              alt="Not found"
              width={300}
              height={300}
            />
          </div>
          <p className="font-medium text-sm max-w-xs text-center mt-4">
            No se encontraron publicaciones. Intente con otros filtros de
            búsqueda.
          </p>
        </div>
      )}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dataList &&
          dataList?.length > 0 &&
          dataList?.map((item, index) => (
            <CardPublication key={index} data={item} />
          ))}
      </section>
    </main>
  )
}
