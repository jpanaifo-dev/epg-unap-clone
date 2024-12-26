import { CalendarySection } from './(sections)'
import { fetchDocuments } from '@/api'

export default async function AdmisionPage () {
  try {
    const data = await fetchDocuments({description: '', categoryName: 'admision'})

    return (
      <>
        <CalendarySection documents={data} />
      </>
    )
  } catch (error) {
    return <p>Ha ocurrido un error al cargar los documentos. Por favor, intenta de nuevo más tarde.</p>
  }
}
