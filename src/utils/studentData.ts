import { IDocument } from '@/types'

export const routes = [
  {
    title: 'Obtener grado de maestro',
    description: 'Para obtener el grado de Maestro se requiere:',
    rules: [
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
  },
  {
    title: 'Obtener grado de doctor',
    description: 'Para obtener el grado de Doctor se requiere:',
    rules: [
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
  },
  {
    title: 'Obtener grado de diplomado',
    description: 'Para obtener el grado de Diplomado se requiere:',
    rules: [
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
  }
]

export const rulesFiles: IDocument[] = [
  {
    id: 1,
    description: 'Reglamento de Grados y Títulos',
    file: 'Reglamento de Grados y Títulos',
    is_active: true,
    uploaded_at: new Date(),
    category: {
      id: 1,
      description: 'Reglamentos',
      is_active: true
    }
  },
  {
    id: 2,
    description: 'Reglamento de Sustentación de Tesis',
    file: 'Reglamento de Sustentación de Tesis',
    is_active: true,
    uploaded_at: new Date(),
    category: {
      id: 1,
      description: 'Reglamentos',
      is_active: true
    }
  },
  {
    id: 3,
    description: 'Reglamento de Grados y Títulos',
    file: 'Reglamento de Grados y Títulos',
    is_active: true,
    uploaded_at: new Date(),
    category: {
      id: 1,
      description: 'Reglamentos',
      is_active: true
    }
  },
  {
    id: 4,
    description: 'Reglamento de Grados y Títulos',
    file: 'Reglamento de Grados y Títulos',
    is_active: true,
    uploaded_at: new Date(),
    category: {
      id: 1,
      description: 'Reglamentos',
      is_active: true
    }
  },
  {
    id: 5,
    description: 'Reglamento de Grados y Títulos',
    file: 'Reglamento de Grados y Títulos',
    is_active: true,
    uploaded_at: new Date(),
    category: {
      id: 1,
      description: 'Reglamentos',
      is_active: true
    }
  }
]

export const sustentaciones = [
  {
    program: 'Programa de Ingeniería de Sistemas',
    thesis:
      'Desarrollo de un sistema de información para la gestión de la información de los estudiantes de la UNAP',
    student: 'Juan David',
    date: '2021-09-10',
    time: '10:00',
    place: 'Salón 123',
    advisor: 'Ing. Juan Pérez'
  },
  {
    program: 'Programa de Ingeniería de Sistemas',
    thesis:
      'Desarrollo de un sistema de información para la gestión de la información de los estudiantes de la UNAP',
    student: 'Juan David',
    date: '2021-09-10',
    time: '10:00',
    place: 'Salón 123',
    advisor: 'Ing. Juan Pérez'
  },
  {
    program: 'Programa de Ingeniería de Sistemas',
    thesis:
      'Desarrollo de un sistema de información para la gestión de la información de los estudiantes de la UNAP',
    student: 'Juan David',
    date: '2021-09-10',
    time: '10:00',
    place: 'Salón 123',
    advisor: 'Ing. Juan Pérez'
  },
  {
    program: 'Programa de Ingeniería de Sistemas',
    thesis:
      'Desarrollo de un sistema de información para la gestión de la información de los estudiantes de la UNAP',
    student: 'Juan David',
    date: '2021-09-10',
    time: '10:00',
    place: 'Salón 123',
    advisor: 'Ing. Juan Pérez'
  },
  {
    program: 'Programa de Ingeniería de Sistemas',
    thesis:
      'Desarrollo de un sistema de información para la gestión de la información de los estudiantes de la UNAP',
    student: 'Juan David',
    date: '2021-09-10',
    time: '10:00',
    place: 'Salón 123',
    advisor: 'Ing. Juan Pérez'
  }
]
