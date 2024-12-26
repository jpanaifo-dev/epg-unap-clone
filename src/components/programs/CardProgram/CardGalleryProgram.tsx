'use router'
import {
  Card,
  CardBody,
  Image,
  Chip,
  CardFooter,
  Button,
  Tooltip
} from '@nextui-org/react'
import { IProgramList } from '@/types'
import { IconChevronRight } from '@tabler/icons-react'
import { TooltipContent } from './TooltipContent'
import Link from 'next/link'

interface IProps {
  data: IProgramList
}

export const CardGalleryProgram = (props: IProps) => {
  const { data: program } = props

  return (
    <Tooltip
      content={<TooltipContent data={program} />}
      placement="right-start"
      radius="sm"
    >
      <Card
        className="rounded-lg shadow-none hover:cursor-pointer p-0"
        isHoverable
        as={Link}
        href={`/programas/${program.tipo.nombre.toLowerCase()}/${program.id}`}
        isBlurred
        isPressable
      >
        <div className="relative w-full">
          <div className="absolute top-0 left-0 z-20">
            <div className="p-2">
              <Chip
                radius="sm"
                className="capitalize text-white font-bold"
                style={{
                  backgroundColor: program?.tipo?.color || '#000'
                }}
              >
                {program.tipo.nombre}
              </Chip>
            </div>
          </div>
          {/* <div className="absolute bottom-0 left-0 right-0 z-20">
          {program?.en_convocatoria === true && (
            <div className="bg-red-500 px-4 lg:px-6 py-1 w-full">
              <h1 className="text-white font-bold ">EN CONVOCATORIA</h1>
            </div>
          )}
        </div> */}
        </div>
        <CardBody className="p-0 flex flex-col gap-3">
          <Image
            className="max-h-56 h-56 object-cover w-full"
            src={program.background || '/images/bg-card.webp'}
            alt="program_img.png"
            loading="lazy"
            removeWrapper
            radius="none"
          />
          <section className="p-2 flex flex-col gap-2">
            <h3 className="text-tiny text-gray-500 uppercase font-bold line-clamp-1">
              {program?.facultad?.nombre}
            </h3>
            <h4 className="text-lg sm:text-xl uppercase font-bold line-clamp-2 mb-2 text-primary-800">
              {program.nombre}
            </h4>

            <div>
              {program?.objective && (
                <p className="line-clamp-3">{program.objective}</p>
              )}
            </div>
          </section>
        </CardBody>
        <CardFooter className="px-2">
          <Button
            radius="sm"
            endContent={<IconChevronRight size={20} stroke={1} />}
            // className="bg-blueEpg-800 text-white"
            variant="light"
          >
            Ver más
          </Button>
        </CardFooter>
      </Card>
    </Tooltip>
  )
}
