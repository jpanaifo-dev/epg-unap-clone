import { Downloadable } from '@/components'

const Files = [
  {
    id: 1,
    title: 'Reglamento académico',
    subtitle: 'Reglamento de la universidad',
    file: 'REGLAMENTO-ACADEMICO-POSTGRADO-con-RR-0408-2016-UNAP.pdf'
  },
  {
    id: 2,
    title: 'Reglamento de biblioteca',
    subtitle: 'Reglamento de la universidad',
    file: 'REGLAMENTO-DE-BIBLIOTECA-UNAP.pdf'
  },
  {
    id: 3,
    title: 'Reglamento de grados y títulos',
    subtitle: 'Reglamento de la universidad',
    file: 'REGLAMENTO-DE-GRADOS-Y-TITULOS-UNAP.pdf'
  },
  {
    id: 4,
    title: 'Resolucion directoral de modificacion del costo',
    subtitle: 'Resolucion directoral',
    file: 'REGLAMENTO-ACADEMICO-POSTGRADO-con-RR-0408-2016-UNAP.pdf'
  },
  {
    id: 5,
    title: 'Norma interna para la certificación de idiomas extranjeros.',
    subtitle: 'Norma interna',
    file: 'CERTIFICACION-DE-IDIOMAS-EXTRANJEROS-UNAP.pdf'
  }
]

export function RulesSection () {
  return (
    <section className="flex flex-col gap-[14px] w-full">
      <h2 className="text-black text-base font-bold">Reglamentos</h2>
      {Files.map((file) => (
        // TODO: Remove this comment if Downloadable component is working good
        // <SimpleFileCard key={file.id} title={file.title} file={file.file} />
        <Downloadable
          key={file.id}
          title={file.title}
          fileName={file.file}
          file="#"
        />
      ))}
    </section>
  )
}
