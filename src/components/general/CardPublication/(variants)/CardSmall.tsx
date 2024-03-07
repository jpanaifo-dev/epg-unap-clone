'use client'
import { useState } from 'react'
import { Card, CardBody, Image, Link } from '@nextui-org/react'
import { type IPublicationForList } from '@/types'
import blank from '@/assets/images/blank.png'

export const CardSmall = ({ props }: { props: IPublicationForList }) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <>
      <Card
        className="min-w-xs shadow-none hover:cursor-pointer hover:shadow-lg"
        onMouseEnter={() => {
          setIsHover(true)
        }}
        onMouseLeave={() => {
          setIsHover(false)
        }}
        radius="none"
      >
        <div className="relative ">
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
            height={280}
            width={'w-full'}
            className="rounded-none w-full h-32  object-cover"
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
        <CardBody className="p-3 space-y-2">
          <div className="space-y-2">
            <div className="flex gap-2">
              <h1 className="w-full text-xs sm:text-sm">
                {new Date(props.fecha).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric'
                })}
              </h1>
            </div>
            <h4
              className={`text-base font-bold line-clamp-2 text-primary-800 uppercase ${
                isHover && 'underline'
              }`}
            >
              {props.title}
            </h4>
            <p className="line-clamp-3 text-sm text-zinc-500">
              {props?.description}
            </p>
          </div>
          <div className="flex float-right justify-end">
            <Link href={props.link} showAnchorIcon size="sm">
              Leer más
            </Link>
          </div>
        </CardBody>
      </Card>
    </>
  )
}
