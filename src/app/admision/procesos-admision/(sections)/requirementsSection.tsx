import { Button } from '@nextui-org/react'
import { IconFileDownload, IconCircleCheck } from '@tabler/icons-react'

const requirements = [
  {
    title: 'Para Programas de Maestrías',
    items: [
      'Copia fedateada del grado de bachiller emitida por la universidad de origen. Y constancia de inscripción de la SUNEDU.',
      'Hoja de vida descriptiva (no documentada), según formato de la página web.',
      'Copia simple de DNI. En el caso de postulantes extranjeros copia simple de pasaporte o carne de extranjería.',
      'Recibo de pago por derecho de inscripción al proceso de admisión.',
      'Tener todos los documentos en digital para subirlos a la plataforma virtual y en físico para presentarlo a la escuela de postgrado, en folder de plástico verde.'
    ],
    link_formato:
      'https://drive.google.com/file/d/1ZQZ3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3/view?usp=sharing'
  },
  {
    title: 'Para Programas de Doctorado:',
    items: [
      'Copia fedateada del grado de maestro emitida por la universidad de origen. Y constancia de inscripción de la SUNEDU.',
      'Hoja de vida descriptiva (no documentada), según formato de la página web.',
      'Copia simple de DNI. En el caso de postulantes extranjeros copia simple de pasaporte o carne de extranjería.',
      'Proyecto de investigación en el área de estudio doctoral, no mayor de 10 páginas.',
      'Recibo de pago por derecho de inscripción al proceso de admisión.',
      'Tener todos los documentos en digital para subirlos a la plataforma virtual y en físico para presentarlo a la escuela de postgrado, en folder de plástico azul'
    ],
    link_formato:
      'https://drive.google.com/file/d/1ZQZ3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3/view?usp=sharing'
  }
]

export const RequirementsSection = () => {
  return (
    <div className="px-0 sm:px-2 lg:px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {requirements?.map((requirement, index) => (
          <section
            key={index}
            className="p-4 border border-zinc-500 rounded-lg"
          >
            <h4 className="mb-4 text-lg font-bold text-primary-800">
              {requirement.title}
            </h4>
            <ul className="space-y-2">
              {requirement.items.map((item, index) => (
                <li key={index} className="flex gap-2 items-start ">
                  <div className="mt-2 text-primary-800">
                    <IconCircleCheck size={16} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Button
                variant="bordered"
                endContent={<IconFileDownload size={16} />}
              >
                Descargar formato
              </Button>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
