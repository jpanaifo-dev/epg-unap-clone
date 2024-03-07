'use client'
import { useState } from 'react'
import { Card, CardFooter, Image, Link as UILink } from '@nextui-org/react'
import { type IPublicationForList } from '@/types'
import Link from 'next/link'
import blank from '@/assets/images/blank.png'
import { IconCalendar, IconMapPin, IconClock } from '@tabler/icons-react'

export function CardEvent ({ props }: { props: IPublicationForList }) {
  const [isHover, setIsHover] = useState<boolean>(false)

  return (
    <Card
      className="min-w-xs shadow-none border border-zinc-300 hover:cursor-pointer h-full"
      onMouseEnter={() => {
        setIsHover(true)
      }}
      onMouseLeave={() => {
        setIsHover(false)
      }}
      radius="none"
    >
      <div className="absolute left-0 top-0 z-20">
        <div className="py-4">
          <div className="bg-yellow-600">
            <h1 className="text-white font-bold text-tiny px-2 py-1 sm:text-sm lg:text-lg">
              {props?.typePublication?.nombre}
            </h1>
          </div>
        </div>
      </div>
      <Image
        fallbackSrc={blank.src}
        src={props.image}
        width={'100%'}
        className="w-full object-cover z-0 h-96"
        alt="event_img.png"
        loading="lazy"
        removeWrapper={true}
        radius="none"
      />
      <CardFooter
        className={`absolute p-6  bottom-0 z-10 flex justify-between items-end h-full
        bg-gradient-to-t from-black/80 via-black/30 to-black/5
        ${isHover ? 'transition duration-300 ease-in-out bg-black/40' : ''}`}
      >
        <div className="text-white space-y-2">
          {props?.lugar !== null ? (
            <div className="flex items-center gap-2">
              <div>
                <IconMapPin size={20} />
              </div>
              <span className="font-semibold line-clamp-1">{props?.lugar}</span>
            </div>
          ) : null}
          <h4
            className={`text-xl md:text-2xl font-bold line-clamp-2 uppercase ${
              isHover && 'text-yellow-500'
            }`}
          >
            {props.title}
          </h4>
          <div className="space-y-1">
            {props?.hora !== null ? (
              <div className="flex items-center gap-2">
                <div>
                  <IconClock size={18} />
                </div>
                <span className="font-semibold">{props?.hora}</span>
              </div>
            ) : null}
            <div className="flex gap-2">
              <div>
                <IconCalendar size={18} />
              </div>
              <h1 className="w-full">
                {new Date(props?.fecha).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric'
                })}
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 right-4">
          <UILink
            as={Link}
            showAnchorIcon
            href={props?.link}
            className="text-white"
            isExternal
          >
            Leer más
          </UILink>
        </div>
      </CardFooter>
    </Card>
  )
}
