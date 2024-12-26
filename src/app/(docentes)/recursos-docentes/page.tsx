import { fetchDocuments } from '@/api'
import { CardSimple, Downloadable } from '@/components'

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
  }
]

export default async function DocentesPage() {
  try {
    const docentes = await fetchDocuments({
      description: '',
      categoryName: 'docente'
    })
    const rules = await fetchDocuments({
      description: '',
      categoryName: 'admision'
    })

    return (
      <>
        <div className="space-y-6">
          <h2 className="text-black text-lg font-bold leading-7">
            Formato para los docentes
          </h2>
          <div>
            <h3 className="text-black text-lg font-bold mb-2">Reglamentos</h3>
            <div className="flex flex-col space-y-4">
              {rules.results.length > 0 ? (
                rules.results.map((document) => (
                  <Downloadable
                    key={document.id}
                    title={document.description}
                    fileName={document.description}
                    file={document.file}
                  />
                ))
              ) : (
                <p>No hay documentos disponibles</p>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-black text-lg font-bold leading-7 mb-2">
              Herramientas para docentes
            </h3>
            <div className="flex gap-4 flex-col md:flex-row">
              {Files.map((file) => (
                <CardSimple
                  key={file.id}
                  title={file.title}
                  urlLink="#"
                  image="https://img.freepik.com/foto-gratis/sitio-reunion-oficina_1170-1952.jpg?w=996&t=st=1697113318~exp=1697113918~hmac=3dba4cbce9262aa51006e21d116cf949f48dcb2fba080b0b7a80de5a7009ae84"
                />
              ))}
            </div>

            <div className="flex gap-4 flex-col mt-5">
              {docentes ? (
                docentes.results.map((document) => (
                  <Downloadable
                    key={document.id}
                    title={document.description}
                    fileName={document.description}
                    file={document.file}
                  />
                ))
              ) : (
                <p>No hay documentos disponibles</p>
              )}
            </div>
          </div>
        </div>
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
