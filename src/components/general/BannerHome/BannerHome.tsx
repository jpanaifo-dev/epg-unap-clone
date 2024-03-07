'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { type IPublicationForList } from '@/types'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import {
  Button,
  Card,
  CardFooter,
  Image,
  Input,
  Link,
  Spinner
} from '@nextui-org/react'
import {
  IconSearch,
  IconSchool,
  IconBooks,
  IconCertificate,
  IconCalendar
} from '@tabler/icons-react'
import log_sunedu from '@/assets/images/licencia.png'
import img_banner from '@/assets/images/landing_home.webp'

const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
}

const iconsPrograms = [
  {
    key: '1',
    icon: <IconBooks size={54} stroke={1} />
  },
  {
    key: '2',
    icon: <IconCertificate size={54} stroke={1} />
  },
  {
    key: '3',
    icon: <IconSchool size={54} stroke={1} />
  }
]

interface propsSection {
  title: string
  description: string
  publicaciones?: IPublicationForList[] | undefined
}

interface IContadorProgramas {
  name: string
  count: number
}

interface propsBanner {
  publicaciones?: IPublicationForList[]
  tiposProgramas?: IContadorProgramas[]
  loading?: boolean
}

const CustomSection = (props: propsSection & { key?: number | string }) => {
  return (
    <div className="block space-y-4 sm:flex sm:gap-6 h-full lg:py-6">
      <div className="w-full lg:w-[60%] sm:h-full order-2 sm:p-4 flex items-center">
        {props?.publicaciones !== undefined && (
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={8000}
            transitionDuration={800}
            customTransition="transform opacity  500ms ease-in-out fade-in-out"
            className="h-80 sm:h-[24rem] lg:h-[28rem] sm:rounded-lg max-w-xs lg:max-w-none lg:w-full"
          >
            {props?.publicaciones?.map((item, index) => (
              <Card key={index} isFooterBlurred radius="none">
                <Image
                  className="object-cover object-top  w-full h-80 sm:h-[24rem] lg:h-[28rem] z-0"
                  alt="imagen"
                  src={item.image}
                  loading="lazy"
                  removeWrapper
                  radius="none"
                />
                <CardFooter className="absolute bg-primary-900/60 bottom-0 z-10 justify-between p-2 sm:p-3 lg:p-6">
                  <div className="flex flex-col text-white mr-4">
                    <div className="flex gap-2">
                      <div>
                        <IconCalendar size={16} />
                      </div>
                      <h1 className="w-full text-tiny">
                        {new Date(item.fecha).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </h1>
                    </div>
                    <p className=" text-white mt-1 text-sm sm:text-base line-clamp-2">
                      {item.title}
                    </p>
                  </div>
                  <Button
                    variant="bordered"
                    size="sm"
                    className="text-white"
                    href={`/publicaciones/${item?.typePublication?.key}/${item.id}`}
                    as={Link}
                  >
                    Leer más
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </Carousel>
        )}
      </div>
      <div className="w-full lg:w-[40%] p-4 sm:p-6  flex items-center order-1 relative">
        <div className="space-y-4 sm:space-y-5">
          <h1 className="text-2xl sm:text-3xl xl:text-5xl font-bold ">
            {props.title}
          </h1>
          <p className="text-base sm:text-lg line-clamp-5">
            {props.description}
          </p>
          <Button
            variant="shadow"
            color="primary"
            as={Link}
            href="/admision"
            showAnchorIcon={true}
            className="z-10"
          >
            Más información
          </Button>
          {/* </div> */}
        </div>
        <div className="absolute  -z-1 bottom-0 right-4 sm:top-0 sm:left-0">
          <Image
            className="w-24 sm:w-40"
            radius="none"
            alt="sunedu"
            src={log_sunedu.src}
          />
        </div>
      </div>
    </div>
  )
}

export const BannerHome = (props: propsBanner) => {
  const [textSearch, setTextSearch] = useState('')
  const router = useRouter()

  const handleFilter = (value: string) => {
    router.push(`/programas?search=${value}`)
    setTextSearch('')
  }

  return (
    <div>
      <div className="relative h-screen max-h-[38rem] sm:max-h-[50rem] bg-blue-900 items-center">
        <Image
          alt="banner"
          src={img_banner.src}
          removeWrapper={true}
          radius="none"
          className="w-full h-full object-cover blur-sm"
        />
        <div className="h-full flex items-center absolute top-0 right-0 left-0 z-10 bottom-0 bg-DarkTan-900/70">
          <div className="h-full xl:h-[80%] text-white w-full mx-auto max-w-7xl sm:py-4">
            <CustomSection
              title="SIGUE CRECIENDO PROFESIONALMENTE"
              description="Postula a nuestra Escuela de Posgrado ve todos los programas que tenemos para ti"
              publicaciones={props?.publicaciones}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-fit bg-primary-800 text-white">
        <div className="flex justify-center py-8 mx-auto max-w-7xl px-4 sm:px-6 ">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="w-full space-y-2">
              <h1 className="sm:text-xl font-bold mb-4">
                ¿Qué programa estás buscando?
              </h1>
              <Input
                placeholder="Buscar programa..."
                variant="flat"
                color="primary"
                startContent={<IconSearch size={28} />}
                endContent={
                  <Button
                    variant="solid"
                    className="text-white"
                    color="primary"
                    onClick={() => {
                      handleFilter(textSearch)
                    }}
                  >
                    Buscar
                  </Button>
                }
                classNames={{
                  input: [
                    'bg-white',
                    'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                    'placeholder:bg-white dark:placeholder:bg-black/50'
                  ],
                  innerWrapper: 'bg-white',
                  inputWrapper: ['bg-white', 'hover:bg-white']
                }}
                onValueChange={(value) => {
                  setTextSearch(value)
                }}
                onKeyDown={(e) => {
                  e.key === 'Enter' && handleFilter(textSearch)
                }}
              />
              <div className="flex pt-2">
                <Link
                  href="/programas?en_convocatoria=1"
                  color="warning"
                  showAnchorIcon
                >
                  Programas en convocatoria
                </Link>
              </div>
            </div>
            <div className=" w-full flex gap-4  items-center justify-center justify-items-center">
              {props?.loading === false ? (
                <>
                  {props?.tiposProgramas?.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center p-1 lg:p-4"
                    >
                      <div>{iconsPrograms[index]?.icon}</div>
                      <h1 className="font-bold text-2xl sm:text-4xl">
                        {item.count}
                      </h1>
                      <h1 className="text-tiny sm:text-base uppercase">
                        {item.name}
                        {index !== 0 ? 's' : ''}
                      </h1>
                    </div>
                  ))}
                </>
              ) : (
                <div className="w-full flex gap-4  items-center justify-center justify-items-center">
                  {iconsPrograms.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center p-1 lg:p-4"
                    >
                      <div className="animate-pulse mb-2">{item.icon}</div>
                      <Spinner />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
