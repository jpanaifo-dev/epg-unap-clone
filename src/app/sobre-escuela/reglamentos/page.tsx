import { Metadata } from 'next'
import { fetchDocuments } from '@/api'
import { RulesSection } from '@/components'

export async function generateMetadata(): Promise<Metadata> {
  const meta = {
    title: `EPG-UNAP | REGLAMENTOS`,
    description:
      'Conoce los reglamentos de la Escuela de Postgrado de la Universidad Nacional de la Amazonía Peruana.'
  }

  return meta
}

export default async function RulesPage() {
  try {
    const data = await fetchDocuments({
      description: 'reglamento academico',
      categoryName: ''
    })

    return (
      <>
        <RulesSection documents={data} />
      </>
    )
  } catch (error) {
    return (
      <p>
        Ha ocurrido un error al cargar los documentos. Por favor, intenta de
        nuevo más tarde.
      </p>
    )
  }
}
