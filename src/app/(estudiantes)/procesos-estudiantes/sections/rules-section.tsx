import { fetchDocuments } from '@/api'
import { Downloadable } from '@/components'

export async function RulesSection () {
  try {
    const documents = await fetchDocuments({ description: '', categoryName: 'estudiante' })

    return (
      <section className="flex flex-col gap-[14px] w-full">
        <h2 className="text-black text-xl font-bold">Reglamentos</h2>
        {
          documents.results.length > 0 ? documents.results.map((file) => (
            <Downloadable
              key={file.id}
              title={file.description}
              fileName={file.description}
              file={file.file}
            />
          )) : <p>No hay documentos disponibles</p>
        }
      </section>
    )
  } catch (error) {
    return <p>Ha ocurrido un error al cargar los documentos. Por favor, intenta de nuevo más tarde.</p>;
  }
}
