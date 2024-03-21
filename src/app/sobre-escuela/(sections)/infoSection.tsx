'use client'
import { Image } from '@nextui-org/react'
import { IconSchool, IconAward, IconCircleCheck } from '@tabler/icons-react'
import epg_img from '@/assets/images/epg.webp'

const presentationData = [
  {
    title: 'Misión',
    icon: <IconSchool size={38} />,
    description:
      'Nuestra misión es impulsar la formación de profesionales altamente calificados y la generación de conocimiento científico de vanguardia en áreas de relevancia para la región amazónica. A través de programas de posgrado de calidad y la promoción de la investigación interdisciplinaria, buscamos contribuir al desarrollo sostenible.'
  },
  {
    title: 'Visión',
    icon: <IconAward size={38} />,
    description:
      'Formar maestros, doctores y especialistas altamente calificados, capaces de promover, generar y difundir conocimientos por medio de la investigación, en un contexto de pluralismo y diversidad cultural, comprometidos con el desarrollo cultural, social, científico, tecnológico y económico sostenible de la Amazonía en el entorno global.'
  }
]

const objetivos = [
  'Formar profesionales de alto nivel académico en las diferentes áreas del conocimiento.',
  'Promover la investigación científica y tecnológica en las diferentes áreas del conocimiento.',
  'Contribuir al desarrollo de la ciencia y la tecnología en la región amazónica.',
  'Contribuir a la solución de los problemas de la región amazónica.',
  'Contribuir a la formación de recursos humanos de alto nivel en la región amazónica.',
  'Contribuir al desarrollo de la región amazónica.'
]

export default function InfoSection () {
  return (
    <>
      <section className="mb-8">
        <h3 className="text-lg font-bold mb-4">
          Sobre la EPG - “José Torres Vasques”
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="order-2 sm:order-1">
            <p className="text-justify ">
              La Escuela de Postgrado de la Universidad Nacional de la Amazonía
              Peruana es un órgano de línea con autonomía académica,
              administrativa y económica que ofrece variados programas de
              especialización entre maestrías y doctorados, es reconocido por su
              excelencia académica y oferta de programas de posgrado en diversas
              áreas de estudio. Con una facultad altamente calificada y recursos
              de investigación de vanguardia, la UNAP ofrece a los estudiantes
              una educación de calidad y oportunidades de crecimiento
              profesional. Ya sea que estés interesado en obtener un título de
              maestría o un doctorado, el Postgrado de la UNAP es una opción
              destacada para aquellos que buscan avanzar en sus carreras y
              contribuir al desarrollo de la región amazónica.
            </p>
          </div>
          <div className="order-1 sm:order-2 h-[190px] sm:h-full lg:max-h-72 ">
            <Image
              src={epg_img.src}
              alt="Escuela de Postgrado"
              className="rounded-none w-full h-full object-cover"
              removeWrapper
            />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 items-center">
        {presentationData?.map((item, index) => (
          <div className="relative sm:m-2" key={index}>
            <div className="absolute top-0 left-4 sm:left-6 flex items-center gap-4">
              <div className="bg-primary-800 text-white rounded-lg p-1">
                {item.icon}
              </div>
            </div>
            <div className="p-4 sm:p-6 bg-yellow-50 rounded-lg mt-4 pt-9 sm:pt-10">
              <h3 className="text-lg font-bold text-primary-800">
                {item.title}
              </h3>
              <p className="text-base">{item.description}</p>
            </div>
          </div>
        ))}
        {/* <div>
          <h3 className="text-lg font-bold">Visión</h3>
          <p className="text-base text-justify">
            Nuestra visión es ser un referente internacional en la formación de
            líderes y la investigación científica aplicada en la Amazonía.
            Buscamos ser reconocidos por la excelencia académica de nuestros
            programas de maestría y doctorado, así como por la relevancia de
            nuestras investigaciones en la solución de los desafíos
            socioambientales de la región amazónica. Aspiramos a ser un motor de
            desarrollo sostenible, promoviendo la conservación de la Amazonía y
            mejorando la calidad de vida de sus habitantes.
          </p>
        </div> */}
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-bold mb-4">Objetivos</h3>
        <ul className="list-inside space-y-3">
          {objetivos?.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="text-primary-800">
                <IconCircleCheck />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
