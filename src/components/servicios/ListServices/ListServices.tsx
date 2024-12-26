import Image from 'next/image'
import { imgSigae } from '@/assets'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

export const ListServices = () => {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <h5 className="text-primary-800 text-lg lg:text-2xl font-bold mb-3">
            Tramites en línea EPG
          </h5>
          <p className="text-black text-base font-normal mb-4">
            Puedes consultar una amplia variedad de trámites en línea, desde
            solicitudes de documentos oficiales hasta registros de servicios
            públicos. Por ejemplo, podrías revisar el estado de tu solicitud de
            pasaporte, solicitar una cita para renovar tu licencia de conducir o
            verificar el estatus de un trámite de inscripción en una institución
            educativa. Quienes pueden crear trámites suelen ser tanto entidades
            gubernamentales como empresas privadas que ofrecen servicios en
            línea.
          </p>
          <Button
            radius="sm"
            color="primary"
            size="lg"
            as={Link}
            href="https://tramites.postgradounap.edu.pe/tramites-en-linea"
          >
            Ir a SIGAE
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={imgSigae.src}
            alt="sigae-web"
            width={450}
            height={450}
            className="rounded-xl"
          />
        </div>
      </section>
    </>
  )
}
