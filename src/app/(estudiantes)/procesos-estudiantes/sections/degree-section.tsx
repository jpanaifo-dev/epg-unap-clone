const rules = [
  {
    title: 'Artículo 1°',
    description: 'a. Solicitud dirigida al Director (a) de la EPG.'
  },
  {
    title: 'Artículo 2°',
    description:
      'b. Cuatro (4) ejemplares de la tesis de grado, firmados por los miembros del jurado y asesor, eI mismo que debe ser encuadernado y empastado de color verde oscuro.'
  },
  {
    title: 'Artículo 3°',
    description:
      'c. Cuatro (04) CD conteniendo la tesis y el artículo científico, en formato PDF (editable).'
  },
  {
    title: 'Artículo 4°',
    description:
      'd. Copia del diploma del grado académico de bachiller, legalizada por el Secretario(a) General de la UNAP. En caso de bachilleres que no optaron el grado de bachiller en la UNAP, deberá legalizarla el Secretario General de la Universidad de origen.'
  },
  {
    title: 'Artículo 5°',
    description:
      'e. Constancia administrativa de no tener deuda con la Escuela de postgrado, expedida por las oficinas de Asuntos Académicos y Asuntos Económicos de la Escuela de Postgrado.'
  },
  {
    title: 'Artículo 6°',
    description:
      'f. Certificado de estudios concluidos de la maestría, en original, firmados y sellados por el Director (a), el Secretario (a) Académico (a) y el Jefe de Asuntos Académicos de la Escuela de Postgrado; este último debe visar cada una de las hojas.'
  },
  {
    title: 'Artículo 7°',
    description:
      'g. Constancia de Inscripción del grado académico de bachiller otorgado por la Asamblea Nacional de Rectores (ANR) o por Superintendencia Nacional de Educación Superior Universitaria (SUNEDU).'
  },
  {
    title: 'Artículo 8°',
    description:
      'h. Resolución de revalidación otorgado por el Consejo Universitario de la IJNAP o resolución de reconocimiento del grado académico de bachiller otorgado por la Asamblea Nacional de Rectores (ANR) o por Superintendencia Nacional de Educación Superior Universitaria (SUNEDU) para los que optaron el grado académico en el extranjero.'
  },
  {
    title: 'Artículo 9°',
    description: 'i. Constancia original de egresado.'
  },
  {
    title: 'Artículo 10°',
    description: 'j. Recibos originales de pago por:'
  },
  {
    title: 'Artículo 11°',
    description:
      'Certificado de estudios en original Trámite administrativo Constancia administrativa de no adeudar a la escuela de postgrado. Diploma de egresado Sustentación de tesis Diploma del grado académico de magíster.'
  },
  {
    title: 'Artículo 12°',
    description:
      'Acta original de sustentación de tesis. Este documento es presentado en papel membretado de la escuela de postgrado, sin borrones ni enmendaduras firmado por los miembros del jurado y refrendado por el (la) secretario (a) académico (a) y el Jefe de asuntos académicos de la escuela de postgrado.'
  },
  {
    title: 'Artículo 13°',
    description:
      'Certificado original que acredite el dominio de un (01) idioma extranjero, expedido por el Centro de Idiomas de la UNAP u otro centro debidamente acreditado.'
  },
  {
    title: 'Artículo 14°',
    description:
      'Ocho (08) fotos actuales a color con fondo blanco, tamaño pasaporte, con vestimenta estilo sastre y sin lentes.'
  },
  {
    title: 'Artículo 15°',
    description: 'Fotocopia legalizada del D.N.I vigente.'
  }
]

export function DegreeSection () {
  return (
    <section>
      <h2 className="text-lg font-bold leading-7">
        Sobre la optención de grado de maestro
      </h2>
      <h5 className="text-base font-normal py-4">
        Para obtener el grado de Maestro se requiere:
        <div className="flex flex-col">
          {rules.map((rule) => (
            <li key={rule.title}>
              <span className="text-base font-normal">{rule.description}</span>
            </li>
          ))}
        </div>
      </h5>
    </section>
  )
}
