import { Downloadable, ContactBar } from '@/components'

const requirements = [
  'Copia fedateada del grado de maestro emitida por la universidad de origen. Y constancia de inscripción de la SUNEDU.',
  'Hoja de vida descriptiva (no documentada), según formato de la página web.',
  'Copia simple de DNI. En el caso de postulantes extranjeros copia simple de pasaporte o carne de extranjería',
  'Proyecto de investigación en el área de estudio doctoral, no mayor de 10 páginas.',
  'Recibo de pago por derecho de inscripción al proceso de admisión.',
  'Tener todos los documentos en digital para subirlos a la plataforma virtual y en físico para presentarlo a la escuela de postgrado, en folder de plástico azul'
]

export async function AdmitionSection() {
  return (
    <div className="flex flex-col gap-6 py-5">
      <section className="inline-flex flex-col justify-start items-start gap-3.5">
        {requirements.map((item, index) => (
          <li key={index} className="text-base">
            {item}
          </li>
        ))}
      </section>
      <section>
        <h2 className="text-lg font-bold leading-7">
          Descargar cronograma de admisión
        </h2>
        <Downloadable
          title="cronograma de admisión"
          // fileName={requirements.items[0].slice(0, 63) + '.pdf'}
          fileName="cronograma de admisión.pdf"
          file="#"
        />
      </section>
      <section className="py-5">
        <h2 className="text-lg font-bold leading-7">
          Descargar calendario académico
        </h2>
        <Downloadable
          title="calendario académico"
          fileName="cronograma de admisión.pdf"
          file="#"
        />
      </section>
      <ContactBar />
    </div>
  )
}
