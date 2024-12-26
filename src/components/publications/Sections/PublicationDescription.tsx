import { ShareIcons } from '@/components/core'
import { IPublicationList } from '@/types'
import Image from 'next/image'

interface IProps {
  publication: IPublicationList
}

function renderHtml(html: string) {
  return (
    <div className="custom-quill" dangerouslySetInnerHTML={{ __html: html }} />
  )
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

export const PublicationDescription = (props: IProps) => {
  const { publication } = props

  return (
    <article className="w-full flex flex-col gap-4 lg:gap-6">
      {publication?.content && renderHtml(publication.content)}
    </article>
  )
}
