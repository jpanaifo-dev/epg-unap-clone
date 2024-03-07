import { IconCircleCheck } from '@tabler/icons-react'
const dataHistory = [
  {
    title: 'Historia y Evolución de la Escuela de Postgrado de la UNAP',
    description:
      'La Universidad Nacional de la Amazonía Peruana (UNAP) fue fundada el 14 de enero de 1961. Inicialmente, carecía de una Escuela de Postgrado. Sin embargo, para cumplir con las disposiciones de la Ley Universitaria 23733, se creó la Escuela de Postgrado mediante la Resolución Rectoral 1081-87-UNAP, el 2 de julio de 1987.',
    list: []
  },
  {
    title: '   Historia y Evolución de la Escuela de Postgrado de la UNAP',
    description: '',
    list: [
      'El Reglamento de la Escuela de Postgrado fue aprobado con la Resolución Rectoral 0521-UNAP el 5 de abril de 1988.',
      ,
      'La primera maestría, en Docencia Universitaria, se inició el 24 de julio de 1989, según la Resolución 0634-89-UNAP.',
      'La Asamblea Nacional de Rectores ratificó la creación de la Escuela de Postgrado José Torres Vásquez el 2 de noviembre de 1993.'
    ]
  },
  {
    title: 'Expansión de Oferta Académica: ',
    description: '',
    list: [
      'La maestría en Gestión Empresarial fue aprobada el 10 de agosto de 1994 (Resolución Rectoral 1028-94-UNAP).',
      'La maestría en Gestión Pública recibió la aprobación el 31 de enero de 1995 (Resolución Rectoral 0110-95-UNAP).',
      'Se estableció una colaboración con la Universidad Nacional de Ucayali para una maestría itinerante en Gestión Empresarial en Pucallpa (Resolución Rectoral 1389-96-UNAP).',
      'Diversas maestrías, como en Salud Pública y Ciencias con mención en Desarrollo Agrario Sostenible, fueron aprobadas en los años siguientes.'
    ]
  },
  {
    title: 'Consolidación y Reconocimiento Nacional:',
    description: '',
    list: [
      'Se aprobaron programas de doctorado, como en Educación y Ciencias Empresariales, en 2006.',
      'La Escuela de Postgrado se fortaleció con diversas especializaciones y programas de segunda especialidad profesional.',
      'La oferta académica continuó expandiéndose con doctorados en Salud Pública y Derecho, así como maestrías en diversas disciplinas.'
    ]
  },
  {
    title: 'Dirección y Actualidad:',
    description: '',
    list: [
      'La dirección de la Escuela de Postgrado ha estado a cargo de destacados profesionales a lo largo de los años.',
      'Actualmente, la dirección está en manos de la Lic. Enf. Matilde Rojas García, Dra., hasta diciembre de 2019 (Resolución Rectoral 1268-2015-UNAP).'
    ]
  }
]
export default function HistoricalSection() {
  return (
    <>
      {dataHistory.map((item, index) => (
        <div key={index}>
          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
          <p>{item.description}</p>
          <ul className="pb-4">
            {item.list.map((item, index) => (
              <div key={index} className="flex gap-4 items-center">
                <div>
                  <IconCircleCheck size={18} />
                </div>
                <li key={index}>{item}</li>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
