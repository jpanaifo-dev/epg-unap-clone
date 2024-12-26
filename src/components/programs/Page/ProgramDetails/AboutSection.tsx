import { ContactBar } from '@/components'
import { IProgramList } from '@/types'
import { IconTrophy } from '@tabler/icons-react'

interface IProps {
  program: IProgramList
}

function renderHtml(html: string) {
  return (
    <div className="custom-quill" dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export function AboutSection(props: IProps) {
  const { program } = props
  const { description, objective } = program

  return (
    <div className="flex flex-col justify-start gap-8">
      <section className="grid grid-cols-1 gap-2">
        <div className="">
          {renderHtml(description || 'No hay descripción')}
        </div>
      </section>

      <section className="flex flex-col gap-4 relative bg-primary-50 p-6 rounded-lg">
        <div className="flex items-center gap-3 ">
          <div className="bg-white p-2 rounded-md shadow-lg">
            <IconTrophy size={24} />
          </div>
          <h5 className="text-black text-lg font-bold leading-7">Objetivo</h5>
        </div>
        <div>
          <p className="text-black text-base font-normal">
            {objective || 'Sin descripción'}
          </p>
        </div>
      </section>
      <ContactBar />
    </div>
  )
}
