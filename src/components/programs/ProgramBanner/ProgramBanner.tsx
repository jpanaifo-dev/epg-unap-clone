'use client'

import { IProgramList } from '@/types'
import { Button, Image } from '@nextui-org/react'
import { IconArrowLeft } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

interface IProps {
  program?: IProgramList
}

export const ProgramBanner = (props: IProps) => {
  const { program } = props
  const {
    // id,
    // applicant_profile,
    background,
    // cantidad_matriculas,
    // codigo,
    // costo,
    // cuotas,
    // description,
    facultad,
    // graduate_profile,
    // horas_academicas,
    // is_active,
    nombre,
    // objective,
    tipo
  } = program || ({} as IProgramList)
  const router = useRouter()
  return (
    <section className="relative h-full min-h-96">
      <Image
        src={background || '/images/banner-programs.webp'}
        alt={nombre}
        removeWrapper
        className="h-full w-full object-cover absolute top-0 left-0 -z-10 min-h-96"
        radius="none"
      />
      <main className=" bg-blue-900/60 top-0 z-50 right-0 bottom-0 left-0 min-h-96">
        <section className="w-full h-full p-6 container">
          <div className="md:col-span-2 pt-10 lg:pt-12 pb-6 flex flex-col items-start gap-8 h-fit">
            <div className="flex justify-between w-full items-center">
              <Button
                onClick={() => {
                  router.back()
                }}
                variant="light"
                startContent={<IconArrowLeft color="white" />}
                radius="sm"
              >
                <span className="text-white text-base font-medium leading-normal">
                  Volver
                </span>
              </Button>
              {/* {enConvocatoria && (
              <Chip
                color="danger"
                className="text-white font-bold text-base"
                radius="sm"
              >
                En convocatoria
              </Chip>
            )} */}
            </div>
            <div>
              <div className="flex flex-col gap-4 w-full">
                <h5 className="self-stretch text-white text-lg lg:text-xl font-normal leading-7 capitalize">
                  {tipo?.nombre}
                </h5>
                <h1 className="text-white text-3xl lg:text-5xl font-bold leading-10 self-stretch">
                  {nombre}
                </h1>
                {facultad && (
                  <p className="self-stretch text-white text-base font-bold leading-normal">
                    {facultad.nombre} - {facultad.sigla}
                  </p>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-start">
                {/* <Button
                size="lg"
                color="primary"
                endContent={<IconArrowRight color="white" />}
              >
                <Link
                  href={inscriptionLink}
                  className="grow shrink basis-0 text-white text-base font-medium leading-normal"
                >
                  Incripciones
                </Link>
              </Button> */}
                {/* <Button
                size="lg"
                color="default"
                variant="ghost"
                endContent={<IconArrowRight color="white" />}
              >
                <Link
                  href={infoLink}
                  className="grow shrink basis-0 text-white text-base font-medium leading-normal"
                >
                  Información
                </Link>
              </Button> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  )
}
