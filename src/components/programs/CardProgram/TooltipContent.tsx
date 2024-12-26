import { IProgramList } from '@/types'
import { Button } from '@nextui-org/react'
import { IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'

interface IProps {
  data: IProgramList
}

export const TooltipContent = (props: IProps) => {
  const { data: program } = props
  return (
    <div className="px-2 py-4 max-w-xs flex flex-col gap-2">
      <header className=" flex flex-col gap-1">
        <h3 className="text-tiny text-gray-500 uppercase font-bold line-clamp-1">
          {program?.facultad?.nombre}
        </h3>
        <h4 className="text-base uppercase font-bold line-clamp-2 mb-2 text-primary-800">
          {program.nombre}
        </h4>
      </header>
      <section className=" flex flex-col gap-1">
        <div>
          <p className="font-bold"> Objetivo:</p>
          <p className="line-clamp-4">{program.objective || 'No disponible'}</p>
        </div>
        <div>
          <p className="font-bold"> Perfil del postulante:</p>
          <p className="line-clamp-4">
            {program.applicant_profile || 'No disponible'}
          </p>
        </div>
        <div>
          <p className="font-bold"> Perfil del graduado:</p>
          <p className="line-clamp-4">
            {program.graduate_profile || 'No disponible'}
          </p>
        </div>
      </section>
      <footer className="w-full">
        <Button
          endContent={<IconChevronRight size={20} />}
          radius="sm"
          fullWidth
          className="bg-blueEpg-800 text-white"
          as={Link}
          href={`/programas/${program.tipo.nombre.toLowerCase()}/${program.id}`}
        >
          Conoce más
        </Button>
      </footer>
    </div>
  )
}
