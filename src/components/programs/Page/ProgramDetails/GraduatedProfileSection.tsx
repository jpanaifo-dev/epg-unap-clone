import { ContactBar } from '@/components'
import { IProgramList } from '@/types'

interface IProps {
  program: IProgramList
}

function renderHtml(html: string) {
  return (
    <div className="custom-quill" dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export async function GraduatedProfileSection(props: IProps) {
  const { program } = props
  const { graduate_profile, applicant_profile } = program
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
        {renderHtml(applicant_profile || 'No hay descripción')}
      </section>
      <section className="inline-flex flex-col justify-start items-start gap-3.5">
        <h2 className="text-lg font-bold leading-7">Perfil del graduado</h2>
        <p>{renderHtml(graduate_profile || 'No hay descripción')}</p>
      </section>
      <ContactBar />
    </div>
  )
}
