import { Downloadable } from '@/components'
import { ComplementaryInfo } from './complementaryInfo'
import { EvaluationSection } from './evaluationSection'
import { FinallyInfo } from './finallyInfo'
import { RequirementsSection } from './requirementsSection'

const data = [
  {
    title: 'INSCRIPCIÓN Y REGISTRO',
    description:
      'En el proceso de inscripción y registro, el postulante puede inscribirse personalmente o a través de un poder simple. Si ha estudiado en el extranjero, debe presentar títulos reconocidos por la SUNEDU o la ANR, y los postulantes extranjeros deben proporcionar copias de su registro de identidad y cumplir con los requisitos del siguiente punto',
    customSection: ''
  },
  {
    title: 'Requisitos Generales de Postulantes',
    description:
      'Los postulantes que participen en el proceso de admisión deberán cumplir con los siguientes requisitos y presentarlos en un folder de manila',
    customSection: <RequirementsSection />
  },
  {
    title: 'Modalidades de Ingreso a Programas de Postgrado',
    description:
      'El postulante puede solicitar ingreso extemporáneo, por traslado externo o excepcional. Para cada modalidad, se establecen requisitos específicos y se sigue un proceso que incluye la emisión de Resoluciones Directoral y Rectoral. Además, se destaca la importancia de cumplir con los requisitos generales del reglamento académico. La información proporcionada en la Ficha de Inscripción se considera una declaración jurada.',
    customSection: ''
  },
  {
    title: 'EVALUACIÓN DEL POSTULANTE',
    description:
      'En el marco de la "Evaluación del Postulante", se lleva a cabo un proceso conforme al cronograma de la convocatoria, que incluye:',
    customSection: <EvaluationSection />
  },
  {
    title: ' RESULTADO DEL PROCESO DE ADMISIÓN E INICIO DE CLASES',
    description:
      'Los resultados del proceso de admisión son inapelables. La conclusión se materializa con la elaboración de un acta por los miembros de la Comisión de Admisión. Esta acta, visada por la Oficina Central de Admisión, junto con los expedientes de los postulantes, se envía de inmediato al Jefe de la Oficina Central de Admisión. Posteriormente, este conjunto documental se remite a la Dirección de la Escuela de Postgrado (EPG) para dar inicio al trámite correspondiente',
    customSection: ''
  },
  {
    title: 'DISPOSICIONES COMPLEMENTARIAS',
    description: '',
    customSection: <ComplementaryInfo />
  },
  {
    title: 'DISPOSICIONES FINALES',
    description: '',
    customSection: <FinallyInfo />
  }
]

export default function IndexPage () {
  return (
    <div className="py-6">
      <ol className="relative border-s border-zinc-200 dark:border-zinc-700">
        {data?.map((item, index) => (
          <li key={index} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-zinc-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-zinc-900 dark:bg-zinc-700"></div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white uppercase">
              {item.title}
            </h3>
            <p className="mb-4 text-base font-normal text-zinc-500 dark:text-zinc-400">
              {item.description}
            </p>
            {item.customSection}
          </li>
        ))}
      </ol>
      <Downloadable
        title="Cronograma"
        fileName="REGLAMENTO-ACADEMICO-POSTGRADO-con-RR-0408-2016-UNAP.pdf"
        file="https://enlinea.unapiquitos.edu.pe/postgrado/admision/recursos/REGLAMENTO-DE-ADMISION-2018_OCA-CORRECCION_15-10-2018.pdf"
      />
    </div>
  )
}
