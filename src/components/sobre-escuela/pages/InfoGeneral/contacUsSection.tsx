'use client'
import { Button, Input, Textarea } from '@nextui-org/react'

export default function ContactUsSection() {
  return (
    <>
      <h3 className="text-lg font-bold mb-4">Contáctanos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.174816152475!2d-73.29751722587147!3d-3.772110696201733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ea0fc8b03af903%3A0xa30ac2bf7c0720a3!2sEscuela%20de%20Postgrado%20UNAP!5e0!3m2!1ses-419!2spe!4v1697126753714!5m2!1ses-419!2spe"
          className="w-full h-full"
          loading="lazy"
        />
        <div className="space-y-4">
          <div>
            <Input
              label="Correo electónico"
              type="email"
              size="lg"
              variant="bordered"
              placeholder="correo@correo.com"
              labelPlacement="outside"
              radius="sm"
            />
          </div>
          <div>
            <Textarea
              label="Mensaje"
              variant={'bordered'}
              placeholder="Enter your description"
              radius="sm"
              size="lg"
              className="col-span-12 md:col-span-6 mb-6 md:mb-0"
              labelPlacement="outside"
            />
          </div>
          <Button color="primary" className="w-full" radius="sm">
            Enviar
          </Button>
        </div>
      </div>
    </>
  )
}
