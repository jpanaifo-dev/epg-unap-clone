'use client'
import image from '@/assets/images/std-sec2.webp'
import { Image } from '@nextui-org/react'

export function EnrollmentSection () {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
      <div className="flex-1 w-full">
        <article className="flex flex-col gap-4">
          <h2 className="text-black text-xl font-bold">Misión</h2>
          <p className="text-black text-base font-normal">
            Nuestra misión es impulsar la formación de profesionales altamente
            calificados y la generación de conocimiento científico de vanguardia
            en áreas de relevancia para la región amazónica. A través de
            programas de posgrado de calidad y la promoción de la investigación
            interdisciplinaria, buscamos contribuir al desarrollo sostenible, la
            conservación de la biodiversidad y el bienestar de las comunidades
            amazónicas.
          </p>
        </article>
      </div>
      <div className="w-1/3">
        <Image
          src={image.src}
          alt="matricula de estudiante"
          radius='none'
          className="w-full object-cover"
        />
      </div>
    </section>
  )
}
