import carnet from '@/assets/images/students/carnet.webp'
import ebook from '@/assets/images/students/ebook.webp'
import email from '@/assets/images/students/email.webp'
import { Image } from '@nextui-org/react'

const data = [
  {
    id: 1,
    title: 'Carnet de estudiante',
    image: carnet,
    description:
      'El carnet de estudiante es una identificación oficial que se proporciona a todos los estudiantes matriculados en la Universidad Nacional de la Amazonía Peruana (UNAP). Contiene información vital del estudiante, como nombre, fotografía, número de identificación, y programa académico.',
    items: [
      'Acceso a Instalaciones: El carnet de estudiante proporciona acceso a las instalaciones universitarias, como bibliotecas, laboratorios y áreas de estudio.',
      'Identificación: Facilita la identificación del estudiante en el campus y durante actividades académicas y extracurriculares.',
      'Descuentos: Puede ofrecer descuentos en eventos culturales, transporte público y servicios dentro del campus.'
    ]
  },
  {
    id: 2,
    title: 'Biblioteca',
    image: ebook,
    description:
      'La biblioteca de la UNAP es un recurso fundamental para estudiantes de postgrado. Ofrece una amplia colección de libros, revistas académicas y recursos digitales relacionados con las disciplinas académicas.',
    items: [
      'Investigación: Acceso a una vasta gama de recursos de investigación para tesis, proyectos y trabajos académicos.',
      'Apoyo al Aprendizaje: Espacios de estudio tranquilos y recursos para mejorar la comprensión y el aprendizaje.',
      'Servicios en Línea: Acceso a bases de datos en línea y herramientas de búsqueda para investigaciones académicas.'
    ]
  },
  {
    id: 3,
    title: 'Correo Institucional',
    image: email,
    description:
      'El correo institucional es una cuenta de correo electrónico proporcionada por la universidad a cada estudiante. Lleva el dominio de la UNAP y se utiliza para comunicaciones oficiales y académicas.',
    items: [
      'Comunicación Oficial: Facilita la comunicación con profesores, administradores y compañeros de clase para asuntos académicos y administrativos.',
      'Seguridad: Garantiza la confidencialidad y autenticidad de las comunicaciones universitarias.',
      'Acceso a Plataformas: Permite el acceso a plataformas en línea y sistemas universitarios.'
    ]
  }
]

export const ServicesSection = () => {
  return (
    <div>
      {data.map((item, index) => (
        <div
          key={item.id}
          className="grid grid-cols-1 sm:grid-cols-2 py-6 gap-6"
        >
          <div
            className={`order-2 sm:${index % 2 === 0 ? 'order-2' : 'order-1'}`}
          >
            <h5 className="text-primary-800 text-lg lg:text-2xl font-bold mb-3">
              {item.title}
            </h5>
            <p className="text-black text-base font-normal mb-4">
              {item.description}
            </p>
            <h5 className="text-black text-base font-bold">Beneficios</h5>
            <ul className="list-disc list-inside mb-4">
              {item.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center order-1">
            <Image
              src={item.image.src}
              alt={item.title}
              width={400}
              height={400}
              className="object-cover"
              shadow="md"
              removeWrapper
            />
          </div>
        </div>
      ))}
    </div>
  )
}
