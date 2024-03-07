'use router'
import { Card, CardBody, Image, Chip, Link } from '@nextui-org/react'
import { type IProgramForList } from '@/types'
import blank from '@/assets/images/blank.png'
import { IconChevronRight } from '@tabler/icons-react'

export const CardGalleryProgram = (program: IProgramForList) => {
  return (
    <Card className="rounded-lg shadow-none hover:border hover:border-zinc-300 hover:shadow-xl hover:cursor-pointer">
      <div className="relative w-full">
        <div className="absolute top-0 left-0 z-20">
          <div className="p-2">
            <Chip
              radius="sm"
              className="capitalize text-white font-bold"
              style={{
                backgroundColor: program?.programType?.color ?? '#000'
              }}
            >
              {program.programType.nombre}
            </Chip>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20">
          {program?.en_convocatoria === true && (
            <div className="bg-red-500 px-4 lg:px-6 py-1 w-full">
              <h1 className="text-white font-bold ">EN CONVOCATORIA</h1>
            </div>
          )}
        </div>
        <Image
          className="max-h-56 object-cover w-full"
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
      <CardBody className="h-full p-3 sm:p-4 lg:p-5 xl:p-6">
        <h3 className="text-tiny text-gray-500 uppercase font-bold mb-1 line-clamp-1">
          {program?.faculty?.nombre}
        </h3>
        <h4 className="text-lg uppercase font-bold line-clamp-2 mb-2 text-primary-800">
          {program.title}
        </h4>
        {program.modality !== null ? (
          <p className="text-tiny sm:text-sm capitalize">
            Modalidad: {program.modality}
          </p>
        ) : null}
        <p className="text-tiny sm:text-sm">Inicio: </p>
        <p className="text-tiny sm:text-sm">Duración: </p>
        <div className="absolute bottom-5 right-5">
          <Link href={program?.link ?? '#'} size="sm" color="foreground">
            <IconChevronRight size={24} />
          </Link>
        </div>
      </CardBody>
    </Card>
  )
}
