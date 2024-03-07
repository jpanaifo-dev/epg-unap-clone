'use client'

import { Button, Chip } from '@nextui-org/react'
import {
  IconArrowLeft,
  IconArrowRight,
  IconDeviceLaptop,
  IconCalendarEvent
} from '@tabler/icons-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const ProgramBanner = ({
  image,
  programName,
  programType,
  modality,
  startDate,
  inscriptionLink,
  infoLink,
  enConvocatoria
}: {
  image: string
  programName: string
  programType: string
  modality: string
  startDate: string
  inscriptionLink: string
  infoLink: string
  enConvocatoria: boolean
}) => {
  const router = useRouter()

  return (
    <header
      className="h-full md:full lg:h-[27rem] w-full flex justify-center bg-cover object-cover relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <section className="max-w-7xl w-full h-full p-6  z-10">
        <div className="md:col-span-2 pt-10 lg:pt-12 pb-6 flex flex-col items-start gap-8 h-fit">
          <div className="flex justify-between w-full items-center">
            <Button
              onClick={() => {
                router.back()
              }}
              variant="light"
              startContent={<IconArrowLeft color="white" />}
            >
              <span className="text-white text-base font-medium leading-normal">
                Volver
              </span>
            </Button>
            {enConvocatoria && (
              <Chip
                color="danger"
                className="text-white font-bold text-base"
                radius="sm"
              >
                En convocatoria
              </Chip>
            )}
          </div>
          <div>
            <div className="flex flex-col gap-4 w-full">
              <h5 className="self-stretch text-white text-lg font-normal leading-7 capitalize">
                {programType}
              </h5>
              <h1 className="self-stretch text-white text-3xl lg:text-4xl font-bold leading-10">
                {programName}
              </h1>
              <p className="self-stretch text-white text-base font-bold leading-normal flex gap-3 items-center">
                <span>
                  <IconDeviceLaptop />
                </span>
                Modalidad:
                <span className="capitalize font-medium">{modality}</span>
              </p>
              <p className="self-stretch text-white text-base font-bold leading-normal flex gap-3 items-center">
                <span>
                  <IconCalendarEvent />
                </span>
                Inicio: {startDate}
              </p>
              d
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <Button
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
              </Button>
              <Button
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
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute h-full lg:h-full inset-0 bg-blue-900 bg-opacity-70"></div>
    </header>
  )
}
