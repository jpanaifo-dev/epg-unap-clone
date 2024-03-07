import img_test from '@/assets/images/calendar_epg.png'
import { Image, Link } from '@nextui-org/react'
import { type IPublicationForList } from '@/types'

interface IProps {
  data: IPublicationForList
}

export const CarouselSection = (props: IProps) => {
  return (
    <div className="block space-y-4 sm:space-y-0 sm:flex gap-4 bg-primary-800 py-4">
      <div className="flex items-center h-96 w-full">
        <div className="h-fit p-6 text-white">
          <div className="bg-yellow-400 w-fit px-2 mb-2">
            <h1 className="font-bold mb-2">Importante</h1>
          </div>
          <h1 className="mb-4">Fecha: 10/20/12</h1>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
            {props?.data?.title}
          </h1>
          <h1 className="line-clamp-5 mb-4">{props?.data?.description}</h1>
          <Link showAnchorIcon className="text-white" href={props?.data?.link}>
            Leer más
          </Link>
        </div>
      </div>
      <div className="p-6 w-full">
        <Image src={img_test.src} alt="aviso" radius="none" />
      </div>
    </div>
  )
}
