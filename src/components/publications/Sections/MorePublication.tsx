import { IPublicationFileList, IPublicationList } from '@/types'
import { CardPublicationSm } from '@/components'

interface IProps {
  dataList: IPublicationList[]
}

export const MorePublication = (props: IProps) => {
  const { dataList } = props

  return (
    <main className="w-full">
      {dataList && dataList?.length === 0 && (
        <div className="h-48 flex flex-col justify-center items-center">
          <p className="text-zinc-500 font-medium">No hay publicaciones</p>
        </div>
      )}
      <section className="grid grid-cols-1 gap-6">
        {dataList &&
          dataList?.length > 0 &&
          dataList?.map((item, index) => (
            <CardPublicationSm key={index} data={item} />
          ))}
      </section>
    </main>
  )
}
