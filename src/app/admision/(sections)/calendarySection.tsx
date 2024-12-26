'use client'
import { Downloadable } from '@/components'
import { IDocument, IResApi } from '@/types'
import { columns, rows } from '@/utils'
import { Divider } from '@nextui-org/react'

interface IProps {
  documents: IResApi<IDocument>
}

export const CalendarySection = (props: IProps) => {
  const { documents } = props

  const docs = documents?.results || []

  return (
    <>
      <section className="mt-6">
        <Calendary />
      </section>
      <section className="mb-4">
        <h4 className="mb-4 text-lg font-bold">
          Descargar calendario de admision
        </h4>
        <div className='flex flex-col gap-3'>
        {
          docs ? docs.map((document) => (
            <Downloadable
              key={document.id}
              title={document.description}
              fileName={document.description}
              file={document.file}
            />
          )) : <p>No hay documentos disponibles</p>
        }
        </div>
      </section>
    </>
  )
}

const Calendary = () => {
  return (
    <div className="w-full h-full py-4 lg:py-8">
      <h1 className="font-bold text-3xl text-primary-800 mb-6">
        CONVOCATORIA {new Date().getFullYear()} - Programas de Maestrías y Doctorados
      </h1>
      <div className="overflow-x-auto">
        <div className="min-w-[40rem] ">
          <div className="grid grid-cols-3">
            {columns.map((column) => (
              <div
                key={column.key}
                className="text-center p-4 text-primary-800"
              >
                <h4 className="font-bold text-lg">{column.label}</h4>
              </div>
            ))}
          </div>
          <Divider />
          <div>
            {rows.map((row) => (
              <div key={row.key} className="grid grid-cols-3">
                <div className="p-4 min-w-[16rem]">
                  <h4 className="font-bold text-lg text-primary-800">
                    {row.title}
                  </h4>
                  <p className="text-sm">{row.description}</p>
                </div>
                <div className="text-center p-4">
                  <h4 className="font-bold text-lg">{row.date.start}</h4>
                </div>
                <div className="text-center p-4">
                  <h4 className="font-bold text-lg">{row.date.end}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}