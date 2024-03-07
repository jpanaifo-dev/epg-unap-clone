import { ContactBar } from '@/components'

const profileStudent = [
  'Haber terminado la maestría en Antropología o contar con una experiencia en investigación antropológica equivalente.',
  'Tener una propuesta de investigación inicial, la cual será ampliada y mejorada para convertirse en el proyecto de tesis doctoral.',
  'Tener la aceptación formal (por escrito) de un posible asesor o asesora. La aceptación formal del asesor o asesora deberá incluir una opinión, siempre por escrito, de la propuesta de investigación presentada por la persona que postula al doctorado'
]

const profileGraduated = [
  'Abordar las necesidades y requerimientos de entidades gubernamentales y privadas a nivel nacional e internacional, desempeñándose como analistas sociales y culturales especializados, así como consultores expertos en cuestiones relacionadas con la ecología y la cultura amazónica.',
  'Impartir de manera innovadora la enseñanza, utilizando recursos educativos actualizados, estrategias pedagógicas activas, un pensamiento analítico sólido y un fuerte compromiso con la educación de alta calidad, que sea intercultural, inclusiva y en consonancia con las necesidades de la región amazónica y el país.'
]

export async function GraduatedProfileSection () {
  return (
    <div className="flex flex-col gap-6">
      <section>
        Para obtener el grado de Doctor en Ciencias de la Amazonía, los
        estudiantes deben completar con éxito todos los cursos requeridos,
        participar en investigaciones originales y defender una tesis doctoral.
        Además, se espera que los estudiantes publiquen sus investigaciones en
        revistas científicas de alto impacto.
      </section>
      <section className="inline-flex flex-col justify-start items-start gap-3.5">
        <h2 className="text-lg font-bold leading-7">Perfil del estudiante</h2>
        {profileStudent.map((item, index) => (
          <li key={index} className="text-base">
            {item}
          </li>
        ))}
      </section>
      <section className="inline-flex flex-col justify-start items-start gap-3.5">
        <h2 className="text-lg font-bold leading-7">Perfil del graduado</h2>
        <p>
          Al completar el Doctorado en Ciencias con mención en Ecología
          Amazónica en la Escuela de Posgrado de la UNAP, los graduados estarán
          preparados para:
        </p>
        {profileGraduated.map((item, index) => (
          <li key={index} className="text-base">
            {item}
          </li>
        ))}
      </section>
      <ContactBar />
    </div>
  )
}
