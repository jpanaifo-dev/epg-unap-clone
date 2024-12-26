import { IPublicationFileList } from '@/types'
import Link from 'next/link'
import { IconDownload, IconFile } from '@tabler/icons-react'

interface IProps {
  dataList: IPublicationFileList[]
}
export const PublicationArchivos = (props: IProps) => {
  const { dataList } = props

  return (
    <section className="flex flex-col gap-2">
      <div>
        <h1 className="font-medium text-zinc-500">
          Archivos de la publicación
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        {dataList.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.file}
              target="_blank"
              rel="noreferrer"
              download
              className="w-full p-4 rounded-sm border-l-4 border-warning-500 flex items-center justify-between hover:bg-zinc-100 transition-all"
            >
              <div className="flex items-center gap-4">
                <IconFile size={28} stroke={1.5} />
                <p>{item.description}</p>
              </div>
              <IconDownload size={28} stroke={1.5} />
            </Link>
          )
        })}
      </div>
    </section>
  )
}
