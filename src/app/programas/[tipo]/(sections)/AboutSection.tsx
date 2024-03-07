import { ContactBar } from '@/components'
import img_test from '@/assets/images/landing.jpg'
import { Image } from '@nextui-org/react'

export function AboutSection () {
  return (
    <div className="flex flex-col justify-start gap-6">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <p className="text-medium font-normal">
          La Maestría en Derecho con mención en Derecho Civil y Comercial de la
          Universidad Nacional de la Amazonía Peruana es un programa académico
          avanzado diseñado para juristas y profesionales del derecho que deseen
          especializarse en las áreas de derecho civil y comercial. El programa
          ofrece una formación integral que combina aspectos teóricos y
          prácticos para abordar los desafíos legales contemporáneos.
        </p>
        <Image
          removeWrapper
          src={img_test.src}
          alt="detalles"
          className="h-64 w-full object-cover"
        />
      </section>
      <section className="flex flex-col gap-3.5">
        <h5 className="text-black text-lg font-bold leading-7">Objetivo</h5>
        <p className="text-black text-base font-normal">
          Esta maestría es una iniciativa de la Universidad Nacional de la
          Amazonía Peruana, comprometida con la excelencia académica y la
          formación de profesionales del derecho. El programa se ofrece de
          manera presencial y está diseñado para proporcionar a los estudiantes
          una comprensión profunda del marco legal en las áreas de derecho civil
          y comercial.
        </p>
      </section>
      <section className="flex flex-col gap-3.5 py-5">
        <h5 className="text-black text-lg font-bold leading-7">
          Inversión económica
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="p-2 rounded-lg flex-col justify-center items-start gap-2 inline-flex border border-opacity-85 border-[#DBDBDE]">
            <h5 className="text-black text-base font-bold">Costo total</h5>
            <div className="border w-full"></div>
            <span className="text-black text-base">S/. 00000</span>
          </div>
          <div className="p-2 rounded-lg flex-col justify-center items-start gap-2 inline-flex border border-opacity-85 border-[#DBDBDE]">
            <h5 className="text-black text-base font-bold">Duración</h5>
            <div className="border w-full"></div>
            <span className="text-black text-base">S/. Duracion</span>
          </div>
          <div className="p-2 rounded-lg flex-col justify-center items-start gap-2 inline-flex border border-opacity-85 border-[#DBDBDE]">
            <h5 className="text-black text-base font-bold">Costo por mes</h5>
            <div className="border w-full"></div>
            <span className="text-black text-base">S/. costo</span>
          </div>
        </div>
      </section>
      <ContactBar />
    </div>
  )
}
