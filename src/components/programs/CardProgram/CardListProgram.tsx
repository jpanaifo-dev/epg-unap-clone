import {
  Card,
  CardBody,
  Image,
  Chip,
  CardFooter,
  Button
} from '@nextui-org/react'
import blank from '@/assets/images/blank.png'
import { IconChevronRight } from '@tabler/icons-react'
import { IProgramList } from '@/types'
import Link from 'next/link'

interface IProps {
  data: IProgramList
}

export const CardListProgram = (props: IProps) => {
  const { data: program } = props

  return (
    <Card
      className="h-56 lg:h-60 rounded-lg shadow-none border-none hover:border-primary-500"
      isPressable
      isHoverable
      as={Link}
      href={`/programas/${program.tipo.nombre.toLowerCase()}/${program.id}`}
    >
      <div className="flex h-full max-h-fit">
        <div className="relative h-56 sm:h-auto">
          <div className="absolute top-0 left-0 z-20">
            <div className="p-2">
              <Chip
                radius="sm"
                className="capitalize text-white font-bold"
                style={{
                  backgroundColor: program?.tipo?.color ?? '#000000'
                }}
              >
                {program.tipo.nombre}
              </Chip>
            </div>
          </div>
          {/* <div className="absolute h-auto bottom-0 left-0 right-0  z-20">
            {program?.en_convocatoria === true && (
              <div className="bg-red-500 px-4 lg:px-6 py-1 ">
                <h1 className="text-white font-bold text-tiny sm:tex-base">
                  EN CONVOCATORIA
                </h1>
              </div>
            )}
          </div> */}
          <Image
            className="h-56 lg:h-full lg:min-w-80 max-h-fit object-cover"
            src={program.background || '/images/bg-card.webp'}
            alt="program_img.png"
            loading="lazy"
            removeWrapper
            radius="none"
          />
        </div>
        <CardBody className="sm:h-full sm:block sm:p-4 lg:p-5 xl:p-6">
          <section className="p-2 flex flex-col gap-2">
            <h3 className="text-tiny text-gray-500 uppercase font-bold line-clamp-1">
              {program?.facultad?.nombre}
            </h3>
            <h4 className="text-lg sm:text-2xl uppercase font-bold line-clamp-2 mb-2 text-primary-800">
              {program.nombre}
            </h4>

            <div>
              {program?.objective && (
                <p className="line-clamp-3">{program.objective}</p>
              )}
            </div>
          </section>
          <footer>
            <Button
              radius="sm"
              endContent={<IconChevronRight size={20} stroke={1} />}
              // className="bg-blueEpg-800 text-white"
              variant="light"
            >
              Ver más
            </Button>
          </footer>
        </CardBody>
      </div>
    </Card>
  )
}
