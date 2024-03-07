import { Card, CardBody, Image, Chip, Link } from '@nextui-org/react'
import { type IProgramForList } from '@/types'
import blank from '@/assets/images/blank.png'
import { IconChevronRight } from '@tabler/icons-react'

export const CardListProgram = (program: IProgramForList) => {
  return (
    <Card className="h-56 lg:h-60 rounded-lg shadow-none border border-zinc-300 hover:shadow-xl hover:cursor-pointer">
      <div className="flex h-full max-h-fit">
        <div className="relative h-56 sm:h-auto">
          <div className="absolute top-0 left-0 z-20">
            <div className="p-2">
              <Chip
                radius="sm"
                className="capitalize text-white font-bold"
                style={{
                  backgroundColor: program?.programType?.color ?? '#000000'
                }}
              >
                {program.programType.nombre}
              </Chip>
            </div>
          </div>
          <div className="absolute h-auto bottom-0 left-0 right-0  z-20">
            {program?.en_convocatoria === true && (
              <div className="bg-red-500 px-4 lg:px-6 py-1 ">
                <h1 className="text-white font-bold text-tiny sm:tex-base">
                  EN CONVOCATORIA
                </h1>
              </div>
            )}
          </div>
          <Image
            className="h-56 lg:h-full max-h-fit object-cover"
            src={program.image ?? blank.src}
            alt="program_img.png"
            loading="lazy"
            removeWrapper={true}
            radius="none"
            onLoad={() => {
              return <div className="w-full h-[6rem] bg-gray-300" />
            }}
            onError={() => {
              return <div className="w-full h-[6rem] bg-gray-300" />
            }}
          />
        </div>
        <CardBody className="sm:h-full sm:block sm:p-4 lg:p-5 xl:p-6">
          <h3 className="text-tiny text-gray-500 uppercase font-bold mb-1">
            {program?.faculty?.nombre}
          </h3>
          <h4 className="text-lg xl:text-xl uppercase font-bold line-clamp-2 mb-2 text-primary-800">
            {program.title}
          </h4>
          {program.modality !== null ? (
            <p className="text-sm lg:text-lg capitalize">
              Modalidad: {program.modality}
            </p>
          ) : null}
          <p className="text-sm lg:text-lg">Inicio: </p>
          <p className="text-sm lg:text-lg">Duración: </p>
          <div className="absolute bottom-2 right-2 sm:bottom-6 sm:right-5 lg:bottom-4">
            <Link href={program?.link ?? '#'} size="sm" color="foreground">
              <IconChevronRight size={24} />
            </Link>
          </div>
        </CardBody>
      </div>
    </Card>
  )
}
