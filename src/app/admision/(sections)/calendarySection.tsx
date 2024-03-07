'use client'
import { Downloadable } from '@/components'
import { Divider } from '@nextui-org/react'

const rows = [
  {
    key: '1',
    title: 'Convocatoria e inscripción',
    description: 'Anuncio y registro para participar en el programa educativo.',
    date: {
      start: '01/07/2020',
      end: '31/07/2020'
    }
  },
  {
    key: '2',
    title: 'Evaluación de expedientes',
    description:
      'Revisión y análisis de documentos presentados por los aspirantes',
    date: {
      start: '07/09/2021',
      end: '11/09/2021'
    }
  },
  {
    key: '3',
    title: 'Entrevista personal',
    description:
      'Evaluación directa mediante entrevista para conocer al candidato',
    date: {
      start: '11/09/2021',
      end: '12/09/2021'
    }
  },
  {
    key: '4',
    title: 'Publicación de resultados',
    description:
      'Comunicado oficial de los resultados del proceso de selección',
    date: {
      start: '15/09/2020',
      end: '15/09/2020'
    }
  },
  {
    key: '5',
    title: 'Recepción de constancia de ingreso',
    description: 'Documentación que confirma la admisión al programa',
    date: {
      start: '18/09/2020',
      end: '25/09/2020'
    }
  },
  {
    key: '6',
    title: 'Matrícula',
    description:
      'Registro formal y confirmación de participación en el programa académico',
    date: {
      start: '18/09/2020',
      end: '25/09/2020'
    }
  },
  {
    key: '7',
    title: 'Inicio de clases',
    description: 'Inicio de actividades académicas',
    date: {
      start: '28/09/2020',
      end: '28/09/2020'
    }
  },
  {
    key: '8',
    title: 'Matrícula extemporánea',
    description: 'Registro fuera del plazo establecido inicialmente',
    date: {
      start: '28/09/2020',
      end: '9/10/2020'
    }
  }
]

const columns = [
  {
    key: 'actividad',
    label: 'ACTIVIDAD'
  },
  {
    key: 'inicio',
    label: 'INICIO'
  },
  {
    key: 'fin',
    label: 'FIN'
  }
]

const Calendary = () => {
  return (
    <div className="w-full h-full py-4 lg:py-8">
      <h1 className="font-bold text-3xl text-primary-800 mb-6">
        CONVOCATORIA 2023 - Programas de Maestrías y Doctorados
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

export const CalendarySection = () => {
  return (
    <>
      <section className="mt-6">
        <Calendary />
      </section>
      <section className="mb-4">
        <h4 className="mb-4 text-lg font-bold">
          Descargar calendario de admision
        </h4>
        {/* <Downloadable
          title="Cronograma"
          fileName="REGLAMENTO-ACADEMICO-POSTGRADO-con-RR-0408-2016-UNAP.pdf"
          file="/REGLAMENTO-ACADEMICO-POSTGRADO-con-RR-0408-2016-UNAP.pdf"
        /> */}
        <Downloadable
          title="Cronograma"
          fileName="REGLAMENTO-ACADEMICO-POSTGRADO-con-RR-0408-2016-UNAP.pdf"
          file="/REGLAMENTO-ACADEMICO-POSTGRADO-con-RR-0408-2016-UNAP.pdf"
        />
      </section>
    </>
  )
}
