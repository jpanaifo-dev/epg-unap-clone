import { MainSection } from '@/components'
import { Button } from '@nextui-org/react'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import img_student from '@/assets/images/students.png'

export const InfoStudents = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img_student.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div
        className="w-full h-full flex justify-center bg-cover relative py-8"
        style={{
          backgroundColor: 'rgba(8, 27, 90, 0.75)' // Azul con 75% de opacidad
        }}
      >
        <main className="container section-home">
          <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Información para los estudiantes
              </h3>
              <p className="mb-6">
                Hallarás completa información acerca de los diversos
                procedimientos académicos, los criterios para obtener el título,
                inscribirte en cursos de otros programas y mucho más.
              </p>
              <Button variant="bordered">
                <h3 className="text-white">Conocer más</h3>
                <IconArrowNarrowRight color="white" />
              </Button>
            </div>
            <div>
              <ul className="list-disc p-4 grid gap-4">
                <li className="ml-4">Servicios para estudiantes</li>
                <li className="ml-4">Sobre requisistos para admisión</li>
                <li className="ml-4">Para la obtención de grados</li>
                <li className="ml-4">Calendario Académico</li>
                <li className="ml-4">Procesos de matrícula</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
