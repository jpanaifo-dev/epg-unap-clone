'use client'
import { useState } from 'react'
import { Card, CardBody, Link as UILink, Image } from '@nextui-org/react'
import { type IPublicationForList } from '@/types'
import Link from 'next/link'
import blank from '@/assets/images/blank.png'
import { IconCalendar, IconClock, IconMapPin } from '@tabler/icons-react'

export const CardNews = ({ props }: { props: IPublicationForList }) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <Card
      className="min-w-xs rounded-lg shadow-none border border-zinc-300 hover:cursor-pointer hover:shadow-lg"
      onMouseEnter={() => {
        setIsHover(true)
      }}
      onMouseLeave={() => {
        setIsHover(false)
      }}
    >
      <div className="relative">
        <div className="absolute left-0 bottom-0 z-20">
          <div className="py-2">
            <div className="bg-primary-700">
              <h1 className="text-white font-bold text-tiny px-2 py-1 sm:text-sm lg:text-base">
                {props?.typePublication?.nombre}
              </h1>
            </div>
          </div>
        </div>
        <Image
          fallbackSrc={blank.src}
          src={props.image}
          width={'w-full'}
          className="rounded-none w-full h-48.  max-h-52 object-cover"
          removeWrapper={true}
          loading="lazy"
          onLoad={() => {
            return <div className="w-full h-[6rem] bg-gray-300" />
          }}
          onError={() => {
            return <div className="w-full h-[6rem] bg-gray-300" />
          }}
        />
      </div>
      <CardBody className="p-4 space-y-5">
        <div className="space-y-2">
          <div className="flex gap-2">
            <div>
              <IconCalendar size={24} />
            </div>
            <h1 className="w-full">
              {new Date(props.fecha).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </h1>
          </div>
          <h4
            className={`text-lg font-bold line-clamp-2 text-primary-800 uppercase ${
              isHover && 'underline'
            }`}
          >
            {props.title}
          </h4>
          {props?.lugar !== null && (
            <div className="flex gap-2 items-center">
              <div>
                <IconMapPin size={24} />
              </div>
              <h1 className="w-full">{props?.lugar}</h1>
            </div>
          )}
          {props?.hora !== null && (
            <div className="flex gap-2 items-center">
              <div>
                <IconClock size={24} />
              </div>
              <h1 className="w-full">{props?.hora}</h1>
            </div>
          )}
          <p className="line-clamp-4">{props?.description}</p>
        </div>
        <div className="flex float-right justify-end">
          <UILink
            as={Link}
            showAnchorIcon
            href={props.link}
            size="sm"
            isExternal
          >
            Leer más
          </UILink>
        </div>
      </CardBody>
    </Card>
  )
}
