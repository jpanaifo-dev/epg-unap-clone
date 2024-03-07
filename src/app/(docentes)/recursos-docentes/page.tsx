'use client'

import { getFiles } from '@/api/files'
import { CardSimple, Downloadable, MainSection } from '@/components'
import { type IFile } from '@/types'
import { useEffect, useState } from 'react'

export default function DocentesPage () {
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

  const [files2, setFiles2] = useState<IFile[]>([])

  useEffect(() => {
    getFiles().then((res) => {
      setFiles2(res)
    })
  }, [])

  return (
    <MainSection>
      <div className="space-y-6">
        <h2 className="text-black text-lg font-bold leading-7">
          Formato para los docentes
        </h2>
        <div>
          <h3 className="text-black text-lg font-bold mb-2">Reglamentos</h3>
          <div className="flex flex-col space-y-4">
            {Files.map((file) => (
              <Downloadable
                key={file.id}
                title={file.title}
                fileName={file.file}
                file="#"
              />
            ))}
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

          <p>
            descargables reales (solo haz click papi, si tienes el backend
            corriendo y archivos en la bd se decarga :P)
          </p>
          <div className="flex gap-4 flex-col">
            {files2.map((file) => (
              <Downloadable
                key={file.id}
                title={file.title}
                fileName={file.fileName}
                file={file.file}
              />
            ))}
          </div>
        </div>
      </div>
    </MainSection>
  )
}
