'use client'
import { IPublicationFileList, IPublicationList } from '@/types'
import { ContactBar } from '@/components/core'
import { validateExtension, convertYYMMDDtoDDMMYY } from '@/utils'
import { PublicationImages } from './PublicationImages'
import { PublicationDescription } from './PublicationDescription'
import { PublicationArchivos } from './PublicationArchivos'
import { PublicationVideo } from './PublicationVideo'
import { LayoutDescription } from '../Layout'
import { BreadcrumbComponent } from '@/components/core/Breadcrumb/Breadcrumb'
interface IProps {
  dataPublication?: IPublicationList
  dataList: IPublicationFileList[]
}

export const PublicationDetails = (props: IProps) => {
  const { dataList, dataPublication } = props

  const listImages = dataList?.filter((item) =>
    validateExtension(item.file, 'image')
  )

  const listArchives = dataList?.filter((item) =>
    validateExtension(item.file, 'document')
  )

  const listVideos = dataList?.filter((item) =>
    validateExtension(item.file, 'video')
  )

  return (
    <main className="flex flex-col gap-4">
      <section>
        <BreadcrumbComponent />
      </section>
      {dataList?.length === 0 && <div>No hay archivos disponibles</div>}
      <section className="flex flex-col gap-6">
        {dataPublication && (
          <header className="flex flex-col gap-3">
            <section>
              <h3 className=" text-zinc-500 w-fit border-warning-500 border-b-4 uppercase">
                {dataPublication?.type?.description}
              </h3>
            </section>
            <section className="flex items-center gap-2">
              <p>
                <span>Fecha de publicación: </span>
                <span>
                  {convertYYMMDDtoDDMMYY(dataPublication?.created_at, true)}
                </span>
              </p>
            </section>
            <h1 className="text-4xl lg:text-5xl font-bold pt-4">
              {dataPublication?.title}
            </h1>
          </header>
        )}
        {dataList?.length > 0 && <PublicationImages dataList={listImages} />}

        {dataPublication && (
          <LayoutDescription publication={dataPublication}>
            <PublicationDescription publication={dataPublication} />
            <PublicationVideo dataList={listVideos} />
            <PublicationArchivos dataList={listArchives} />
          </LayoutDescription>
        )}
        <ContactBar />
      </section>
    </main>
  )
}
