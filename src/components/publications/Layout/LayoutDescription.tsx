import { ShareIcons } from '@/components/core'
import { IPublicationList } from '@/types'
import Image from 'next/image'

interface IProps {
  children: React.ReactNode
  publication: IPublicationList
}

function convertDateToDateLarge(date: string) {
  const dateObject = new Date(date)
  const formattedDate = dateObject.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const formattedTime = dateObject.toLocaleTimeString('es-ES', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  })

  return `${formattedDate
    .replace('de', 'de')
    .replace('del', 'del')} ${formattedTime}`
}

export default function LayoutDescription(props: IProps) {
  const { children, publication } = props
  return (
    <section className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 items-start sm:pt-10 gap-4">
      <aside className="col-span-1">
        <section
          id="share"
          className="flex flex-row sm:flex-col gap-4 sm:justify-center sm:items-center"
        >
          <ShareIcons social="facebook" />
          <ShareIcons social="whatsapp" />
          <ShareIcons social="linkedin" />
          <ShareIcons social="instagram" />
          <ShareIcons social="x" size="xs" />
        </section>
      </aside>
      <article className="col-span-11 flex flex-col gap-4 lg:gap-6">
        <section className="flex gap-2 w-full sm:w-auto items-center">
          <Image
            src="/brands/logo.png"
            alt="EPGUNAP"
            width={50}
            height={50}
            className="rounded-lg border-1 border-zinc-300"
          />
          <div>
            <p className="text-zinc-500 text-base lg:text-sm">
              <span>Publicado por: </span>
              <span>EPGUNAP</span>
            </p>
            <p className="text-sm font-bold">
              {publication?.created_at &&
                convertDateToDateLarge(publication.created_at)}
              <span className="text-zinc-500 font-normal">
                {' '}
                | Actualizado el{' '}
                {convertDateToDateLarge(publication?.updated_at)}
              </span>
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-4">{children}</section>
      </article>
    </section>
  )
}
