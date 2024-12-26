'use client'
import { IDirectoryList } from '@/types'
import {
  Modal,
  ModalBody,
  ModalContent,
  Image,
  ModalHeader,
  ModalFooter
} from '@nextui-org/react'
import { useFilterFromUrl } from '@/hooks'

interface IProps {
  data: IDirectoryList | null
}

export const StaffDetails = (props: IProps) => {
  const { data } = props
  const { updateFilter } = useFilterFromUrl()

  return (
    <Modal
      isOpen
      onClose={() => updateFilter('detalle', '')}
      size="5xl"
      radius="sm"
    >
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalBody>
          <main className="flex flex-col gap-6">
            <header className="flex flex-col sm:flex-row gap-6">
              <Image
                src={data?.person?.foto || '/images/bg-card.webp'}
                alt={data?.person?.full_name || 'Foto'}
                width={200}
                height={200}
                removeWrapper
                radius="sm"
                className="h-48 w-48 sm:h-64 sm:w-64 object-cover"
              />
              <section>
                <h1 className="text-4xl font-bold text-primary-800">
                  {data?.person?.full_name || 'Nombre completo'}
                </h1>
                <h3>{data?.charge?.nombre}</h3>
                <h4>{data?.person?.correo}</h4>
                <h3>{data?.program?.nombre || 'Sin programa'}</h3>
              </section>
            </header>
            <main className="flex flex-col gap-2">
              <h2 className="font-bold sm:text-lg">Sumilla</h2>
              <p>
                {/* Abogado (PUCP), Diplomado en Derecho Constitucional (Centro de
                Estudios Constitucionales - España), Doctor en Derecho
                (Universidad Autónoma de Madrid), Profesor Principal de la
                Facultad de Derecho y de la Maestría Constitucional de la PUCP.
                Ha sido Secretario General del Tribunal Nacional del Servicio
                Civil, Coordinador del Área de Instituciones Democráticas de la
                Comisión Andina de Juristas, Adjunto en Asuntos Constitucionales
                y Primer Adjunto de la Defensoría del Pueblo (1996-2007). Autor
                de numerosos artículos sobre Derechos Humanos, Derecho
                Constitucional y Procesal Constitucional. Ha publicado los
                libros "El proceso constitucional de amparo", "Derecho Procesal
                Constitucional", "Constitución y procesos constitucionales",
                entre otros. Actualmente es socio del Estudio Echecopar. */}
              </p>
            </main>
          </main>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  )
}
